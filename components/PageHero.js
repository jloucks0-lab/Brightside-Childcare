import ScallopDivider from "./ScallopDivider";

export default function PageHero({ eyebrow, title, lede, tone = "bg-sky" }) {
  return (
    <section className={`relative ${tone}`}>
      <div className="mx-auto max-w-4xl px-4 pt-12 pb-20 md:pt-16 md:pb-24 text-center">
        {eyebrow && (
          <p className="font-display font-bold text-sm uppercase tracking-widest text-coral-deep mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-extrabold text-4xl md:text-5xl">{title}</h1>
        {lede && (
          <p className="mt-4 text-lg text-pine-soft font-semibold max-w-2xl mx-auto">{lede}</p>
        )}
      </div>
      <ScallopDivider fill="#fffdf6" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
