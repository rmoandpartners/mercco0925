"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  "UK Corporate Governance Code: addressing ‘Material Controls’ requirements",
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

function hrefFor(title: string): string {
  return slugMap[title] ? `/insights/${slugMap[title]}` : "#";
}

export default function ArticlePage() {
  const articleRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);
  const [shareUrl, setShareUrl] = useState("");
  const title = "Impact Tolerance: easier said than done";

  useEffect(() => {
    if (typeof window !== "undefined") setShareUrl(window.location.href);
    if (articleRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(articleRef.current.querySelector("h1"), { y: 24, duration: 0.6 })
        .from(articleRef.current.querySelector("[data-meta]"), { y: 16, autoAlpha: 0, duration: 0.5 }, "<0.05");
    }
    if (contentRef.current) {
      const nodes = Array.from(contentRef.current.querySelectorAll<HTMLElement>("p, h2, ul, li"));
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
            Impact Tolerance: easier said than done
          </h1>
          <div data-meta className="mt-3 text-sm text-white">5 min read</div>
          <div className="mt-2 text-sm text-white/90">This article was first published in 2019</div>
        </div>
      </section>

      <section ref={contentRef} className="w-full px-6 md:px-8 py-10 md:py-12">
        <Card className="max-w-3xl border">
          <CardContent className="pt-6">
            <article className="space-y-6 text-foreground/90 leading-relaxed">
              <p>
                There has been a lot of debate recently about Impact Tolerance. A friend of mine was baffled by the fuss – surely it is simple? The inner consultant instantly answers – Yes. And no. 
              </p>
              <p>
                And of course, it is conceptually simple. Impact Tolerance is like Risk Tolerance in that you are trying to define what an allowable variation in an outcome is, but in this case the outcome is the impact on customers and clients that disruption to your service provision could create, and probability is not a consideration – you assume that disruption happens. The big question is – how much pain are you, or rather your clients and customers, prepared to put up with?
              </p>
              <p>
                The financial regulators in the UK came up with the concept, and published their thoughts in their well-received discussion paper DP01/18 in July 2018. They want financial firms to apply impact tolerance limits for disruption to their critical service lines – and to demonstrate that they are able to stay within these limits. In the backs of their minds they have the highly publicised IT problems that RBS suffered in 2012 and TSB suffered in 2018 (amongst others).
              </p>
              <p>
                But there are plenty of reasons why people have difficulty in making sense of this. First of all – what is a Service Line? It is not, contrary to what some IT people tell us, a cluster of systems, nor is it a product line like ‘Current Accounts’, nor a channel, like ‘Mobile Banking’, nor an internal process like ‘Payroll’. A service line is something that delivers an outcome for a customer – in other words it is something the customer recognises as a need being serviced – an “I want…” like “I want to withdraw cash", or “I want to complete the purchase of my house”, or “I want to make a payment”. Product groupings and channels are simply different views of these service lines. It is surprising how many businesses get bogged down at this first hurdle. The key is to focus on customer need, and not to align service lines to IT or functional structures.
              </p>
              <p>
                The next question is what makes a service line critical? The regulators tell us that we must consider the impact of disruption on our customers, not just markets (which had been the main focus of the PRA and the FSA before that), nor the firms’ profits. Mostly, potential impact on customers is measured by the length of disruption, but the FCA has become increasingly proactive in getting firms to think about the harm caused to customers, especially vulnerable customers. Meanwhile, firms themselves have long since realised that the financial bottom line isn’t necessarily their real bottom-line – reputation is. A firm can often survive crippling losses, but not the loss of reputation. In assessing whether a service is critical we need an impact matrix that is consistent with (or is) the firm’s risk impact matrix. That matrix needs to have categories of impact that cover disruption to customers and markets, harm to individuals (which can be further broken down and measured by more granular criteria such as stress, inconvenience, personal financial loss, inability to access critical resources or support etc.), as well as damage to the company’s reputation and finances.
              </p>
              <p>
                We need to identify and prioritise service lines and then, once prioritised, map the key process steps and critical underlying dependencies. Why? Because the purpose of the exercise is to make sure that the service line is resilient, and that means making sure that the assets on which the service depends are resilient. The point of prioritisation is to reduce the work you have to do and focus on what really matters. This is something people need to remember when they are undertaking this work because it is all too easy to get lost in inflexible and unnecessary analysis.
              </p>
              <p>
                Coming back to Impact Tolerance…this should be set at a Service Line level. It is serious stuff. A breach of Impact Tolerance should be akin to a breach of Risk Appetite, reported at Board level and visible to the regulator. Lower level warning triggers, leveraging risk (and impact precursor) indicators will be important management metrics to help avoid potential breaches.
              </p>
              <p>
                Impact Tolerance measures need to be set for those impact categories that made the service critical. Up to a point this is not too much of a problem – most firms these days monitor negative media and complaints, for example, and it would be a poor show if a firm could not make a good estimate of the losses it suffers as a result of a disruption. 
              </p>
              <p>
                It is also relatively straight-forward to measure the duration of a disruption (although the downtime of systems is not necessarily the same thing). The Bank of England’s examples of impact tolerance and their informal discussions encourage this, saying that ‘Time’ is the critical factor. From their point of view, it is. They are concerned with the disruption to markets, where the longer it goes on the worse it gets. Because of this and because suitable metrics usually already exist, many firms plan to do just this. 
              </p>
              <p>
                However, there is a problem. The duration of a disruption is only a proxy for inconvenience, harm and irritation caused to customers. In some cases, it is not a matter of how long a service is down but that you don’t want the disruption at all. There’s a big difference between a cash point being down for a day and a house purchase failing to complete in time. Time is a poor proxy for real harm and distress, especially to vulnerable customers, which is more the focus of the FCA.
              </p>
              <p>
                Ideally, we would directly measure distress and harm, but this is not at all easy. That doesn’t mean we shouldn’t try, and at least work towards that goal. We can infer harm, but first we need to understand who is using which services over what channel, and to make some assumptions about the demographics of users, particularly potentially vulnerable ones – for instance, taking into account the financial vulnerability of customers of pay-day loans, or the preference of the elderly for branch support. This may require some creative thinking about how the impact is defined – for example, how will you measure stress felt by a customer – can a proxy be developed using a combination of outage time and number of customers affected, customer profile, and type of customer need that could be impinged? Leveraging the approach and thinking behind enterprise risk assessment criteria may be a source of insight here.
              </p>
              <p>
                A final challenge is where to set the thresholds. We need to understand what normal levels of service look like, and what happens when there are disruptions. By definition, the levels at which impact tolerance is breached are rarely reached; this is the final threshold that must not be crossed, but it is part of a hierarchy of metrics and indicators baselined at levels that equate to an acceptable target level of performance and/or impacts. Some careful thought is needed to get this right and aligned to Risk Appetite. The pay-off is better early warning surveillance and reporting capability focused on customer impact, rather than reporting after the proverbial has hit the fan (which media and complaints monitoring can be too late to help with).
              </p>
              <p>
                To be honest – I don’t find all this as easy as it ought to be. Most businesses and business metrics are organised around functions, and what the regulator has asked us to do is to prioritise and measure in line with the customer’s most pressing needs. All the components seem familiar, but it needs a pivot in our thinking, and we have to be careful not to assume that what we are familiar with is the answer.  But what I am already seeing in the places where I have worked is that there is the potential to generate much better management Information and smarter Resilience by getting this right.
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


