"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Wrench,
  Landmark,
  FlaskConical,
  Factory,
  Mountain,
  Plane,
  Zap,
  ShoppingCart,
  Cpu,
  Truck,
} from "lucide-react";

export default function AndrewJenkinsPage() {
  return (
    <main className="min-h-screen w-full">
      <section className="w-full border-b bg-secondary/10">
        <div className="max-w-6xl px-6 md:px-8 py-10 md:py-12">
          <div className="grid grid-cols-[auto_1fr] gap-6 items-center">
            <Avatar className="size-28 md:size-32 ring-2 ring-[#00BAB0]/30 shadow-sm">
              <AvatarImage src="/Picture 1.png" alt="Andrew Jenkins" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Andrew Jenkins</h1>
                <Link
                  href="https://www.linkedin.com/in/andrew-jenkins-11317a16/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Andrew Jenkins on LinkedIn"
                  className="text-[#0A66C2] hover:opacity-80"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.024-3.059-1.865-3.059-1.868 0-2.154 1.46-2.154 2.969v5.694h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.841-1.562 3.039 0 3.6 2.002 3.6 4.604v5.591z"/></svg>
                </Link>
              </div>
              <div className="mt-2 text-foreground/80">Partner</div>
              <p className="mt-4 max-w-[65ch] text-foreground/80">
                Senior risk and resilience leader, enhancing global organisations’ performance through enterprise, operational, and supply chain risk expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-6xl px-6 md:px-8 py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About Andrew</h2>
              <div className="mt-4 space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Andrew is a senior risk and resilience leader with 20 years’ experience in both professional services and in-house roles, delivering high-impact enterprise and operational risk programmes for complex, global organisations.
                </p>
                <p>
                  His expertise spans the full risk lifecycle, from framework design and governance through to implementation, monitoring, and continuous improvement.
                </p>
                <p>
                  Andrew has in-depth knowledge of third-party and supply chain risk management, including the development of multi-tier supplier segmentation frameworks, criticality assessments, risk analytics and KRI-based real-time monitoring solutions. He has successfully led multi-jurisdictional risk engagements that required balancing strategic oversight with the practical realities of operational delivery.
                </p>
                <p>
                  Known for his ability to work effectively across cultures, geographies, and business units, Andrew helps organisations enhance their resilience, improve risk transparency, and strengthen decision-making in fast-changing environments.
                </p>
              </div>

              <Card className="mt-8 bg-[#E5EFF0]">
                <CardHeader>
                  <CardTitle>Areas of Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Enterprise Risk Management",
                      "Operational Risk Management",
                      "Business continuity / resilience",
                      "Third party risk management",
                      "Corporate risk reporting",
                      "Sustainability / ESG",
                      "Compliance",
                      "Internal controls",
                      "Programme assurance",
                      "Internal audit",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-[#4AA59E] px-3 py-1 text-sm font-medium text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Industry experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-center gap-3"><Plane className="size-4" /> <span>Aerospace & Defence</span></li>
                    <li className="flex items-center gap-3"><Wrench className="size-4" /> <span>Construction & Engineering</span></li>
                    <li className="flex items-center gap-3"><Mountain className="size-4" /> <span>Extractives (Mining, Oil & Gas)</span></li>
                    <li className="flex items-center gap-3"><Landmark className="size-4" /> <span>Financial Services</span></li>
                    <li className="flex items-center gap-3"><Landmark className="size-4" /> <span>Government / Public sector</span></li>
                    <li className="flex items-center gap-3"><Factory className="size-4" /> <span>Heavy industrial</span></li>
                    <li className="flex items-center gap-3"><FlaskConical className="size-4" /> <span>Life Sciences</span></li>
                    <li className="flex items-center gap-3"><Zap className="size-4" /> <span>Power & Utilities</span></li>
                    <li className="flex items-center gap-3"><ShoppingCart className="size-4" /> <span>Retail & Consumer Goods</span></li>
                    <li className="flex items-center gap-3"><Cpu className="size-4" /> <span>Technology, Media & Telecoms</span></li>
                    <li className="flex items-center gap-3"><Truck className="size-4" /> <span>Transportation</span></li>
                  </ul>
                </CardContent>
              </Card>
            </aside>
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



