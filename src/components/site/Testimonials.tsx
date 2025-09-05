"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote:
      "“What you have delivered is 'night and day' better compared to what we had previously.”",
    author: "Chair, Audit & Risk Committee",
  },
  { quote: "“You have been a God-send.”", author: "Head of Risk Management" },
  {
    quote:
      "“You have been my go-to experts for risk and compliance advice and support for almost 10 years - there is no need to look anywhere else.”",
    author: "Chief Risk Officer",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const restart = () => {
      gsap.killTweensOf(track);
      gsap.set(track, { x: 0 });
      const distance = track.scrollWidth / 2; // width of one full set (we render duplicates)
      const SPEED_PX_PER_SEC = 60;
      const duration = distance / SPEED_PX_PER_SEC;
      gsap.to(track, {
        x: -distance,
        duration,
        ease: "none",
        repeat: -1,
        onRepeat: () => gsap.set(track, { x: 0 }),
      });
    };

    restart();
    const onResize = () => restart();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      gsap.killTweensOf(track);
    };
  }, []);

  return (
    <section id="testimonials" className="w-full px-6 md:px-8 py-20 md:py-28 bg-[#406366]">
      <div className="max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
          What our clients are saying
        </h2>

        <div className="relative mt-8 overflow-hidden">
          <div ref={trackRef} className="flex w-max gap-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <Card
                key={idx}
                data-testimonial-card
                className="group min-w-[280px] md:min-w-[360px] bg-white text-black"
              >
                <CardContent className="pt-6">
                  <div className="h-1 w-12 bg-[#00BAB0] rounded-full mb-4" />
                  <p className="text-lg md:text-xl leading-relaxed font-medium">{t.quote}</p>
                  <div className="mt-4 text-sm text-black/70">{t.author}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


