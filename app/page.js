import Link from "next/link";
import ScallopDivider from "@/components/ScallopDivider";

export const metadata = {
  title: "Brightside Childcare | Daycare & Preschool in Fairport, NY",
};

const programs = [
  {
    name: "Infants",
    age: "6 weeks – 18 months",
    color: "bg-sand",
    blurb:
      "Gentle, responsive care in a calm space built around your baby's own rhythm — feeding, napping, tummy time, and lots of snuggles.",
  },
  {
    name: "Toddlers",
    age: "18 months – 3 years",
    color: "bg-sky",
    blurb:
      "Busy hands and big feelings. Our toddler rooms are built for safe exploration, first friendships, and growing independence.",
  },
  {
    name: "Preschool",
    age: "3 – 5 years",
    color: "bg-sage",
    blurb:
      "Play-based learning that builds kindergarten readiness — letters, numbers, art, music, and plenty of outdoor time.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — the sun rising over the horizon */}
      <section className="relative overflow-hidden bg-sky">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-24 md:pt-20 md:pb-32 text-center relative">
          {/* big rising sun behind the headline */}
          <svg
            viewBox="0 0 600 300"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[34rem] max-w-none opacity-90 animate-rise"
            aria-hidden="true"
          >
            <g stroke="#ffc53d" strokeWidth="10" strokeLinecap="round">
              <line x1="300" y1="20" x2="300" y2="60" />
              <line x1="170" y1="60" x2="198" y2="88" />
              <line x1="430" y1="60" x2="402" y2="88" />
              <line x1="120" y1="170" x2="160" y2="170" />
              <line x1="480" y1="170" x2="440" y2="170" />
            </g>
            <path d="M180 300 a120 120 0 0 1 240 0 Z" fill="#ffc53d" />
          </svg>

          <div className="relative animate-rise-delay">
            <p className="inline-block bg-coral text-white font-display font-bold text-sm rounded-full px-4 py-1.5 mb-5">
              ☀️ Now enrolling at two locations — Brightside East is open!
            </p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
              Every childhood deserves a bright side.
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg text-pine-soft font-semibold">
              A safe and nurturing environment for children to learn and explore —
              daycare that feels like a second home, right here in Fairport, NY.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/enroll"
                className="bg-coral hover:bg-coral-deep text-white font-display font-bold rounded-full px-6 py-3 transition-colors"
              >
                Start enrollment
              </Link>
              <Link
                href="/contact"
                className="bg-cloud hover:bg-sand text-pine font-display font-bold rounded-full px-6 py-3 transition-colors border-2 border-pine/15"
              >
                Schedule a tour
              </Link>
            </div>
          </div>
        </div>
        <ScallopDivider fill="#fffdf6" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Two locations */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center">
          One family, two sunny locations
        </h2>
        <p className="text-center text-pine-soft font-semibold mt-2 max-w-2xl mx-auto">
          The same teachers-first, kids-first care that families have trusted since 2022 —
          now with twice the room to grow.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-blob bg-sand p-8 flex flex-col">
            <h3 className="font-display font-bold text-2xl">Brightside Childcare</h3>
            <p className="text-sm font-bold text-sun-deep uppercase tracking-wide mt-1">
              The original · Fairport
            </p>
            <p className="mt-3 text-pine-soft leading-relaxed flex-1">
              Our flagship center at 6839 Pittsford Palmyra Road, licensed for infants,
              toddlers, and preschoolers, with a spotless state inspection record and a
              team that treats every child like their own.
            </p>
            <Link
              href="/locations/fairport"
              className="mt-5 inline-block font-display font-bold text-coral hover:text-coral-deep"
            >
              Visit Brightside Childcare →
            </Link>
          </div>

          <div className="relative rounded-blob bg-pine text-cloud p-8 flex flex-col">
            <span className="absolute -top-3 -right-2 rotate-6 bg-coral text-white font-display font-bold text-sm rounded-full px-4 py-1.5 shadow-lg">
              ✨ Just opened!
            </span>
            <h3 className="font-display font-bold text-2xl">Brightside Childcare East</h3>
            <p className="text-sm font-bold text-sun uppercase tracking-wide mt-1">
              Our newest location
            </p>
            <p className="mt-3 text-sky leading-relaxed flex-1">
              Everything families love about Brightside, in a brand-new space east of the
              village. Spots are filling fast for our opening classrooms — come take a look
              before they&apos;re gone.
            </p>
            <Link
              href="/locations/east"
              className="mt-5 inline-block font-display font-bold text-sun hover:text-sun-deep"
            >
              Explore Brightside East →
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center">
            Care for every age and stage
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <div key={p.name} className={`rounded-blob ${p.color} p-7`}>
                <h3 className="font-display font-bold text-xl">{p.name}</h3>
                <p className="text-sm font-bold text-pine-soft">{p.age}</p>
                <p className="mt-3 text-pine-soft leading-relaxed text-sm">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-sun">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl">
            Come see the bright side for yourself
          </h2>
          <p className="mt-3 font-semibold text-pine-soft">
            Tours take about 20 minutes, and the kids will probably show you their favorite toys.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-pine text-cloud font-display font-bold rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Book a tour
            </Link>
            <a
              href="tel:+15853643117"
              className="bg-cloud text-pine font-display font-bold rounded-full px-6 py-3 hover:bg-sand transition-colors"
            >
              Call (585) 364-3117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
