"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

import { useCart } from "@/lib/cart/cart-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChapterMenu } from "@/components/site/chapter-menu";
import { useActiveSection } from "@/lib/hooks/use-active-section";

const links = [
  { href: "/boxes", label: "Boxes" },
  { href: "/kits", label: "Kits" },
  { href: "/story", label: "Our Story" },
];

const chapters = [
  { href: "/#about", label: "About", meta: "A moving box with a second life." },
  { href: "/#cases", label: "Explore", meta: "Boxes, kits, and the lifecycle." },
  { href: "/#services", label: "How it works", meta: "Move → build → live → recycle." },
  { href: "/#impact", label: "Sustainability", meta: "Materials-first, end-of-life included." },
  { href: "/#contacts", label: "Start here", meta: "Browse boxes or kits." },
] as const;

export function SiteNav() {
  const { itemCount, open } = useCart();
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  const ids = React.useMemo(
    () => chapters.map((c) => c.href.replace("/#", "")),
    [],
  );
  const { activeId, scrollToId } = useActiveSection(ids);
  const activeHref = activeId ? `/#${activeId}` : undefined;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href: string) => {
    const id = href.replace("/#", "");
    if (!id || href[0] !== "/") return;
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors",
        scrolled ? "bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <motion.div
        className="h-[2px] origin-left bg-olive/60"
        style={{ scaleX: progress }}
      />
      <div className={cn(scrolled && "hairline")} />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight transition hover:text-olive"
        >
          Build‑A‑Box
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-mutedForeground transition hover:text-olive"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ChapterMenu
            chapters={[...chapters]}
            activeHref={activeHref}
            onNavigate={navigate}
          />
          <Button variant="outline" size="icon" onClick={open} aria-label="Open cart">
            <span className="relative">
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 ? (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-semibold text-foreground">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              ) : null}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}

