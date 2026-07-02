type LivePhotoProps = {
  baseName: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function LivePhoto({
  baseName,
  alt,
  className = "h-full w-full object-cover",
  priority = false,
}: LivePhotoProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload={priority ? "auto" : "metadata"}
      poster={`/images/${baseName}.jpg`}
      className={className}
      aria-label={alt}
    >
      <source src={`/images/${baseName}.mp4`} type="video/mp4" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/${baseName}.jpg`}
        alt={alt}
        className={className}
      />
    </video>
  );
}
