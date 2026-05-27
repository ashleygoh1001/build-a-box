/* eslint-disable no-restricted-globals */
"use client";

import * as React from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = React.useState<string>(sectionIds[0] ?? "");

  React.useEffect(() => {
    if (!sectionIds.length) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) setActiveId(top.id);
      },
      {
        root: null,
        // bias toward the middle of the viewport (feels like “chapter” tracking)
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.08, 0.12, 0.2, 0.35, 0.5, 0.65],
      },
    );

    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds]);

  const scrollToId = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }, []);

  return { activeId, scrollToId };
}

