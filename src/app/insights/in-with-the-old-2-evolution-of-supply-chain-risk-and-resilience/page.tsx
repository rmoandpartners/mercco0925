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
  "UK Corporate Governance Code: addressing ‘Material Controls’ requirements",
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

function hrefFor(title: string): string {
  return slugMap[title] ? `/insights/${slugMap[title]}` : "#";
}

export default function ArticlePage() {
  const articleRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);
  const [shareUrl, setShareUrl] = useState("");
  const title = "In with the old # 2: evolution of supply chain risk and resilience";

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
            In with the old # 2: evolution of supply chain risk and resilience
          </h1>
          <div data-meta className="mt-3 text-sm text-white">10 min read</div>
          <div className="mt-2 text-sm text-white/90">This article was first published in 2020</div>
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
              <h2 className="font-semibold text-[#00BAB0]">Snapshot:</h2>
              <p>
                The coronavirus pandemic has exposed the fragilities inherent to many organisations’ supply chain strategies, with disruption and volatility being exacerbated by risk appetite positions that have often prioritised cost at the expense of resilience. Evaluation of organisational supply chain risk and resilience (SCRR) in light of the ongoing pandemic experience will likely be a focus for most leadership teams now or in the coming months, requiring consideration of a broad array of trade-offs and management practices. In particular, we believe the following five areas should be in scope for potential development focus:
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Sourcing strategy / supply chain structure</h2>
              <p>
                Enhancing resilience of the supply chain may now require a different approach to sourcing in terms of what is done in-house, onshore and nearshore vs. offshore. Scenario based analysis of trade-off impacts on cost, risk and resilience of changing this balance to reflect evolving customer and other stakeholder needs and sentiments should be performed to inform future sourcing strategy and supplier risk assessment criteria.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Supplier visibility across tiers</h2>
              <p>
                A common challenge to supply chain resilience is only having visibility of first-tier supplier dependencies, resulting in potentially significant threats to resilience being unknown / unmanaged. Building transparency of all key dependencies within critical product / service supply chains, collaborating with your suppliers to share data and harmonise contractual terms, and leveraging third party software as well as technology such as blockchain to support tier mapping and management, will provide a major boost to resilience in terms of optimised supplier footprints, stronger relationships and agile, data-driven risk management.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Scenario analysis and stress testing</h2>
              <p>
                In order to understand whether supply chains are resilient to a range of risk factors and stresses, as well as how changes to supply chain structures can affect risk profile, formal scenario analysis should be performed on a regular basis to inform structural / sourcing decisions and risk mitigation requirements. Evaluation of change factors in scenarios should also go beyond traditional external threats; for example, what effects would a digitalised supplier network have on resilience, what could up-skilling the procurement function with data scientists achieve etc.?
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Supplier categorisation and risk assessment</h2>
              <p>
                Supplier due diligence should consider a material supplier's own critical third-party dependencies and scrutinise their wider resilience and recovery capabilities. Risk assessment should also be extended to evaluate broader risk factors such as geographic concentrations, ease of substitution and cost of mitigation etc. rather than just, for example, financial health and operational performance. Outputs of this extended analysis can then be used to refine selection and mitigation strategy.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Ongoing risk monitoring</h2>
              <p>
                The internal and external data landscape should be leveraged with technology enablement (including developments in e.g. Artificial Intelligence (AI) and machine learning) to provide ongoing monitoring of risk indicators and signals. Monitoring should also go beyond a specific supplier level such as tracking city/country level factors in areas where critical partners are based to understand macro-level and systemic risk exposures that can compromise resilience. Sharing this data with your suppliers can also help foster better relationships and more coherent management of risk.
              </p>

              <p>
                The pandemic has had profound effects on global supply chains, causing significant and prolonged disruption to physical production and shipment of goods due to closure of manufacturing facilities and logistics infrastructure, as well as impacting capacity and quality of supplied business services as a result of office closures and mass remote working.
              </p>
              <p>
                Although lockdown conditions are being eased in many countries, the different stages of local infection rates as well as forecast and emerging second wave outbreaks will continue to challenge supply chain continuity and maintenance of operational capabilities, particularly for organisations with international footprints and dependencies.
              </p>

              <p>
                A broad array of new, changed and correlated risks have emerged due to governmental and corporate responses to the pandemic. Of particular relevance to SCRR include the following:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Supplier performance continuity, financial stability and insolvency</li>
                <li>Supply chain capacity and pricing</li>
                <li>Supply and demand volatility / forecasting</li>
                <li>Regulatory compliance</li>
                <li>Changing stakeholder sentiments and pressures</li>
                <li>Contractual enforcement and liability</li>
                <li>Cyber threat levels</li>
                <li>Sourcing concentrations across supplier tiers</li>
              </ul>

              <p>
                Wider geopolitical and macroeconomic risks, notably ongoing tensions between China and the US / neighbouring territories as well as Brexit, the effects of business and consumer confidence on economic recovery, and potential structural changes to work patterns will further exacerbate supply chain risk. These are in addition to other well recognised risk factors such as the increasing likelihood and severity of extreme weather / Natural Catastrophe events and reputational risk (stemming from e.g. supplier ethical behaviour) in a sensitive, connected world.
              </p>
              <p>
                For many organisations, their approach to SCRR will need to develop to address this evolved risk landscape. As well as enhancements to third party due diligence, risk assessment and ongoing monitoring, fundamental strategic questions need to be considered on the structure of future global supply chains and how internal resources collaborate to ensure the organisation is resilient against extreme shocks.
              </p>
              <p>
                There is a wide array of maturity in the practices adopted by organisations to manage supply chain risk, often influenced by an organisation’s sector, risk profile and size. For example, many large banks have for years maintained dedicated functions / teams focused on this area that support the business with third party selection and onboarding, including comprehensive risk assessment and due diligence, with ongoing risk and performance monitoring leveraging a range of technology enabled data feeds and audits. Across several sectors such as FMCG and Pharma, supply chain control towers have been developed by organisations who want to enhance their chain visibility and management with real-time data in a centralised, technology enabled hub; this empowers agile decision making to realise efficiencies and mitigate risks along the chain, improving performance and resilience.
              </p>
              <p>
                However, even for mature operators, the pandemic is asking questions as to whether existing arrangements are still fit for purpose. Outlined below are five areas we believe could have significant effects on SCRR management, although we note this is an expansive area with many elements that could potentially benefit from revised approaches, including one of the most effective ways to mitigate risk – having good relationships with suppliers in the first place. We also note that, aside from select digital innovations and the associated upskilling of procurement and supply chain professionals, these are not really new ideas – I have personally been working with clients across these areas for nearly 20 years – but this may finally be the catalyst to crystallise their wider adoption and support by organisational leadership teams.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Sourcing strategy risk appetite</h2>
              <p>
                The impact of Covid-19, in addition to geopolitical tensions and growing nationalistic fervour in several countries, contribute an increasingly important dimension to the future design of organisations’ sourcing strategies and supply chain structures. For decades, China has served as the factory of the world but anti-China sentiment by consumers and governments is growing in a number of Western markets, with pressures to ‘buy domestic’ increasing. For many years there has also been a move away to new low-cost destinations, particularly in South East Asia, and some movement of supply back on-shore against this paradigm, albeit limited so far. But the maturity of Chinese manufacturing and logistics hubs and size of its own domestic market has and is likely to continue to temper this shift.
              </p>
              <p>
                For many organisations, the pandemic has exposed supply chain fragilities due to such dependencies that have arisen over decades in the pursuit of cost-focused outsourcing and lean operational activities. Efficiency has historically trumped a focus on resiliency, but the benefits of resiliency, or rather the cost of not being resilient, have been painfully brought home for many organisations by this virus. A fresh look at sourcing strategy (and the objectives / KPIs of the procurement function) is therefore needed and this will likely require Board engagement and sign-off considering potential brand and political sensitives, as well as the fact supply chains underpin strategic execution.
              </p>
              <p>
                A key question to frame evaluation is whether a new balance of insource / onshore / nearshore / offshore sourcing is required in the supplier portfolio, considering evolving stakeholder sentiment and expectations, cost implications and resiliency benefits, and over what timeframe any changes should be implemented with respect to organisational strategy. Also of note is how these trade-offs will be positioned and communicated to customers, investors, and regulators etc., with a backdrop of competing geopolitical pressures.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Supplier visibility across tiers</h2>
              <p>
                Robust and comprehensive management of risk requires understanding of supplier relationships and dependencies throughout the tiers of the chain to identify potential weak links. Without this, unknown and unmanaged vulnerabilities and risk concentrations could jeopardise business service continuity and risk mitigation e.g. a material supplier that has its own critical single source dependency, dual source arrangements that have a common upstream supplier, suppliers located in the same geographical region, subcontracting dependencies that underpin a supplier’s service provision etc.
              </p>
              <p>
                Building this visibility will significantly improve supply chain risk management and also support agility in responding to crises, but it can require significant efforts to map (building a fully-functioning control tower for example can take years) and some suppliers may obviously be reluctant to disclose commercially sensitive information; agreeing common contractual terms and KPIs throughout an extended supply chain is a challenge that the UK Financial Services (FS) sector is currently grappling with in response to regulator focus on operational resilience.
              </p>
              <p>
                Although not a panacea, a number of third-party software solutions exist to support development of digital supplier networks; these tools can also enable dynamic data insights to empower agile decision making and ongoing risk monitoring and response. The growth of blockchain will further provide options for digitally enabled visibility and transaction security. For many procurement and supply chain teams, the ability to exploit and leverage digital innovations will likely require additional training and qualifications as well as recruitment of new talent with expertise in areas such as data science.
              </p>
              <p>
                Technology aside, for most organisations, having productive and partnerial relationships with their suppliers centred on mutually beneficial outcomes will be the key determinant in building transparency and aligned resilience capabilities.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Scenario analysis and stress testing</h2>
              <p>
                This should be a routine activity performed (and involving various stakeholders from across the organisation) to challenge supply chain resiliency, from both an overarching perspective and in specific critical chains, across a range of timelines and severities.
              </p>
              <p>As demonstrated by this pandemic, what effects could an extreme stress scenario such as multi-month disruption to business as usual activities have on supply and demand:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Which suppliers are anticipated to be able to cope or would struggle and why?</li>
                <li>What are the risks and pinch points such as supplier concentrations in a single location?</li>
                <li>What are the workarounds and compromises such as replacement with internal provision if a stressed exit is necessary?</li>
                <li>What are the cost and contractual implications if, for example, demand drops?</li>
                <li>Would risk appetite and/or (in FS) impact tolerances for important business services be breached?</li>
              </ul>
              <p>
                Analysing the effects of such scenarios will support understanding of their potential costs and how investment in resilience could ameliorate downside experience, a likely justification needed for any proposed changes in supply chain dependencies and efficiencies to the Board and investors (if significant). Such insights will also inform risk mitigation strategies and structural decisions on sourcing to ensure risk exposure levels and the supplier portfolio / level of diversification align with risk appetite provisions.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Supplier categorisation and risk assessment</h2>
              <p>
                As part of supplier due diligence, typically a range of risk areas will be considered covering financial, operational, ESG and compliance factors, with the depth of analysis influenced by the criticality of the supplier and business sensitivity to performance issues.
              </p>
              <p>
                Factors that determine supplier criticality should be tested to ensure they remain relevant and proportionate in light of potential changes to the importance of product and service portfolios, as well any whose failure to perform could affect the safety and soundness of the firm or breach organisational risk appetite. Categorisation should also influence potential risk mitigation strategies – which suppliers warrant an engaged, collaborative approach to build the relationship, which suppliers could potentially have financial support provided to them to help streamline working capital or in the event of difficulties etc.
              </p>
              <p>
                Risk assessment needs to go beyond asking a supplier if it has a BCM policy. For critical suppliers, how mature are their internal risk management and resiliency capabilities, including for their own supply chain, and how will this be evaluated; do they have, for example, the ability to maintain long-term remote service provision with the agility and capacity to switch their operational activities to alternate facilities or locations (would this impact data privacy?), and has this been tested? How quickly could the supplier ramp-up service following an outage, and would the firm receive priority if capacity is limited?
              </p>
              <p>
                When assessing the risk of a third party, a broader risk perspective beyond the supplier itself should be deployed, for example:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Does the diligence approach capture and evaluate potential risk concentrations?</li>
                <li>What is the ability to substitute the supplier (vendor lock-in, non-correlated options)?</li>
                <li>Is there an internal risk the supplier is mitigating and is this a favourable trade-off?</li>
                <li>How are these aspects scored or reflected? Do thresholds need readjustment? What alert signals would trigger reassessment?</li>
              </ul>

              <h2 className="font-semibold text-[#00BAB0]">Ongoing risk monitoring</h2>
              <p>
                Extended global supply chains that potentially consist of thousands of actors across multiple tiers face a vast and ever-changing risk landscape. Detailed risk assessments cannot typically be provided at a sufficient frequency to provide up-to-date risk intelligence and are resource intensive, although for a select number of critical suppliers it may be justified to perform such assessments on a regular basis, perhaps as part of supplier performance management activities.
              </p>
              <p>
                Leverage of the data environment and technological automation of monitoring provides an option to track changes in supply chain risk more dynamically and cost-effectively. By defining Key Risk Indicators (KRIs) powered by internal and external data sources, early warning alerts of significant changes in supplier risks in focus can be provided. When combined with automated search and reporting technology, including AI-based algorithms and machine learning to improve surveillance and alert accuracy, a large number of third parties can be monitored for a wide array of risks with relatively low resource intensity.
              </p>
              <p>
                As well as monitoring of specific suppliers, wider resilience factors pertaining to sectoral or geographic areas can also be covered; for example, if there is a concentration of critical suppliers in a city or region, resilience indicators could include infrastructure capacity for broadband and transport networks, natural catastrophe exposure, the cyber risk environment etc. Tracking macro-level risk indicators in addition to supplier level metrics will provide a more comprehensive understanding of threats to supply chain and operational resilience.
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


