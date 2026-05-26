import Link from "next/link";
import { AnimatedSection } from "@/components/marketing/animated-section";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              Moving boxes · Build kits · A second life
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-[5.5rem]">
              Move in.{" "}
              <span className="italic">Build up.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mutedForeground">
              Build‑A‑Box makes moving boxes that become the furniture in your new
              home. Move once. Build for years.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/boxes"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                Shop moving boxes
              </Link>
              <Link
                href="/kits"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                Explore build kits
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-3xl bg-muted p-6 ring-1 ring-border/60">
              <div className="flex h-full flex-col justify-end">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  [Hero: Cardboard lounge chair in sunlit room]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-stage explainer */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-section-mobile md:py-section">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              Move. Build. Live.
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              A lifecycle you can see.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  label: "Stage 1",
                  title: "Move",
                  body: "Double‑wall corrugation, clean stacks, and sizing that feels considered—because calm matters on moving day.",
                },
                {
                  label: "Stage 2",
                  title: "Build",
                  body: "Design kits translate used boxes into structure: folds, slots, and templates that make cardboard behave.",
                },
                {
                  label: "Stage 3",
                  title: "Live",
                  body: "Furniture and decor that lasts through the settling‑in. When it’s done, it returns to paper—honestly.",
                },
              ].map((s) => (
                <div key={s.title} className="rounded-3xl bg-card p-6 ring-1 ring-border/60">
                  <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                    {s.label}
                  </p>
                  <p className="mt-4 font-serif text-xl">{s.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mutedForeground">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured kits */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 pb-section-mobile md:pb-section">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              Furniture from your move
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Featured kits</h2>
          </div>
          <Link href="/kits" className="text-sm text-mutedForeground hover:text-foreground">
            View all kits
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Lounge Chair Kit",
              meta: "8–10 boxes · $128",
              caption: "[Kit: Lounge chair in quiet apartment]",
              href: "/kits/lounge-chair",
            },
            {
              name: "Side Table Kit",
              meta: "2–3 boxes · $38",
              caption: "[Kit: Side table beside linen sofa]",
              href: "/kits/side-table",
            },
            {
              name: "Bookshelf Kit",
              meta: "10–12 boxes · $144",
              caption: "[Kit: Bookshelf with ceramics and books]",
              href: "/kits/bookshelf",
            },
            {
              name: "Pendant Chandelier",
              meta: "3–4 boxes · $64",
              caption: "[Kit: Pendant chandelier over dining table]",
              href: "/kits/pendant-chandelier",
            },
          ].map((k) => (
            <Link
              key={k.name}
              href={k.href}
              className="group rounded-3xl bg-card ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="aspect-[4/3] rounded-t-3xl bg-muted p-5">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  {k.caption}
                </p>
              </div>
              <div className="p-6">
                <p className="font-serif text-lg">{k.name}</p>
                <p className="mt-2 text-sm text-mutedForeground">{k.meta}</p>
                <p className="mt-4 text-sm text-foreground/80 opacity-0 transition group-hover:opacity-100">
                  View details →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* Sustainability (editorial layout) */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 pb-section-mobile md:pb-section">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <div className="aspect-[4/3] rounded-3xl bg-muted p-6 ring-1 ring-border/60">
              <div className="flex h-full flex-col justify-end">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  [Editorial: Box material, cut edges, soft light]
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
              Sustainability
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              One box. Three lives.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-mutedForeground">
              We treat cardboard as a material, not a moment. Your boxes move your
              belongings. Then they become furniture. When that chapter ends, they
              recycle cleanly—no mixed plastics, no hidden coatings, no drama.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-card p-5 ring-1 ring-border/60">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  Inline note
                </p>
                <p className="mt-3 text-sm">
                  A single bundle can furnish a studio’s first week.
                </p>
              </div>
              <div className="rounded-3xl bg-card p-5 ring-1 ring-border/60">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  Materials
                </p>
                <p className="mt-3 text-sm">
                  Double‑wall board where structure needs it—lighter where it doesn’t.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Press strip */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 pb-section-mobile md:pb-section">
        <div className="rounded-3xl bg-card px-6 py-8 ring-1 ring-border/60">
          <p className="text-center text-xs uppercase tracking-smallcaps text-mutedForeground">
            As seen in: DWELL — KINFOLK — DESIGN MILK — FAST COMPANY
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
