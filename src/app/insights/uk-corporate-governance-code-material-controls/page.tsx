"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";

const OTHER_TITLES: string[] = [
  "Risk Management trends in 2025: Our expectations on key areas of focus",
  "Our view on Enterprise Risk Management (ERM)",
  "In with the old # 2: evolution of supply chain risk and resilience",
  "The rise and risk of stakeholders",
  "Emerging Risks: Emerging Risk Management",
  "Impact Tolerance: easier said than done",
];

const slugMap: Record<string, string> = {
  "Risk Management trends in 2025: Our expectations on key areas of focus": "risk-management-trends-2025",
  "Our view on Enterprise Risk Management (ERM)": "our-view-on-enterprise-risk-management-erm",
  "In with the old # 2: evolution of supply chain risk and resilience": "in-with-the-old-2-evolution-of-supply-chain-risk-and-resilience",
  "The rise and risk of stakeholders": "the-rise-and-risk-of-stakeholders",
  "Emerging Risks: Emerging Risk Management": "emerging-risks-emerging-risk-management",
  "Impact Tolerance: easier said than done": "impact-tolerance-easier-said-than-done",
  "UK Corporate Governance Code: addressing ‘Material Controls’ requirements": "uk-corporate-governance-code-material-controls",
};

function hrefFor(title: string): string {
  return slugMap[title] ? `/insights/${slugMap[title]}` : "#";
}

