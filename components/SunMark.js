/* The Brightside sun — a half-sun rising over a scalloped horizon.
   Used as the logo mark and echoed in dividers across the site. */
export default function SunMark({ className = "w-9 h-9" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* rays */}
      <g stroke="#ffc53d" strokeWidth="4" strokeLinecap="round">
        <line x1="32" y1="6" x2="32" y2="14" />
        <line x1="12" y1="14" x2="17.5" y2="19.5" />
        <line x1="52" y1="14" x2="46.5" y2="19.5" />
        <line x1="6" y1="34" x2="14" y2="34" />
        <line x1="58" y1="34" x2="50" y2="34" />
      </g>
      {/* sun */}
      <path d="M18 42 a14 14 0 0 1 28 0 Z" fill="#ffc53d" />
      {/* smile */}
      <path
        d="M26 36 q6 5 12 0"
        stroke="#21433c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* scalloped horizon */}
      <path
        d="M2 46 q7.5 -7 15 0 q7.5 -7 15 0 q7.5 -7 15 0 q7.5 -7 15 0"
        stroke="#57aecf"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
