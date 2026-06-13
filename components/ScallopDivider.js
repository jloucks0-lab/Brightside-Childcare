/* Scalloped horizon divider — echoes the logo's horizon line between sections. */
export default function ScallopDivider({ fill = "#fffdf6", flip = false, className = "" }) {
  return (
    <div className={`${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        className="block w-full h-8 md:h-12"
      >
        <path
          d="M0 48 L0 24 Q37.5 0 75 24 Q112.5 0 150 24 Q187.5 0 225 24 Q262.5 0 300 24 Q337.5 0 375 24 Q412.5 0 450 24 Q487.5 0 525 24 Q562.5 0 600 24 Q637.5 0 675 24 Q712.5 0 750 24 Q787.5 0 825 24 Q862.5 0 900 24 Q937.5 0 975 24 Q1012.5 0 1050 24 Q1087.5 0 1125 24 Q1162.5 0 1200 24 L1200 48 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
