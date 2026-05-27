import Image from "next/image";

import { Separator } from "@/components/ui/separator";

const sections = [
  {
    label: "The problem",
    title: "Moving creates waste on a schedule.",
    body: "A move compresses decisions into days. You buy boxes because you need them now. Then, almost immediately, you have too many of them. Most of that cardboard is still strong. It simply stops having a job.",
    imageSrc: "/boxes-unused-stack.png",
    imageAlt: "A stack of boxes after a move, quietly unused",
    imageAspect: "1024/687",
  },
  {
    label: "The insight",
    title: "Cardboard is structural—when you treat it that way.",
    body: "Corrugation isn’t just packaging. It’s geometry. In layers, it stiffens. In repetition, it carries load. We designed Build‑A‑Box around that reality: the material is capable; the system is missing.",
    imageSrc: "/material-corrugation.png",
    imageAlt: "Close-up of corrugation and cut edges",
    imageAspect: "1024/687",
  },
  {
    label: "Design philosophy",
    title: "Restraint is a sustainability strategy.",
    body: "We avoid loud claims. We focus on materials language, clear joinery, and objects that feel calm enough to keep. The most sustainable piece is the one you don’t replace next season.",
    imageSrc: "/story-workspace-desk.png",
    imageAlt: "Quiet workspace with a cardboard desk and lamp",
    imageAspect: "1024/687",
  },
  {
    label: "Lifecycle",
    title: "Move → Build → Live → Recycle.",
    body: "A box moves. A kit builds. The object lives. Then it returns to paper. That’s the full arc. No mixed composites, no coatings that complicate the end, no forced permanence—just a clean return when the time comes.",
    imageSrc: "/story-flattened-bundle.png",
    imageAlt: "Flattened cardboard being neatly bundled",
    imageAspect: "1024/687",
  },
  {
    label: "What’s next",
    title: "Design kits as a library, not a trend.",
    body: "We want kits to feel like references you return to—forms that sit comfortably beside real furniture. Chairs. Shelves. Light. Small dividers. The goal is a home that gets better without getting heavier.",
    imageSrc: "/story-kit-trays.png",
    imageAlt: "Kit components organized in trays",
    imageAspect: "1024/575",
  },
];

export default function StoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
          Our story
        </p>
        <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
          We started with a question:{" "}
          <span className="italic">
            why do we throw away the boxes that move us?
          </span>
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-mutedForeground">
          Build‑A‑Box is a design studio disguised as a moving supply company.
          We begin with cardboard—not as packaging, but as a material with
          structure, texture, and an honest end-of-life.
        </p>
      </header>

      <section className="py-section-mobile md:py-section">
        <div className="grid gap-10">
          {sections.map((s, idx) => (
            <div key={s.title}>
              {idx !== 0 ? <Separator className="my-10" /> : null}
              <div className="grid gap-10 md:grid-cols-12 md:items-start">
                <div className="md:col-span-5">
                  <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                    {s.label}
                  </p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-7 md:pl-6">
                  <div className="rounded-3xl bg-muted p-6 ring-1 ring-border/60">
                    {s.imageSrc ? (
                      <div
                        style={{ aspectRatio: s.imageAspect ? s.imageAspect.replace("/", " / ") : "4 / 3" }}
                        className="w-full overflow-hidden rounded-2xl bg-background/70 ring-1 ring-border/60"
                      >
                        <Image
                          src={s.imageSrc}
                          alt={s.imageAlt ?? ""}
                          width={1400}
                          height={900}
                          sizes="(min-width: 768px) 58vw, 100vw"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
                        {"image" in s ? (s as { image: string }).image : ""}
                      </p>
                    )}
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-mutedForeground">
                    {s.body}
                  </p>
                  {idx === 1 ? (
                    <p className="mt-8 font-serif text-2xl italic leading-snug">
                      “The material was never the problem. The lifecycle was.”
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

