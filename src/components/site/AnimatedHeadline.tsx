"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
  onComplete?: () => void;
  straplineSelector?: string;
  highlightWord?: string;
  highlightClassName?: string;
  showCursor?: boolean;
};

export function AnimatedHeadline({ text, className, onComplete, straplineSelector, highlightWord, highlightClassName, showCursor }: AnimatedHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const words = useMemo(() => text.trim().split(/\s+/), [text]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const nodeList = containerRef.current!.querySelectorAll<HTMLElement>("[data-char]");
      const items: HTMLElement[] = Array.from(nodeList);
      if (showCursor && cursorRef.current) {
        items.push(cursorRef.current);
      }

      // Set initial off-screen position
      gsap.set(items, { yPercent: 120 });

      gsap.to(items, {
        yPercent: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.035,
        delay: 0.1,
        onComplete: () => {
          // Start cursor pulse after it enters
          if (showCursor && cursorRef.current) {
            gsap.to(cursorRef.current, {
              autoAlpha: 0,
              duration: 0.7,
              ease: "power1.inOut",
              repeat: -1,
              yoyo: true,
            });
          }

          if (straplineSelector) {
            const target = document.querySelector(straplineSelector) as Element | null;
            if (target) {
              gsap.to(target, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" });
            }
          }
          onComplete?.();
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [showCursor, straplineSelector, onComplete]);

  return (
    <h1 ref={containerRef} className={cn(className)} aria-label={text}>
      {words.map((word, wi) => {
        const isHighlight = highlightWord ? word === highlightWord : false;
        return (
        <span
          key={`w-${wi}`}
          className={cn("inline-block overflow-hidden align-baseline mr-[0.4ch] h-[1.15em]", isHighlight && highlightClassName)}
        >
          {/* word wrapper with overflow hidden */}
          {Array.from(word).map((ch, ci) => (
            <span
              key={`w-${wi}-c-${ci}`}
              data-char
              aria-hidden
              className="inline-block will-change-transform"
            >
              {ch}
            </span>
          ))}
        </span>
      );})}
      {showCursor && (
        <span
          ref={cursorRef}
          aria-hidden
          className="inline-block align-baseline w-[0.06em] ml-[0.15ch] h-[0.97em] translate-y-[-0.03em] bg-current"
        />
      )}
    </h1>
  );
}