export default function ArticlePage() {
  const articleRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);
  const [shareUrl, setShareUrl] = useState("");
  const title = "UK Corporate Governance Code: addressing ‘Material Controls’ requirements";

  useEffect(() => {
    if (typeof window !== "undefined") setShareUrl(window.location.href);
    if (articleRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(articleRef.current.querySelector("h1"), { y: 24, duration: 0.6 })
        .from(articleRef.current.querySelector("[data-meta]"), { y: 16, autoAlpha: 0, duration: 0.5 }, "<0.05");
    }
    if (contentRef.current) {
      const nodes = Array.from(contentRef.current.querySelectorAll<HTMLElement>("p, h2, ul, li, img"));
      gsap.set(nodes, { y: 24, autoAlpha: 0 });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              gsap.to(el, { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" });
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.2 }
      );
      nodes.forEach((n) => io.observe(n));
      return () => io.disconnect();
    }
    if (relatedRef.current) {
      const cards = relatedRef.current.querySelectorAll("[data-related-card]");
      gsap.set(cards, { y: 24, autoAlpha: 0 });
      gsap.to(cards, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.06, delay: 0.1 });
    }
  }, []);

  return (
    <main className="min-h-screen w-full">
      <section ref={articleRef} className="w-full px-6 md:px-8 py-12 md:py-16 border-b bg-[#346566]">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            UK Corporate Governance Code: addressing ‘Material Controls’ requirements
          </h1>
          <div data-meta className="mt-3 text-sm text-white">2 min read</div>
          <div className="mt-2 flex items-center gap-3 text-sm text-white">
            <Link
              href="/people/matt-elkington"
              className="font-medium text-white transition-colors hover:text-white"
            >
              By Matt Elkington
            </Link>
            <Link
              href="https://www.linkedin.com/in/matt-elkington-37951071/"
              target="_blank"
              rel="noreferrer"
              aria-label="Matt Elkington on LinkedIn"
              className="text-white hover:opacity-80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.024-3.059-1.865-3.059-1.868 0-2.154 1.46-2.154 2.969v5.694h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.841-1.562 3.039 0 3.6 2.002 3.6 4.604v5.591z"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <section ref={contentRef} className="w-full px-6 md:px-8 py-10 md:py-12">
        <Card className="max-w-3xl border">
          <CardContent className="pt-6">
            <article className="space-y-6 text-foreground/90 leading-relaxed">
              <p>
                We have recently held a number of highly insightful conversations with firms operating across multiple sectors on their progress with meeting the new material controls requirements of the updated 2024 UK Corporate Governance Code (the code).
              </p>
              <p>
                As might be expected, we are seeing a range of approaches deployed to address Provision 29 of the code in terms of how a material control is defined, particularly with regards to scope and granularity, as well as the type and frequency of monitoring and assurance that is being (or planned) to be deployed.
              </p>
              <p>
                A common theme nonetheless is clearly to be as pragmatic as possible, which in general is driving a top-down approach to how control materiality is defined in practice, with broader entity level controls and frameworks that map to areas of in-scope risks being prioritised for focus over individual sub-controls; monitoring and assurance is accordingly then being directed at this level. Leverage of SOX insights and data, where available, as well as other existing financial reporting control frameworks, are also typically being used as a foundational input.
              </p>
              <p>
                Outlined below is a summary of MERC & CO’s five step approach to managing the code’s material controls requirements, which we found broadly reflects the approaches being taken that were shared with us.
              </p>
              <img
                src="/96933f_a444d85d31844849bdbb96a2761f3689~mv2.png"
                alt="Five step approach to material controls"
                className="w-full h-auto rounded-md"
              />
              <p>
                There are, however, still a number of questions and scenarios that we feel should be explored by firms, particularly as sophistication in approaches develop, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Are metrics actually needed to evaluate / quantify control materiality or, for simplicity, should all controls that map to risks of significance, such as those that constitute a framework, be captured and considered material?
                </li>
                <li>
                  Should the basis of control effectiveness ratings focus only on measuring their operational performance and compliance criteria, or is actual risk manifestation and near miss events better proof of control failure / lack of effectiveness?
                </li>
                <li>
                  If entity level / framework controls are recognised as a ‘singular’ material control rather than focus being on the underlying control activities, how is effectiveness determined and measured in practice? Should risk materiality drive exceptions to be made to this approach?
                </li>
                <li>
                  Should a control that applies to / affects multiple risks and offers redundancy be recognised as a material control, even if its effects on individual risks is limited and/or those risks are not, for example, principal? Similarly, how should controls that apply to risks with high correlation potential be recognised? What are the trigger thresholds for inclusion as ‘material’?
                </li>
                <li>
                  How should changes in risk exposure levels be reflected in the context of ratings of control effectiveness? For example, if the design and operation of a control is functioning as intended, but the risk changes in such a way to neutralise / overwhelm its effect, is that control then deemed ineffective or is the weakness in the wider ICF? How will this be disclosed?
                </li>
              </ul>
              <p>
                In navigating the evolving landscape of the code, it is clear that firms are striving to balance compliance with practicality. As approaches mature, the questions above may become increasingly pertinent in shaping a robust yet pragmatic framework for material controls. We look forward to further discussions as these control systems progress.
              </p>
            </article>
          </CardContent>
        </Card>

        {/* Share actions */}
        <div className="max-w-3xl mt-6">
          <div className="flex items-center gap-3">
            <span className="text-sm text-foreground/70">Share this article:</span>
            <Button
              variant="ghost"
              aria-label="Share on LinkedIn"
              className="h-9 w-9 p-0 text-[#0A66C2]"
              onClick={() => {
                const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
                window.open(url, "_blank", "noopener,noreferrer");
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.024-3.059-1.865-3.059-1.868 0-2.154 1.46-2.154 2.969v5.694h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.841-1.562 3.039 0 3.6 2.002 3.6 4.604v5.591z"/></svg>
            </Button>
            <Button
              variant="ghost"
              aria-label="Share on X"
              className="h-9 w-9 p-0"
              onClick={() => {
                const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
                window.open(url, "_blank", "noopener,noreferrer");
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M18.244 2h3.308l-7.227 8.263L23 22h-6.406l-5.012-6.545L5.66 22H2.35l7.73-8.84L1 2h6.594l4.52 6.03L18.244 2zm-1.122 18h1.833L7.01 3.938H5.05L17.122 20z"/></svg>
            </Button>
            <Button
              variant="ghost"
              aria-label="Copy link"
              className="h-9 w-9 p-0"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(shareUrl);
                } catch {}
              }}
            >
              <Link2 className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      <section ref={relatedRef} className="w-full px-6 md:px-8 py-10 md:py-12 bg-[#00A89E]">
        <div className="max-w-6xl">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">More insights</h3>
        	<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTHER_TITLES.map((t) => (
              <Link key={t} href={hrefFor(t)} className="group block" aria-label={`Open article: ${t}`}>
                <Card data-related-card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-[#00BAB0] transition-colors">{t}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">Read more</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
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


