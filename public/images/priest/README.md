# Photographs of Pt. Praveen Sagar

These are HIS photographs — portraits, and pictures of him performing
ceremonies. They are kept separate from `public/images/gallery/`, which is for
puja and ceremony photographs in general.

## The one that matters most

Name it exactly:

    portrait.jpg

That single file becomes his portrait everywhere — the About page and the home
page section — and it replaces the Srirangam temple photograph that currently
stands in for it. Nothing else needs editing: the code picks it up by name.

**A portrait works best if it is:**
- Vertical (portrait orientation), roughly 4:5 — e.g. 1600 x 2000px
- Head and shoulders, or head to waist
- Him looking toward the camera, in reasonable light
- Not a group photo, and not heavily filtered

## Additional photographs

Any others go in this same folder, named freely:

    performing-homa.jpg
    grihapravesha-2026.jpg
    with-teachers.jpg

They appear as a small row beneath the biography on the About page. Give
Claude the filenames and a one-line caption for each and it will register them
in `content/site.ts` under `priest.photos`.

## Format
`.jpg` or `.webp`, about 1600px or more on the long edge. Next.js resizes and
converts for each device, so do not shrink them yourself first.

## A note
If a photograph shows a family's ceremony, get their consent before it goes on
the site — the same rule as the gallery folder.
