import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  caption,
  className,
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-muted ring-1 ring-border/60",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,168,117,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.00)_20%,rgba(0,0,0,0.04)_60%,rgba(0,0,0,0.00)_85%)]" />
      <div className="relative flex h-full w-full items-end p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-mutedForeground">
          {caption}
        </p>
      </div>
    </div>
  );
}

