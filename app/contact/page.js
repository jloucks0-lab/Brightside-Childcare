import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Questions, tours, and openings — reach the Brightside Childcare team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We'd love to hear from you"
        title="Contact Brightside"
        lede="Questions about openings, tuition, or tours at either location? Send us a note and we'll get back to you within one business day."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-blob bg-sand p-6 text-sm">
            <h2 className="font-display font-bold text-lg mb-2">Brightside Childcare</h2>
            <p>
              6839 Pittsford Palmyra Road
              <br />
              Fairport, NY 14450
            </p>
            <p className="mt-2">
              <a href="tel:+15853643117" className="font-bold underline decoration-coral/60 hover:decoration-coral">
                (585) 364-3117
              </a>
            </p>
          </div>
          <div className="rounded-blob bg-sky p-6 text-sm">
            <h2 className="font-display font-bold text-lg mb-2">
              Brightside Childcare East <span className="text-coral-deep">· New!</span>
            </h2>
            <p>
              1045 Brixton Drive
              <br />
              Macedon, NY
            </p>
            <p className="mt-2">
              <a
                href="mailto:director@brightsidechildcareeast.com"
                className="font-bold underline decoration-coral/60 hover:decoration-coral break-all"
              >
                director@brightsidechildcareeast.com
              </a>
            </p>
          </div>
          <div className="rounded-blob bg-sage p-6 text-sm">
            <h2 className="font-display font-bold text-lg mb-2">Email &amp; social</h2>
            <p>
              <a href="mailto:brightsidechildcare22@yahoo.com" className="font-bold underline decoration-coral/60 hover:decoration-coral break-all">
                brightsidechildcare22@yahoo.com
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://www.facebook.com/p/Brightside-Childcare-100090215379767/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline decoration-coral/60 hover:decoration-coral"
              >
                Brightside Childcare on Facebook
              </a>
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
