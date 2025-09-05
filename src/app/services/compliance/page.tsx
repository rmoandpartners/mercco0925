"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ComplianceServicesPage() {
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
      {/* Intro */}
      <section ref={introRef} className="w-full px-6 md:px-8 py-16 md:py-20 border-b bg-secondary/10">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Compliance services</h1>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              We help our clients design, build, implement and run comprehensive, yet pragmatic, compliance programmes to help them better manage their often potentially severe legal and regulatory risk exposures.
            </p>
            <p>
              Sometimes viewed as the organisation’s ‘police force’, as well as a necessary evil or a ‘tick-box’ exercise, we are passionate about helping compliance professionals overcome organisational resistance to, and unfair perception of, their Functions and roles. By contextualising the organisation's strategic goals and operations first and, where possible, working in alignment with existing processes and cultural nuances, rather than against them, we can help you tailor and embed the necessary compliance programme requirements into business as usual activities, helping to drive improved stakeholder engagement, visibility of benefits / value of compliance and, ultimately, the sustainability and effectiveness of the system.
            </p>
            <p>
              MERC & CO experts leverage their significant experience in establishing and running group Compliance functions which coordinate compliance efforts enterprise-wide, combined with a deep knowledge of specific laws and regulations, such as anti-bribery and corruption, sustainability standards etc., as well as decades of compliance experience in industries including, for example, Life Sciences, Extractives, Broadcast Media etc.
            </p>
          </div>
        </div>
      </section>

      {/* How do we help? */}
      <section ref={helpRef} className="w-full px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How do we help?</h2>
          <p className="mt-4 text-foreground/80 max-w-[75ch]">
            MERC & CO can support clients with a wide variety of consulting services, from end-to-end compliance programme builds to outsourced managed services. A selection of our potential support is listed below:
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Compliance programme effectiveness reviews and maturity benchmarking",
              "Compliance framework design, component development, and implementation support",
              "Compliance function strategy development and target operating model design / re-design",
              "Compliance risk assessments",
              "Development / enhancement / streamlining of Compliance policies and policy governance",
              "Creation of Compliance Risk and Control Matrices (RACMs)",
              "Compliance Key Risk Indicator (KRI) development",
              "Code of Conduct policy development",
              "Compliance programme training design and delivery, including tailored development and coaching plans for Compliance leaders / managers",
              "Development of Third Party compliance frameworks and monitoring programmes",
              "Monitoring of adherence to Compliance policies and other controls",
              "Compliance software selection and configuration",
              "Enhanced Compliance reporting",
              "Assurance over Compliance programme performance",
              "Outsourced and co-sourced Compliance function activities",
              "Interim Chief Compliance Officer (CCO) / Head of Compliance secondment",
              "Compliance committee membership",
            ].map((item, idx) => (
              <Card key={idx} data-help-item className="bg-[#62A39E] text-white border-none transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
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


