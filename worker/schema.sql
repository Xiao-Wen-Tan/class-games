-- One row per game session. state is the whole game as JSON; version guards against two phones
-- saving at the same moment (the Worker only saves when the version it read is still current).
CREATE TABLE IF NOT EXISTS sessions (
  code TEXT PRIMARY KEY,          -- 4 letters shown on the projector
  game TEXT NOT NULL,             -- layoff or alliance
  created_at TEXT NOT NULL,       -- time in UTC, ISO format
  version INTEGER NOT NULL DEFAULT 0,
  state TEXT NOT NULL
);

-- Layoff game answers. player is a random id from the phone (solo) or "group-N" (group round).
-- No names, emails or network addresses are stored.
CREATE TABLE IF NOT EXISTS layoff_answers (
  code TEXT NOT NULL,
  player TEXT NOT NULL,
  kind TEXT NOT NULL,             -- solo or group
  ts TEXT NOT NULL,
  ranking TEXT NOT NULL,          -- JSON list of 8 manager ids, first to be laid off first
  criterion TEXT NOT NULL,
  reason TEXT NOT NULL,
  other_text TEXT NOT NULL DEFAULT '', -- typed answer when the criterion is "other" (Something else)
  PRIMARY KEY (code, player, kind)
);
