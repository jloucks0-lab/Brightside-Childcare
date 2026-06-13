# Brightside Childcare — Website

Multi-page Next.js 15 site for Brightside Childcare's two Fairport-area locations, built for deployment on Vercel.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, both locations (East highlighted as new), programs |
| `/locations/fairport` | Brightside Childcare (original) — verified address, phone, license info, classrooms |
| `/locations/east` | Brightside Childcare East — "now open" landing page |
| `/teachers` | Meet the Teachers |
| `/about` | Philosophy / beginnings of Brightside + timeline |
| `/events` | Upcoming events + traditions (Muffins with Mom, etc.) |
| `/contact` | Contact / general inquiry form |
| `/enroll` | New child enrollment inquiry form |

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy to Vercel

```bash
npm i -g vercel   # if needed
vercel            # from this directory, accept defaults
vercel --prod
```

Or push to a GitHub repo and import it at vercel.com — zero config needed.

## Form email delivery (Resend)

Both forms POST to API routes (`/api/contact`, `/api/enroll`). Without configuration they
log submissions to the server console and still show success — fine for testing, not for
production. To deliver real emails:

1. Create a free account at https://resend.com (3,000 emails/mo free).
2. In Vercel → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` — your Resend key (required)
   - `NOTIFY_EMAIL` — where submissions go (defaults to brightsidechildcare22@yahoo.com)
   - `FROM_EMAIL` — optional; verify a domain in Resend and use e.g. `forms@yourdomain.com`.
     Without a verified domain, the default `onboarding@resend.dev` sender works but may
     land in spam.
3. Redeploy.

## Brightwheel integration

Brightwheel has no public API, so the integration is link-based — and everything is
configured in **one file: `lib/brightwheel.js`**.

Already live (official brightwheel URLs, no setup needed):
- "Family login" in the header and footer → brightwheel web sign-in
- App download links (iPhone / Android) in the footer's "Current families" section

Needs URLs from the brightwheel admin account (paste into `lib/brightwheel.js`):
- `enrollFormUrl` — the new-family interest/registration form. In brightwheel:
  Paperwork → form → set Access Level to **Link Access** → copy URL. Submissions
  auto-create a "Prospect" student in the admissions pipeline. Until set, the
  enroll page shows a "launching soon" note and relies on the built-in inquiry form.
- `enrollFormUrlEast` — optional separate form for Brightside East
- `admissionsPacketUrl` — optional full admissions packet link
- Event RSVPs — create a Sign-up in brightwheel, share via URL, paste as
  `signupUrl` on any event in `app/events/page.js`

## TODO before launch — placeholders to replace

Search the codebase for `TODO`:

- **Brightside East address, phone, and hours** — `components/Footer.js`,
  `app/locations/east/page.js`, `app/contact/page.js`. Currently described as
  "east of Fairport village" pending the confirmed street address.
- **Operating hours** for the original location — `app/locations/fairport/page.js`.
- **Teacher names, bios, and photos** — `app/teachers/page.js` (Julie Estabrook is real;
  the rest are placeholder cards). Drop photos in `public/teachers/`.
- **Events list** — `app/events/page.js`; the open house, Donuts with Dad, and picnic
  entries are suggested placeholders to confirm or replace.
- **Photos** — the site currently uses illustrated SVG art; real classroom photos from the
  Facebook page (with permission) would strengthen every page.

## Verified business facts used in the build

- Address: 6839 Pittsford Palmyra Road, Fairport, NY 14450
- Phone: (585) 364-3117 · Email: brightsidechildcare22@yahoo.com
- Director: Julie A. Estabrook
- Licensed NYS OCFS Day Care Center since Nov 2022 (License ID 884619), Fairport school district
- Licensed capacity 73: 16 infants, 20 toddlers, 37 preschoolers
- Clean inspection history (no violations cited in recent OCFS inspections)
- Mission: "a safe and nurturing environment for children to learn and explore"
- Facebook: https://www.facebook.com/p/Brightside-Childcare-100090215379767/
- Brightside Childcare East LLC formed October 2025; announced as "now enrolling"
