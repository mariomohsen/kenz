interface RopeDividerProps {
  className?: string;
}

/** A twisted-rope style horizontal divider, drawn with SVG. */
export default function RopeDivider({ className = "" }: RopeDividerProps) {
  return (
    <svg
      viewBox="0 0 400 20"
      className={`h-4 w-full ${className}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10 T100 10 T120 10 T140 10 T160 10 T180 10 T200 10 T220 10 T240 10 T260 10 T280 10 T300 10 T320 10 T340 10 T360 10 T380 10 T400 10"
        stroke="#6b4226"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M0 10 Q10 20 20 10 T40 10 T60 10 T80 10 T100 10 T120 10 T140 10 T160 10 T180 10 T200 10 T220 10 T240 10 T260 10 T280 10 T300 10 T320 10 T340 10 T360 10 T380 10 T400 10"
        stroke="#a67320"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  );
}
