"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";

const OTHER_TITLES: string[] = [
  "Risk Management trends in 2025: Our expectations on key areas of focus",
  "UK Corporate Governance Code: addressing ‘Material Controls’ requirements",
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
  const title = "Our view on Enterprise Risk Management (ERM)";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
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
            Our view on Enterprise Risk Management (ERM)
          </h1>
          <div data-meta className="mt-3 text-sm text-white">9 min read</div>
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
                ERM has a noble and ambitious goal: to facilitate the consistent identification, assessment, response to and communication of all critical risks facing an organisation, regardless of those risks’ nature or origin.
              </p>
              <p>
                Understandably then, expectations amongst organisational leadership teams, regulators and other stakeholders are high. Meeting these expectations is, however, a tough ask for most Heads of Risk / Chief Risk Officers (termed ‘Risk Leaders’ throughout the remainder of this report). Results from recent studies confirm this: the vast majority of board directors do not believe their organisations have a highly effective risk management strategy.
              </p>
              <p>
                Why is this? Why does ERM so often struggle to find pride of place in C-suite and board agendas, and fail to have a meaningful impact on the business, often viewed as a standalone process, or worse still, a compliance ‘box-ticking’ exercise?
              </p>
              <p>A sensible place to start is with a basic question:</p>
              <h2 className="font-semibold text-[#00BAB0]">Does ERM add value?</h2>
              <p>
                Of course, logically it seems to make sense that a more proactive, anticipatory, risk-aware organisation would outperform a more reactive and stagnant competitor.
              </p>
              <p>
                And anecdotally, we have seen many case studies where companies have benefited, tangibly and commercially, from a more developed approach to better managing and exploiting risk.
              </p>
              <p>
                But what about empirically? If ERM truly helped an organisation better navigate uncertainty, we would expect to see the share price of companies with a more mature approach to risk management outperform those with a less developed approach. Do we? Yes – an independent, peer-reviewed research project published in The Journal of Risk and Insurance by Dr Mark Farrell PhD and Dr Ronan Gallagher PhD showed that:
              </p>
              <p>
                “Organisations exhibiting mature risk management practices realise a valuation premium of 25%”
              </p>
              <p>
                According to Farrell and Gallagher (2014), “This independent research project provides strong evidence for the value connection of mature enterprise risk management practices in organisations…For companies seeking to improve total shareholder return vs. a peer group…ERM should be a key weapon in those organisations’ armoury.’’  We believe the same principles demonstrated to have helped generate additional total shareholder return can be applied to drive wider stakeholder returns too.
              </p>
              <p>
                The above research paper, like all studies, does have certain limitations, such as the fact it is dependent on self-reported maturity scores from the companies themselves. That said, it does appear to confirm the results of other, similar studies such as:
              </p>
              <p>
                “The value of ERM: Evidence from the U.S. Insurance Industry” (Hoyt and Liebenberg, 2008) which found Insurers with ERM programmes are valued approximately 17% higher than other insurers; and
              </p>
              <p>
                “Does Enterprise Risk Management Increase Firm Value?” (McShane et al 2011) which found evidence of a positive relationship between increasing levels of risk management capability and firm value.
              </p>
              <p>
                So logically, anecdotally and empirically Risk Leaders with mature ERM frameworks can think of themselves as being on very solid foundations. They should be confident when negotiating for resources and investment and look forward to delivering and discussing their risk reporting with executive committees and boards, carrying with them a deep sense of certainty that they are contributing to the success of the business.
              </p>
              <p>
                With this evidence appearing to support the premise that ERM does, in fact, add value, it begs the question:
              </p>
              <h2 className="font-semibold text-[#00BAB0]">Why is this potential value not always achieved and/or perceived by leadership / the business?</h2>
              <p>
                Despite its potential, ERM often lacks senior stakeholder buy-in and support. It can, at times, feel like a frustrating, uphill battle for Risk Leaders, with engagement in risk assessment meetings low and a conspicuous silence when requests are made of the business to update their risk registers.
              </p>
              <p>
                Reflecting on our experience of helping over 100 companies develop their ERM capabilities, we have diagnosed five core root-causes which we believe answers why there is often this perceived lack of value:
              </p>
              <h2 className="font-semibold text-[#00BAB0]">1) Misperceptions and confusion amongst the business population at large, driven by ERM still being relatively nascent in its development</h2>
              <p>
                ERM is still a relatively new discipline. It only entered the business vernacular in the early 2000’s, with widespread adoption not really happening until the 2010’s. In contrast, areas of ‘traditional risk management’ (for example, insurance, health and safety, financial audit etc.), have been around for many decades or, in case of insurance, several centuries. As a result ‘ERM’ can often be seen, incorrectly, as synonymous with one or several of these other risk management activities.
              </p>
              <p>
                The full scope of ERM is therefore not always appreciated, nor is its focus on linking risk with strategy and balancing risk and reward. For example, some companies (mis-)perceive ERM as merely a compliance requirement, or as being limited in scope to relatively easily quantifiable financial risks, and not applicable to their data-poor (and often far more material) cousins, such as ‘strategic’ risks.
              </p>
              <h2 className="font-semibold text-[#00BAB0]">2) A still maturing code of good practice, driving the inheritance and perpetuation of flawed fundamentals in framework design</h2>
              <p>
                ERM is in many ways akin to an adolescent teenager. It is still figuring out who they are and how they fit into the (commercial) world.
              </p>
              <p>
                For example, there remains no single agreed-upon definition for ERM. Bromiley et al (2015) found some 25 different definitions, ranging from the impressively jargonistic ‘a truly holistic, integrated, forward looking process’ to the eclectic ‘an umbrella for a world-level organisational model’…
              </p>
              <p>
                Unfortunately, the 25 different definitions are only the beginning of the divergence in practices. The development of several international standards (e.g. ISO 31000 and COSO ERM), as well as a multitude of guidance from industry associations (e.g. IRM, AIRMIC, RIMS, ALARM, FERMA, CIRMA, IIA to name a few) are well-meaning attempts to shape and influence what ERM is and how it should operate. But the result has also to a degree driven contradictions and confusion, with some publications being overly mechanistic and 'cookie cutter', which can be impractical as franeworks for organisations attempting to implement ERM without significant adaption.
              </p>
              <h2 className="font-semibold text-[#00BAB0]">3) A lack of integration of risk activities with other business processes, driven by an under-appreciation of the scale and complexity of developing a new ERM programme</h2>
              <p>
                As we note above, the goal of ERM is an ambitious one. Achieving it is complex and multifactorial. Despite many Risk Leaders’ best endeavours, it can be overwhelming and, understandably, often result in a compromised system implementation with diliuted outcomes.
              </p>
              <p>
                Designing, building and rolling out an effective ERM framework is a complex change management project, requiring careful stewardship, judgement and skill.  It therefore typicaslly requires a significant investment over the course of several years and the deployment of skilled resources to fully achieve its potential.
              </p>
              <h2 className="font-semibold text-[#00BAB0]">4) A lack of sufficient senior management attention and sponsorship, driven by, for example, engrained biases, cultural resistance and a shortage of bandwidth</h2>
              <p>
                In our experience, senior management teams can often become jaded by risk management, perhaps as a consequence of the above three points driving negative experiences.
              </p>
              <p>
                They can see risk management as a mandatory bureaucratic exercise, and if asked honestly would they engage with the risk management process if they did not have to, the answer would be ‘probably not’.
              </p>
              <p>
                Others may underestimate the amount of risk the business is exposed to, driven by optimism bias, and therefore not believe risk management to be required. Others may simply resist the additional scrutiny and/or accountability formalised risk management processes may introduce.
              </p>
              <p>
                Senior support and sponsorship is, in our view, the single most important critical success factor regarding how ERM systems / Risk Functions will perform. If Risk Leaders do just one thing to improve their chances of success, we recommend focusing on getting senior stakeholders ‘onboard’.
              </p>
              <h2 className="font-semibold text-[#00BAB0]">5) Lack of sufficient investment in resources, and challenges in finding team members with the requisite skillset, gravitas and calibre</h2>
              <p>
                Following on from point four above, leadership teams are understandably reluctant to commit significant investment in the Risk Function if they do not fully support it, or see the value in it.
              </p>
              <p>
                In addition, and owing to the fact that ERM is still a maturing discipline, it can sometimes struggle to attract 'top performers’ seeking new roles, whether that be graduates, internal transfers or external hires. Perhaps that will change over time, but for now, in our experience, Risk Leaders often struggle to find team members suitable to help them deliver the ambitious goals ERM sets out to achieve.
              </p>
              <p>
                Too often, ‘re-badged’ generalists act as risk experts. While we of course support career development and change, it is often a significant risk (so to speak) to solely rely on a non-risk specialist for such a highly demanding role, especially if they are engaging with the leadership of the organisation. 
              </p>
              <p>
                Risk professionals must first master the key techniques of risk management and focus on what really matters and what works in practice. The minimum technical skills may include: being able to rapidly review and analyse large reams of disparate data for salient information; characterising identified risks in an accurate and coherent risk description; objectively assessing (and justifying logically) the potential severity of a risk; crafting practical and, crucially, feasible risk response plans; and performing additive risk analyses, including, for example, bow-tie, scenario, and correlation analysis.  Increasingly, being savvy with technologies such as AI are also becoming a core competence.
              </p>
              <p>
                In addition to this technical ‘table-stakes’ expertise, risk professionals must also possess a broad array of interpersonal and communication skills, including: interviewing and productively engaging with senior leadership; facilitating interactive and interesting group workshops; writing impactful reports; managing time appropriately to solve problems efficiently; and persuading / influencing others in selling the benefits of risk management.
              </p>
              <p>
                This is a tall order, and individuals with the requisite skills are in short supply.
              </p>
              <h2 className="font-semibold text-[#00BAB0]">So how do Risk Leaders respond? What can they do to help realise the latent potential in their ERM systems</h2>
              <p>
                Unfortunately, there has been, to date, only limited help and support available for Risk Leaders to navigate these core challenges. As discussed above, the guidance made available by the industry (and consultants) can be too simplistic / turgid / generic to address bespoke needs and cultures. This issue is compounded by the seemingly ever-increasing expectations of stakeholders, and an external environment which is continually evolving and becoming more complex and interconnected, resulting in new risks emerging and the impact of many existing risks becoming more severe.
              </p>
              <p>
                Having seen hundreds of ERM programmes up close and personal, we offer below 10 guiding principles which we see as common attributes of ERM frameworks which are recognised as adding meaningful value to their organisations. We hope these will help you, as a Risk Leader, realise ERM’s potential in your organisation and in so doing, exceed your stakeholder’s expectations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be absolutely clear on the scope, vision and value proposition of ERM in your business, and where necessary, re-position ERM and the role of Risk Leader as a strategic-level discipline / position (rather than a compliance activity / job) - this may require endorsement and promotion by leadership.</li>
                <li>Be an unapologetic advocate for ERM, fostering enthusiasm across the organisation. If you, as the Head of Risk / Chief Risk Officer do not believe in its value or are overly apologetic about it, how do you expect the rest of the business to buy-in?</li>
                <li>Share your vision and enthusiasm broadly and particularly with senior stakeholders, framing ERM as a decision-support tool and helping to ‘recruit’ these individuals as key proponents and supporters of risk across the organisation. Have them carry your message into their respective teams and areas of the business, and design ways for them to showcase their support, particularly in front of large audiences wherever possible (e.g. townhalls).</li>
                <li>Review and revise where necessary the fundamentals of the ERM programme to align with good practice standards. This is one of the foundation's upon which the success or failure of the Risk Function will be determined. For example, the whole organisation should use the same risk ‘language’; risks must be described clearly and concisely and measured using relevant, consistent and objective criteria; there should be a single point of accountability for each risk; and significant controls and mitigations should be captured and their effectiveness determined.</li>
                <li>Ensure the key risk processes (e.g. annual risk assessment cycles) are user-friendly, yet robust, and that they are widely understood and adopted throughout the organisation. Avoid the perception of risk being about bureaucracy and a one-way street in terms of reporting, such as when risks which have been submitted by business units are seen to go into a ‘black box’.</li>
                <li>Risk reporting and other outputs must be designed in a way which is accessible, focused, action-based, leverages available data, remains fresh and interesting and is aesthetically pleasing. Risk reporting should help to encourage debate and engagement, and ultimately improve management’s decision making.</li>
                <li>Integrate change management support throughout the project when rolling out a new framework, including sequencing activities appropriately and ensuring stakeholders are trained on ERM, informed of what to expect and clear on their role and contributions.</li>
                <li>Train or hire for soft-skills, as well as technical skills. Possessing sound technical knowledge is critical in order to be a successful risk professional, but the ability to successfully engage with the business on terms that resonate with them, to facilitate group discussions effectively and influence and interest senior individuals, are equally, if not more, important.</li>
                <li>Measure and demonstrate the impact of the ERM programme in supporting the success of the business by, for example, comparing the volume of incidents, near misses or losses before and after the ERM roll-out, levels of transparency in risk disclosure, and/or comparing the relative impact of industry-wide events on your company vs. competitors who have less mature ERM programmes.</li>
                <li>Maintain momentum throughout the year and on an ongoing basis with a continual focus on ERM’s evolution and improvement to ensure the programme keeps pace with the business and external developments (e.g. regulatory change), and share fresh risk insights to sustain interest within stakeholder groups.</li>
              </ul>
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


