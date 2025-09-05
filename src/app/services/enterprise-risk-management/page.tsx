"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EnterpriseRiskManagementPage() {
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
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(items, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.06 });
              observer.disconnect();
            }
          });
        },
        { root: null, threshold: 0.15 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <main className="min-h-screen w-full">
      {/* Hero/Intro */}
      <section ref={introRef} className="w-full px-6 md:px-8 py-16 md:py-20 border-b bg-secondary/10">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Enterprise Risk Management services</h1>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Enterprise Risk Management (ERM) is a structured management discipline that at its heart links risk to an organisation’s strategy. It does this by providing a framework to consistently identify, measure and manage risks, regardless of type, that could have a material effect on the achievement of objectives to within target risk exposure levels.
            </p>
            <p>
              Designed and implemented well, ERM can deliver significant organisational benefits by providing transparency and intelligence to leadership and management on the risks the organisation is exposed to and taking, helping to ensure unacceptable exposures are visible and avoided or mitigated, and that opportunities and returns are not being missed due to risk aversion.
            </p>
            <p>
              The theory and successful application of ERM is not, however, always straightforward and many organisations continue to struggle to extract full value from their investment in the discipline. This can stem from a range of factors, with common reasons including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Assumption that traditional risk management activities are ERM. While it is key to implementation success that any ERM system is bespoke to the culture and needs of the organisation, without linkage to strategy, a common language for risk, and integration of risk appetite, it is likely the ‘ERM’ system is technically misnomered.
              </li>
              <li>
                People are not sufficiently engaged and senior sponsorship is lacking. If ERM is seen as a valueless ‘tick box’ exercise, due to a lack of understanding and support by stakeholders as a result of flawed engagement and reporting outputs that do not support agile and informed decision making, it probably is and will continue to be.
              </li>
              <li>
                Weakness in fundamentals. Poor risk characterisation with vague risk descriptions and subjective, single-point measurement techniques compromises risk visibility and the ability to accurately assess, prioritise and manage those of most significance.
              </li>
              <li>
                Failure to leverage data assets. Risk is dynamic and systems of ERM need to reflect this volatility. Leverage of the data landscape, both internal and external to the organisation, can power real-time risk insights and predictive capabilities, especially when now combined with Artificial Intelligence (AI) capabilities.
              </li>
              <li>
                Practical articulation of risk appetite. A continuing challenge for many organisations is how to express their desired risk and reward trade-offs in ways that are meaningful at operational levels and can be measured, particularly in areas where data may be lacking and quantitative modelling is not a feasible option.
              </li>
              <li>
                Technology limitations. The ever expanding capabilities offered by AI and ML (Machine Learning) have the potential to revolutionise ERM, empowering real time risk surveillance and analytics, automated reporting and deployed advisory agents. Organisations that do not take advantage of this emerging technology could miss out on both intelligence and efficiency opportunities that will drive ERM uptake, and lose ground to competitors that do.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How do we help? */}
      <section ref={helpRef} className="w-full px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How do we help?</h2>
          <p className="mt-4 text-foreground/80 max-w-[75ch]">
            There is a wide spectrum of approaches, philosophies and maturity in ERM practice across different sectors and peer organisations; reflecting this, the support we provide is equally varied in its scope and approach and can include simple advice on specific issues to major, multi-year ERM programme design and implementation. Summarised below are common requests for help we receive from clients.
          </p>
          <p className="mt-4 text-foreground/80 max-w-[75ch]">
            Regardless of the ask, our focus is on pragmatic, high quality solutions that are bespoke to each client’s specific needs and aspirations, exploiting the knowledge and lessons learned from the team’s successful delivery of in excess of 100 ERM engagements.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "ERM effectiveness reviews and maturity benchmarking",
              "ERM framework design, component development, and implementation support",
              "Risk appetite articulation at Board and operational levels",
              "Key Risk Indicator (KRI) suite development",
              "ERM software selection and configuration",
              "Risk analytics including facilitation of organisation-wide ERM exercises, emerging risk horizon scanning, scenario and risk distribution analysis, model development, correlation analysis, AI risk assessment etc.",
              "Enhanced risk reporting design and population",
              "Organisational leadership, management and practioner ERM training content development and delivery",
              "Head of ERM / ERM team development coaching, training and advice",
              "AI technology leverage and integration",
              "Development of integrated risk frameworks with Compliance, BCM, Insurance, Operational Resilience etc.",
              "Assurance over ERM performance and compliance",
              "Outsourced and co-sourced ERM function activities",
              "Interim Head of ERM secondment",
              "Risk and audit committee membership",
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


