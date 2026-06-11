import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Review the POWERON ELECTROTECH terms and conditions for website usage, service information, quotations, intellectual property and liability details.",
  path: "/terms-and-conditions",
  keywords: [
    "POWERON ELECTROTECH Terms",
    "Engineering Website Terms and Conditions",
  ],
});

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <p className="mb-6 text-gray-600">
        Last Updated: June 2026
      </p>

      <p className="mb-8">
        By accessing and using this website, you agree to comply with and be
        bound by the following Terms & Conditions.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Acceptance of Terms
        </h2>
        <p>
          By using this website, you agree to these Terms & Conditions and all
          applicable laws and regulations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Website Usage</h2>
        <p>
          Users agree to use this website only for lawful purposes and in a
          manner that does not violate the rights of others.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Intellectual Property
        </h2>
        <p>
          All website content, including text, graphics, images, logos,
          documents, and designs, is the property of Elmas Group and is
          protected by applicable intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Service Information
        </h2>
        <p>
          Information provided on this website is for general informational
          purposes only. We do not guarantee the completeness or accuracy of all
          content at all times.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Project Proposals & Quotations
        </h2>
        <p>
          Any project quotations, estimates, or proposals provided through this
          website are subject to review and formal agreement between both
          parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Limitation of Liability
        </h2>
        <p>
          Elmas Group shall not be liable for any direct, indirect, incidental,
          or consequential damages resulting from the use of this website or
          reliance on its content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Third-Party Links
        </h2>
        <p>
          Our website may contain links to external websites. We are not
          responsible for the content, policies, or practices of those
          third-party websites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Changes to Terms
        </h2>
        <p>
          We reserve the right to modify these Terms & Conditions at any time.
          Continued use of the website signifies acceptance of updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
        <p>
          These Terms & Conditions shall be governed and interpreted in
          accordance with the laws applicable in the jurisdiction where the
          company operates.
        </p>
      </section>
    </main>
  );
}
