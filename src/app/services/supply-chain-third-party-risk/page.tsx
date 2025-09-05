"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function SupplyChainThirdPartyRiskPage() {
  const introRef = useRef<HTMLElement>(null);
  const helpRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (introRef.current) {
      tl.from(introRef.current.querySelector("h1"), { y: 24, autoAlpha: 0, duration: 0.6 })
        .from(introRef.current.querySelectorAll("p"), { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "<0.05");
    }
    if (helpRef.current) {
      const section = helpRef.current;
      const items = section.querySelectorAll("[data-help-item]");
      gsap.set(items, { y: 30, autoAlpha: 0 });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(items, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.06 });
              io.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      io.observe(section);
      return () => io.disconnect();
    }
  }, []);

  return (
    <main className="min-h-screen w-full">
      {/* Intro */}
      <section ref={introRef} className="w-full px-6 md:px-8 py-16 md:py-20 border-b bg-secondary/10">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Supply Chain and Third Party Risk Management services</h1>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              For most organisations, third parties play a fundamental role in enabling them to operate effectively and achieve their objectives; consequently, they can present their clients with a broad range of potentially significant risks.
            </p>
            <p>
              From successful strategic execution with joint venture partners, to operational disruption should a key supplier fail, as well as the legal and reputational risks associated with third parties representing you in the market place, your organisation's success and brand equity can be critically dependent on your third party ecosystem. Coupled with the ever increasing reliance being placed on supply chains across numerous industry sectors, procurement and supply chain management done well can be a fundamental source of competitive advantage and enhance organisational impact. As a result, the 'extended enterprise', and its careful, proactive and ongoing management by the organisation, is now firmly in focus for executive teams, boards and regulators alike.
            </p>
            <p>
              Due to the size of third party networks, which can consist of tens of thousands of entities for some organisations, as well as the breadth of risk exposures such networks face, we recognise management is no easy task. The way we support our clients is therefore based on pragmatic solutions to address these realties, deploying risk profiling and evaluation techniques to validate which third parties the organisation has key dependencies on and vulnerabilities to, and associated risk exposures. We then develop appropriate risk response strategies in order to prevent and mitigate potential value loss caused by third party performance issues, deployed throughout the third party management lifecycle, including initial procurement and due diligence, ongoing performance / S&OP management, monitoring and audit, as well as termination and exit management. The emergence of AI capabilities within supply chain management has further opened a whole suite of opportunities for real time risk analysis and surveillance across multiple supplier tiers, as well as more robust and accurate supply and demand forecasting potential.
            </p>
          </div>
        </div>
      </section>

      {/* How do we help? */}
      <section ref={helpRef} className="w-full px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How do we help?</h2>
          <p className="mt-4 text-foreground/80 max-w-[75ch]">
            The support MERC & CO provides leverages our experience successfully partnering with SMEs, FTSE 100 / Fortune 500 companies and large Public Sector departments to better manage supply chain risk and includes:
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Third party risk management / compliance framework design and implementation (including offshore outsourced services set-up and operational support)",
              "Development of end-to-end procurement lifecycle management from strategy to contract management",
              "Third party risk profiling and stratification (with AI leverage for tier analysis)",
              "Deep-dive risk assessment / diligence on specific suppliers / partners / tiers (with AI leverage)",
              "Third party compliance risk assessment*",
              "Third party Key Risk Indicator (KRI) suite and dashboard / reporting development (AI powered or otherwise)",
              "Programme design and administration of third party compliance monitoring / auditing",
              "Third party management software selection and configuration",
              "Contract governance design",
              "Contract performance assurance",
              "Integration of sustainability and social value in procurement and supply chain management",
              "Sustainability maturity assessment, implementation and reporting support throughout your value chain",
              "Staff / management / third party risk and resilience training",
            ].map((item, idx) => (
              <Card
                key={idx}
                data-help-item
                className="bg-[#62A39E] text-white border-none transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="text-base font-medium leading-snug">{item}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-sm text-foreground/70 max-w-[75ch]">
            *Common areas of compliance risk associated with third parties may include: anti-bribery and corruption; data privacy; anti-money laundering; sanctions; conflicts of interest; modern slavery; safeguarding and reputation; conflict minerals; and environmental and sustainability standards.
          </p>
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


