import Link from "next/link";

import { boxBundles, boxProducts } from "@/lib/data/boxes";
import { kits } from "@/lib/data/kits";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Separator } from "@/components/ui/separator";

export default function BoxesPage() {
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
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              [Image: neatly stacked boxes with subtle labeling]
            </p>
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
              <p className="mt-3 text-xs uppercase tracking-smallcaps text-mutedForeground">
                Works with{" "}
                {kits
                  .filter((k) => k.sizes.includes(b.size))
                  .map((k) => k.name)
                  .join(", ")}
              </p>
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
              Bundles for real homes
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {boxBundles.map((bundle) => (
            <div
              key={bundle.id}
              className="rounded-3xl bg-card p-6 ring-1 ring-border/60"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-serif text-xl">{bundle.name}</p>
                  <p className="mt-2 text-sm text-mutedForeground">{bundle.summary}</p>
                </div>
                <p className="text-sm font-medium">${bundle.price}</p>
              </div>
              <div className="mt-5 grid gap-2 text-sm text-mutedForeground sm:grid-cols-2">
                {bundle.contents.map((c) => (
                  <div key={`${bundle.id}-${c.size}`}>
                    {c.size}: {c.quantity}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <AddToCartButton
                  id={bundle.id}
                  name={bundle.name}
                  price={bundle.price}
                  subtitle={`${bundle.contents
                    .map((c) => `${c.quantity} ${c.size}`)
                    .join(" · ")}`}
                  label="Add bundle"
                />
              </div>
            </div>
          ))}
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
              <Link
                href="/kits"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                Explore build kits
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

