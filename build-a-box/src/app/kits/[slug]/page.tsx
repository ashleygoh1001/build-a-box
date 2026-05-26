import { notFound } from "next/navigation";

import { getKitBySlug, kits } from "@/lib/data/kits";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function KitDetailPage({ params }: { params: { slug: string } }) {
  const kit = getKitBySlug(params.slug);
  if (!kit) return notFound();

  const related = kits.filter((k) => k.slug !== kit.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
      <div className="grid gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-7">
          <div className="aspect-[4/3] rounded-3xl bg-muted p-6 ring-1 ring-border/60">
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              {kit.imageCaption}
            </p>
          </div>

          <div className="mt-10 space-y-10">
            <section>
              <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                The design
              </p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">
                Built to feel surprisingly normal.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-mutedForeground">
                The Lounge Chair is a study in cardboard as structure. Layering creates
                stiffness. Repetition creates strength. The kit’s job is to turn
                “used boxes” into clean geometry you can trust.
              </p>
            </section>

            {[
              {
                caption: "[Detail: layered panels and slot joints]",
                text: "Slots are positioned where the board wants to carry load. The result is quiet—no wobble, no theatrics.",
              },
              {
                caption: "[Detail: backrest curve in soft light]",
                text: "A slight recline, a wide seat, and edges that feel finished rather than improvised.",
              },
              {
                caption: "[Detail: chair beside low table]",
                text: "Designed for a first apartment week and a long-term reading corner. It can be temporary without feeling disposable.",
              },
            ].map((s) => (
              <section key={s.caption} className="grid gap-6 md:grid-cols-12 md:items-start">
                <div className="md:col-span-6">
                  <div className="aspect-[4/3] rounded-3xl bg-muted p-6 ring-1 ring-border/60">
                    <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                      {s.caption}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-6 md:pt-2">
                  <p className="text-sm leading-relaxed text-mutedForeground">{s.text}</p>
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="md:col-span-5 md:sticky md:top-28">
          <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
            Build kit
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight">{kit.name}</h1>
          <p className="mt-5 text-sm leading-relaxed text-mutedForeground">
            A structural piece made from your moved‑with boxes—designed to feel calm,
            deliberate, and surprisingly enduring.
          </p>

          <div className="mt-7 flex items-center justify-between">
            <p className="text-lg font-medium">${kit.price}</p>
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              {kit.boxCount} · Works with {kit.sizes.join(", ")} boxes
            </p>
          </div>

          <div className="mt-6">
            <AddToCartButton
              id={kit.id}
              name={kit.name}
              price={kit.price}
              subtitle={`${kit.category} · ${kit.boxCount}`}
              label="Add to Cart"
            />
          </div>

          <Separator className="my-8" />

          <details className="group rounded-3xl bg-card p-6 ring-1 ring-border/60">
            <summary className="cursor-pointer list-none font-medium">
              What’s in the kit
              <span className="float-right text-mutedForeground transition group-open:rotate-180">
                ↓
              </span>
            </summary>
            <ul className="mt-4 space-y-2 text-sm text-mutedForeground">
              <li>Laser-cut template sheets (for consistent folds)</li>
              <li>Low-profile connectors (paper-first, no plastic bulk)</li>
              <li>Assembly guide with joinery map</li>
              <li>Finishing suggestions (edge softening, optional wax)</li>
            </ul>
          </details>

          <div className="mt-4 rounded-3xl bg-card p-6 ring-1 ring-border/60">
            <p className="font-medium">What you supply</p>
            <p className="mt-3 text-sm leading-relaxed text-mutedForeground">
              The used boxes from your move—clean, dry, and uncoated. The kit is designed to
              work with standard Build‑A‑Box sizes.
            </p>
          </div>

          <div className="mt-8 rounded-3xl bg-muted p-6 ring-1 ring-border/60">
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              Note
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mutedForeground">
              This is a marketing demo. Build kits are presented as realistic products; checkout is disabled.
            </p>
            <Button variant="outline" className="mt-4 w-full" asChild>
              <a href="/kits">Browse more kits</a>
            </Button>
          </div>
        </aside>
      </div>

      <section className="py-section-mobile md:py-section">
        <Separator />
        <div className="mt-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              Related kits
            </p>
            <h2 className="mt-4 font-serif text-3xl">A similar direction</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((k) => (
            <div key={k.id} className="rounded-3xl bg-card ring-1 ring-border/60">
              <div className="aspect-[4/3] rounded-t-3xl bg-muted p-5">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  {k.imageCaption}
                </p>
              </div>
              <div className="p-6">
                <p className="font-serif text-lg">{k.name}</p>
                <p className="mt-2 text-sm text-mutedForeground">{k.boxCount}</p>
                <p className="mt-4 text-sm font-medium">${k.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

