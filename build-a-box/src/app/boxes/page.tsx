import Link from "next/link";
import Image from "next/image";

import { type BoxSize, boxProducts } from "@/lib/data/boxes";
import { getSingleBoxKitsForSize, kits } from "@/lib/data/kits";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function sumBoxesPrice(
  boxes: { size: BoxSize; quantity: number }[],
  priceBySize: Record<BoxSize, number>,
) {
  return boxes.reduce((sum, b) => sum + priceBySize[b.size] * b.quantity, 0);
}

function boxesLabel(boxes: { size: BoxSize; quantity: number }[]) {
  return boxes.map((b) => `${b.quantity} × ${b.size}`).join(" · ");
}

export default function BoxesPage() {
  const priceBySize = Object.fromEntries(
    boxProducts.map((b) => [b.size, b.price]),
  ) as Record<BoxSize, number>;

  const buildBundles = kits
    .map((kit) => ({
      kit,
      option: kit.requirements.reduce((best, cur) => {
        const bestTotal = best.boxes.reduce((s, b) => s + b.quantity, 0);
        const curTotal = cur.boxes.reduce((s, b) => s + b.quantity, 0);
        return curTotal < bestTotal ? cur : best;
      }, kit.requirements[0]),
    }))
    .filter(({ option }) => {
      const total = option.boxes.reduce((s, b) => s + b.quantity, 0);
      return total > 1;
    })
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
      <header className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
            Moving boxes
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
            Designed for the move—and the build after.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-mutedForeground">
            Double‑wall corrugated board, clean dimensions, and a quiet visual system.
            Boxes that stack well, label well, and fold into long‑term structure when
            the moving day is over.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-3xl bg-muted p-6 ring-1 ring-border/60">
            <div className="aspect-[1024/559] w-full overflow-hidden rounded-2xl bg-background/70 ring-1 ring-border/60">
              <Image
                src="/boxes-stacked.png"
                alt="Neatly stacked boxes with subtle labeling"
                width={1200}
                height={700}
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="py-section-mobile md:py-section">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              Sizes
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Four box sizes</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {boxProducts.map((b) => (
            <div
              key={b.id}
              className="rounded-3xl bg-card p-6 ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="aspect-[4/3] rounded-2xl bg-muted p-4">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  [Box: {b.size} — {b.dimensions}]
                </p>
              </div>
              <p className="mt-5 font-serif text-lg">{b.name}</p>
              <p className="mt-2 text-sm text-mutedForeground">{b.description}</p>
              <div className="mt-4 rounded-2xl bg-muted/60 p-4 ring-1 ring-border/60">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  From a single {b.size} box
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  {getSingleBoxKitsForSize(b.size).length === 0 ? (
                    <p className="text-sm text-mutedForeground">
                      No single-box builds for this size yet.
                    </p>
                  ) : (
                    getSingleBoxKitsForSize(b.size).map((k) => (
                      <Link
                        key={k.id}
                        href={`/kits/${k.slug}`}
                        className="block text-mutedForeground transition hover:text-olive"
                      >
                        {k.name} →
                      </Link>
                    ))
                  )}
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm font-medium">${b.price} / box</p>
                <AddToCartButton
                  id={b.id}
                  name={b.name}
                  price={b.price}
                  subtitle={`${b.size} · ${b.dimensions}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="py-section-mobile md:py-section">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              Bundles
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Bundles for building
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mutedForeground">
              These bundles aren’t for moving—they’re for making. If a kit needs more than one box,
              a bundle gives you a clean starting set (e.g. <span className="italic">3 × Medium</span> or{" "}
              <span className="italic">2 × Large</span>).
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {buildBundles.map(({ kit, option }) => {
            const boxesPrice = sumBoxesPrice(option.boxes, priceBySize);
            const bundleName = `${kit.name} — Box Bundle`;
            const subtitle = boxesLabel(option.boxes);
            return (
            <div
              key={`${kit.id}-${option.label}`}
              className="rounded-3xl bg-card p-6 ring-1 ring-border/60"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-serif text-xl">{bundleName}</p>
                  <p className="mt-2 text-sm text-mutedForeground">
                    Includes boxes for: <span className="italic">{option.label}</span>
                  </p>
                </div>
                <p className="text-sm font-medium">${boxesPrice}</p>
              </div>
              <div className="mt-5 text-sm text-mutedForeground">{subtitle}</div>
              <div className="mt-6">
                <AddToCartButton
                  id={`boxbundle-${kit.slug}-${option.label}`}
                  name={bundleName}
                  price={boxesPrice}
                  subtitle={subtitle}
                  label="Add box bundle"
                />
              </div>
              <div className="mt-6">
                <Link
                  href={`/kits/${kit.slug}`}
                  className="text-sm text-mutedForeground transition hover:text-foreground"
                >
                  View kit details →
                </Link>
              </div>
            </div>
          )})}
        </div>

        <div className="mt-12 rounded-3xl bg-muted p-6 ring-1 ring-border/60 md:p-8">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                Done moving?
              </p>
              <p className="mt-4 font-serif text-2xl">
                Browse build kits that turn used boxes into furniture.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Button asChild>
                <Link href="/kits">Explore build kits</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

