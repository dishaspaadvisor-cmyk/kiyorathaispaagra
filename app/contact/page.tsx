import Image from "next/image";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import ContactForm from "@/components/ContactForm";

import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa6";

export const metadata = pageMetadata({
  title: `Contact ${siteData.name} - Spa Booking in ${siteData.city}`,

  description: `Contact ${siteData.name} in ${siteData.area}, ${siteData.city} to ask about services, opening hours and appointments.`,

  path: "/contact",

  image: "/images/smallhero.png",

  imageAlt: `Contact ${siteData.name} spa in Agra`,

  extraKeywords: [
    "spa booking Agra",
    "book massage Agra",
    "spa contact Agra",
  ],
});

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[420px] overflow-hidden">
        <Image
          src="/images/smallhero.png"
          alt={`Contact ${siteData.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/5" />

        <div className="container relative z-10 mx-auto flex min-h-[420px] items-center px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Contact Us
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Book Your
              <span className="block text-yellow-400">
                Spa Experience
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
              Call, WhatsApp or send us your enquiry to book your preferred
              massage service in Agra.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/80">
              <FaLocationDot className="text-yellow-400" />
              Siddharth Nagar, Fatehabad Road, Agra
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#fffaf2] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Contact Info */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                Get In Touch
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Visit Our Spa in Agra
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                Contact {siteData.name} for massage bookings, spa information
                or appointment assistance.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">
                {/* Address */}
                <div className="flex gap-4 rounded-[22px] border border-yellow-100 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600">
                    <FaLocationDot size={18} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Address
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {siteData.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 rounded-[22px] border border-yellow-100 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600">
                    <FaPhone size={16} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Phone
                    </h3>

                    <a
                      href={siteData.callLink}
                      className="mt-2 block text-sm font-medium text-gray-600 transition hover:text-yellow-700"
                    >
                      {siteData.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 rounded-[22px] border border-yellow-100 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600">
                    <FaEnvelope size={17} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Email
                    </h3>

                    <a
                      href={`mailto:${siteData.email}`}
                      className="mt-2 block break-all text-sm font-medium text-gray-600 transition hover:text-yellow-700"
                    >
                      {siteData.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 rounded-[22px] border border-yellow-100 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600">
                    <FaClock size={17} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Opening Hours
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Monday - Sunday
                      <br />
                      10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <a
                  href={siteData.callLink}
                  className="flex h-12 items-center justify-center gap-2 rounded-full border border-yellow-300 bg-white text-sm font-bold text-gray-900 transition hover:bg-yellow-50"
                >
                  <FaPhone size={14} />
                  Call Now
                </a>

                <a
                  href={siteData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-bold text-white transition hover:bg-[#1fbd5a]"
                >
                  <FaWhatsapp size={17} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* API Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
              Find Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Visit Kiyora Thai Spa
            </h2>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.08)]">
            <iframe
              src={siteData.googleMaps}
              width="100%"
              height="500"
              loading="lazy"
              className="block w-full border-0"
              title={`${siteData.name} location`}
            />
          </div>
          <p className="mt-5 text-center">
            <a
              href={siteData.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-yellow-700 transition hover:text-yellow-600"
            >
              Get directions
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}