import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AnimatedHeadline } from "@/components/site/AnimatedHeadline";
import { UnicornEmbed } from "@/components/site/UnicornEmbed";
import { Testimonials } from "@/components/site/Testimonials";
import { People } from "@/components/site/People";
import { InsightsSection } from "@/components/site/InsightsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { TrendingUp, Shield, BadgeCheck, Leaf, Settings, Link2 } from "lucide-react";

export default function Home() {
  const getIconFor = (title: string) => {
    switch (title) {
      case "Enterprise Risk Management":
        return TrendingUp;
      case "Resilience":
        return Shield;
      case "Compliance":
        return BadgeCheck;
      case "ESG & Sustainability":
        return Leaf;
      case "Internal Controls":
        return Settings;
      case "Supply Chain and Third Party Risk":
        return Link2;
      default:
        return TrendingUp;
    }
  };
  return (
    <main className="relative min-h-[calc(100vh-4rem)] w-full">
      <section className="relative flex h-[calc(100vh-4rem)] w-full overflow-hidden bg-[#000000]">
        <div aria-hidden id="unicorn-studio-bg" className="absolute inset-0 z-0 pointer-events-none">
          <UnicornEmbed projectId="KEQ4WL6AfSnunXLNLmc9" />
        </div>
        <div className="flex w-full items-end">
          <div className="relative z-10 w-full px-6 md:px-8 pb-14 md:pb-20 text-[#ffffff]">
            <AnimatedHeadline
              className="max-w-[16ch] text-3xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
              text="Certainty in risk intelligence."
              straplineSelector="#strapline"
              highlightWord="intelligence."
              highlightClassName="text-[#53b7af]"
              showCursor
            />
            <p id="strapline" className="mt-6 max-w-[60ch] text-base md:text-lg text-[#ffffff]/80 opacity-0 translate-y-2 will-change-transform">
              MERC & CO LLP is a leading risk and resilience consultancy, recognised in the industry for its depth of expertise, quality of delivery and committment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="w-full pl-0 md:pl-8 pr-0 bg-muted/30 overflow-hidden mb-[-2px]">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="py-10 md:py-16 max-w-[680px] px-6 md:px-0">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About us</h2>
              <p className="mt-4 text-foreground/80 max-w-[75ch]">
                Our core focus is to help our clients better manage and exploit risk.
              </p>
              <p className="mt-4 text-foreground/80 max-w-[75ch]">
                We offer risk management leaders the specialised support and advice they need to help them meet the ever-growing expectations of executive teams, Boards, regulators, shareholders and other stakeholders.
              </p>
              <div className="mt-6">
                <Button className="h-11 bg-[#00BAB0] hover:bg-[#00BAB0]/90 text-white" asChild>
                  <a href="/about">Learn more</a>
                </Button>
              </div>
            </div>
            <div className="-mr-0 md:-mr-0 h-full my-[-2px] overflow-hidden flex">
              <img
                src="/London City.avif"
                alt="London city skyline"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="w-full px-6 md:px-8 py-20 md:py-28 bg-[#346566] mt-[-2px]">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Our services</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Enterprise Risk Management",
              "Resilience",
              "Compliance",
              "ESG & Sustainability",
              "Internal Controls",
              "Supply Chain and Third Party Risk",
            ].map((title, i) => {
              const Icon = getIconFor(title);
              return (
                <Card key={i} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Icon className="size-5 text-foreground" />
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </div>
                  <CardDescription>
                    {title === "Enterprise Risk Management"
                      ? "Practical Enterprise Risk Management solutions that link risk to strategy, leverage data and AI, and develop tools and a culture which helps our clients exploit risk, seize opportunities, and enhance resilience."
                      : title === "Resilience"
                      ? "We help organisations resist, adapt, and recover from disruption through organisational, operational, and business continuity solutions which are aligned with regulations and leading practice."
                      : title === "Compliance"
                      ? "MERC & CO designs and implements pragmatic Compliance frameworks to help our clients better manage legal and regulatory risks and ensure sustainable, long-term growth."
                      : title === "ESG & Sustainability"
                      ? "We help organisations meet rising stakeholder and regulatory expectations by embedding sustainable practices, managing risks, and aligning strategy and operations with long-term responsible impact."
                      : title === "Internal Controls"
                      ? "We design pragmatic, risk-intelligent control frameworks which strengthen governance, prevent losses, and improve efficiency, which empowers organisations to operate with confidence and agility."
                      : title === "Supply Chain and Third Party Risk"
                      ? "MERC & CO delivers Supply Chain and Third Party risk solutions that strengthen resilience across the extended enterprise, protect reputation, and enhance our clients' competitive advantage."
                      : "Replace with a short preview of this service. 1–2 lines that summarise the value and outcomes clients can expect."}
                  </CardDescription>
                  </CardHeader>
                  
                  <CardFooter className="pt-4">
                    <Button className="h-11 bg-[#00BAB0] hover:bg-[#00BAB0]/90 text-white" asChild>
                      <a
                        href={
                          title === "Enterprise Risk Management"
                            ? "/services/enterprise-risk-management"
                            : title === "Compliance"
                            ? "/services/compliance"
                            : title === "ESG & Sustainability"
                            ? "/services/esg-sustainability"
                            : title === "Internal Controls"
                            ? "/services/internal-controls"
                            : title === "Supply Chain and Third Party Risk"
                            ? "/services/supply-chain-third-party-risk"
                            : title === "Resilience"
                            ? "/services/resilience"
                            : "/#services"
                        }
                      >
                        Learn more
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <People />

      <Testimonials />
      <ContactSection theme="light" />
      <InsightsSection />



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
