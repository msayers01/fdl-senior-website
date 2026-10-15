# FDL Class of 2027 — Senior Hub

An all-in-one website for Fond du Lac Ojibwe School seniors, families, and staff.

**Features:** graduation date & live countdown · deadline board (filterable, color-coded by urgency) · FAFSA guide · scholarships (MN Indian Scholarship, Cobell, American Indian College Fund, and more) · UMN Native American Promise Tuition Program · college application links · essay-writing tips · senior quotes.

It's a plain static site (HTML, CSS, JavaScript) with no build step and no dependencies.

## Updating content

**Almost everything lives in [`public/js/data.js`](public/js/data.js).** Open it, change the text, save. You do not need to touch the other files.

| To change… | Edit in `public/js/data.js` |
| --- | --- |
| Graduation date/time/location | `graduation` (format: `"2027-05-28T18:00"`) |
| Deadline board | `deadlines` |
| FAFSA steps & links | `fafsa` |
| Scholarships | `scholarships` |
| College list | `colleges` |
| Essay tips & resources | `essay` |
| Senior quotes | `quotes` |

- Items with `verify: true` show a **"Confirm date"** tag. Remove that line once you've confirmed the date with the official source.
- The graduation date is currently a **placeholder** (Friday, May 28, 2027, 6:00 PM). Update it once the official date is set.
- Senior quotes are placeholders — replace with real quotes (with each student's permission).
- UMN Promise program details are in `public/index.html` under the `#promise` section.

## Previewing locally

Just open `public/index.html` in a web browser.

## Publishing (Cloudflare Workers)

The site is hosted on Cloudflare at https://fdl-senior-website.michaelsayers.workers.dev.

Every push to `main` triggers a Cloudflare build that runs `npx wrangler deploy`. [`wrangler.jsonc`](wrangler.jsonc) tells it to upload the files in `public/`. All site files must live inside `public/`.
