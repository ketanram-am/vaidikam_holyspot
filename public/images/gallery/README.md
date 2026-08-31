# Gallery images — drop them here

Put photographs of pujas, homas, and ceremonies in this folder, then tell
Claude the filenames and it will wire them into the gallery with captions.

## What to add
- `.jpg` or `.webp`. JPEG is fine — Next converts to WebP on request.
- Anything from about 1600px on the long edge upward. Larger is fine; the
  build resizes down. Smaller than ~1200px will look soft on a phone.
- Landscape, portrait, or square all work; the gallery adapts.

## Naming
Lowercase, hyphens, no spaces. The name is only used in code, but a
descriptive one helps:
    ganapati-homa-01.jpg
    grihapravesha-bengaluru.jpg
    namakarana-2026.jpg

## Before adding a photograph of a real ceremony
Get the family's consent. These are private religious occasions and the people
in them are identifiable. The site should never publish a family's ceremony
without them agreeing to it.

## Then
Register each file in `content/site.ts` under `galleryPhotos` — src, alt, and
caption. Claude can do this if you give it the filenames.
