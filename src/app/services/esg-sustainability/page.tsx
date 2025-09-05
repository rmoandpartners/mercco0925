"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function ESGSustainabilityPage() {
  const introRef = useRef<HTMLElement>(null);
  const helpRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (introRef.current) {
      tl.from(introRef.current.querySelector("h1"), { y: 24, autoAlpha: 0, duration: 0.6 })
        .from(introRef.current.querySelectorAll("p, ul"), { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "<0.05");
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
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">ESG & Sustainability services</h1>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              With climate change and sustainability related concerns at the top of most global critical risks lists (despite politically driven fluctuations), stakeholders, not just shareholders, are demanding much more transparency and rigour around how organisations identify and manage their ESG / sustainability risks.
            </p>
            <p>
              There is a growing expectation that Sustainability and Corporate Social Responsibility are no longer “nice to haves’, nor should they be separate from the core of strategy and management - it is not enough to just manage sustainability risks, particularly with stakeholders demanding organisations be a force for good and demonstrate positive impact if they are to ensure their long-term viability.
            </p>
            <p>
              As market expectations rise, regulatory pressure is also increasing with more demanding legislation being introduced and more rigour being required to comply with existing laws. Some of the key themes our clients are working to address include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transparency, human rights and safeguarding in supply chains</li>
              <li>Environmental impact reduction</li>
              <li>Non-financial performance reporting and social impact measurement</li>
              <li>Sustainability reporting including carbon disclosures</li>
              <li>Alignment to Sustainable Development Goals (SDGs)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How do we help? */}
      <section ref={helpRef} className="w-full px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How do we help?</h2>
          <p className="mt-4 text-foreground/80 max-w-[75ch]">
            We support our clients in embedding sustainable practices within their supply chains and operations to optimise their impact on the environment and communities in which they operate. This can range from initial assessment to design and delivery of change interventions to address emerging sustainability risks across your value chain. We challenge our clients to think differently about strategy, governance, operations, third party relationships, monitoring and evaluation, whilst balancing these with organisational performance. Examples of how we help include:
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Sustainability maturity assessment, implementation and reporting support throughout your value chain",
              "Development / enhancement / streamlining of policies and governance to reflect sustainability considerations",
              "Integration of sustainability and social value in procurement and supply chain management",
              "Support with managing regulatory or market compliance, meeting industry requirements or introducing internal changes to embed sustainability and greater transparency",
              "Performance of sustainability (environment, social and governance) risk assessments",
              "Support with development of impact and sustainability reporting",
              "Providing improvement recommendations and assurance readiness of sustainability data",
              "Enabling alignment of organisational activities with SDGs whilst balancing economic, social and environmental considerations",
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


