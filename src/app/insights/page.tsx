"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ARTICLES: string[] = [
  "UK Corporate Governance Code: addressing ‘Material Controls’ requirements",
  "Risk Management trends in 2025: Our expectations on key areas of focus",
  "Our view on Enterprise Risk Management (ERM)",
  "In with the old # 2: evolution of supply chain risk and resilience",
  "In with the old: pandemic risk and resilience",
  "The rise and risk of stakeholders",
  "Emerging Risks: Emerging Risk Management",
  "Impact Tolerance: easier said than done",
];

const slugMap: Record<string, string> = {
  "UK Corporate Governance Code: addressing ‘Material Controls’ requirements": "uk-corporate-governance-code-material-controls",
  "Risk Management trends in 2025: Our expectations on key areas of focus": "risk-management-trends-2025",
  "Our view on Enterprise Risk Management (ERM)": "our-view-on-enterprise-risk-management-erm",
  "In with the old # 2: evolution of supply chain risk and resilience": "in-with-the-old-2-evolution-of-supply-chain-risk-and-resilience",
  "In with the old: pandemic risk and resilience": "in-with-the-old-pandemic-risk-and-resilience",
  "The rise and risk of stakeholders": "the-rise-and-risk-of-stakeholders",
  "Emerging Risks: Emerging Risk Management": "emerging-risks-emerging-risk-management",
  "Impact Tolerance: easier said than done": "impact-tolerance-easier-said-than-done",
};

export default function InsightsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const previousCountRef = useRef(6);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-article-card]"));
    gsap.set(cards, { y: 40, autoAlpha: 0, scale: 0.98 });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(cards, {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.08,
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  // Animate newly revealed cards when "Show more" is clicked
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-article-card]"));
    const start = previousCountRef.current;
    const slice = cards.slice(0, visibleCount).slice(start);
    if (slice.length > 0) {
      gsap.fromTo(
        slice,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.06, ease: "power3.out" }
      );
      previousCountRef.current = visibleCount;
    }
  }, [visibleCount]);

  return (
    <main className="min-h-screen w-full">
      {/* Header */}
      <section className="w-full border-b bg-secondary/10">
        <div className="max-w-6xl px-6 md:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Insights</h1>
          <p className="mt-4 max-w-[75ch] text-foreground/80">
            Publications and perspectives from MERC & CO. Explore our thinking across risk, resilience, compliance,
            and governance.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section ref={sectionRef} className="w-full px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.slice(0, visibleCount).map((title) => (
              <Link key={title} href={slugMap[title] ? `/insights/${slugMap[title]}` : "#"} className="group block" aria-label={`Open article: ${title}`}>
                <Card
                  data-article-card
                  className="h-full bg-white transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug group-hover:text-[#00BAB0] transition-colors">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">Read more</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          {visibleCount < ARTICLES.length && (
            <div className="mt-8 flex justify-center">
              <Button
                className="bg-[#00BAB0] hover:bg-[#00BAB0]/90 text-white"
                onClick={() => setVisibleCount((c) => Math.min(ARTICLES.length, c + 6))}
              >
                Show more
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="w-full px-6 md:px-8 py-12 bg-secondary/10">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="text-base font-semibold tracking-tight">MERC & CO</div>
            <p className="mt-2 text-sm text-foreground/70">© {new Date().getFullYear()} MERC & CO LLP. All rights reserved.</p>
          </div>
          <div className="text-sm">
            <ul className="space-y-1">
              <li><a href="/#about" className="hover:underline">About us</a></li>
              <li><a href="/#services" className="hover:underline">Our services</a></li>
              <li><a href="/#people" className="hover:underline">Our people</a></li>
              <li><a href="/#insights" className="hover:underline">Insights</a></li>
              <li><a href="/#contact" className="hover:underline">Contact</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy</a></li>
              <li><a href="/terms" className="hover:underline">Terms</a></li>
            </ul>
          </div>
          <div className="text-sm text-foreground/70 space-y-2">
            <div>MERC & CO LLP is a management consultancy registered in England and Wales.</div>
            <div>Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</div>
          </div>
        </div>
      </footer>
    </main>
  );
}


