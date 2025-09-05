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
  "The rise and risk of stakeholders",
  "UK Corporate Governance Code: addressing ‘Material Controls’ requirements",
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
  const title = "Emerging Risks: Emerging Risk Management";

  useEffect(() => {
    if (typeof window !== "undefined") setShareUrl(window.location.href);
    if (articleRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(articleRef.current.querySelector("h1"), { y: 24, autoAlpha: 0, duration: 0.6 })
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
            Emerging Risks: Emerging Risk Management
          </h1>
          <div data-meta className="mt-3 text-sm text-white">12 min read</div>
          <div className="mt-2 flex items-center gap-4 text-sm text-white">
            <span className="flex items-center gap-2">
              <Link href="/people/ross-olding" className="font-medium text-white transition-colors hover:text-white">
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
            </span>
            <span className="flex items-center gap-2">
              <Link href="/people/matt-elkington" className="font-medium text-white transition-colors hover:text-white">
                and Matt Elkington
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
            </span>
          </div>
        </div>
      </section>

      <section ref={contentRef} className="w-full px-6 md:px-8 py-10 md:py-12">
        <Card className="max-w-3xl border">
          <CardContent className="pt-6">
            <article className="space-y-6 text-foreground/90 leading-relaxed">
              <p>
                In this blog we discuss several questions we commonly hear from clients on how to practically approach emerging risk management, including how to define, analyse and report outputs. 
              </p>
              <p>
                The concept of 'emerging risks' is not new. It has been considered for years by various industry and public sector bodies and NGOs and they have been explicitly analysed by a number of organisations across a range of sectors, particularly those that need to take a longer-term view of risk due to their investment timelines and asset lifecycles, such as insurance, extractives and the military to name a few. 
              </p>
              <p>
                In recent years it has received more general attention by Boards in light of, for example, the continuing evolution of technology and environmental concerns, and increasingly by regulators such as the UK’s Financial Reporting Council (FRC) which has made updates to the UK Corporate Governance Code to include emerging risk provisions. 
              </p>
              <p>
                In this blog we discuss several questions we commonly hear from clients on how to practically approach emerging risk management, including how to define, analyse and report outputs. As with many aspects of risk management, there are no definitive right or wrong answers, so we invite discussion and perspectives on what we outline.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">What is an 'emerging' risk?</h2>
              <p>
                A quick search on google will throw up many definitions for 'emerging risk' (we have our own too!). Common motifs include that they are generally longer-term in nature, linked to developing global trends of various flavours, and characterised by a high degree of uncertainty which makes it hard to predict how and when they might manifest and the impacts they could have on an organisation(s) with any specificity, although these are likely to be significant. 
              </p>
              <p>
                From an Enterprise Risk Management (ERM) system perspective this typically means that emerging risks are risks that are or can be recognised but there is currently insufficient information or experience with them to know how they will play out (there may be a range of plausible models for this). Therefore in practice they cannot be accurately quantified, nor have specific controls applied other than watching brief activities e.g. ongoing analysis and monitoring (noting that strategic changes could also be a management option). 
              </p>
              <p>
                They often will not fall within typical enterprise risk timelines either which usually align with strategic planning horizons and have a clear link to current strategy, nor are they classified (obviously) as day-to day or ‘burning issue’ type risks (excusing the technical error of calling an issue a risk) as these are shorter-term and more certain in terms of potential outcome and likelihood.
              </p>
              <p>
                Sources of emerging risk often include the usual suspects: technological, societal, geopolitical / economic, environmental and legislative changes and developments, with future trend and scenario analysis techniques frequently deployed to inform emerging risk identification and management strategies if appropriately contextualised to the organisation. 
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Are ‘Black Swans’ emerging risks?</h2>
              <p>
                Not in our view. Nassim Taleb defines black swans as outliers that are beyond normal expectations as nothing in the past can point to their possibility, yet are extremely impactful when they do occur, and which appear to be more predictable in hindsight than they actually were (for example the 2008 financial crisis). We see black swans as closer in concept to 'unknown unknowns', as made famous in Donald Rumsfeld’s speech; events that are not predictable and come as a surprise to the observer. Emerging risks are 'known unknowns', i.e. they are predictable but highly uncertain in terms of timing and impact. 
              </p>
              <p>
                Black swans are however relative to the observer’s knowledge; with full prior knowledge, there are arguably no black swans. For example, the events of 9/11 was a black swan to the US population although it was not for the terrorists. Similarly, as some of the excellent books and film post the financial crisis have highlighted, a number of individuals got very rich by taking positions in expectation of their own predicted outcomes. 
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Why should I invest time and resources in emerging risk management?</h2>
              <p>
                Emerging risks can threaten the legitimacy of business models, as well as the ways of working of entire industrial sectors. 
              </p>
              <p>
                For example, 3D printing is redefining how and where products are made, and to what specification; with global uptake, such a distributed, customisable production process may drive changes in customer demand and expectations, making existing machinery, supply chains and networks which have stood for decades obsolete. 
              </p>
              <p>
                Developments in gene therapy and a trend towards wearable technology will hopefully dramatically improve the health of millions of people. What will this do for demand for pharmaceutical drugs? 
              </p>
              <p>
                More far-fetched perhaps, but what would happen to the price of diamonds if a meteorite was successfully mined and the extra-terrestrial diamond brought back to earth (see Elon Musk's and Jeff Bezos' SpaceX and Blue Origin respectively). 
              </p>
              <p>
                Opportunities emanating from emerging risks can also be significant. In the above example, developing an algorithm and patenting it for 3D printing designs may enable a single organisation to dominate an industry. Pharmaceutical companies may seek to divert R&D spend towards novel therapies which can help improve outcomes for more targeted groups of patients in a more sustainable manner than using traditional drugs.
              </p>
              <p>
                First mover advantage and an agile mindset can be vital. Ignoring or deprioritising emerging risks could waste potential opportunities and doom an organisation never to catch up when they start to bite. It’s easy to evangelise though if you’re not a CEO with an expected tenure of only a few years and a vast number of challenges and investment decisions needed to be made now, never mind in five-, ten- or twenty-years’ time. 
              </p>
              <p>
                In our experience, CEO engagement can vary widely on this topic and when lacking requires Board focus to be taken seriously (the governance code changes should also provide added impetus to UK listed firms in having a robust approach to emerging risk management, reporting and disclosure). Note also that a 'wait and see' strategy may be a valid response to an emerging risk; allowing a development, trend or pattern to mature may be the right option before making a more purposeful intervention, the risk being timing it right.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">How can I identify and manage emerging risks in practice?</h2>
              <p>
                Determining the right approach to adopt will be influenced by a number of factors including availability of existing insights and intelligence within the organisation such as long-term strategic analyses, future focused research and market reports and industry forecasts, the complement of internal experts that can be engaged to support understanding, and organisational familiarity with techniques such as scenario analysis, horizon scanning and war-gaming. 
              </p>
              <p>
                The size of the organisation and its innovation position within an industry value chain and/or cross-sectoral capability, product/service line etc. will also be contextually relevant and influence the approach taken. In addition, who is best placed to lead and facilitate emerging risk work – the risk function is an obvious candidate but collaboration and support from other relevant functions such as strategy and BCM will typically improve the experience and outputs.
              </p>
              <p>
                As might be expected, there are however some facets to a robust approach that we feel traverse organisational specifics (a few summary ideas and suggestions highlighted below). What is often key in our experience for deriving useful outputs and engaging leadership with emerging risk work is to make it as specific and relevant to the organisation as possible. This type of work gets into fascinating debates and can energise budding Nostradamus’s but don’t lose sight of the ‘so what’.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Desktop research and analysis</h2>
              <p>
                Gather any relevant internal and external analyses and reports available that will provide insights on the future direction of the organisation, its products, markets, services and sectors. There is a large body of content publicly available covering areas such as global emerging trends and risks and long-term industry forecasts that can be leveraged. 
              </p>
              <p>
                Identify the key assumptions, dependencies and value drivers behind the organisation's current strategic objectives and business model to understand how future developments, trends and scenarios could affect or make these redundant, and how they may need to change and evolve – are there any obvious options, opportunities and risks, and under what anticipated time horizons? 
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Engage internal (and external) experts</h2>
              <p>
                Identify who within the organisation is likely to have useful insights into future direction, options, opportunities and risks. Are there any external subject matter experts, think tanks and industry organisations worth consulting with that are known for their work and understanding? Is there an opportunity to collaborate with peer organisations in performing analyses? External input is often key to avoid an insular focus on only those areas that the organisation already knows, which will likely result in a compromised emerging risk profile.
              </p>
              <p>
                Develop a structured question set and survey/interview respective experts to capture their thoughts as well as test outputs from the desktop work.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Hold analytical workshops</h2>
              <p>
                Summarise into scenarios the outputs of analysis and surveys/interviews by detailing future sets of conditions, linkages and inferences that could affect the success and viability of the organisation, i.e. from the list of potential factors identified, which ones could be materially relevant to executing the organisation's strategic objectives and maintaining a relevant business model in terms of both threats and opportunities (ignoring probability) and in what timeframe?
              </p>
              <p>
                Convene a workshop(s) with an audience of relevant experts and management representatives to debate, challenge and refine the scenarios presented as well as add to and develop new ones as required. Discuss what is missing, expectations and assumptions over different time horizons and what this could mean in terms of specific risks and opportunities and options for how the organisation could respond, when and how. Also debate risk dynamics – how quickly is it envisaged that an emerging risk could become more certain and near-term to warrant transition to being considered an enterprise risk (or principal if of sufficient severity). 
              </p>
              <p>
                Document outputs from the workshop(s), including identified emerging risks with sufficiently precise descriptions to be specific to the organisation, and share with the attendees to validate interpretation and conclusions. Include proposed next steps to manage identified risks of significance and details of potential metrics and risk indicators that could be tracked to provide early warning of changes in status that might trigger a review or intervention. Hold a follow-on workshop to finalise outputs, as required. 
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Report to leadership</h2>
              <p>
                Present (ideally) or concisely report outputs from the work to the Executive, Audit and/or Risk Committee and Board, making clear key findings, the ‘so what’ of the risks to the organisation, proposed ownership and management strategies for debate, next steps and sign-off. Agree emerging risk management approach going forward e.g. biannual exercises/refresh and reporting, ongoing monitoring and escalation thresholds, external disclosure etc.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">What can I do with an emerging risk profile?</h2>
              <p>
                Having agreed with senior leadership what the organisation's emerging risks are, the next step is to implement a plan to deal with those risks. A useful starting point is to develop indicators for each risk which can be tracked to provide early warning of changes in each risk's dynamics and levels of certainty. 
              </p>
              <p>
                Tolerances and thresholds can be set for the indicators which specify when escalation is necessary and a proactive intervention maybe warranted. Potential responses may vary widely and could include: conducting a more detailed assessment of the risk and/or a strategic review of the organisation; adjusting project(s) strategy; amending the organisation's risk appetite and resiliency positions; communicating potential impacts on future strategic performance and earnings expectations to stakeholders; assessing potential investments ranging from transformative game-changers, to small 'bets' / 'insurance policies' to protect downside exposures; re-allocation of capital / cash and resources from existing objectives to new priorities; and identifying and pursuing potential partners / JV options.
              </p>
              <p>
                Of note is the increasing number of technology options available to support automated monitoring of risk drivers and metrics, both emerging and enterprise, that help to address the data volume challenge that can be inherent to monitoring a potentially large suite of required intelligence sources.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">When do risks transfer from emerging risks into ‘enterprise’ or 'principal' risks?</h2>
              <p>
                There is no black and white answer. A reasonable guide could be that for each emerging risk, ask yourself: could I assess this risk, based on the current information available and using the organisation's traditional risk processes, with acceptable precision i.e. could you confidently assess its likelihood / impact in the strategic planning timeframe? If the answer is yes, it is likely the emerging risk is sufficiently 'real' to transition into the ERM system and profile and, if of sufficient severity, be included as a principal risk.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">How should I report them in the annual report? Should I include them alongside principal risks?</h2>
              <p>
                In our view it is important to differentiate between principal risks and emerging risks in your reporting as they are both quantitatively and qualitatively different. However, as is the case for principal risk reporting, we feel it is critical to make them relevant to the organisation so readers can understand the context – just having a laundry list of trends or vague risk and control descriptions is not helpful. Of course, no one wants to disclose commercially sensitive information, but more informative and specific reporting, rather than exposition and volume, should be the aim. 
              </p>

              <h2 className="font-semibold text-[#00BAB0]">What do I need to look out for? What are the common challenges you have seen?</h2>
              <p>
                Emerging risk management is a developing discipline for many organisations with a wide range of maturities and approaches. Outlined below are some of the common questions and challenges we see and our thoughts on potential resolutions to address them.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">A lack of believability / credibility in the risks identified</h2>
              <p>
                Emerging risks deal with developments, trends and patterns which are, by definition, novel and therefore highly uncertain. Suggested hypotheses often make easy targets for challenge and dismissal by sometimes cynical management (that will never happen…to us). 
              </p>
              <p>
                We find that being transparent on the objectives of the exercise, and the recognition that emerging risks are inherently judgemental (a tough sell in some industries), helps to set the right tone for the discussion and debate. When articulating emerging risks, it is also vital to be as specific and relevant as possible to the organisation's objectives and future direction, calling out the potential impact (the 'so what') on strategy / earnings expectations, as well as any assumptions you have made. Providing background information and supporting evidence concisely also helps to solidify the proposal. 
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Compromised thinking</h2>
              <p>
                A myopic or narrow-minded view on potential emerging risks may result in an incomplete picture of the threats and opportunities facing an organisation. This can be driven by a reliance on groupthink. Seek a diverse range of views from a variety of sources (internally and externally). Collaborate cross-function. However, retain an element of professional scepticism - do not take everything you are told at face value. 
              </p>
              <p>
                In addition, it is important to synthesise the information you are obtaining and try to spot any potential trends or patterns. Rarely do risks occur in isolation, particularly for emerging risks where there can be so many interconnected factors. Are there any external system dynamics at play, or potential for contagion and correlation between individual emerging risks? 
              </p>
              <p>
                For example, the rise of Amazon is dependent on, among many other factors, a combination of AI, broadband penetration, the rise of the gig economy and drones, and the development of cloud technology. Any of those developments on their own could be dispelled as not a threat by traditional bricks and mortar stores. Together, they are proving to be existential.
              </p>

              <h2 className="font-semibold text-[#00BAB0]">Cultural resistance</h2>
              <p>
                Boards and leadership teams’ average tenure is declining and increasing in volatility. Their life span does not stretch into that of the typical emerging risk - those developments may be dismissed as a problem for their successor! Getting buy-in and support is therefore a challenge so, as a risk leader, having senior support is vital. Use common sense and empathy – considering the rhythm of the organisation and busy periods, when is the best time to conduct an emerging risk assessment?
              </p>

              <h2 className="font-semibold text-[#00BAB0]">A confused taxonomy</h2>
              <p>
                We have explained definitional aspects for emerging risks above, as we often see confusion over wording and terms which can be a hindrance to management efforts. Below are some other common terms that usually will benefit from being defined at the outset: 
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Black Swans - extremely low probability and high impact events, predictable with hindsight</li>
                <li>Unknown Unknowns - events not knowable and unpredictable to the observer</li>
                <li>Scenario analysis – evaluating future conditions and events to explore alternative outcomes</li>
                <li>Horizon Scanning - identifying emerging risks through systematic review of threats and opportunities</li>
                <li>War-gaming – testing scenarios using teams to represent the organisation and competitors</li>
                <li>Previously unidentified risks - risks missed in the risk assessment process (not the same as emerging risks)</li>
              </ul>
              <p>
                Educating management upfront on what is meant by 'emerging risks' and other common terminology will support richer and more streamlined conversation and debate.
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


