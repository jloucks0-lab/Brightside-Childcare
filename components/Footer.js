import Link from "next/link";
import SunMark from "./SunMark";
import ScallopDivider from "./ScallopDivider";
import { brightwheel } from "@/lib/brightwheel";

export default function Footer() {
  return (
    <footer className="mt-16">
      <ScallopDivider fill="#21433c" flip />
      <div className="bg-pine text-cloud">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <SunMark className="w-8 h-8" />
              <span className="font-display font-bold text-lg">Brightside Childcare</span>
            </div>
            <p className="text-sm text-sky leading-relaxed">
              A safe and nurturing environment for children to learn and explore —
              your child&apos;s second home in Fairport, NY.
            </p>
          </div>

          <div className="text-sm">
            <h3 className="font-display font-bold text-sun mb-2">Our locations</h3>
            <p className="mb-3">
              <strong>Brightside Childcare</strong>
              <br />
              6839 Pittsford Palmyra Road
              <br />
              Fairport, NY 14450
              <br />
              <a href="tel:+15853643117" className="underline decoration-sun/60 hover:decoration-sun">
                (585) 364-3117
              </a>
            </p>
            <p>
              <strong>Brightside Childcare East</strong>{" "}
              <span className="text-coral font-bold">— now open!</span>
              <br />
              1045 Brixton Drive
              <br />
              Macedon, NY
              <br />
              <a
                href="mailto:director@brightsidechildcareeast.com"
                className="underline decoration-sun/60 hover:decoration-sun break-all"
              >
                director@brightsidechildcareeast.com
              </a>
              <br />
              <Link href="/locations/east" className="underline decoration-sun/60 hover:decoration-sun">
                Learn more →
              </Link>
            </p>
          </div>

          <div className="text-sm">
            <h3 className="font-display font-bold text-sun mb-2">Get in touch</h3>
            <p className="mb-1">
              <a
                href="mailto:brightsidechildcare22@yahoo.com"
                className="underline decoration-sun/60 hover:decoration-sun"
              >
                brightsidechildcare22@yahoo.com
              </a>
            </p>
            <p className="mb-4">
              <a
                href="https://www.facebook.com/p/Brightside-Childcare-100090215379767/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-sun/60 hover:decoration-sun"
              >
                Follow us on Facebook
              </a>
            </p>
            <ul className="space-y-1">
              <li><Link href="/enroll" className="hover:text-sun">Enrollment</Link></li>
              <li><Link href="/contact" className="hover:text-sun">Contact &amp; tours</Link></li>
              <li><Link href="/events" className="hover:text-sun">Events</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="font-display font-bold text-sun mb-2">Current families</h3>
            <p className="text-sky mb-3">
              Daily photos, messages, check-in, and billing all live in the brightwheel app.
            </p>
            <a
              href={brightwheel.parentLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sun hover:bg-sun-deep text-pine font-display font-bold rounded-full px-5 py-2 transition-colors"
            >
              Family login →
            </a>
            <p className="mt-3 text-xs text-sky">
              Get the app:{" "}
              <a
                href={brightwheel.iosAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-sun/60 hover:decoration-sun font-bold"
              >
                iPhone
              </a>{" "}
              ·{" "}
              <a
                href={brightwheel.androidAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-sun/60 hover:decoration-sun font-bold"
              >
                Android
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-cloud/15 py-4 text-center text-xs text-sky">
          © {new Date().getFullYear()} Brightside Childcare LLC · Licensed by NYS OCFS · Fairport, New York
        </div>
      </div>
    </footer>
  );
}
