-- Launch list + coming-soon survey.
-- Applied to the D1 database `whiteowlhub-signups`.
CREATE TABLE IF NOT EXISTS signups (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  email       TEXT NOT NULL UNIQUE,
  interests   TEXT NOT NULL DEFAULT '',   -- comma-separated tags the visitor picked
  message     TEXT NOT NULL DEFAULT '',   -- optional free-text wish/suggestion
  created_at  TEXT NOT NULL,              -- ISO timestamp, first seen
  updated_at  TEXT,                       -- ISO timestamp, last re-submit (upsert)
  country     TEXT NOT NULL DEFAULT '',   -- CF-derived, coarse analytics only
  user_agent  TEXT NOT NULL DEFAULT ''
);

CREATE INDEX IF NOT EXISTS idx_signups_created ON signups (created_at);
