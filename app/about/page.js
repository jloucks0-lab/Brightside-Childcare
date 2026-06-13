import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Our Story & Philosophy",
  description:
    "How Brightside Childcare began, and the second-home philosophy that guides everything we do.",
};

const values = [
  {
    title: "Safety first, always",
    blurb:
      "Licensed by the New York State Office of Children and Family Services, with a clean inspection record we protect fiercely. Every caregiver is background-checked and trained to state standards.",
  },
  {
    title: "A second home",
    blurb:
      "Children thrive where they feel they belong. We keep groups small enough that teachers know each child's quirks, comforts, and favorite books — and parents are always welcome at the door.",
  },
  {
    title: "Learning through exploring",
    blurb:
      "Our mission is a safe and nurturing environment for children to learn and explore. Kids learn by doing — so our days are built around play, art, music, outdoor time, and hands-on discovery.",
  },
  {
    title: "The whole child",
    blurb:
      "Happy and healthy come first. We support each child's social, emotional, and academic growth at their own pace, and celebrate the small wins with families along the way.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Brightside opens its doors",
    blurb:
      "Brightside Childcare is licensed in November 2022 and welcomes its first families at 6839 Pittsford Palmyra Road in Fairport.",
  },
  {
    year: "2023–2024",
    title: "A community grows",
    blurb:
      "Classrooms fill across infant, toddler, and preschool rooms. Inspection after inspection passes with no violations, and a waitlist forms.",
  },
  {
    year: "2025",
    title: "Brightside East is born",
    blurb:
      "With more families asking for spots than the original center could hold, Brightside Childcare East is established to bring second-home care to more of the community.",
  },
  {
    year: "Today",
    title: "Two locations, one mission",
    blurb:
      "Brightside East is open and enrolling its founding families, while the original Fairport center keeps doing what it does best.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Where Brightside began"
        title="Our Story & Philosophy"
        lede="Brightside started with one belief: childcare should feel like a second home — not a holding place, but a launching pad."
      />

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="font-display font-extrabold text-3xl">The beginning</h2>
        <p className="mt-4 text-pine-soft leading-relaxed">
          Brightside Childcare opened in Fairport in late 2022, founded by director Julie
          Estabrook around a mission that fits in one sentence: provide a safe and nurturing
          environment for children to learn and explore.
        </p>
        <p className="mt-4 text-pine-soft leading-relaxed">
          From the first day, the goal was never to be the biggest center in town — it was to
          be the one where kids run through the door in the morning. That &ldquo;daycare as a
          second home&rdquo; spirit shaped everything: small-feeling classrooms, teachers who
          stay, traditions like Muffins with Mom, and an open door for every parent.
        </p>
        <p className="mt-4 text-pine-soft leading-relaxed">
          Families noticed. Within two years the center was full with a waitlist — and in
          2025, Brightside Childcare East was founded to share that same care with more of
          the community.
        </p>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display font-extrabold text-3xl text-center">What we believe</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-blob bg-cloud p-7">
                <h3 className="font-display font-bold text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-pine-soft leading-relaxed">{v.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="font-display font-extrabold text-3xl text-center">The Brightside timeline</h2>
        <ol className="mt-10 relative border-l-4 border-sun ml-3 space-y-10">
          {timeline.map((t) => (
            <li key={t.year} className="pl-8 relative">
              <span className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-sun border-4 border-cloud" aria-hidden="true" />
              <p className="font-display font-bold text-coral-deep text-sm uppercase tracking-wide">{t.year}</p>
              <h3 className="font-display font-bold text-xl mt-1">{t.title}</h3>
              <p className="mt-1 text-sm text-pine-soft leading-relaxed">{t.blurb}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <Link href="/enroll" className="inline-block bg-coral text-white font-display font-bold rounded-full px-6 py-3 hover:bg-coral-deep">
            Be part of the next chapter
          </Link>
        </div>
      </section>
    </>
  );
}
