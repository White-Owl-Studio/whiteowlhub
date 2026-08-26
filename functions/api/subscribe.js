// POST /api/subscribe
// Stores a launch-list signup + short survey in the D1 database (binding: DB).
// Runs as a Cloudflare Pages Function alongside the static site — no SSR adapter needed.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_INTERESTS = new Set(['animation', 'work', 'content', 'merch']);

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

// Fire-and-forget email ping to the studio when someone signs up.
// Dormant unless RESEND_API_KEY is set — never blocks or breaks the signup itself.
async function notifySignup(env, { email, interests, message, country }) {
  if (!env.RESEND_API_KEY) return; // not configured yet — skip silently
  const to = env.NOTIFY_TO || 'michaelbjacob@gmail.com';
  const from = env.NOTIFY_FROM || 'White Owl signups <onboarding@resend.dev>';
  const lines = [
    `New signup on whiteowlhub.com`,
    ``,
    `Email:      ${email}`,
    `Interested: ${interests || '(none picked)'}`,
    `Message:    ${message || '(none)'}`,
    `Country:    ${country || '(unknown)'}`,
  ].join('\n');

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ from, to, subject: `New signup: ${email}`, text: lines }),
    });
  } catch {
    // Notification is best-effort; the signup is already saved.
  }
}

export async function onRequestPost({ request, env, waitUntil }) {
  // No DB bound (e.g. binding missing on the deploy) — fail loud but graceful.
  if (!env.DB) {
    return json({ ok: false, error: 'The list is being prepared. Please try again soon.' }, 503);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Honeypot: real users never fill the hidden `website` field. Bots do.
  // Pretend success so the bot doesn't retry, but store nothing.
  if (typeof data.website === 'string' && data.website.trim() !== '') {
    return json({ ok: true });
  }

  const email = String(data.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json({ ok: false, error: 'Please enter a valid email.' }, 400);
  }

  // Keep only known interest tags, capped and de-duped.
  const interests = Array.isArray(data.interests)
    ? [...new Set(data.interests.map((s) => String(s).trim().toLowerCase()))]
        .filter((s) => ALLOWED_INTERESTS.has(s))
        .join(',')
    : '';

  const message = String(data.message || '').trim().slice(0, 1000);
  const now = new Date().toISOString();
  const country = request.cf?.country || '';
  const userAgent = String(request.headers.get('user-agent') || '').slice(0, 300);

  try {
    await env.DB.prepare(
      `INSERT INTO signups (email, interests, message, created_at, country, user_agent)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6)
       ON CONFLICT(email) DO UPDATE SET
         interests  = excluded.interests,
         message    = excluded.message,
         updated_at = ?4`
    )
      .bind(email, interests, message, now, country, userAgent)
      .run();
  } catch (err) {
    return json({ ok: false, error: 'Something went wrong. Please try again.' }, 500);
  }

  // Ping the studio by email — runs after the response so it never adds latency.
  const notify = notifySignup(env, { email, interests, message, country });
  if (typeof waitUntil === 'function') waitUntil(notify);
  else await notify;

  return json({ ok: true });
}
