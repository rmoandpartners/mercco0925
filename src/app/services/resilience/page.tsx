"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResilienceServicesPage() {
  const introRef = useRef<HTMLElement>(null);
  const orgRef = useRef<HTMLElement>(null);
  const opResRef = useRef<HTMLElement>(null);
  const bcmRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (introRef.current) {
      tl.from(introRef.current.querySelector("h1"), { y: 24, autoAlpha: 0, duration: 0.6 })
        .from(introRef.current.querySelectorAll("p"), { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "<0.05");
    }

    const animateSection = (section: HTMLElement | null) => {
      if (!section) return;
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
    };

    const cleanups: Array<(() => void) | void> = [
      animateSection(orgRef.current),
      animateSection(opResRef.current),
      animateSection(bcmRef.current),
    ];

    return () => {
      cleanups.forEach((fn) => fn && fn());
    };
  }, []);

  return (
    <main className="min-h-screen w-full">
      {/* Intro */}
      <section ref={introRef} className="w-full px-6 md:px-8 py-16 md:py-20 border-b bg-secondary/10">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Resilience services</h1>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              ‘Resilience’ means many different things to many different people. Our focus is on the resilience of organisations, and in particular resilience to short and medium term disruption. Resilience and risk management activities are closely related (and should be aligned). They differ in that Resilience concentrates on the ability of an organisation to resist, adapt to and recover from (or even exploit) disruptions regardless of the cause.
            </p>
            <p>We look at Resilience in three ways:</p>
          </div>
        </div>
      </section>

      {/* 1. Organisational Resilience */}
      <section ref={orgRef} className="w-full px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">1. Organisational Resilience</h2>
          <div className="mt-4 space-y-4 text-foreground/80 leading-relaxed max-w-[75ch]">
            <p>
              Organisational Resilience is based on an understanding of why businesses fail, and of what capabilities and attributes are needed not only to improve their resilience but also to take advantage of potentially disruptive change. Early thinking on this has been captured in standards including BS65000 and ISO22316, the former of which our Resilience technical leads helped to develop.
            </p>
            <p>
              However, full Organisational Resilience remains a largely aspirational goal for most; our services aim to help businesses take pragmatic steps to move in the right direction, including:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Leadership workshops", "Resilience assessment reviews", "Resilience Strategy definition", "Implementation support"].map((item, idx) => (
              <Card key={idx} data-help-item className="bg-[#62A39E] text-white border-none transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-base font-medium leading-snug">{item}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Operational Resilience */}
      <section ref={opResRef} className="w-full px-6 md:px-8 py-16 md:py-20 bg-secondary/10">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">2. Operational Resilience</h2>
          <div className="mt-4 space-y-4 text-foreground/80 leading-relaxed max-w-[75ch]">
            <p>
              Operational Resilience is a more tactical, integrated approach to Resilience that aims to provide the various protective disciplines and related risk domain areas with a common approach to prioritisation, improved coordination, collaboration and decision making. Operational Resilience will improve both the effectiveness and efficiency of investment in resilience by promoting aligned goals and outcomes and avoiding overlaps and contradictory positions.
            </p>
            <p>
              UK Financial Service regulators set the lead in this field and this has / is being followed by financial regulators in most key markets. Their expectation is that businesses understand what their critical services are from a client perspective, and that they set Impact Tolerances for these services reported at board level.
            </p>
            <p>The importance of Operational Resilience isn’t confined to meeting regulatory expectations – it represents good practice and makes good business sense in all organisations.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Strategy definition",
              "Key business service identification, prioritisation, and mapping",
              "Risk Appetite and Impact Tolerance setting",
              "Management systems and frameworks",
              "Measurement and metrics",
              "Implementation support",
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

      {/* 3. Business Continuity Management */}
      <section ref={bcmRef} className="w-full px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">3. Business Continuity Management</h2>
          <div className="mt-4 space-y-4 text-foreground/80 leading-relaxed max-w-[75ch]">
            <p>
              Business Continuity Management (BCM) is a well-established protective discipline that lies at the heart of Resilience. It is a risk-agnostic approach that should improve the capability of an organisation to recover from disruptions and maintain the continuity of delivery of its most important products and services. It usually includes planning for incident and crisis management as well as business continuity and recovery, and increasingly is adopting many of the principles of Operational Resilience in terms of, for example, closer integration with related disciplines such as ERM.
            </p>
            <p>
              BCM is not always implemented as well as it should be in organisations. Sometimes investment and capabilities are eroded over time, or old-fashioned tactical approaches are taken. There is often misalignment between the business needs of the organisation and what the plans actually cover.
            </p>
            <p>
              Our services typically build on existing investments in Business Continuity, and address where improvements can be made, although we also have deep experience developing new programmes from scratch. Our support often includes:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "BCM Reviews and Benchmarks",
              "Design of framework structures",
              "Development of / improved Business Impact Assessments (BIAs)",
              "Development of / improved Business Continuity Plans (BCPs)",
              "Exercise programmes",
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


