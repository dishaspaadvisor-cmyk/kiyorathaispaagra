import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export const metadata = pageMetadata({
  title: `Contact ${siteData.name} - Spa Booking in ${siteData.city}`,
  description: `Contact ${siteData.name} in ${siteData.area}, ${siteData.city} for spa appointments, massage booking, Thai massage, full body massage, wellness therapies and online booking near Fatehabad Road.`,
  path: "/contact",
  image: "/images/smallhero.png",
  imageAlt: `Contact ${siteData.name} spa in Agra`,
  extraKeywords: ["spa booking Agra", "book massage Agra", "spa contact Agra"],
});

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 text-white" style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>

        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0" />

        <div className="container relative z-10 mx-auto px-4 text-center">


          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 pl-4 leading-8 text-white">
            Book your spa appointment, ask questions, or contact us for massage
            and wellness services in {siteData.area}, {siteData.city}.
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
                Visit Our Spa in Agra
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
                  <svg
                    xmlns="http://w3.org"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-green-500"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.615-5.34 11.962-11.91 11.962a11.905 11.905 0 01-5.698-1.44l-6.194 1.624zm6.59-3.38a9.893 9.893 0 005.278 1.52c5.475 0 9.932-4.457 9.934-9.934.001-2.652-1.03-5.145-2.905-7.022a9.902 9.902 0 00-7.036-2.909c-5.486 0-9.943 4.456-9.946 9.934a9.87 9.87 0 001.514 5.25L2.29 21.75l3.966-.998l.391.232zm11.332-6.52c-.287-.144-1.702-.84-1.965-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.129-.167.192-.335.216-.622.072a9.112 9.112 0 01-2.3-1.417a10.12 10.12 0 01-1.592-1.98c-.168-.288-.018-.444.126-.586.13-.127.287-.335.43-.503.144-.168.192-.288.288-.48c.096-.192.048-.36-.024-.504-.072-.144-.648-1.56-.888-2.136-.234-.56-.473-.483-.648-.492l-.552-.01c-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.399 0 1.416 1.032 2.784 1.176 2.976.144.192 2.032 3.102 4.921 4.347.687.296 1.224.473 1.643.606.69.219 1.319.188 1.815.114.553-.083 1.702-.696 1.942-1.367.24-.672.24-1.248.168-1.368-.071-.12-.263-.192-.55-.336z" />
                  </svg>
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
