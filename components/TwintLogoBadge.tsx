import TwintLogo from "./TwintLogo";

type TwintLogoBadgeProps = {
  height?: number;
  className?: string;
};

export default function TwintLogoBadge({
  height = 28,
  className = "",
}: TwintLogoBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 ${className}`}
    >
      <TwintLogo className="h-auto w-auto" height={height} />
    </span>
  );
}
