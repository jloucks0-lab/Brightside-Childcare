import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Brightside Childcare East — Now Open in Macedon",
  description:
    "Brightside Childcare East is our newly renovated second location at 1045 Brixton Drive in Macedon, NY — now enrolling infants through school-age, including UPK wrap-around and before/after school care.",
};

const highlights = [
  {
    title: "Storytelling & language development",
    blurb: "Daily read-alouds, conversation, and play that builds vocabulary and a lifelong love of books.",
    color: "bg-sand",
  },
  {
    title: "Outdoor play & group interaction",
    blurb: "Fresh air, active play, and the everyday teamwork that grows confident, social kids.",
    color: "bg-sky",
  },
  {
    title: "Experienced caregivers who truly care",
    blurb: "A warm, well-trained team that creates a space where kids feel safe, confident, and excited to learn.",
    color: "bg-sage",
  },
];

const programs = [
  { name: "Infants", note: "Gentle, responsive care for our youngest." },
  { name: "Toddlers", note: "Safe exploration and first friendships." },
  { name: "Preschool", note: "Play-based learning and kindergarten readiness." },
  { name: "UPK wrap-around", note: "Care that fills the hours around Universal Pre-K." },
  { name: "Before & after school", note: "A reliable start and end to the school day." },
  { name: "School & summer breaks", note: "Full-day fun when school is out." },
];

export default function EastPage() {
  return (
    <>
      <PageHero
        eyebrow="✨ Now enrolling · Newly renovated"
        title="Brightside Childcare East"
        lede="At Brightside Childcare East, we create a nurturing space where kids feel safe, confident, and excited to learn — now open in a newly renovated home in Macedon."
        tone="bg-sun"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* Program highlights */}
        <h2 className="font-display font-extrabold text-3xl text-center">Our program includes</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className={`rounded-blob ${h.color} p-7`}>
              <h3 className="font-display font-bold text-xl">{h.title}</h3>
              <p className="mt-2 text-sm text-pine-soft leading-relaxed">{h.blurb}</p>
            </div>
          ))}
        </div>

        {/* Programs offered + visit/enroll panel */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display font-extrabold text-3xl">Care for every age &amp; schedule</h2>
            <p className="mt-4 text-pine-soft leading-relaxed">
              Brightside East carries the same mission as our original Fairport center —
              a safe and nurturing environment for children to learn and explore — in a
              freshly renovated space built for how kids really play and grow.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {programs.map((p) => (
                <div key={p.name} className="rounded-2xl bg-sand p-4">
                  <h3 className="font-display font-bold">{p.name}</h3>
                  <p className="text-sm text-pine-soft mt-0.5">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-bold text-coral-deep uppercase tracking-wide">
              Spots are limited — enroll today &amp; give your child the best start.
            </p>
          </div>

          <div className="rounded-blob bg-pine text-cloud p-8">
            <h3 className="font-display font-bold text-2xl text-sun">Visit Brightside East</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-bold uppercase tracking-wide text-xs text-sky">Address</dt>
                <dd className="mt-0.5">1045 Brixton Drive, Macedon, NY</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wide text-xs text-sky">Email</dt>
                <dd className="mt-0.5">
                  <a
                    href="mailto:director@brightsidechildcareeast.com"
                    className="underline decoration-sun/60 hover:decoration-sun break-all"
                  >
                    director@brightsidechildcareeast.com
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-sky leading-relaxed text-sm">
              Opening classrooms fill quickly — our original location waitlisted within its
              first year. If you&apos;d like a spot at East, now is the moment.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/enroll" className="bg-coral text-white font-display font-bold rounded-full px-5 py-2.5 text-center hover:bg-coral-deep">
                Start enrollment at East
              </Link>
              <a
                href="mailto:director@brightsidechildcareeast.com?subject=Brightside%20East%20tour%20%26%20openings"
                className="bg-cloud text-pine font-display font-bold rounded-full px-5 py-2.5 text-center hover:bg-sand"
              >
                Email about a tour
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
