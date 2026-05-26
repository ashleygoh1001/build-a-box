"use client";

import * as React from "react";
import Link from "next/link";

import type { KitFilter } from "@/lib/data/kits";
import { kits } from "@/lib/data/kits";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Button } from "@/components/ui/button";

const filters: KitFilter[] = ["All", "Starter", "Statement", "Decor"];

export default function KitsPage() {
  const [filter, setFilter] = React.useState<KitFilter>("All");

  const visible = React.useMemo(() => {
    if (filter === "All") return kits;
    return kits.filter((k) => k.category === filter);
  }, [filter]);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
      <header className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
            Build kits
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
            Design kits for furniture and decor.
          </h1>
          <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-mutedForeground">
            <p>
              Each kit is a set of templates, connectors, and instructions that
              translates used boxes into structure. Think of it as joinery—just
              simplified and paper‑based.
            </p>
            <p>
              The goal isn’t novelty. It’s a calm, durable object you can live with
              while your home becomes yours.
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-3xl bg-muted p-6 ring-1 ring-border/60">
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              [Image: kit templates laid out on table]
            </p>
          </div>
        </div>
      </header>

      <div className="mt-12 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <section className="py-section-mobile md:py-section">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((k) => (
            <div
              key={k.id}
              className="group rounded-3xl bg-card ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="aspect-[4/3] rounded-t-3xl bg-muted p-5">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  {k.imageCaption}
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-lg">{k.name}</p>
                    <p className="mt-2 text-sm text-mutedForeground">{k.shortDescription}</p>
                  </div>
                  <p className="text-sm font-medium">${k.price}</p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                    {k.boxCount}
                  </p>
                  <AddToCartButton
                    id={k.id}
                    name={k.name}
                    price={k.price}
                    subtitle={`${k.category} · ${k.boxCount}`}
                  />
                </div>

                <Link
                  href={`/kits/${k.slug}`}
                  className="mt-5 inline-flex text-sm text-mutedForeground transition hover:text-foreground"
                >
                  View details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

