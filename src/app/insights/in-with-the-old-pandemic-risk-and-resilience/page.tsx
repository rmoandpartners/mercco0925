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
  "Risk Management trends in 2025: Our expectations on key areas of focus": "risk-management-trends-2025",
  "Our view on Enterprise Risk Management (ERM)": "our-view-on-enterprise-risk-management-erm",
  "In with the old # 2: evolution of supply chain risk and resilience": "in-with-the-old-2-evolution-of-supply-chain-risk-and-resilience",
  "The rise and risk of stakeholders": "the-rise-and-risk-of-stakeholders",
  "Emerging Risks: Emerging Risk Management": "emerging-risks-emerging-risk-management",
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
  const title = "In with the old: pandemic risk and resilience";

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
            In with the old: pandemic risk and resilience
          </h1>
          <div data-meta className="mt-3 text-sm text-white">13 min read</div>
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
                As a new virus, there remain many scientific and medical uncertainties associated with Covid-19 which will continue to challenge organisations’ ability to plan and recover with high degrees of confidence.
              </p>
              <p>
                Now that many countries are beginning to ease lockdown provisions, organisational pandemic risk models should evolve their focus beyond survival to sustained operation under constrained conditions, and assessment of longer-term strategic value drivers and recovery in likely structurally changed environments.
              </p>
              <p>
                Closer integration of resilience concepts and practices with Enterprise Risk Management (ERM) is anticipated to be a developmental focus during and post-Covid. This may include more routine scenario and risk correlation analysis with changes in risk reporting to better understand rare, complex and high impact risks and vulnerabilities, strengthened / formalised collaboration between risk and resilience practioners across the lines of defence, and risk-based determination of organisational resiliency positions.
              </p>
              <p>
                Ongoing developmental trends in ERM, such as digitalisation and practical articulation of risk appetite, should benefit from renewed focus and investment in the discipline as a result of the pandemic shock.
              </p>

              <p>
                Pandemics are a known risk, although notable by their absence from many organisations’ risk registers. Putting aside the taxonomy of coloured animals, we know that full-blown pandemics are thankfully rare but, as the world is experiencing, can have immense consequences on our way of life.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Scientific and medical uncertainties</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>how many people have been infected and whether immunity to reinfection is robust and for how long this lasts;</li>
                <li>if there are any genetic, as well as environmental, determinants of susceptibility and severity of infection;</li>
                <li>how might the virus mutate;</li>
                <li>will there be unexpected clinical consequences of infection and national responses;</li>
                <li>if effective vaccines and therapeutic drugs can be developed, how quickly will they be available en masse;</li>
                <li>whether contact tracing and other national mitigation measures will be effective; and</li>
                <li>how subsequent waves of infection will manifest.</li>
              </ul>

              <p>
                These uncertainties present extremely difficult risk appetite decisions for governments balancing containment and control measures to protect life vs. relaxing lockdown provisions and restarting the economy to avoid the cure potentially causing more suffering than the disease.
              </p>

              <p>
                For many businesses, survival and damage limitation has, unsurprisingly, been the immediate focus of leadership teams, line and functional management: ensuring staff safety and wellbeing, cash preservation and financial covenant protection, proactive engagement with clients and suppliers, enabling remote working at scale, and maintenance of skeletal operations and so on.
              </p>
              <p>
                Those organisations with robust Business Continuity Management (BCM) and resiliency capabilities, especially those that have previously analysed pandemic risk scenarios, will hopefully have reaped the benefits of this investment by having a solid understanding of who and what is critical with pre-defined procedures to protect, maintain, shut-down and recover activities accordingly, easing some of the pressure on management. However, the severity of this pandemic and associated governmental responses, coupled with its myriad of interconnected risks, is still likely to have significantly challenged those organisations that were relatively well prepared, never mind those that have not adequately invested in their risk and resilience systems.
              </p>
              <p>
                We are obviously still in the early stages of this pandemic, although many countries now appear to be past the peaks of the first waves. Governments are now debating how to restart their economies, so the joys of professional hindsight to critique with certainty any ‘failures’ in the disciplines of risk management and resilience may have to wait a while. That being said, it is to be expected that questions will be asked as to whether these systems and capabilities are optimally structured and resourced so that they adequately prepare, protect, and enable organisations to recover from extreme and complex risk events, in addition to the more familiar and mundane risks that often consume leadership focus.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Key questions for risk and resilience</h2>
              <p>
                So what should risk and resilience functions currently be doing to help their organisations manage and recover from this crisis, and how might they evolve during and in a post-Covid world?
              </p>
              <p>
                Is Enterprise Risk Management (ERM) irrelevant for managing risk scenarios such as a pandemic, as in practice it is too high level and focused on showing blobs of well-known risks on a heatmap every six months? How is risk appetite useful if it has been developed as a series of vague ‘red line’ sentences for discrete risks and is independent of upside and risk correlation? Does parroting the need for more robust and predictive data to better anticipate and manage risks fall on deaf ears as it isn’t backed up with tangible outputs?
              </p>
              <p>
                What actually is resilience, be that enterprise, organisational or operational? Is it really just ‘sexed-up’ BCM? Is it risk agnostic, being an innate ability to cope with, adapt to and recover from any type of threat or disruptive event? Is it a subset of ERM, constituting the controls and activities to mitigate disruptive risks? Is ERM a subset of resilience, and should therefore report under a Chief Resilience Officer?
              </p>
              <p>
                The answers to these deliberately provocative questions are already pretty clear for a number of organisations and practioners, although we still do encounter some fairly contentious opinions on these challenges, definitions and hierarchy, with personal views often depending on where a practioner’s background and loyalties lie. Of course, there is no right or wrong answer either, as structure, approach and maturity of second line functions and disciplines (as well as first line practices and third line assurance) will be specific to the resources of an organisation, its risk profile and the outcomes it is trying to achieve.
              </p>
              <p>
                What is fair to say though is that there are many precedents, developments and initiatives across the disciplines of risk and resilience (including ERM, BCM, Insurance, Supply Chain Risk Management (SCRM), Environment, Health and Safety (EHS) etc.) that are already established and available for organisations to consider and potentially apply to support their management teams through this crisis and with recovery, as well as guiding the longer term structural evolution of these disciplines and enhancing the value they provide.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Building a pandemic risk model</h2>
              <p>
                The pandemic has created a range of new risks and obviously affected the severity of many others, with multiple correlations evident (risks that have relationships) e.g. increased cyber risk due to remote working, heightened fraud activity due to strained control environments and opportunistic criminals etc. A sample of common areas of risk we are seeing clients consider includes:
              </p>
              <img src="/96933f_937bfc1ede7b48af945ba331646e78a7~mv2.webp" alt="Common areas of pandemic risk" className="w-full h-auto rounded-md" />
              <p>
                Most organisations will have convened crisis teams to pool subject matter expertise across the wide range of business and risk areas the pandemic is affecting, supplemented with feeds of a suite of data sources and forecasts to provide insights on status of the pandemic by country and rapid response, planning capabilities and capacity. No doubt, many organisations should also be rightly proud of the way their people have come together to successfully work under novel and traumatic circumstances.
              </p>
              <p>
                ERM and BCM teams, among many others, will likely be critical participants engaged in crisis response, but has the existing ERM approach and outputs actually helped the organisation in this context? Traditional enterprise risk assessment is focused on uncertain events that can affect core strategic objectives, typically being performed once or twice a year in many organisations and producing a reporting shortlist of a small number of ‘top’ risks. In the current environment, this is unlikely to provide management and leadership teams with the depth of actionable risk insights they need, nor obviously at the right frequency. Scenario work by BCM teams may provide a more fertile source of intelligence, depending on stress severity assumed and how comprehensive the risk and sensitivity analysis performed was, although the scale, length and complexity of this pandemic has probably taken even the most conservative planners by surprise.
              </p>
              <p>
                Many organisations will have already performed some form of pandemic risk assessment / model development, as well as undertaking and feeding in financial modelling, workforce and supply chain reviews etc. to provide insights on how best to survive the initial stages of the crisis.
              </p>
              <p>
                As countries across the world now slowly start to relax lockdown restrictions, pandemic risk models should be evolved so that they also reflect (if they do not already) key value drivers, assumptions and dependencies inherent to the business model and strategy. This will facilitate identification and evaluation of new and changed risks of relevance and the mapping of each driver’s associated risk sensitivities over current and future phases of the pandemic, as well as how potential governmental and third party network responses across key markets may affect them. This will enable stress testing and risk forecasting of the business model / strategy under different scenario and stress conditions, both singularly and in combination e.g.:
              </p>
              <img src="/96933f_af1e7966c935499ba4d7f4e931f5e23e~mv2.webp" alt="Scenario stress and combinations" className="w-full h-auto rounded-md" />
              <p>
                As outlined in our blog on emerging risk management, developing such a model will typically require input and ongoing support from a broad range of functional areas throughout the business such as Strategy, Finance, Marketing, HR, Legal, Procurement, as well as second line risk and resilience focused disciplines such as ERM, BCM, Insurance, Compliance etc. and Internal Audit.
              </p>
              <p>
                Once relevant risks and exposure levels under different scenarios have been characterised, risk correlation analysis needs to be performed as looking at risks in isolation may provide an inaccurate picture of reality and compromise prioritisation and mitigation responses. Ask: which risks can interact, influence and occur together and what could be the aggregate impacts? Interrogate what is the nature and strength of these relationships so a quantified assessment of correlation effects can be derived.
              </p>
              <p>
                Note also that new or revised risk assessment criteria and reporting may need to be defined to facilitate risk evaluation and comparison. Ongoing reviews by the convened expert group of risk status and subsequent leadership reporting will likely be needed.
              </p>
              <p>
                Risk appetite should also be a core consideration by leadership in determining strategic and risk responses – short-term decisions could have longer-term trade-offs on brand perception and customer loyalty. Depressed asset prices and weakened competitors may present strong opportunities for those prepared to take on more risk.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Second line functional integration and collaboration</h2>
              <p>
                For many years there have been calls to remove siloed ways of working between second line risk and resilience functions and practice areas (and some first line activities e.g. SCRM), but many organisations have yet to achieve this. It clearly makes sense to pool resources and share expertise and data where this will provide a beneficial outcome to the organisation’s protection and efficiency, and ability and capacity to take risks to exploit opportunities.
              </p>
              <p>
                This need to work together is unlikely to dissipate with numerous draws on collective expertise expected. Although investors may likely be more open to accepting reduced financial returns due to investments made by organisations in their resilience and the associated efficiency trade-offs, defining this balance will require close collaboration between relevant functions that are advising leadership teams to help articulate their ‘resilience’ risk appetite.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Operational Resilience</h2>
              <p>
                Operational Resilience focuses on resilience as an outcome, traversing organisational siloes. It is characterised by a collaborative and coordinated effort of all actors within an organisation that can influence and affect the continued operational provision of critical services to customers. Although focused on operational disruption, many of its principles are relevant to a wider consideration of risk and resilience.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">ERM framework structure</h2>
              <p>
                Rare, highly connected and complex risks such as this pandemic are arguably beyond the current practical design remit of many organisations’ ERM systems which tend to be biased towards identifying and reporting on risks that have higher probability, simplicity and familiarity. Does this therefore mean that ERM is not fit for purpose?
              </p>
              <p>
                Risk reporting should be supplemented with outputs from additional analyses: scenario analysis and stress testing, consequence-based approaches, risk correlation analysis, bow tie analysis, quantitative modelling etc. The outputs will enable predictive risk indicators and alert signals to be determined and mapped to data sources to facilitate ongoing monitoring of causal drivers and precursors of stress conditions.
              </p>
              <p>
                Organisational investment in risk and resilience capabilities is expected to increase due to the experience with this pandemic. As well as potentially changing the way ERM operates, this should also provide a boost to developmental initiatives that have been going on for some time such as digitally enabled risk management, structural integration of risk management with business as usual activities and strategy, and articulation of risk appetite.
              </p>
              <p>
                The challenge to successfully manage and recover from this pandemic is enormous. We hope that this article provides some useful food for thought to help organisations manage through this difficult period, but we also recognise that the disciplines of risk and resiliency management are not a panacea.
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


