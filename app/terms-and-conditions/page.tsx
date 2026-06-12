import { siteData } from "@/data/site";

export const metadata = {
  title: `Terms & Conditions | ${siteData.name}`,
  description: `Terms and Conditions for using ${siteData.name} website, spa services, bookings, and customer support.`,
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-500">
            Legal Information
          </span>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-gray-300">
            Please read these terms carefully before using our website or booking
            services at {siteData.name}.
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
                  These Terms & Conditions apply to the use of this website and
                  services offered by {siteData.name}. By accessing our website,
                  contacting us, or booking an appointment, you agree to follow
                  these terms.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  2. Professional Spa Services
                </h2>
                <p className="leading-8">
                  {siteData.name} is a real and professionally operated spa and
                  wellness business. We provide spa, massage, and wellness
                  services in a hygienic, respectful, and professional
                  environment.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  3. Appointment Booking
                </h2>
                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>Appointments are subject to availability.</li>
                  <li>Customers should provide correct contact details.</li>
                  <li>Late arrival may reduce the service duration.</li>
                  <li>Bookings may be made through phone, WhatsApp, website, or online booking platforms.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  4. Customer Conduct
                </h2>
                <p className="leading-8">
                  Customers must behave respectfully with staff and follow spa
                  rules. Any inappropriate, unsafe, or unlawful behavior may
                  result in refusal or cancellation of service.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  5. Health & Safety
                </h2>
                <p className="leading-8">
                  Customers should inform us about any health conditions,
                  allergies, injuries, or medical concerns before taking any
                  service. Spa services are for relaxation and wellness purposes
                  and are not a replacement for medical treatment.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  6. Pricing & Offers
                </h2>
                <p className="leading-8">
                  Prices, packages, and offers may change without prior notice.
                  Offers are valid only for the mentioned period and may be
                  subject to specific terms.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  7. Cancellations & Rescheduling
                </h2>
                <p className="leading-8">
                  Customers are requested to inform us in advance for
                  cancellations or rescheduling. We reserve the right to
                  reschedule or cancel appointments due to operational reasons.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  8. Website Content
                </h2>
                <p className="leading-8">
                  All content on this website, including text, images, design,
                  branding, and service information, is for general information
                  purposes. Unauthorized copying or misuse is not permitted.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  9. Third-Party Links
                </h2>
                <p className="leading-8">
                  Our website may include links to third-party platforms such as
                  online booking, Google Maps, WhatsApp, or social media. We are
                  not responsible for the content, privacy policies, or actions
                  of third-party websites.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  10. Contact
                </h2>
                <div className="mt-4 rounded-2xl bg-gray-50 p-6">
                  <p>
                    <strong>{siteData.name}</strong>
                  </p>
                  <p>{siteData.address}</p>
                  <p>Phone: {siteData.phone}</p>
                  <p>Email: {siteData.email}</p>
                </div>
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