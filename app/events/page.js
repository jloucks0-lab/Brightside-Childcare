import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Events",
  description: "Upcoming events and family traditions at Brightside Childcare's two locations.",
};

/* TODO: Update this list as events are scheduled. Each event needs:
   date, title, location, and a short description. */
const upcoming = [
  {
    date: "Coming soon",
    title: "Brightside East open house",
    location: "Brightside Childcare East",
    blurb:
      "Tour our brand-new classrooms, meet the founding teachers, and learn about openings. Date to be announced — follow us on Facebook for the announcement.",
  },
  {
    date: "June",
    title: "Donuts with Dad",
    location: "Both locations",
    blurb: "A Father's Day morning treat — dads, grandpas, and special guests welcome before work.",
  },
  {
    date: "August",
    title: "End-of-summer family picnic",
    location: "Brightside Childcare · Fairport",
    blurb: "Games on the lawn, popsicles, and a chance for Brightside families to meet each other.",
  },
];

const traditions = [
  {
    emoji: "🧁",
    title: "Muffins with Mom",
    blurb: "Every Mother's Day week, moms and grandmas join us for muffins, crafts, and very proud kids. Our May 2026 edition was a full house!",
  },
  {
    emoji: "🎃",
    title: "Fall festivities",
    blurb: "Pumpkin painting, leaf hunts, and costume fun when the weather turns.",
  },
  {
    emoji: "🎓",
    title: "Preschool moving-up day",
    blurb: "Tiny caps, big milestones — we celebrate every preschooler heading off to kindergarten.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mark your calendars"
        title="Events at Brightside"
        lede="Family traditions are part of how Brightside feels like a second home. Here's what's coming up at both locations."
        tone="bg-sand"
      />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-display font-extrabold text-3xl">Upcoming events</h2>
        <div className="mt-6 space-y-4">
          {upcoming.map((e) => (
            <article key={e.title} className="rounded-blob bg-sky p-6 sm:flex gap-6 items-start">
              <div className="shrink-0 mb-3 sm:mb-0">
                <span className="inline-block bg-pine text-sun font-display font-bold rounded-2xl px-4 py-2 text-sm">
                  {e.date}
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">{e.title}</h3>
                <p className="text-xs font-bold uppercase tracking-wide text-pine-soft mt-0.5">{e.location}</p>
                <p className="mt-2 text-sm text-pine-soft leading-relaxed">{e.blurb}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-pine-soft font-semibold">
          Event photos and announcements land first on{" "}
          <a
            href="https://www.facebook.com/p/Brightside-Childcare-100090215379767/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-coral hover:text-pine"
          >
            our Facebook page
          </a>
          .
        </p>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display font-extrabold text-3xl text-center">Brightside traditions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {traditions.map((t) => (
              <div key={t.title} className="rounded-blob bg-cloud p-7 text-center">
                <div className="text-4xl mb-3" aria-hidden="true">{t.emoji}</div>
                <h3 className="font-display font-bold text-xl">{t.title}</h3>
                <p className="mt-2 text-sm text-pine-soft leading-relaxed">{t.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
