"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactSection } from "@/components/site/ContactSection";
import { ChevronDown, Users, Lightbulb, Wrench, Layers, ClipboardList, BarChart3, Award, ShieldCheck, Sparkles } from "lucide-react";

const sections = [
  { id: "who-we-are", label: "Who we are" },
  { id: "what-makes-us-different", label: "What makes us different" },
  { id: "what-we-deliver", label: "What we deliver" },
  { id: "how-and-where-we-operate", label: "How and where we operate" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ValueCard = ({ title, body }: { title: string; body: string }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false as boolean);
    return (
      <Card className="transition-shadow hover:shadow-md bg-[#53B7AF] text-white border-0">
        <button
          className="w-full text-left"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`value-${title}`}
        >
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <CardTitle className="text-base md:text-lg text-left">{title}</CardTitle>
            <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
          </CardHeader>
        </button>
        <div
          id={`value-${title}`}
          ref={contentRef}
          className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <CardContent>
              <p className="text-white/90 leading-relaxed whitespace-pre-line">{body}</p>
            </CardContent>
          </div>
        </div>
      </Card>
    );
  };

  const BarItem = ({ title, body, Icon }: { title: string; body: string; Icon?: React.ComponentType<{ className?: string }> }) => {
    const [open, setOpen] = useState(false as boolean);
    return (
      <div className="w-full">
        <button
          className="w-full rounded-md bg-[#346566] text-white px-4 md:px-5 py-3 md:py-4 flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <span className="flex items-center gap-3 text-[13px] md:text-sm font-semibold tracking-tight text-left">
            {Icon ? <Icon className="size-4 md:size-5" /> : null}
            <span>{title}</span>
          </span>
          <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
        </button>
        <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <div className="rounded-md border border-[#346566]/30 bg-white px-4 md:px-5 py-4 text-foreground/80 leading-relaxed">
              <p className="whitespace-pre-line">{body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const elements = container.querySelectorAll<HTMLElement>("[data-animate]");
    gsap.set(elements, { y: 24, autoAlpha: 0 });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target as HTMLElement, { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="min-h-screen w-full">
      {/* Hero */}
      <section className="relative w-full h-[40vh] md:h-[44vh] overflow-hidden bg-[#346566]">
        <div className="relative z-10 h-full flex items-end">
          <div className="w-full px-6 md:px-8 pb-8 md:pb-10 text-white">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">About MERC & CO</h1>
            <p className="mt-3 max-w-[75ch] text-white/90">Certainty in risk intelligence. Practical, partner-led delivery.</p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-8 py-12 md:py-16 bg-secondary/10">
        <div className="max-w-6xl">
          <div className="grid gap-6 md:gap-10 md:grid-cols-[260px_1fr]">
            <nav className="hidden md:block md:sticky md:top-24 md:self-start">
              <ul className="flex md:flex-col gap-3 text-sm">
                {sections.map((s) => (
                  <li key={s.id}>
                    <Link href={`#${s.id}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-[#53B7AF] hover:text-white data-[active=true]:bg-[#53B7AF] data-[active=true]:text-white" data-active="false">
                      <span>{s.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div ref={containerRef} className="space-y-10 md:space-y-14">
              <header data-animate>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About MERC & CO</h2>
                <p className="mt-4 text-foreground/80 max-w-[75ch]">
                  MERC & CO offers risk management leaders the specialised support and advice needed to help them meet
                  the ever-growing expectations of executive teams, boards, regulators, shareholders and other stakeholders.
                </p>
                <p className="mt-4 text-foreground/80 max-w-[75ch]">
                  Our team, selectively hand-picked and comprised solely of seasoned professionals, is dedicated to
                  providing our clients with solutions that address the complex needs and challenges inherent to today’s risk environment.
                </p>
              </header>

              {/* Pull quote */}
              <div className="rounded-md bg-white border shadow-sm p-5 md:p-6" data-animate>
                <blockquote className="text-lg md:text-xl font-medium text-[#346566]">
                  "Our vision is to be the leading risk and resilience advisory firm"
                </blockquote>
                <p className="mt-2 text-sm text-foreground/70">— Matt Elkington, Managing Partner</p>
              </div>

              <section id="who-we-are" className="scroll-mt-24" data-animate>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Who we are</h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        We are passionate champions of risk management and steadfastly support risk practioners in helping
                        them to realise its full potential for the organisations in which they operate.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        MERC & CO’s core values (see below) are more than simply words on a page. They reflect a commitment
                        amongst our Partners as to how we behave every day, and how we wish to be judged.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    <ValueCard
                      title="Excellence"
                      body={`Our team is composed of highly skilled professionals who bring our clients a wealth of practical experience in risk management. We pride ourselves on our depth of knowledge, quality and our continuous pursuit of excellence, and stop at nothing to get the best possible results for our clients. We focus on bringing those we serve an assuredness and clarity in approach, as well as an unprecedented level of personalised service.`}
                    />
                    <ValueCard
                      title="Humility"
                      body={`We want our clients to feel like they have the most skilled, motivated and passionate people in the industry looking out for them and their organisation. However, we are not omniscient, and we will not, nor pretend to, always have the answers. We remain open and humble to new ideas and advice, including a commitment to actively seek out our client's input, guidance and opinion throughout an engagement; feedback is genuinely valued and acted upon.`}
                    />
                    <ValueCard
                      title="Authenticity"
                      body={`We deliver in a manner and style which reflects our natural personalities: professional and knowledgeable, yet straightforward, unstifled and personable. While the contractual engagement with our clients may be badged as ‘business to business’ (B2B), the practical day-to-day reality is a ‘human to human’ (H2H) relationship. We therefore invest significant time in understanding who our clients are and their needs and preferences, at both organisational and personal levels.`}
                    />
                  </div>
                </div>
              </section>

              <div className="h-px w-full bg-[#00BAB0]" aria-hidden="true" />

              <section id="what-makes-us-different" className="scroll-mt-24" data-animate>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">What makes us different</h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        Uncertainty is certainly nothing new, but leadership teams are increasingly demanding more insightful
                        and accurate risk information in order to help them navigate complex decisions and highly volatile
                        and competitive markets. MERC & CO has a deep commitment to, and a long track-record of, successfully
                        helping our clients meet these needs, based on a distinctive and proven delivery model, which is
                        summarised below:
                      </p>
                    </CardContent>
                  </Card>

                  <div className="space-y-3">
                    <BarItem
                      title="Every engagement is resourced with only highly experienced personnel"
                      Icon={Users}
                      body={`Providing leadership and management teams with useful risk insights that help them to make more informed decisions requires a deep and broad knowledge of both their business and the wider environment in which they operate, in addition to robust analytical skills and a pragmatic mindset.

Galvanising senior stakeholder buy-in and support (vital to the success of all risk management programmes) requires productive, thought-provoking and value-adding engagement in order to build strong relationships and leave a positive perception of the Risk Function amongst the business.

Both of these outcomes are best achieved via execution that is led and delivered day-to-day by a senior group of seasoned professionals. Our engagement teams consist only of Partner and Associate Partner level personnel, with all individuals bringing a minimum of 15 years’ relevant experience.

This model offers our clients a uniquely high-calibre line-up, with unmatched technical knowledge alongside the commercial acumen, soft-skill-set and personal gravitas needed to meaningfully engage with C-suites, boards and senior governance bodies, as well as management and staff at operational levels. It is distinct from leveraged models that rely heavily on junior staff.`}
                    />
                    <BarItem
                      title="We continually challenge how we advise and deliver"
                      Icon={Lightbulb}
                      body={`Understandably, organisations without fresh inputs and ideas can struggle to meaningfully innovate their risk programmes, engage stakeholders, revitalise reporting, or embed novel techniques to address new and emerging risks.

Having worked for decades with many global organisations recognised as leaders in their industries, our Partners have extracted, synthesised and built upon practices developed with them to create core and vanguard risk systems that work in practice and deliver value.

We use these diverse perspectives to continually challenge our delivery and designs so outputs are tailored to each client’s specific needs and are unrivalled in quality. We also regularly contribute our time and knowledge to help co-author recognised international standards and guides.`}
                    />
                    <BarItem
                      title="Bespoke, agile and highly practical – rooted in good practice"
                      Icon={Wrench}
                      body={`Having successfully delivered several hundred risk engagements with an expansive number of clients – as expert consultants and in-house Heads of Risk – our Partners understand that all organisations are different, with unique cultures, personalities and ways of working.

We therefore tailor approaches to fit each organisation while anchoring designs to recognised good practice. The result is pragmatic, implementable solutions that work with the grain of the business and deliver outcomes.`}
                    />
                  </div>
                </div>
              </section>

              <div className="h-px w-full bg-[#00BAB0]" aria-hidden="true" />

              <section id="what-we-deliver" className="scroll-mt-24" data-animate>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">What we deliver</h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        While the exact nature of the technical services we provide varies widely, spanning enterprise risk
                        management, resilience and other specialised risk domain areas, typically our clients report the
                        following tangible outputs and benefits after working with us:
                      </p>
                    </CardContent>
                  </Card>

                  {/* Deliverables list */}
                  <div className="space-y-3">
                    <BarItem
                      title="Practical, yet robust risk frameworks which are fully adopted by the business"
                      Icon={Layers}
                      body={`Our clients receive tailored risk frameworks, including all necessary component parts which act as the building blocks for a successful risk programme (e.g. policies, manuals, training materials, annotated risk registers, executive / board / committee reporting templates etc.) and which are based on recognised technical standards and our extensive practical experience.

This is complemented with implementation and roll-out support as necessary and, where there is appetite or desire, a clear maturity and capability development roadmap which captures future enhancement opportunities.

The frameworks MERC & CO design for our clients are built not only with current challenges and needs in mind, but also to ensure that risk reporting will remain dynamic and interesting for stakeholder audiences, and that future requirements, such as having to routinely identify new or emerging risks or to align with evolving regulatory obligations, are fully addressed.`}
                    />
                    <BarItem
                      title="Comprehensive and meaningful risk assessments, packaged in engaging reports"
                      Icon={ClipboardList}
                      body={`We frequently perform in-depth risk assessments at all levels and in all areas of our clients’ organisations. This ranges from ‘top-down’ strategic risk assessments with boards and executive committees, primarily to identify and manage the organisation’s most significant ‘Principal risks’, to ‘bottom-up’ risk exercises with Business Unit / Functional management teams focused on relevant exposures in their specific parts of the organisation.

Additionally, we also routinely facilitate cross-departmental risk assessments in certain specialised areas or risk categories such as Compliance, Third Parties & Supply Chain and Financial Reporting, as well as more advanced analytics focused on, for example, risk distribution curves, emerging and existential scenarios, control quantification, aggregation and correlation effects etc.

What these assessments have in common, regardless of scope, is a significant focus on root-cause analysis and precise risk characterisation, objective impact and likelihood assessment scoring to enable proper risk prioritisation and escalation to appropriate governance bodies, and the development of effective and (crucially) feasible risk response strategies.`}
                    />
                    <BarItem
                      title="Ancillary business intelligence and recommendations valued by leadership"
                      Icon={BarChart3}
                      body={`The process to identify an organisation’s critical risks places risk professionals in a unique and privileged position; larger projects (such as a full enterprise risk management roll-outs) will typically involve engaging with hundreds of staff from across the organisation - very few other roles provide such a broad-level of stakeholder contact in a relatively short timeframe.

These risk discovery conversations will, to the observant and experienced professional, provide a valuable snapshot of the business, uncovering upside and downside themes, trends and other useful information which may have otherwise remained hidden or overlooked. Surfacing this intelligence to leadership teams while acting as an independent and neutral observer or commentator can be extremely valuable, particularly when coupled with well-considered and practical recommendations to address and/or exploit the issues and opportunities identified. It is also worth noting that this can also sometimes include messaging that is difficult for internal staff to raise – we are not afraid to speak truth to management and so can play a 'devil's advocate' role.`}
                    />
                    <BarItem
                      title="An enhanced reputation for the Risk Function"
                      Icon={Award}
                      body={`The hallmarks of our client engagements include strengthened risk management frameworks and staff awareness and capabilities, with outputs that deliver better quality, trusted and more comprehensive risk intelligence for all management stakeholders.

That is the technical outcome of a project and arguably the minimum a client should expect. What we also commonly hear as feedback from clients is that, to their surprise and perhaps differentiating for MERC & CO, our stakeholder engagement style is enjoyable, interesting and productive, which can be at odds with their previous risk management experience.

Ensuring stakeholders have a positive experience with risk management is a fundamental success factor to sustained focus and engagement on the discipline by them, and helps establish the organisational perception of the Risk Function as one that is truly value adding.`}
                    />
                    <BarItem
                      title="Greater confidence in risk information quality and value delivered"
                      Icon={ShieldCheck}
                      body={`We instil Risk Functions with a deep sense of conviction in their outputs by equipping them with the framework, tools and training / knowledge necessary to identify and help manage the organisation’s most critical risks effectively.

This assuredness permeates throughout the Function and wider business, enhancing confidence in individual Risk team members when performing key activities, such as conducting strategic risk assessments with a senior group of stakeholders or when presenting risk outputs to a C-suite or board / committee-level audience.

Our work also places our clients on a firmer footing when asked to articulate the inherent value that the risk programme delivers back to the business.`}
                    />
                    <BarItem
                      title="Increased risk awareness and cultural transformation across the organisation"
                      Icon={Sparkles}
                      body={`Our delivery goes beyond surface-level changes. We help to foster a deeper cultural shift within our clients’ organisations, away from daily fire-fighting and towards more proactive risk management.

This shift leads to a more resilient organisation which is increasingly forward-looking and possessing of an anticipatory mindset, where risk considerations are routinely integrated into key aspects of business decision making (such as strategic planning and budgeting cycles) – not because they are forced to be, but because the business naturally recognises the benefits of doing so.`}
                    />
                    <BarItem
                      title="Career and professional development support"
                      Icon={Users}
                      body={`And finally, on a personal level, the individuals we work with directly day-to-day also benefit from the experience gained by MERC & CO’s Partners, having themselves acted as in-house Heads of Risk at some of the world’s leading organisations in their fields.

We are always keen to share the lessons we have learned throughout our own journeys, and also what we have observed while actively supporting and nurturing many industry-leading risk professionals as their careers have developed.

Our intention is that we will do whatever we can to help our client stakeholders excel, progress and achieve their own personal ambitions. We are also passionate about bringing new insights and perspectives, the latest goings-on in the industry, as well as independent counsel which can help our clients feel a sense of connection in what can be, at times, a somewhat isolated role.`}
                    />
                  </div>
                </div>
              </section>

              <div className="h-px w-full bg-[#00BAB0]" aria-hidden="true" />

              <section id="how-and-where-we-operate" className="scroll-mt-24" data-animate>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">How we operate</h2>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
                      <p>
                        At MERC & CO, we’re not just focused on mitigating downside risks; we’re committed to making a
                        positive impact. We strive to leave a lasting legacy in every organisation we work with,
                        contributing to their long-term success and growth.
                      </p>
                      <p>
                        The nature of the support we provide to clients is via a wide range of delivery models, from
                        strategic, organisation-wide risk programme re-designs and roll-outs, to more short-term or
                        tactical interventions.
                      </p>
                      <p>
                        We can also provide temporary Head of Risk cover in the form of secondments (e.g. for maternity /
                        paternity leave, leavers or illness), as well as acting as a fully co-sourced or ‘outsourced’ Risk
                        Function.
                      </p>
                      <p>
                        We scale up or down the level of our support depending on a client’s particular needs and
                        circumstances. We can work in a ‘done for you’ way (you ‘outsource’ certain risk activities to us
                        if internal capacity/capability is limited) or a ‘done with you’ approach where you and/or your team
                        share delivery to gradually transition capabilities in-house. The only model we avoid is ‘done to
                        you’ – we want and need our clients' support, collaboration and input throughout a project.
                      </p>
                      <p>
                        We can provide all the leadership and resources necessary for a project, or recommend a blended
                        hybrid team that combines MERC & CO specialists with members of your Risk Function.
                      </p>
                      <p>
                        The key point is first understanding needs and constraints and then working together to craft a
                        realistic, mutually beneficial solution given factors such as timeframe, existing risk capability
                        and level of investment available.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Where we operate</h2>
                    </CardHeader>
                    <CardContent className="text-foreground/80 leading-relaxed">
                      <p>
                        MERC & CO is London-based but globally present. We routinely work with, and have long-term clients
                        from, all over the world including North and South America, Europe, the Middle East and Asia.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <ContactSection theme="teal" />

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


