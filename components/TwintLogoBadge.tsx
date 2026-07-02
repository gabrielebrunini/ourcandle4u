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
      className={`inline-flex shrink-0 items-center overflow-hidden rounded-md ${className}`}
      aria-hidden
    >
      <TwintLogo height={height} />
    </span>
  );
}
