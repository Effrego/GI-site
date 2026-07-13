type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  ratio?: "video" | "square" | "portrait";
};

const ratioClass: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

export default function ImagePlaceholder({
  label = "Изображение",
  className = "",
  ratio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-neutral-700 bg-neutral-900/40 text-center ${ratioClass[ratio]} ${className}`}
    >
      <span className="px-4 text-xs uppercase tracking-widest text-neutral-600">
        {label}
      </span>
    </div>
  );
}
