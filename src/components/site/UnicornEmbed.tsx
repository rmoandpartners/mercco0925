"use client";

import { useEffect, useRef } from "react";

type Props = {
  projectId: string;
  className?: string;
};

export function UnicornEmbed({ projectId, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const w = window as any;
    const init = () => {
      try {
        if (!w.UnicornStudio?.isInitialized) {
          w.UnicornStudio?.init?.();
          w.UnicornStudio && (w.UnicornStudio.isInitialized = true);
        }
      } catch {
        // noop
      }
    };

    if (w.UnicornStudio?.init) {
      init();
      return;
    }

    const s = document.createElement("script");
    s.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
    s.async = true;
    s.onload = init;
    (document.head || document.body).appendChild(s);
  }, []);

  // Ensure container and canvases are transparent so the hero color shows through
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const paint = () => {
      el.style.backgroundColor = "transparent";
      el.querySelectorAll("canvas").forEach((c) => {
        const cc = c as HTMLCanvasElement;
        cc.style.backgroundColor = "transparent";
      });
    };
    paint();
    const obs = new MutationObserver(paint);
    obs.observe(el, { childList: true, subtree: true });
    // Also retry a few times after load to counter script style updates
    const retries: number[] = [];
    for (let i = 1; i <= 20; i++) {
      const id = window.setTimeout(paint, i * 100);
      retries.push(id);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}


