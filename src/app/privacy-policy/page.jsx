export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6 text-gray-600">
        Last Updated: June 2026
      </p>

      <p className="mb-8">
        Welcome to Elmas Group. We are committed to protecting your privacy and
        ensuring the security of your personal information. This Privacy Policy
        explains how we collect, use, and safeguard information when you visit
        our website.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Company Name</li>
          <li>Project Requirements and Inquiry Details</li>
          <li>Technical Information such as Browser and Device Data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to inquiries and service requests</li>
          <li>Provide engineering and project consultation services</li>
          <li>Improve website functionality and user experience</li>
          <li>Maintain website security and performance</li>
          <li>Communicate project-related information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information against unauthorized access, disclosure, alteration, or
          destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p>
          Our website may use cookies and similar technologies to improve user
          experience, analyze traffic, and enhance website functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Third-Party Services
        </h2>
        <p>
          We may use trusted third-party services for hosting, analytics, and
          communication. These services may process information according to
          their own privacy policies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal
          information by contacting us through our website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. Any
          changes will be posted on this page.
        </p>
      </section>
    </main>
  );
}