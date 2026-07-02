# Sync translations (EN → DE)

Synchronize German translations from the English source of truth.

## Steps

1. For every file in `src/content/pages/en/` and `src/content/events/en/`, compare with its counterpart in the `de/` directory (same relative path).
2. Determine which files need syncing:
   - DE counterpart missing → create it
   - EN file changed more recently than DE (`git log -1 --format=%ct -- <file>`) → update the DE file
3. **Skip `more/imprint.md` and `more/privacy.md`** — legal pages are maintained manually. If their EN version changed, list them at the end as "needs manual review" instead.
4. Translate EN → DE:
   - Translate frontmatter `title` and `description` and the markdown body
   - Keep all other frontmatter fields (dates, prices, URLs, type, draft) identical
   - Tone: natural German, "du" form where the text addresses readers, keep established terms (Handpan, Sound Journey → Klangreise, Workshop bleibt Workshop)
5. Run `npm run build` to validate.
6. Report: which files were created/updated/skipped, plus any legal pages needing manual review.
