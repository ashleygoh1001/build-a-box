import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="mt-[6rem] bg-card/60">
      <Separator />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl leading-tight">
              A moving box with a second life.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mutedForeground">
              We design boxes, kits, and systems that treat cardboard as a material—one
              that can move with you, hold structure, and eventually return to paper.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs uppercase tracking-[0.18em] text-mutedForeground">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/boxes" className="transition hover:text-olive">
                  Boxes
                </Link>
              </li>
              <li>
                <Link href="/kits" className="transition hover:text-olive">
                  Kits
                </Link>
              </li>
              <li>
                <Link href="/story" className="transition hover:text-olive">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-mutedForeground">
              Newsletter
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mutedForeground">
              A monthly note on materials, new kits, and thoughtful ways to keep
              useful things in circulation.
            </p>
            <div className="mt-4 flex gap-3">
              <input
                className="h-11 w-full rounded-full bg-background px-4 text-sm ring-1 ring-border/70 placeholder:text-mutedForeground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Email address"
                type="email"
              />
              <Button>Sign up</Button>
            </div>
            <p className="mt-3 text-xs text-mutedForeground">
              This is a demo site. Submissions aren’t collected.
            </p>
          </div>
        </div>

        <Separator className="my-10" />
        <div className="flex flex-col gap-3 text-xs text-mutedForeground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Build‑A‑Box. All rights reserved.</p>
          <p>
            Sustainability, in practice: durable design, minimal packaging, and a clear
            end-of-life path.
          </p>
        </div>
      </div>
    </footer>
  );
}

