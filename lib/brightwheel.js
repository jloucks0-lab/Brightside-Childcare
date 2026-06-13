/* ─────────────────────────────────────────────────────────────────────────
   Brightwheel integration config — ONE place to paste links from the
   brightwheel admin account.

   How to get the form/packet URLs (done by Julie or any brightwheel Admin):
   1. Sign in at https://schools.mybrightwheel.com
   2. Go to Paperwork → select (or create) the form / Admissions packet
   3. Set its Access Level to "Link Access"
   4. Copy the URL and paste it below

   Anything left as `null` is gracefully hidden or shown as "coming soon"
   on the site — nothing breaks while you wait for the real links.
   ───────────────────────────────────────────────────────────────────────── */

export const brightwheel = {
  /* ── Live, official brightwheel URLs (no setup needed) ── */
  parentLoginUrl: "https://schools.mybrightwheel.com/sign-in",
  iosAppUrl: "https://apps.apple.com/us/app/brightwheel-child-care-app/id902823296",
  androidAppUrl: "https://play.google.com/store/apps/details?id=co.kidcasa.app",

  /* ── Paste your program's Link Access URLs here (TODO) ── */
  // Interest / registration form for new families (creates a Prospect in
  // your admissions pipeline automatically when a parent submits):
  enrollFormUrl: null, // e.g. "https://schools.mybrightwheel.com/forms/..."

  // Optional: a separate form for Brightside East if you track the two
  // locations in different brightwheel programs. Leave null to use the
  // same form for both locations.
  enrollFormUrlEast: null,

  // Optional: full Admissions packet (forms + contracts + handbook + fees)
  // for families who are past the inquiry stage:
  admissionsPacketUrl: null,
};

/* Per-event sign-up links live next to each event in app/events/page.js —
   create the Sign-up in brightwheel, share via URL, and paste it on the
   event's `signupUrl` field. */
