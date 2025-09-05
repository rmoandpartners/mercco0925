"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/#about", label: "About us" },
  { href: "/#services", label: "Our services" },
  { href: "/#people", label: "Our people" },
  { href: "/#insights", label: "Insights" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="w-full px-6 md:px-8 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0)]">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 md:h-20 pb-2">
          <div className="min-w-0">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/merc_co_logo_main.png"
                alt="MERC & CO logo"
                width={420}
                height={84}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex justify-center">
            <NavigationMenu className="justify-center" viewport={false}>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className="px-4 py-2">
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop contact */}
          <div className="hidden md:flex justify-end">
            <Button className="bg-[#00BAB0] hover:bg-[#00BAB0]/90 text-white" asChild>
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex justify-end">
            <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[60]" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 right-0 bg-white shadow-lg border-b">
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" className="inline-flex items-center" onClick={() => setMobileOpen(false)}>
                <Image src="/merc_co_logo_main.png" alt="MERC & CO logo" width={200} height={40} className="h-8 w-auto" />
              </Link>
              <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="px-6 pb-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block px-3 rounded-md hover:bg-muted h-11 flex items-center" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Button className="w-full h-11 bg-[#00BAB0] hover:bg-[#00BAB0]/90 text-white" asChild>
                    <Link href="/#contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}


