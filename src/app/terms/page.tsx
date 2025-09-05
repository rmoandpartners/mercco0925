export default function TermsPage() {
  return (
    <main className="w-full px-6 md:px-8 py-12 md:py-16">
      <div className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-3 text-sm text-foreground/70">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mt-6 text-foreground/80">These Terms of Service ("Terms") govern your use of the MERC & CO LLP website and any services or materials provided through it. By using the site, you agree to these Terms.</p>

        <h2 className="mt-8 text-xl font-semibold">Use of site</h2>
        <p className="mt-2 text-foreground/80">You may use the site for lawful purposes only. You must not misuse the site, attempt unauthorised access, or interfere with its operation.</p>

        <h2 className="mt-8 text-xl font-semibold">Intellectual property</h2>
        <p className="mt-2 text-foreground/80">All content on this site (including text, graphics, logos and design) is owned by or licensed to MERC & CO LLP and is protected by applicable intellectual property laws. You may not reproduce or distribute content without prior written consent.</p>

        <h2 className="mt-8 text-xl font-semibold">No professional advice</h2>
        <p className="mt-2 text-foreground/80">Content is provided for general information only and does not constitute professional advice. You should obtain specific advice before taking or refraining from any action.</p>

        <h2 className="mt-8 text-xl font-semibold">Limitation of liability</h2>
        <p className="mt-2 text-foreground/80">To the maximum extent permitted by law, MERC & CO LLP shall not be liable for any indirect, incidental, special or consequential losses, or for any loss of profits, revenue, data or business arising from use of the site.</p>

        <h2 className="mt-8 text-xl font-semibold">Third-party links</h2>
        <p className="mt-2 text-foreground/80">Our site may contain links to third-party sites. We are not responsible for their content or practices.</p>

        <h2 className="mt-8 text-xl font-semibold">Privacy</h2>
        <p className="mt-2 text-foreground/80">Please see our <a href="/privacy" className="underline">Privacy Notice</a> for details on how we process personal data.</p>

        <h2 className="mt-8 text-xl font-semibold">Changes</h2>
        <p className="mt-2 text-foreground/80">We may update these Terms from time to time. Continued use of the site after changes constitutes acceptance of the updated Terms.</p>

        <h2 className="mt-8 text-xl font-semibold">Governing law</h2>
        <p className="mt-2 text-foreground/80">These Terms are governed by the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction.</p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-foreground/80">For questions about these Terms, contact: legal@mercandco.com.</p>
      </div>
    </main>
  );
}


