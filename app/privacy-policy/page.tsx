import { siteData } from "@/data/site";

export const metadata = {
  title: `Privacy Policy | ${siteData.name}`,
  description: `Privacy Policy for ${siteData.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-white">
            Legal Information
          </span>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 border-yellow-500 pl-4 leading-8">
            Your privacy is important to us. This Privacy Policy explains how{" "}
            {siteData.name} collects, uses, and protects your information.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-12">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  1. Introduction
                </h2>

                <p className="leading-8">
                  Welcome to {siteData.name}. We are committed to protecting
                  your privacy and ensuring the security of your personal
                  information. This Privacy Policy describes how we collect,
                  use, and safeguard information provided through our website,
                  online booking platforms, phone calls, WhatsApp inquiries,
                  and in-person visits.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  2. Information We Collect
                </h2>

                <p className="leading-8">
                  We may collect your name, phone number, email address,
                  appointment preferences, booking details, and other
                  information voluntarily provided when you contact us or make
                  an appointment.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  3. How We Use Your Information
                </h2>

                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>To schedule and manage appointments.</li>
                  <li>To respond to inquiries and customer requests.</li>
                  <li>To improve our services and customer experience.</li>
                  <li>To provide booking confirmations and updates.</li>
                  <li>To comply with applicable laws and regulations.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  4. Information Security
                </h2>

                <p className="leading-8">
                  We implement reasonable security measures to protect your
                  personal information from unauthorized access, disclosure,
                  alteration, or misuse. However, no method of online
                  transmission is completely secure.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  5. Professional Services
                </h2>

                <p className="leading-8">
                  {siteData.name} is a professional wellness and spa
                  establishment. We strive to maintain high standards of
                  hygiene, customer care, service quality, and professional
                  conduct. All services are provided in accordance with our
                  operational policies and applicable local regulations.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  6. Third-Party Services
                </h2>

                <p className="leading-8">
                  We may use third-party services such as online booking
                  platforms, payment providers, maps, analytics tools, and
                  communication services. These third parties may have their
                  own privacy policies governing the use of information.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  7. Cookies and Analytics
                </h2>

                <p className="leading-8">
                  Our website may use cookies and analytics technologies to
                  improve website functionality, understand visitor behavior,
                  and enhance user experience.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  8. Your Rights
                </h2>

                <p className="leading-8">
                  You may contact us to request corrections, updates, or
                  removal of your personal information where permitted by law.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  9. Contact Information
                </h2>

                <p className="leading-8">
                  If you have questions regarding this Privacy Policy, please
                  contact us using the details below:
                </p>

                <div className="mt-4 rounded-2xl bg-gray-50 p-6">
                  <p>
                    <strong>{siteData.name}</strong>
                  </p>
                  <p>{siteData.address}</p>
                  <p>Phone: {siteData.phone}</p>
                  <p>Email: {siteData.email}</p>
                </div>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  10. Policy Updates
                </h2>

                <p className="leading-8">
                  We may update this Privacy Policy periodically. Any changes
                  will be posted on this page and become effective immediately
                  upon publication.
                </p>
              </div>

              <div className="border-t pt-6 text-sm text-gray-500">
                Last Updated: {new Date().toLocaleDateString("en-IN")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}