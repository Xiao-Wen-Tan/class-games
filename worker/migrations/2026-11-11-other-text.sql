-- 2026-11-11: store the typed "Something else" answer in the layoff game. Run once on an existing database:
--   npx wrangler d1 execute class-games --remote --file=migrations/2026-11-11-other-text.sql
ALTER TABLE layoff_answers ADD COLUMN other_text TEXT NOT NULL DEFAULT '';
