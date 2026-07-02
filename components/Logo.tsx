type LogoProps = {
  className?: string;
  compact?: boolean;
};

function CartoonCandle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="24" cy="52" rx="14" ry="3" fill="#2d3436" opacity="0.12" />
      <path
        d="M14 18 C14 10 18 6 24 6 C30 6 34 10 34 18 L34 44 C34 48 30 50 24 50 C18 50 14 48 14 44 Z"
        fill="#ffe066"
        stroke="#2d3436"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 22 C19 26 21 28 24 28 C27 28 29 26 30 22"
        stroke="#ff6b6b"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="20" cy="32" r="1.5" fill="#2d3436" opacity="0.35" />
      <circle cx="28" cy="36" r="1.5" fill="#2d3436" opacity="0.35" />
      <path
        d="M20 38 Q24 41 28 38"
        stroke="#2d3436"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      <path d="M24 6 L24 2" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M24 2 C22 0 20 2 21 4 C19 3 18 6 20 7 C18 8 19 11 22 10 C21 12 24 13 24 10 C27 13 30 12 29 10 C32 11 33 8 31 7 C33 6 32 3 30 4 C31 2 29 0 27 2 C26 0 24 0 24 2 Z"
        fill="#ff6b6b"
      />
      <path
        d="M24 4 C23 6 24 8 24 8 C24 8 25 6 24 4 Z"
        fill="#ffe066"
      />
    </svg>
  );
}

export default function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-2 ring-coral/20">
        <CartoonCandle className="h-7 w-7" />
      </div>
      {!compact && (
        <span className="text-lg font-extrabold tracking-tight text-coral sm:text-xl">
          OurCandle4U
        </span>
      )}
    </div>
  );
}
