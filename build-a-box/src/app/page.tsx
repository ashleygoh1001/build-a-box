import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-smallcaps text-olive/80">
              Moving boxes · Build kits · A second life
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-[5.5rem]">
              Move in.{" "}
              <span className="italic text-olive">Build up.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mutedForeground">
              Build‑A‑Box makes moving boxes that become the furniture in your new
              home. Move once. Build for years.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/boxes">Shop moving boxes</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/kits">Explore build kits</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-3xl bg-muted ring-1 ring-border/60">
              <Image
                src="/hero-chair.png"
                alt="Cardboard lounge chair in a sunlit room"
                priority
                width={1200}
                height={1500}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="h-auto w-full object-contain"
              />
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
                  body: "Sturdy boxes that stack clean and label quietly.",
                  imageSrc: "/stage-move.png",
                  imageAlt: "Stacked moving boxes labeled by room",
                },
                {
                  label: "Stage 2",
                  title: "Build",
                  body: "Templates + folds that turn used board into parts.",
                  imageSrc: "/stage-build.png",
                  imageAlt: "Hand tracing a cardboard template for building",
                },
                {
                  label: "Stage 3",
                  title: "Live",
                  body: "A calm object you keep—then recycle cleanly.",
                  imageSrc: "/stage-live.png",
                  imageAlt: "Cardboard lounge chair in a sunlit room",
                },
              ].map((s) => (
                <div key={s.title} className="rounded-3xl bg-card p-6 ring-1 ring-border/60">
                  <div className="rounded-2xl bg-muted/60 p-4 ring-1 ring-border/60">
                    <div className="aspect-[1024/558] w-full overflow-hidden rounded-xl bg-background/70 ring-1 ring-border/60">
                      {s.imageSrc ? (
                        <Image
                          src={s.imageSrc}
                          alt={s.imageAlt ?? ""}
                          width={1200}
                          height={800}
                          sizes="(min-width: 768px) 25vw, 100vw"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="flex h-full w-full items-end p-4">
                          <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                            {s.imageText}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <p className="font-serif text-xl">{s.title}</p>
                    <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                      {s.label}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mutedForeground">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 hidden items-center justify-between px-2 text-xs uppercase tracking-smallcaps text-mutedForeground md:flex">
              <span>Move</span>
              <span className="text-olive/70">→</span>
              <span>Build</span>
              <span className="text-olive/70">→</span>
              <span>Live</span>
              <span className="text-olive/70">→</span>
              <span>Recycle</span>
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
          <Link href="/kits" className="text-sm text-mutedForeground hover:text-olive">
            View all kits
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Lounge Chair Kit",
              meta: "8–10 boxes · $128",
              imageSrc: "/kit-lounge-chair.png",
              imageAlt: "Lounge chair kit in a sunlit apartment",
              href: "/kits/lounge-chair",
            },
            {
              name: "Side Table Kit",
              meta: "2–3 boxes · $38",
              imageSrc: "/kit-side-table.png",
              imageAlt: "Side table kit beside a sofa in warm light",
              href: "/kits/side-table",
            },
            {
              name: "Bookshelf Kit",
              meta: "10–12 boxes · $144",
              imageSrc: "/kit-bookshelf.png",
              imageAlt: "Bookshelf kit styled with books and ceramics",
              href: "/kits/bookshelf",
            },
            {
              name: "Pendant Chandelier",
              meta: "3–4 boxes · $64",
              imageSrc: "/kit-pendant-chandelier.png",
              imageAlt: "Pendant chandelier kit over a dining table",
              href: "/kits/pendant-chandelier",
            },
          ].map((k) => (
            <Link
              key={k.name}
              href={k.href}
              className="group rounded-3xl bg-card ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="rounded-t-3xl bg-muted p-5">
                {k.imageSrc ? (
                  <div className="aspect-[1024/559] w-full overflow-hidden rounded-2xl bg-background/70 ring-1 ring-border/60">
                    <Image
                      src={k.imageSrc}
                      alt={k.imageAlt ?? ""}
                      width={1200}
                      height={700}
                      sizes="(min-width: 1024px) 23vw, (min-width: 768px) 45vw, 100vw"
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                    {k.caption}
                  </p>
                )}
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
