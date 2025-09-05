"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const PEOPLE = [
  {
    name: "Matt Elkington",
    title: "Managing Partner",
    img: "/Picture ME.png",
    initials: "ME",
    href: "/people/matt-elkington",
    bio:
      "Co-founder and Managing Partner, specialising in innovative risk and resilience solutions for diverse global organisations.",
  },
  {
    name: "Ross Olding",
    title: "Partner",
    img: "/Picture RO.png",
    initials: "RO",
    href: "/people/ross-olding",
    bio:
      "Co-founder and CFO, guiding clients through complex risk and compliance challenges with clear, practical, and strategic solutions",
  },
  {
    name: "Andrew Jenkins",
    title: "Partner",
    img: "/Picture 1.png",
    initials: "AJ",
    href: "/people/andrew-jenkins",
    bio:
      "Trusted partner to senior executives, enhancing risk and resilience capabilities through pragmatic advice and solutions.",
  },
];

export function People() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-person-card]"));
    gsap.set(cards, { y: 80, autoAlpha: 0, scale: 0.99 });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(cards, {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.15,
            });
            io.disconnect();
          }
        });
      },
      { root: null, threshold: 0.2 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="people" className="w-full px-6 md:px-8 py-20 md:py-28 bg-secondary/10">
      <div className="max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our people</h2>
        <p className="mt-4 text-foreground/80 max-w-[75ch]">
          Our team combines decades of experience working successfully in professional services, in-house roles both as employees and secondees, and as independent contractors.
        </p>
        <p className="mt-4 text-foreground/80 max-w-[75ch]">
          Our partners, Matt, Ross, and Andrew, are supported by a senior team which has been selected to provide a complementary range of leading expertise across key domain areas of risk, backed up with extensive track records of successful client engagement delivery and satisfaction. Its assembly also reflects our previous career experience of working with one another - we already know and trust each other's strengths and capabilities.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PEOPLE.map((person) => (
            <Link
              key={person.name}
              href={person.href}
              aria-label={`View ${person.name}'s profile`}
              className="group block"
            >
              <Card
                data-person-card
                className="h-full bg-white transition translate-y-0 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl cursor-pointer rounded-lg"
              >
                <CardHeader className="flex flex-col items-center gap-4 pb-0 border-none">
                  <Avatar className="size-36 md:size-40 ring-2 ring-[#00BAB0]/30 shadow-sm">
                    <AvatarImage src={person.img} alt={person.name} />
                    <AvatarFallback>{person.initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <CardTitle className="text-2xl font-semibold transition-colors group-hover:text-[#00BAB0]">
                      {person.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base font-medium text-foreground">
                      {person.title}
                    </CardDescription>
                  </div>
                  <div className="h-1 w-12 bg-[#53B7AF] rounded-full mt-3" />
                </CardHeader>
                <CardContent className="pt-4 text-center">
                  <p className="text-sm text-foreground/80">
                    {person.bio ?? "Short bio or focus area placeholder. Replace with a concise profile summary."}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


