# FDL Class of 2027 — Senior Hub

An all-in-one website for Fond du Lac Ojibwe School seniors, families, and staff.

**Features:** graduation date & live countdown · deadline board (filterable, color-coded by urgency) · FAFSA guide · scholarships (MN Indian Scholarship, Cobell, American Indian College Fund, and more) · UMN Native American Promise Tuition Program · college application links · essay-writing tips · senior quotes.

It's a plain static site (HTML, CSS, JavaScript) with no build step and no dependencies.

## Updating content

**Almost everything lives in [`js/data.js`](js/data.js).** Open it, change the text, save. You do not need to touch the other files.

| To change… | Edit in `js/data.js` |
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
- UMN Promise program details are in `index.html` under the `#promise` section.

## Previewing locally

Just open `index.html` in a web browser.

## Publishing with GitHub Pages (free)

1. On GitHub, go to the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Pick the branch (e.g. `main`) and the `/ (root)` folder, then **Save**.
4. After a minute the site will be live at `https://<your-username>.github.io/fdl-senior-website/`.
