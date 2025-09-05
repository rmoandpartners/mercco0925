"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("cookie-consent");
      if (!v) setVisible(true);
    } catch {}
  }, []);

  const setConsent = (value: "allow" | "deny") => {
    try {
      localStorage.setItem("cookie-consent", value);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-6xl m-3 rounded-md bg-[#346566] text-white shadow-lg">
        <div className="p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="text-sm md:text-[15px] leading-relaxed">
            We use cookies for essential site functionality and, with your consent, to understand
            usage and improve our services. See our <a href="/privacy" className="underline">Privacy Notice</a>.
          </div>
          <div className="flex items-center gap-2 md:ml-auto">
            <Button className="bg-white text-[#346566] hover:bg-white/90" onClick={() => setConsent("allow")}>Allow</Button>
            <Button variant="secondary" className="bg-transparent text-white border border-white hover:bg-white/10" onClick={() => setConsent("deny")}>Deny</Button>
          </div>
        </div>
      </div>
    </div>
  );
}


