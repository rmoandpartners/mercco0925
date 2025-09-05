"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function InternalControlsPage() {
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
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Internal Control services</h1>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Internal controls are the activities and mechanisms which prevent or detect issues, errors or non-compliance with policies or laws and regulations, helping to define the parameters within which an organisation can operate. Controls that are well designed and function effectively will ensure risks are robustly managed in line with the Board's desired risk appetite, empowering management to operate and pursue objectives with a greater degree of confidence and certainty.
            </p>
            <p>
              Formalised internal control frameworks are commonly defined and adopted by finance functions to mitigate risks in areas such as fraud and misreporting, with larger organisations having established frameworks that cover a broader range of operational activities, legal and compliance risks in order to promote a more uniform internal control environment and address weak links. Consistency, clarity and transparency over an organisations' key internal controls enables management teams and assurance providers to focus their oversight and challenge, as well as strengthening governance and accountability.
            </p>
            <p>
              We recognise that in most organisations there is a clear business imperative to promote autonomy within departments and subsidiaries in support of entrepreneurial behaviours; however, this cannot excuse recklessness and an appropriate balance of control is needed. Rather than crippling the organisation in bureaucracy or maintaining ‘institutional' controls that no longer address live risks, our focus is to support our clients in developing efficiently administered, risk intelligent and pragmatic internal control frameworks that empower the organisation to be more agile and responsive in a 'safe' manner.
            </p>
          </div>
        </div>
      </section>

      {/* How do we help? */}
      <section ref={helpRef} className="w-full px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How do we help?</h2>
          <p className="mt-4 text-foreground/80 max-w-[75ch]">
            Our team has extensive experience in designing and implementing internal control frameworks. We can help support you:
          </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Identify key operational, financial reporting (including IFCR / SOX / JSOX), non-financial reporting and legal / compliance controls and consolidate into a RACM with framework design",
            "Benchmark, design and build material control libraries, including leveraging AI",
            "Highlight potential control gaps and weaknesses, standardisation opportunities, and design improvement plans",
            "Perform independent control testing (including ICFR, SOX and JSOX)",
            "Improve efficiency around management's SOX / JSOX testing programme (scope reductions, auditor alignment, methodology)",
            "Develop control self-assessment mechanisms and reporting templates (including s.302 reporting)",
            "Capture and track remediation of control deficiencies and other issues",
            "Consolidate and integrate all assurance activities over key controls into an assurance map",
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


