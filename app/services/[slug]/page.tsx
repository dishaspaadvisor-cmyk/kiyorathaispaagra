import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  FaArrowLeft,
  FaCalendarCheck,
  FaCheck,
  FaClock,
  FaLocationDot,
  FaPhone,
  FaSpa,
  FaWhatsapp,
} from "react-icons/fa6";

import { services } from "@/data/service";
import { siteData } from "@/data/site";
import { absoluteUrl, jsonLd } from "@/data/seo";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const pageUrl = `${siteData.url}/services/${service.slug}`;

  const title = `${service.title} in Agra | ${siteData.name}`;

  const description = `${service.description} Contact ${siteData.name} in Siddharth Nagar, Agra, to ask about availability and appointments.`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteData.name,
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: absoluteUrl(service.image),
          width: 1200,
          height: 630,
          alt: `${service.title} at ${siteData.name} in Agra`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(service.image)],
    },
  };
}

export default async function ServiceDetailsPage({ params }: Params) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const nearbyAreas = [
    "Siddharth Nagar",
    "Fatehabad Road",
    "Tajganj",
  ];

  const serviceFaqs = [
    {
      question: `Where can I book ${service.title} in Agra?`,
      answer: `You can ask about ${service.title} at ${siteData.name}, located in ${siteData.area}, ${siteData.city}.`,
    },
    {
      question: `Is ${service.title} available near Fatehabad Road Agra?`,
      answer: `Contact ${siteData.name} to confirm availability of ${service.title} at our Siddharth Nagar location on Fatehabad Road, Agra.`,
    },
    {
      question: `Why choose ${siteData.name} for ${service.title}?`,
      answer: `${siteData.name} offers a peaceful spa ambience, hygienic rooms, trained therapists and professional massage services in ${siteData.area}, ${siteData.city}.`,
    },
  ];

const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id": `${siteData.url}/services/${service.slug}#service`,

  name: `${service.title} in Agra`,

  serviceType: service.title,

  description: service.description,

  image: absoluteUrl(service.image),

  url: absoluteUrl(`/services/${service.slug}`),

  provider: {
    "@id": `${siteData.url}/#business`,
  },

  areaServed: [
    {
      "@type": "City",
      name: "Agra",
    },
    {
      "@type": "Place",
      name: "Siddharth Nagar, Agra",
    },
    {
      "@type": "Place",
      name: "Tajganj, Agra",
    },
  ],
};

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: serviceFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[540px] overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} in Siddharth Nagar Agra at ${siteData.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Keep image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/5" />

        <div className="container relative z-10 mx-auto flex min-h-[540px] items-end px-4 pb-16 pt-24 md:pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <FaSpa className="text-yellow-400" />
              Premium Spa Service
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {service.title}
              <span className="block text-yellow-400">in {siteData.city}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
              Relaxing wellness experience at {siteData.name} in{" "}
              {siteData.area}, Agra.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {service.duration && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  <FaClock className="text-yellow-400" />
                  {service.duration}
                </span>
              )}

              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                <FaLocationDot className="text-yellow-400" />
                Fatehabad Road, Agra
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            {/* Content */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
                About This Therapy
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                {service.title} at {siteData.name}
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                {service.description}
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Visit our spa in {siteData.area}, {siteData.city}, on Fatehabad
                Road.
              </p>

              {/* Benefits */}
              <div className="mt-10 rounded-[28px] border border-yellow-100 bg-[#fffaf2] p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Why Choose This Service?
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Professional therapists",
                    "Private treatment rooms",
                    "Clean & hygienic environment",
                    "Peaceful spa ambience",
                    "Premium wellness care",
                    "Convenient Agra location",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                        <FaCheck size={12} />
                      </span>

                      <span className="text-sm font-semibold text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[30px] border border-yellow-100 bg-[#fffdf8] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.07)] sm:p-7">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-600">
                  Book Your Session
                </span>

                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {service.duration && (
                  <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
                      <FaClock />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="font-bold text-gray-900">
                        {service.duration}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-5 space-y-3">
                  <a
                    href={siteData.callLink}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-yellow-300 bg-white text-sm font-bold text-gray-900 transition hover:bg-yellow-50"
                  >
                    <FaPhone size={14} />
                    Call Now
                  </a>

                  <a
                    href={siteData.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-bold text-white transition hover:bg-[#1fbd5a]"
                  >
                    <FaWhatsapp size={17} />
                    WhatsApp
                  </a>

                  <a
                    href={siteData.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-yellow-500 text-sm font-bold text-gray-950 transition hover:bg-yellow-400"
                  >
                    <FaCalendarCheck size={16} />
                    Book Appointment
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="bg-[#fffaf2] py-20 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
            Local Spa Near You
          </span>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            {service.title} in Siddharth Nagar, Agra
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
            Conveniently located in Siddharth Nagar and accessible from popular
            areas across Agra.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400"
              >
                <FaLocationDot className="text-xs text-yellow-500" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {service.title} in Agra
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {serviceFaqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-[24px] border border-gray-100 bg-[#fffdf8] p-6 transition hover:border-yellow-200 sm:p-7"
              >
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-sm font-bold text-yellow-700">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="bg-[#fffaf2] py-12">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-yellow-300 bg-white px-6 text-sm font-bold text-gray-900 transition hover:bg-yellow-50"
          >
            <FaArrowLeft size={13} />
            Browse All Services
          </Link>
        </div>
      </section>
    </main>
  );
}