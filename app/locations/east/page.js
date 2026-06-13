import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Brightside Childcare East — Now Open",
  description:
    "Brightside Childcare East is our brand-new second location east of Fairport — now enrolling infants, toddlers, and preschoolers.",
};

const highlights = [
  {
    title: "Brand-new classrooms",
    blurb: "Fresh, bright spaces designed from day one around how little kids actually play and learn.",
    color: "bg-sand",
  },
  {
    title: "The same Brightside heart",
    blurb: "Led by the same family behind our original Fairport center, with the same mission: safe, nurturing, second-home care.",
    color: "bg-sky",
  },
  {
    title: "Founding-family spots",
    blurb: "Opening classrooms are enrolling now — early families get first pick of schedules and rooms.",
    color: "bg-sage",
  },
];

export default function EastPage() {
  return (
    <>
      <PageHero
        eyebrow="✨ Now open & enrolling"
        title="Brightside Childcare East"
        lede="Everything families love about Brightside — now in a brand-new second location. Come grow with us from day one."
        tone="bg-sun"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className={`rounded-blob ${h.color} p-7`}>
              <h2 className="font-display font-bold text-xl">{h.title}</h2>
              <p className="mt-2 text-sm text-pine-soft leading-relaxed">{h.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display font-extrabold text-3xl">Why we opened East</h2>
            <p className="mt-4 text-pine-soft leading-relaxed">
              Since opening in 2022, our Fairport center has stayed full — with waitlists for
              our infant and toddler rooms. Rather than squeeze more kids into the same
              space, we did it the Brightside way: built a whole second home.
            </p>
            <p className="mt-4 text-pine-soft leading-relaxed">
              Brightside Childcare East carries the same mission — a safe and nurturing
              environment for children to learn and explore — with new rooms, new outdoor
              space, and openings across age groups while our founding classrooms fill.
            </p>
            <p className="mt-4 text-pine-soft leading-relaxed">
              {/* TODO: replace with confirmed East address, phone, and hours */}
              <strong>Location details:</strong> serving families east of Fairport village
              toward Macedon. Contact us for the address, a tour, and current openings.
            </p>
          </div>

          <div className="rounded-blob bg-pine text-cloud p-8">
            <h3 className="font-display font-bold text-2xl text-sun">Claim a founding spot</h3>
            <p className="mt-3 text-sky leading-relaxed">
              Opening classrooms fill quickly — our original location waitlisted within its
              first year. If you&apos;d like a spot at East, now is the moment.
            </p>
            <ol className="mt-5 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="bg-sun text-pine font-display font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">1</span>
                Tell us about your child with our quick enrollment form.
              </li>
              <li className="flex gap-3">
                <span className="bg-sun text-pine font-display font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">2</span>
                Come tour the new space and meet the teachers.
              </li>
              <li className="flex gap-3">
                <span className="bg-sun text-pine font-display font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">3</span>
                Pick your schedule and join the Brightside family.
              </li>
            </ol>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/enroll" className="bg-coral text-white font-display font-bold rounded-full px-5 py-2.5 text-center hover:bg-coral-deep">
                Start enrollment at East
              </Link>
              <a href="tel:+15853643117" className="bg-cloud text-pine font-display font-bold rounded-full px-5 py-2.5 text-center hover:bg-sand">
                Call (585) 364-3117
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
