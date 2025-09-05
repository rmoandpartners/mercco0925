"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";

const OTHER_TITLES: string[] = [
  "UK Corporate Governance Code: addressing ‘Material Controls’ requirements",
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

function hrefFor(title: string): string {
  return slugMap[title] ? `/insights/${slugMap[title]}` : "#";
}

export default function ArticlePage() {
  const articleRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);
  const [shareUrl, setShareUrl] = useState("");

  const title = "Risk Management trends in 2025: Our expectations on key areas of focus";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
    if (articleRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(articleRef.current.querySelector("h1"), { y: 24, duration: 0.6 })
        .from(articleRef.current.querySelector("[data-meta]"), { y: 16, autoAlpha: 0, duration: 0.5 }, "<0.05")
        .from(articleRef.current.querySelectorAll("p, h2, ul"), { y: 22, autoAlpha: 0, duration: 0.5, stagger: 0.06 }, "<0.05");
    }
    if (contentRef.current) {
      const nodes = Array.from(
        contentRef.current.querySelectorAll<HTMLElement>("p, h2, ul, li")
      );
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
            Risk Management trends in 2025: Our expectations on key areas of focus
          </h1>
          <div data-meta className="mt-3 text-sm text-white">7 min read</div>
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
            As we start a new year that could prove to be ‘somewhat' volatile and challenging from a risk management perspective for most organisations, shared below are a few of our thoughts and expectations on likely areas of focus for risk practioners in 2025 (and beyond), drawing on reflections of the most common areas of client support we provided in 2024. To provide some context to this, the clients we partnered with over the past year covered a pretty diverse spectrum, having revenues ranging from c.$1 - 50bn and operating in sectors spanning Pharma, Financial Services, Extractives, Logistics and Consumer Products, amongst others, with headquarters located across all global regions.
          </p>

          <h2 className="font-semibold text-[#00BAB0]">Engagement highlights of 2024</h2>
          <p>
            ERM (multi-year) transformation projects - since Covid we have been averaging several of these a year. Previously I (Matt E) led the ERM advisory practice at a big 4 for over a decade, and in that time these types of engagements were, in my experience, relatively uncommon. Obviously this could be a coincidence in terms of increased frequency of requests for such support we are seeing, but what we routinely hear from clients is that the main driver behind such investments - and they are significant undertakings - is the desire by senior management to derive more value and actionable and robust intelligence from risk management efforts, as well as assure risks are being consistently managed and made transparent throughout the organisation (of course, major crises or strategic shifts can also spur profound system changes too).
          </p>
          <p>
            None of this is new per se, although leverage of data and technology (AI being an obvious driver), deeper and more robust analytics, better business integration and more engaging (and streamlined) reporting is arguably far more central to (and expected from) ERM systems than it used to be. What hasn’t changed, and is still true for any ERM approach, are the foundational factors that determine whether it is successful and a truly value adding activity: sustained support and sponsorship by leadership, governance that ensures ownership of risk by the business, relevant and insightful outputs that are accurate, fresh and reliable, a framework that is tailored to how the business operates, thinks and focuses so is additive to decision making and minimises bureaucracy etc.
          </p>
          <p>
            These types of transformational projects by their nature are lengthy and testing endeavours, so productive and enjoyable (I know its risk management but doesn't mean it can’t be fun!) stakeholder experience is also a key success factor for embedding change. This means that risk leaders, as well as being technically competent and credible, really do need to have effective interpersonal skills, while also being resilient in dealing with the complexities and stress such rollouts inevitably can present. My own personal experience of delivering these projects is that the people side - building interest in the discipline and securing buy-in and ownership at all management levels - is by far the most important and productive investment of time.
          </p>

          <h2 className="font-semibold text-[#00BAB0]">Focused analytics</h2>
          <p>
            Most people recognise that risk management is not moving blobs around on a heat map (not that I buy the narrative that any firms do actually manage risk this way). Heat maps are still widely used however, despite their well known flaws, as extremely busy management teams that are often drowning in reporting (understandably) appreciate the brevity of a one-page summary. Of more concern to us though is the scope and robustness of the underlying analysis of organisational risk environments. Depending on the approach deployed, enterprise risk assessment may only provide a snapshot of a sample of significant known risks, and these are typically based on subjective single point assessments so can be wildly inaccurate / not representative of actual exposure realities.
          </p>
          <p>
            In the last few years, we have seen a much greater interest from clients in understanding the broader spectrum of risks they face and in more depth (initially driven by Covid), including emerging risks (highly uncertain exposures, often over extended timeframes), existential and extreme tail risks (note these are not black swans as they cannot be predicted - a commonly misunderstood term), and risk distribution / curve analysis. While emerging and existential risk analyses enhance understanding of the breadth and type of risk exposures an organisation can face that may previously have lacked visibility / focus, risk curve development can help inform comprehension of the true nature of a risk’s exposure by leveraging scenario analysis to develop a model of its distribution at various impact severity and probability levels, which can (if need be) still be plotted on a heat map!
          </p>
          <p>
            This approach does require a fair bit more effort than traditional ERM assessment (although typically less than statistical models like Monte Carlo), but the outputs are far more robust and objective as they leverage a broad array of data sets and do deliver much more interesting / actionable insights. One word of caution though - outputs from this type of analysis often produce very different risk assessment scores than what may have previously been determined and reported, so this needs to be socialised appropriately with stakeholders.
          </p>

          <h2 className="font-semibold text-[#00BAB0]">BCM ‘plus'</h2>
          <p>
            While operational resilience has taken centre stage in the financial sector and beyond in recent years, BCM continues to play a significant foundational role and is a vital component in strengthening an organisation's ability to withstand and recover from disruptions. It is increasingly clear that BCM is not just a standalone function but an integral part of the broader operational resilience and ERM landscape (and we see this reflected in client demand). Aligning these disciplines is essential for achieving a unified approach, which includes establishing a common language, shared metrics, and outputs that inform both e.g., risk profiles and scenario selection. This alignment also enables organisations to set more nuanced recovery objectives and account for evolved disruption risks, such as those posed by third-party dependencies and cyber security. By evolving traditional approaches, BCM continues to reinforce its relevance in building a resilient and adaptive organisation.
          </p>

          <h2 className="font-semibold text-[#00BAB0]">ERM / supply chain risk management benchmarking</h2>
          <p>
            A number of our clients asked us to review prevailing practices (both common and leading) in ERM and supply chain risk management to support benchmarking of their current states and inform future development priorities. In the past I used to deliver a lot of client maturity assessments (which could sometimes be risky to a relationship if our scoring didn’t align with expectations...), but demand for this sort of formal review we find is generally less frequent than it used to be (although as noted above, this could be coincidental to our client portfolio).
          </p>
          <p>
            Compared to say 10 years ago, a lot of the basics of good practice still remain the same however – corporate strategy alignment, accurate risk characterisation, objective assessment, alignment with key business processes, data leverage and dynamic monitoring, impactful reporting, practical articulation of risk appetite etc.
          </p>
          <p>
            Some key differences are clear though, including (as reflected above) evolution in the nature of risk analysis performed, which is now broader and deeper due to the more expansive and complex risk environment organisations have to navigate, and technology, in particular use of AI and ML. The use of this in specific risk domain areas is already impressively broad across multiple sectors and not actually that new in several. That being said, its use in core ERM (excluding functionality in some GRC software tools) I don’t believe currently reflects some of the claims or perceptions that may be inferred from what you read online i.e., a significant number of organisations are still not currently using it systematically as part of their ERM approach and their frameworks have not been updated yet to structurally integrate AI deployment.
          </p>
          <p>
            However, we believe its architectural implementation will soon become far more common judging by the number of conversations we are having on how to expedite this, which is a nice segue into what we anticipate will be key focus areas for us in helping clients in 2025:
          </p>

          <h2 className="font-semibold text-[#00BAB0]">Expectations on areas of risk management focus in 2025</h2>
          <p>
            Unsurprisingly, Geopolitical risk will likely be top of the agenda this year (and for the foreseeable future) – Trump, tariffs and the associated economic fall-out, how the various conflicts across Europe and Middle East progress, political shifts to populist parties, retrenchment from DEI policies, and the ever-looming doomsday scenario of China invading Taiwan. Organisations should model and stress test their own sensitives to different scenarios to evaluate efficacy of mitigation options and determine early warning triggers for action, enhancing their resilience. The geopolitical models we developed with clients in 2024 revealed some surprising insights into just how severe (and likely) these impacts could be, as well as the complexity of correlations.
          </p>
          <p>
            Supply chain risk – certainly influenced by the above, but with a myriad more exposure types to contend with – predictive risk monitoring and strengthened supply and demand forecasting (AI augmented), upskilling of staff on risk and resilience, and resilience by design principles such as partnerial approaches to third party relationships we expect will be an ongoing focus.
          </p>
          <p>
            Cyber risk – an evergreen risk with astonishing dynamism, the complexity and sophistication of the threat and required defences can be a challenge for cyber experts to convey to lay executives (never mind manage), although the severity of impacts are typically easier to grasp. Risk functions have a key role to play in supporting management understanding of exposure scenarios with more in-depth and robust risk analysis and reporting – when we perform cyber risk modelling we find it often delivers very different outcomes to those on enterprise risk registers and can serve as an effective platform for leadership engagement and debate.
          </p>
          <p>
            Deployment of AI based-ERM systems – a starting point here for risk functions that are yet to engage with the technology could be developing enhanced early warning risk surveillance and risk identification approaches – using AI to leverage the data landscape, its trend and pattern recognition capabilities etc. Other areas could include support with focused risk research and analytics / prediction (we routinely use this ourselves to supplement our desktop risk analysis), reporting and analytical automation, ERM system and controls compliance monitoring, deployed agents / chatbots for business advisory support, amongst many other potential applications. Of note though are the intrinsic risks of using AI too – data security and privacy, bias, accuracy and reliability etc. which risk leaders also need to ensure are effectively mitigated.
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
            {OTHER_TITLES.map((title) => (
              <Link key={title} href={hrefFor(title)} className="group block" aria-label={`Open article: ${title}`}>
                <Card data-related-card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-[#00BAB0] transition-colors">{title}</CardTitle>
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


