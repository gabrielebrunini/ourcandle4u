import Image from "next/image";

const LOGO_ASPECT = 1010 / 388;

type TwintLogoProps = {
  className?: string;
  height?: number;
};

export default function TwintLogo({
  className = "block h-auto w-auto",
  height = 36,
}: TwintLogoProps) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Image
      src="/images/twint-logo.png"
      alt="TWINT"
      width={width}
      height={height}
      className={className}
      style={{ height, width: "auto", maxWidth: width }}
      priority={false}
    />
  );
}
