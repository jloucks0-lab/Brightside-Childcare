import PageHero from "@/components/PageHero";
import EnrollForm from "@/components/EnrollForm";
import BrightwheelCta from "@/components/BrightwheelCta";

export const metadata = {
  title: "Enroll Your Child",
  description:
    "Start enrollment at Brightside Childcare — infant, toddler, and preschool programs at two Fairport-area locations.",
};

const steps = [
  { n: "1", title: "Tell us about your child", blurb: "Fill out the inquiry form — it takes about two minutes." },
  { n: "2", title: "Tour & meet the teachers", blurb: "We'll confirm openings and set up a visit at your preferred location." },
  { n: "3", title: "Pick your start date", blurb: "Complete enrollment paperwork and join the Brightside family." },
];

export default function EnrollPage() {
  return (
    <>
      <PageHero
        eyebrow="Welcome to the family"
        title="Enroll Your Child"
        lede="New spots are open at Brightside East, and our original Fairport center accepts inquiries for openings and the waitlist year-round."
        tone="bg-sun"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          {steps.map((s) => (
            <div key={s.n} className="rounded-blob bg-sand p-6 flex gap-4">
              <span className="bg-pine text-sun font-display font-bold rounded-full w-9 h-9 flex items-center justify-center shrink-0 text-lg">
                {s.n}
              </span>
              <div>
                <h2 className="font-display font-bold">{s.title}</h2>
                <p className="text-sm text-pine-soft mt-1">{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          <BrightwheelCta />

          <div>
            <h2 className="font-display font-extrabold text-2xl">
              Or send a quick inquiry
            </h2>
            <p className="mt-1 mb-6 text-sm text-pine-soft font-semibold">
              Not ready to apply, or just have questions about openings and schedules?
              This goes straight to our director.
            </p>
            <EnrollForm />
          </div>
        </div>
      </section>
    </>
  );
}
