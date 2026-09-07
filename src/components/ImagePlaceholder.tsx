import { ImageRefIcon } from "./icons";

// A clearly-marked stand-in for a photo/illustration slot that hasn't
// been shot or designed yet. Never dressed up to look like a real photo
// or a finished screenshot — the dashed border and label are deliberate,
// so nobody mistakes this for a finished asset. Swap these out by
// replacing the component usage with a real <img>; see TODO.md.
export default function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-plum-300/60 bg-plum-50 p-6 text-center`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <ImageRefIcon className="h-8 w-8 text-plum-400" />
      <p className="max-w-[16rem] text-sm font-medium text-plum-600">
        {label}
      </p>
      <p className="text-xs uppercase tracking-wide text-plum-400">
        Image placeholder
      </p>
    </div>
  );
}
