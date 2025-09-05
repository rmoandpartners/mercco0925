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
  "In with the old: pandemic risk and resilience",
  "UK Corporate Governance Code: addressing ‘Material Controls’ requirements",
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

function hrefFor(title: string): string {
  return slugMap[title] ? `/insights/${slugMap[title]}` : "#";
}

export default function ArticlePage() {
  const articleRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);
  const [shareUrl, setShareUrl] = useState("");
  const title = "The rise and risk of stakeholders";

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
            The rise and risk of stakeholders
          </h1>
          <div data-meta className="mt-3 text-sm text-white">5 min read</div>
          <div className="mt-2 text-sm text-white/90">This article was first published in 2020</div>
          <div className="mt-2 flex items-center gap-3 text-sm text-white">
            <Link
              href="/people/ross-olding"
              className="font-medium text-white transition-colors hover:text-white"
            >
              By Ross Olding
            </Link>
            <Link
              href="https://www.linkedin.com/in/ross-olding/"
              target="_blank"
              rel="noreferrer"
              aria-label="Ross Olding on LinkedIn"
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
                The pursuit of shareholder returns as the ultimate raison d'etre for a company to exist is increasingly being challenged. The recent agreement by the US Business Roundtable to drop shareholder primacy, and in the UK growing corporate governance emphasis on embracing section 172 of the 2006 Companies Act, are requiring businesses to explicitly focus on and consider the full spectrum of stakeholders that they interact with, serve and depend upon, of which shareholders are just one group.
              </p>
              <p>
                For some progressive organisations, this may not be as drastic a change as it first appears when you consider the backdrop of external pressures and drivers already facing companies throughout the world to be better and more sustainable corporate citizens; for others, it may require profound changes to their strategies and business models. These changes also have the potential to influence many companies' Enterprise Risk Management (ERM) approach, principal / critical risk profile and external reporting disclosures. Outlined below are a few thoughts on how this could manifest and what it might mean in practice for ERM and annual reporting going forward.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Re-basing the way risks are identified</h2>
              <p>
                A common definition of a risk is an 'uncertain future event that can affect an organisation’s ability to achieve its objectives'. Risk identification activities typically focus therefore on the organisation's strategy and cascaded business objectives, with contextual factors such as operational footprint and relevant regulatory regimes further informing identification. But does the current strategy and objectives reflect the organisation’s broader stakeholder groups, including its employees, customers, suppliers, communities and the environment, or is it skewed towards targets that prioritise shareholder returns?
              </p>
              <p>
                The reason this is important is that the nature of risks organisations identify often (logically) mirrors their objectives, so stakeholder considerations that are absent may result in associated risks not being captured or being deprioritised. If an organisation's stakeholder family is reflected appropriately in objectives then this should aid comprehensive risk discovery; if not, risk management practitioners should ensure that these are explicitly considered as a contextual factor in identification activities. In addition, the time horizon of risk manifestation should also be borne in mind; emerging risks, for example, can arise from changes in stakeholder experience and expectations on social and environmental trends, developments and responses, so these also need to be factored into risk identification.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Stakeholder risk assessment</h2>
              <p>
                Risk prioritisation is typically based on evaluation of a risk’s probability and impact using defined risk assessment criteria. Depending on the impact criteria defined, this may further challenge the ability to assess stakeholder-relevant risks, particularly if the scale is solely based on financial loss. When setting such scales, consideration should now be given as to whether they support estimations of impacts on all relevant stakeholder groups and how. For example, many corporate impact scales we see will, in addition to financial loss, include criteria for assessing how a risk could affect the health and safety of employees and the public, corporate reputation, and the environment, so a number of obvious stakeholders are already covered. However, these are not necessarily nuanced to reflect wider stakeholder considerations such as employee mental well-being and community satisfaction and happiness, or may miss stakeholder groups entirely, such as treating suppliers fairly.
              </p>
              <p>
                A key lens to apply when scrutinising whether risk assessment scales are appropriate should therefore not only be to consider the range of stakeholders that are relevant but also the nature of how the organisation interacts with and affects them. This may require some creative thinking; metricating and baselining communities' happiness for example is no easy task, and what makes one community ‘happy’ may not be reciprocated by others. Of note is that different functions within the organisation may already have criteria and thresholds developed that can be leveraged; for example, the ongoing development of operational resilience within financial services requires consideration of customer impact tolerances and acceptability thresholds to be defined. 
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Risk appetite</h2>
              <p>
                What are the risk trade-offs the organisation is prepared to accept when prioritising stakeholder groups, risk taking positions and responses? Is an employee more important than a customer, is a wealthy community around a corporate HQ a lower priority than those in impoverished areas; do strategic suppliers get better terms than transactional ones? Should all stakeholders be treated equally, or are some more equal than others, especially when financial pressures bite? Note that s.172 statements should include a description of how the needs of and impacts on different stakeholder groups have been translated into the company’s decisions and strategies during the year.
              </p>
              <p>
                When done robustly, the setting of risk appetite should already consider a broad array of ‘influencers’ of the organisation's risk taking positions including the behaviours and perceptions of customers, competitors, suppliers and regulators etc. as well as shareholders. This helps to define the 'red lines’ and limits to the risk taking envelope of the organisation and inform whether trade-offs that prioritise or deprioritise the interests of different stakeholder groups, and under what circumstances, are acceptable. Although high-level appetite statements are somewhat old fashioned, there may be value in articulating a stakeholder risk appetite statement that communicates and reinforces any preferences or primacy (or lack of). Just be cognisant of how such an articulation could be perceived externally if shared / leaked.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">External disclosure</h2>
              <p>
                Subject to decisions made on the evolving ERM components outlined above, the risk profile of the organisation may change, including its principal risk list and what is therefore disclosed in the annual report. For example, if new risk assessment criteria are defined for wider stakeholder considerations that subsequently lead to certain of these new types of risks scoring as more severe than traditional financial loss / shareholder return type risks, should the latter not be included in external disclosures, either replacing relatively less severe traditional risks, or added to an enlarged principal risk disclosure?
              </p>
              <p>
                Readers generally prefer reporting to be concise and specific, but could dropping financial risks that may be less severe than stakeholder focused ones in the interests of brevity backfire as non-disclosure for some readers? Is there an option to integrate or group some risks, and perhaps differentiate the sensitivity of each stakeholder group to each risk (while recognising that risk consolidation may reduce the quality of the disclosure due to loss of specificity in some cases). There may also be opportunities to cross-refer from the s.172 disclosure, in whatever form that takes in the strategic report, to the principal risk section, showing any new threats or uncertainties identified by the organisation in meeting the needs of a broader range of stakeholders and / or in light of changing environmental or social norms and expectations.
              </p>
              <p>
                There is arguably no right or wrong answer here as this will depend on an organisation's specific risk profile, volume and reporting style. Obviously the way an organisation considers, engages with and treats its stakeholders also has significant upside benefits too, so this could further act to reinforce values it may wish to highlight as a competitive differentiator and exemplar of good corporate citizenship. The growing demand of asset managers for more information on an organisation's approach to identifying and managing Environmental, Social and Governance (ESG) risk factors is a case in point; being proactive and transparent by providing this insight as part of the principal risk disclosure, or elsewhere in the strategic report, should help to enhance credibility in the capital markets and improve investor sentiment.
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


