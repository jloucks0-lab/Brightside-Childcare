import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Meet the Teachers",
  description: "Meet the dedicated team behind Brightside Childcare's two Fairport-area locations.",
};

/* TODO: Replace placeholder teachers with real names, photos, rooms, and bios.
   Add a photo by dropping an image in /public/teachers and setting `photo`. */
const team = [
  {
    name: "Julie Estabrook",
    role: "Director & Founder",
    location: "Both locations",
    bio: "Julie founded Brightside in 2022 with a simple promise to families: a daycare that feels like a second home. She leads both centers and still knows every child by name.",
    emoji: "🌞",
  },
  {
    name: "Teacher Name",
    role: "Lead Infant Teacher",
    location: "Brightside Childcare",
    bio: "Bio coming soon — a few sentences about experience, certifications, and what they love about working with babies.",
    emoji: "🍼",
  },
  {
    name: "Teacher Name",
    role: "Lead Toddler Teacher",
    location: "Brightside Childcare",
    bio: "Bio coming soon — a few sentences about experience and their favorite classroom moments.",
    emoji: "🧸",
  },
  {
    name: "Teacher Name",
    role: "Lead Preschool Teacher",
    location: "Brightside Childcare",
    bio: "Bio coming soon — a few sentences about their approach to play-based learning and kindergarten readiness.",
    emoji: "🎨",
  },
  {
    name: "Teacher Name",
    role: "Lead Teacher",
    location: "Brightside East",
    bio: "Bio coming soon — meet the founding team at our brand-new East location.",
    emoji: "✏️",
  },
  {
    name: "Teacher Name",
    role: "Assistant Teacher",
    location: "Brightside East",
    bio: "Bio coming soon.",
    emoji: "📚",
  },
];

export default function TeachersPage() {
  return (
    <>
      <PageHero
        eyebrow="The people behind the smiles"
        title="Meet the Teachers"
        lede="Every Brightside caregiver is background-checked, trained to New York State standards, and — most importantly — genuinely loves this work."
        tone="bg-sage"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => (
            <article key={i} className="rounded-blob bg-sand p-7 flex flex-col">
              <div className="w-16 h-16 rounded-full bg-sun flex items-center justify-center text-3xl mb-4" aria-hidden="true">
                {t.emoji}
              </div>
              <h2 className="font-display font-bold text-xl">{t.name}</h2>
              <p className="text-sm font-bold text-coral-deep">{t.role}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-pine-soft mt-0.5">{t.location}</p>
              <p className="mt-3 text-sm text-pine-soft leading-relaxed">{t.bio}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-blob bg-sky p-8 text-center">
          <h2 className="font-display font-extrabold text-2xl">We&apos;re growing — join our team</h2>
          <p className="mt-2 text-pine-soft font-semibold max-w-xl mx-auto">
            With Brightside East now open, we&apos;re looking for caring teachers and assistants.
            If that sounds like you, we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:brightsidechildcare22@yahoo.com?subject=Joining%20the%20Brightside%20team"
            className="mt-5 inline-block bg-pine text-cloud font-display font-bold rounded-full px-6 py-3 hover:opacity-90"
          >
            Email us about openings
          </a>
        </div>
      </section>
    </>
  );
}
