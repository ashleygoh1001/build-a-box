"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function isFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Cursor() {
  const [enabled, setEnabled] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 550, damping: 40, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 550, damping: 40, mass: 0.25 });

  React.useEffect(() => {
    const ok = isFinePointer() && !prefersReducedMotion();
    setEnabled(ok);
    if (!ok) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: Event) => {
      const el = e.target as Element | null;
      if (!el) return;
      setHovering(Boolean(el.closest?.('[data-cursor="hover"]')));
    };

    const onOut = (e: Event) => {
      const el = e.target as Element | null;
      if (!el) return;
      // if leaving a hovered element, recompute based on new target
      setHovering(Boolean(el.closest?.('[data-cursor="hover"]')));
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      style={{
        translateX: sx,
        translateY: sy,
      }}
    >
      <motion.div
        className="h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/25 bg-background/10 backdrop-blur-[2px]"
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: hovering ? 0.9 : 0.65,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 32, mass: 0.25 }}
      />
    </motion.div>
  );
}

