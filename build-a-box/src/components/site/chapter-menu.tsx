/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function ChapterMenu({
  chapters,
  activeHref,
  onNavigate,
}: {
  chapters: { href: string; label: string; meta?: string }[];
  activeHref?: string;
  onNavigate?: (href: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  const handleNavigate = (href: string) => {
    onNavigate?.(href);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between gap-4">
            Menu
            <span className="stamp">jump to section</span>
          </SheetTitle>
        </SheetHeader>

        <div className="cutline opacity-70" />

        <nav className="grid gap-3">
          {chapters.map((c) => (
            <button
              key={c.href}
              type="button"
              onClick={() => handleNavigate(c.href)}
              className={[
                "group rounded-2xl px-4 py-3 ring-1 transition",
                c.href === activeHref
                  ? "bg-card ring-olive/30"
                  : "bg-muted/50 ring-border/60 hover:bg-muted",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-serif text-lg">{c.label}</span>
                <span className="text-xs uppercase tracking-smallcaps text-mutedForeground transition group-hover:text-olive">
                  {c.href === activeHref ? "●" : "→"}
                </span>
              </div>
              {c.meta ? (
                <p className="mt-1 text-sm text-mutedForeground">{c.meta}</p>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl bg-card p-4 ring-1 ring-border/70">
          <p className="text-xs uppercase tracking-smallcaps text-mutedForeground">
            Quick links
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/boxes" className="stamp hover:text-olive">
              boxes
            </Link>
            <Link href="/kits" className="stamp hover:text-olive">
              kits
            </Link>
            <Link href="/story" className="stamp hover:text-olive">
              story
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

