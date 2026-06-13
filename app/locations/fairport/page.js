import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Brightside Childcare — Fairport",
  description:
    "Our flagship licensed daycare center at 6839 Pittsford Palmyra Road, Fairport, NY — serving infants, toddlers, and preschoolers.",
};

const facts = [
  { label: "Address", value: "6839 Pittsford Palmyra Road, Fairport, NY 14450" },
  { label: "Phone", value: "(585) 364-3117", href: "tel:+15853643117" },
  { label: "Email", value: "brightsidechildcare22@yahoo.com", href: "mailto:brightsidechildcare22@yahoo.com" },
  { label: "School district", value: "Fairport Central School District" },
  { label: "Licensed since", value: "November 2022 · NYS OCFS Day Care Center" },
  { label: "Hours", value: "Monday – Friday (call for current hours)" }, // TODO: confirm hours
];

const rooms = [
  { name: "Infant rooms", capacity: "Licensed for 16 infants", note: "Low ratios, primary caregivers, daily reports home." },
  { name: "Toddler rooms", capacity: "Licensed for 20 toddlers", note: "Room to run, climb, stack, and make first friends." },
  { name: "Preschool rooms", capacity: "Licensed for 37 preschoolers", note: "Play-based pre-K readiness with art, music, and outdoor play every day." },
];

export default function FairportPage() {
  return (
    <>
      <PageHero
        eyebrow="The original"
        title="Brightside Childcare"
        lede="Our flagship center on Pittsford Palmyra Road, where Brightside began — a second home for Fairport families since 2022."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="font-display font-extrabold text-3xl">A second home, on purpose</h2>
          <p className="mt-4 text-pine-soft leading-relaxed">
            Our mission is simple: provide a safe and nurturing environment for children to
            learn and explore. Under the watchful eyes of our well-trained, dedicated staff,
            your child can explore, learn, and grow in ways that support the whole child —
            socially, emotionally, and academically.
          </p>
          <p className="mt-4 text-pine-soft leading-relaxed">
            We take pride in our &ldquo;daycare as a second home&rdquo; environment. That means
            warm hellos at drop-off, teachers who know exactly how your child likes their
            snack cut, and a clean state inspection record we work hard to keep — our center
            has had no violations cited across its recent NYS OCFS inspections.
          </p>

          <h3 className="font-display font-bold text-2xl mt-10">Our classrooms</h3>
          <div className="mt-4 space-y-4">
            {rooms.map((r) => (
              <div key={r.name} className="rounded-blob bg-sand p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display font-bold text-lg">{r.name}</h4>
                  <span className="text-xs font-bold uppercase tracking-wide text-sun-deep">{r.capacity}</span>
                </div>
                <p className="text-sm text-pine-soft mt-1">{r.note}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-blob bg-sky p-6 sticky top-24">
            <h3 className="font-display font-bold text-xl mb-4">Visit us</h3>
            <dl className="space-y-3 text-sm">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-bold uppercase tracking-wide text-xs text-pine-soft">{f.label}</dt>
                  <dd className="mt-0.5">
                    {f.href ? (
                      <a href={f.href} className="underline decoration-coral/60 hover:decoration-coral font-semibold">
                        {f.value}
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/contact" className="bg-pine text-cloud font-display font-bold rounded-full px-5 py-2.5 text-center hover:opacity-90">
                Schedule a tour
              </Link>
              <Link href="/enroll" className="bg-coral text-white font-display font-bold rounded-full px-5 py-2.5 text-center hover:bg-coral-deep">
                Enroll your child
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
