import { siteData } from "@/data/site";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: `Contact ${siteData.name} | Spa in ${siteData.city}`,
  description: `Contact ${siteData.name} in ${siteData.city} for spa appointments, Thai massage, wellness therapies, and online booking.`,
  alternates: {
    canonical: `${siteData.url}/contact`,
  },
  openGraph: {
    title: `Contact ${siteData.name} | Spa in ${siteData.city}`,
    description: `Contact ${siteData.name} in ${siteData.city} for spa appointments, Thai massage, wellness therapies, and online booking.`,
    url: `${siteData.url}/contact`,
    type: "website",
    images: [
      {
        url: `${siteData.url}/images/smallhero.png`,
        alt: `Contact ${siteData.name}`,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 text-black" style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container relative z-10 mx-auto px-4 text-center">
         

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 border-yellow-500 pl-4 leading-8 text-yellow-400">
            Book your spa appointment, ask questions, or contact us for
            wellness services in {siteData.city}.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-8 text-4xl font-bold text-gray-900">
                Visit Our Spa
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-lg">
                  <MapPin className="text-yellow-500" size={28} />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Address
                    </h3>

                    <p className="mt-2 text-gray-600">
                      {siteData.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-lg">
                  <Phone className="text-yellow-500" size={28} />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Phone
                    </h3>

                    <a
                      href={siteData.callLink}
                      className="mt-2 block text-gray-600 hover:text-yellow-600"
                    >
                      {siteData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-lg">
                  <Mail className="text-yellow-500" size={28} />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Email
                    </h3>

                    <a
                      href={`mailto:${siteData.email}`}
                      className="mt-2 block text-gray-600 hover:text-yellow-600"
                    >
                      {siteData.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-lg">
                  <Clock className="text-yellow-500" size={28} />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Opening Hours
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Monday - Sunday
                    </p>

                    <p className="text-gray-600">
                      10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteData.callLink}
                  className="rounded-full bg-yellow-500 px-8 py-4 text-center font-semibold text-black hover:bg-yellow-400"
                >
                  Call Now
                </a>

                <a
                  href={siteData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-yellow-500 px-8 py-4 font-semibold text-gray-900 hover:bg-yellow-500 hover:text-black"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Book Appointment
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Write your message"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-yellow-500 py-4 font-semibold text-black transition hover:bg-yellow-400"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=Agra&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}