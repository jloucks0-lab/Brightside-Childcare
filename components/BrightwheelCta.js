import { brightwheel } from "@/lib/brightwheel";

/* Primary "apply through brightwheel" card on the enrollment page.
   Renders live buttons once enrollFormUrl is set in lib/brightwheel.js;
   until then it shows a friendly "coming soon" state so the page still
   makes sense in production. */
export default function BrightwheelCta() {
  const { enrollFormUrl, enrollFormUrlEast, admissionsPacketUrl } = brightwheel;
  const configured = Boolean(enrollFormUrl);

  return (
    <div className="rounded-blob bg-pine text-cloud p-8">
      <p className="font-display font-bold text-sm uppercase tracking-widest text-sun">
        Fastest way to apply
      </p>
      <h2 className="font-display font-extrabold text-2xl mt-1">
        Apply through brightwheel
      </h2>
      <p className="mt-3 text-sky leading-relaxed text-sm">
        We manage enrollment with the brightwheel app — the same app you&apos;ll use every
        day for photos, updates, and messages once your child starts. Applying through
        brightwheel puts your family directly into our admissions pipeline: no retyping,
        no lost emails, and you&apos;ll already have your account set up on day one.
      </p>

      {configured ? (
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={enrollFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sun hover:bg-sun-deep text-pine font-display font-bold rounded-full px-6 py-3 transition-colors"
          >
            {enrollFormUrlEast ? "Apply — Fairport" : "Start your application"}
          </a>
          {enrollFormUrlEast && (
            <a
              href={enrollFormUrlEast}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coral hover:bg-coral-deep text-white font-display font-bold rounded-full px-6 py-3 transition-colors"
            >
              Apply — Brightside East
            </a>
          )}
          {admissionsPacketUrl && (
            <a
              href={admissionsPacketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cloud hover:bg-sand text-pine font-display font-bold rounded-full px-6 py-3 transition-colors"
            >
              Full admissions packet
            </a>
          )}
        </div>
      ) : (
        <p className="mt-5 inline-block bg-cloud/10 border border-sky/40 rounded-2xl px-4 py-3 text-sm text-sky">
          🌤️ Our online brightwheel application is launching soon — in the meantime,
          the inquiry form below goes straight to our director.
        </p>
      )}

      <p className="mt-4 text-xs text-sky/80">
        Opens in brightwheel — you&apos;ll create a free family account (or sign in) to submit.
      </p>
    </div>
  );
}
