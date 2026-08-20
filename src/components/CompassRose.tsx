interface CompassRoseProps {
  className?: string;
}

/** Decorative hand-drawn-style compass rose, rendered as inline SVG (crisp at any size). */
export default function CompassRose({ className = "h-24 w-24" }: CompassRoseProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="92" stroke="#543219" strokeWidth="2" />
      <circle cx="100" cy="100" r="78" stroke="#543219" strokeWidth="1" />
      <circle cx="100" cy="100" r="4" fill="#543219" />
      {Array.from({ length: 32 }).map((_, i) => {
        const angle = (i * 360) / 32;
        const isMajor = i % 8 === 0;
        const isMid = i % 4 === 0;
        const r1 = 92;
        const r2 = isMajor ? 60 : isMid ? 72 : 84;
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + r1 * Math.sin(rad);
        const y1 = 100 - r1 * Math.cos(rad);
        const x2 = 100 + r2 * Math.sin(rad);
        const y2 = 100 - r2 * Math.cos(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#543219"
            strokeWidth={isMajor ? 1.6 : 0.8}
          />
        );
      })}
      {/* main star */}
      <path
        d="M100 18 L112 100 L100 182 L88 100 Z"
        fill="#a67320"
        stroke="#543219"
        strokeWidth="1.5"
      />
      <path
        d="M18 100 L100 112 L182 100 L100 88 Z"
        fill="#cc9531"
        stroke="#543219"
        strokeWidth="1.5"
      />
      <text x="100" y="14" textAnchor="middle" fontSize="14" fill="#3c2313" fontWeight="bold">
        N
      </text>
      <text x="100" y="196" textAnchor="middle" fontSize="14" fill="#3c2313" fontWeight="bold">
        S
      </text>
      <text x="12" y="105" textAnchor="middle" fontSize="14" fill="#3c2313" fontWeight="bold">
        W
      </text>
      <text x="188" y="105" textAnchor="middle" fontSize="14" fill="#3c2313" fontWeight="bold">
        E
      </text>
    </svg>
  );
}
