"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useMotionValue(0), { stiffness: 160, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 160, damping: 20 });

  const onCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    // subtle tilt only (keeps it calm)
    rx.set((0.5 - py) * 4);
    ry.set((px - 0.5) * 4);
    mx.set(px);
    my.set(py);
  };

  const onCardLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div>
      {/* Landing — full-screen video */}
      <section
        id="about"
        className="relative min-h-[100svh] scroll-mt-28 overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-background/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/25"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 py-28 text-center md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-xs uppercase tracking-smallcaps text-olive/90">
              Moving boxes · Build kits · A second life
            </p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-[6.5rem]">
              Move in.{" "}
              <span className="font-serif italic text-olive">Build up.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/85">
              Build‑A‑Box makes moving boxes that become the furniture in your new home.
              Move once. Build for years.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2 text-mutedForeground">
              <span className="stamp">recyclable</span>
              <span className="stamp">low waste</span>
              <span className="stamp">made to keep</span>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild data-cursor="hover">
                <Link href="/boxes">Shop moving boxes</Link>
              </Button>
              <Button variant="outline" asChild data-cursor="hover">
                <Link href="/kits">Explore build kits</Link>
              </Button>
              <Button variant="subtle" asChild data-cursor="hover">
                <Link href="/story">Read the story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-7xl px-6">
        <div className="cutline opacity-70" />
      </div>

      {/* Explore */}
      <AnimatedSection id="cases" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-section-mobile md:py-section">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">Explore</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Start with a system</h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <span className="stamp">boxes</span>
            <span className="stamp">kits</span>
            <span className="stamp">lifecycle</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <motion.a
            href="/boxes"
            className="group rounded-3xl bg-card ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-soft md:col-span-7"
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
            style={{
              rotateX: rx,
              rotateY: ry,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="rounded-t-3xl bg-muted p-5">
              <div className="aspect-[1024/559] w-full overflow-hidden rounded-2xl bg-background/70 ring-1 ring-border/60">
                <Image
                  src="/boxes-stacked.png"
                  alt="Neatly stacked boxes with subtle labeling"
                  width={1400}
                  height={900}
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-6">
                <p className="font-serif text-xl">Moving boxes</p>
                <span className="text-xs uppercase tracking-smallcaps text-mutedForeground">system</span>
              </div>
              <p className="mt-2 text-sm text-mutedForeground">
                Quiet labels, clean stacking, and sizes designed to become parts later.
              </p>
              <p className="mt-4 text-sm text-foreground/80 opacity-0 transition group-hover:opacity-100">
                View sizes →
              </p>
            </div>
          </motion.a>

          <motion.a
            href="/kits"
            className="group rounded-3xl bg-card ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-soft md:col-span-5"
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
            style={{
              rotateX: rx,
              rotateY: ry,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="rounded-t-3xl bg-muted p-5">
              <div className="aspect-[1024/559] w-full overflow-hidden rounded-2xl bg-background/70 ring-1 ring-border/60">
                <Image
                  src="/kits-templates.png"
                  alt="Kit templates laid out on a work table"
                  width={1400}
                  height={900}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-6">
                <p className="font-serif text-xl">Build kits</p>
                <span className="text-xs uppercase tracking-smallcaps text-mutedForeground">library</span>
              </div>
              <p className="mt-2 text-sm text-mutedForeground">
                Templates + connectors that make cardboard feel normal to live with.
              </p>
              <p className="mt-4 text-sm text-foreground/80 opacity-0 transition group-hover:opacity-100">
                Browse kits →
              </p>
            </div>
          </motion.a>

          <motion.a
            href="/story"
            className="group rounded-3xl bg-card ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-soft md:col-span-12"
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
            style={{
              rotateX: rx,
              rotateY: ry,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="grid gap-6 p-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="aspect-[1024/687] w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-border/60">
                  <Image
                    src="/story-flattened-bundle.png"
                    alt="Flattened cardboard being neatly bundled"
                    width={1400}
                    height={900}
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="md:col-span-5 md:pl-2">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">Lifecycle</p>
                <p className="mt-3 font-serif text-2xl leading-snug">
                  Move → Build → Live → Recycle.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-mutedForeground">
                  No coatings. No composites. A clean return when the time comes.
                </p>
                <p className="mt-5 text-sm text-foreground/80 opacity-0 transition group-hover:opacity-100">
                  Read the story →
                </p>
              </div>
            </div>
          </motion.a>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection id="services" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-section-mobile md:pb-section">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">How it works</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">Move → Build → Live</h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Boxes",
                  body: "Clean dimensions + quiet labeling for moving day.",
                  href: "/boxes",
                },
                {
                  title: "Kits",
                  body: "Templates + connectors that turn board into parts.",
                  href: "/kits",
                },
                {
                  title: "Bundles",
                  body: "Buy once with intention—box counts matched to builds.",
                  href: "/boxes#bundles",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group rounded-3xl bg-card p-6 ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-serif text-xl">{s.title}</p>
                    <span className="text-xs uppercase tracking-smallcaps text-mutedForeground transition group-hover:text-olive">
                      →
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mutedForeground">{s.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Impact */}
      <AnimatedSection id="impact" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-section-mobile md:pb-section">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <div className="rounded-3xl bg-muted p-6 ring-1 ring-border/60">
              <div className="mb-4 flex items-center justify-between">
                <span className="stamp">material</span>
                <span className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                  corrugation / cut edges
                </span>
              </div>
              <div className="aspect-[1024/687] w-full overflow-hidden rounded-2xl bg-background/70 ring-1 ring-border/60">
                <Image
                  src="/material-corrugation.png"
                  alt="Close-up of corrugation and cut edges"
                  width={1400}
                  height={900}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">Impact</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">One box. Three lives.</h2>
            <p className="mt-5 text-sm leading-relaxed text-mutedForeground">
              We treat cardboard as a material, not a moment. Your boxes move your belongings. Then
              they become furniture. When that chapter ends, they recycle cleanly.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-card p-5 ring-1 ring-border/60">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">Design rule</p>
                <p className="mt-3 text-sm">If it can’t return to paper, it doesn’t belong here.</p>
              </div>
              <div className="rounded-3xl bg-card p-5 ring-1 ring-border/60">
                <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">Material</p>
                <p className="mt-3 text-sm">
                  Double‑wall board where structure needs it—lighter where it doesn’t.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contacts */}
      <AnimatedSection id="contacts" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-section-mobile md:pb-section">
        <div className="rounded-3xl bg-card p-6 ring-1 ring-border/60 md:p-8">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">Get started</p>
              <p className="mt-4 font-serif text-2xl leading-snug md:text-3xl">
                A clean demo focused on sustainability and systems thinking.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-mutedForeground">
                Explore the product pages, add items to the cart, and follow the lifecycle story.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Button asChild>
                <Link href="/kits">Start browsing</Link>
              </Button>
              <div className="mt-3 text-xs uppercase tracking-smallcaps text-mutedForeground">
                tip: use the menu to jump
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
