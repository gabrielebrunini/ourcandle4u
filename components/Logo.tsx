type LogoProps = {
  className?: string;
  compact?: boolean;
};

function SmallCandle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* tin */}
      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="3"
        fill="#fff8f0"
        stroke="#e8c4a0"
        strokeWidth="1.2"
      />
      <path
        d="M7 13 H17"
        stroke="#ff6b6b"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M8 15.5 C9 14.5 10 14.5 12 14.5 C14 14.5 15 14.5 16 15.5"
        stroke="#7bedd4"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* wax */}
      <ellipse cx="12" cy="11.5" rx="5.5" ry="1.6" fill="#fff" />
      {/* wick */}
      <path
        d="M12 11.5 V9.2"
        stroke="#8b6914"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {/* flame */}
      <path
        d="M12 9.2 C11.2 8.1 10.6 6.8 11.4 5.8 C12 5 12.8 5 13.4 5.8 C14.2 6.8 13.6 8.1 12.8 9.2 C12.5 9.6 12 9.6 12 9.2 Z"
        fill="#ff6b6b"
      />
      <path
        d="M12 8.8 C11.6 8.1 11.5 7.2 12 6.6 C12.5 7.2 12.4 8.1 12 8.8 Z"
        fill="#ffe066"
      />
    </svg>
  );
}

export default function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <SmallCandle className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
      {!compact && (
        <span className="text-base font-extrabold tracking-tight text-coral sm:text-lg">
          OurCandle4U
        </span>
      )}
    </div>
  );
}
