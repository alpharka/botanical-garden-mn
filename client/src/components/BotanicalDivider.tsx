/**
 * BotanicalDivider Component
 * Elegant SVG wave divider inspired by garden pathways
 * Botanical Garden Theme
 */

interface BotanicalDividerProps {
  position?: "top" | "bottom";
  className?: string;
}

export function BotanicalDivider({
  position = "bottom",
  className = "",
}: BotanicalDividerProps) {
  if (position === "top") {
    return (
      <svg
        className={`w-full h-24 md:h-32 ${className}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-warm-linen"
        />
      </svg>
    );
  }

  return (
    <svg
      className={`w-full h-24 md:h-32 ${className}`}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,70 Q300,120 600,70 T1200,70 L1200,0 L0,0 Z"
        fill="currentColor"
        className="text-warm-linen"
      />
    </svg>
  );
}

export function BotanicalWaveDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`w-full h-16 md:h-24 ${className}`}
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z"
        fill="currentColor"
        className="text-soft-sage opacity-30"
      />
    </svg>
  );
}

export function BotanicalLeafDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-4 my-8 md:my-12 ${className}`}
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-soft-sage" />
      <svg
        className="w-6 h-6 md:w-8 md:h-8 text-forest-green"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-soft-sage" />
    </div>
  );
}
