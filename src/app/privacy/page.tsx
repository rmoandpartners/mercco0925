export default function PrivacyPage() {
  return (
    <main className="w-full px-6 md:px-8 py-12 md:py-16">
      <div className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Privacy Notice</h1>
        <p className="mt-3 text-sm text-foreground/70">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mt-6 text-foreground/80">MERC & CO LLP ("we", "us") is committed to protecting your personal data and respecting your privacy. This notice explains how we collect, use, disclose and safeguard your information in accordance with the UK GDPR and Data Protection Act 2018.</p>

        <h2 className="mt-8 text-xl font-semibold">Data controller</h2>
        <p className="mt-2 text-foreground/80">MERC & CO LLP is the data controller. Contact: privacy@mercandco.com.</p>

        <h2 className="mt-8 text-xl font-semibold">Personal data we collect</h2>
        <ul className="mt-2 list-disc pl-5 text-foreground/80 space-y-1">
          <li>Identity and contact data (name, email, company, role)</li>
          <li>Communications data (messages and correspondence you send us)</li>
          <li>Technical and usage data (IP, device, browser, pages viewed) via cookies/analytics</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">How we use your data and lawful bases</h2>
        <ul className="mt-2 list-disc pl-5 text-foreground/80 space-y-1">
          <li>To respond to enquiries and provide services (legitimate interests or contract)</li>
          <li>To manage our relationship and send updates you request (legitimate interests/consent)</li>
          <li>To improve our site and services (legitimate interests, with cookies where consented)</li>
          <li>To comply with legal and regulatory obligations (legal obligation)</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Sharing your data</h2>
        <p className="mt-2 text-foreground/80">We may share data with service providers who support our website, communications and operations (e.g., hosting, email). We require appropriate contracts and safeguards. We do not sell your personal data.</p>

        <h2 className="mt-8 text-xl font-semibold">International transfers</h2>
        <p className="mt-2 text-foreground/80">Where data is transferred outside the UK/EEA, we use appropriate safeguards such as UK/EU Standard Contractual Clauses and additional measures, as applicable.</p>

        <h2 className="mt-8 text-xl font-semibold">Data retention</h2>
        <p className="mt-2 text-foreground/80">We retain personal data only as long as necessary for the purposes set out above, including to satisfy legal, accounting, or reporting requirements.</p>

        <h2 className="mt-8 text-xl font-semibold">Your rights</h2>
        <ul className="mt-2 list-disc pl-5 text-foreground/80 space-y-1">
          <li>Access, rectification, erasure, restriction, objection, and portability</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Lodge a complaint with the ICO: ico.org.uk</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Security</h2>
        <p className="mt-2 text-foreground/80">We implement technical and organisational measures appropriate to the risk to protect personal data against unauthorised access, alteration, disclosure or destruction.</p>

        <h2 className="mt-8 text-xl font-semibold">Cookies</h2>
        <p className="mt-2 text-foreground/80">We may use strictly necessary and, with consent, analytics cookies. You can manage preferences via your browser or any cookie banner provided.</p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-foreground/80">For privacy enquiries or to exercise rights: privacy@mercandco.com.</p>
      </div>
    </main>
  );
}


