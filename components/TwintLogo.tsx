import Image from "next/image";

type TwintLogoProps = {
  className?: string;
  height?: number;
};

export default function TwintLogo({
  className = "h-9 w-auto",
  height = 36,
}: TwintLogoProps) {
  return (
    <Image
      src="/images/twint-logo.png"
      alt="TWINT"
      width={Math.round(height * 3.2)}
      height={height}
      className={className}
      priority={false}
    />
  );
}
