"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type ContactTheme = "teal" | "light";

export function ContactSection({ theme = "teal" }: { theme?: ContactTheme }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  return (
    <section
      id="contact"
      className={
        theme === "teal"
          ? "w-full px-6 md:px-8 py-16 md:py-20 bg-[#00BAB0] text-white"
          : "w-full px-6 md:px-8 py-16 md:py-20 bg-[#EEEFEF] text-foreground"
      }
    >
      <div className="max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
        <p className={theme === "teal" ? "mt-3 text-white/90 max-w-[75ch]" : "mt-3 text-foreground/80 max-w-[75ch]"}>
          Tell us about your goals or challenges. We’ll get back to you promptly.
        </p>

        <form
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            const payload = {
              name: String(formData.get("name") || ""),
              email: String(formData.get("email") || ""),
              company: String(formData.get("company") || ""),
              message: String(formData.get("message") || ""),
            };
            try {
              setLoading(true);
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });
              if (!res.ok) throw new Error("Request failed");
              setStatus("sent");
              form.reset();
            } catch (err) {
              setStatus("error");
            } finally {
              setLoading(false);
            }
          }}
        >
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your full name" className="bg-white text-foreground placeholder:text-foreground/60" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" className="bg-white text-foreground placeholder:text-foreground/60" />
          </div>
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Your organisation" className="bg-white text-foreground placeholder:text-foreground/60" />
          </div>
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="How can we help?" className="min-h-28 bg-white text-foreground placeholder:text-foreground/60" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <Button
              disabled={loading}
              className={
                theme === "teal"
                  ? "h-10 px-4 bg-white hover:bg-white/90 text-[#346566]"
                  : "h-10 px-4 bg-[#00BAB0] hover:bg-[#00BAB0]/90 text-white"
              }
            >
              {loading ? "Sending..." : "Send message"}
            </Button>
            {status === "sent" && (
              <span className={theme === "teal" ? "text-sm text-white" : "text-sm text-foreground/70"}>
                Thanks — we’ll be in touch shortly.
              </span>
            )}
            {status === "error" && (
              <span className={theme === "teal" ? "text-sm text-white" : "text-sm text-red-600"}>
                Something went wrong. Please try again.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}


