import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/service";
import { siteData } from "@/data/site";
import { absoluteUrl, jsonLd, keywords } from "@/data/seo";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: `The requested service was not found on ${siteData.name}.`,
      alternates: {
        canonical: `${siteData.url}/services`,
      },
    };
  }

  return {
    title: `${service.title} in ${siteData.city} | ${siteData.area} Spa | ${siteData.name}`,

    description: `${service.description} Book ${service.title.toLowerCase()} at ${siteData.name} in ${siteData.area}, ${siteData.city}, near Fatehabad Road, Tajganj, Agra Cantt and nearby Taj Mahal areas.`,

    keywords: keywords([
      `${service.title} in ${siteData.city}`,
      `${service.title} in ${siteData.area} ${siteData.city}`,
      `${service.title} near Fatehabad Road Agra`,
      `${service.title} near Tajganj Agra`,
      `${service.title} near Agra Cantt`,
      `${service.title} near Taj Mahal Agra`,
      `spa in ${siteData.city}`,
      `massage in ${siteData.city}`,
      `spa in ${siteData.area} ${siteData.city}`,
      `massage in ${siteData.area} ${siteData.city}`,
      `book ${service.title} Agra`,
      `${siteData.name} ${service.title}`,
      ...(service.localKeywords || []),
    ]),

    alternates: {
      canonical: `${siteData.url}/services/${service.slug}`,
    },

    openGraph: {
      title: `${service.title} in ${siteData.city} | ${siteData.name}`,
      description: `${service.description} Available at ${siteData.name} in ${siteData.area}, ${siteData.city}, near Fatehabad Road, Tajganj and Agra Cantt.`,
      url: `${siteData.url}/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: absoluteUrl(service.image),
          alt: `${service.title} at ${siteData.name} in Siddharth Nagar Agra`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${service.title} in ${siteData.city} | ${siteData.name}`,
      description: `${service.description} Book at ${siteData.name} in ${siteData.area}, ${siteData.city}.`,
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
    "Agra Cantt",
    "Sadar Bazaar",
    "Sanjay Place",
    "Civil Lines",
    "Taj Mahal nearby area",
  ];

  const serviceFaqs = [
    {
      question: `Where can I book ${service.title} in Agra?`,
      answer: `You can book ${service.title} at ${siteData.name}, located in ${siteData.area}, ${siteData.city}, near Fatehabad Road, Tajganj and Agra Cantt.`,
    },
    {
      question: `Is ${service.title} available near Fatehabad Road Agra?`,
      answer: `Yes, ${service.title} is available at ${siteData.name} in Siddharth Nagar, near Fatehabad Road, Agra.`,
    },
    {
      question: `Why choose ${siteData.name} for ${service.title}?`,
      answer: `${siteData.name} offers a peaceful spa ambience, hygienic rooms, trained therapists and professional massage services in ${siteData.area}, ${siteData.city}.`,
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in ${siteData.city}`,
    serviceType: service.title,
    description: service.description,
    image: absoluteUrl(service.image),
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": "HealthAndBeautyBusiness",
      "@id": `${siteData.url}/#business`,
      name: siteData.name,
      url: siteData.url,
      telephone: siteData.phone,
      email: siteData.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteData.address,
        addressLocality: siteData.city,
        addressRegion: siteData.state,
        postalCode: siteData.pincode,
        addressCountry: "IN",
      },
    },
    areaServed: [
      siteData.city,
      siteData.area,
      "Fatehabad Road",
      "Tajganj",
      "Agra Cantt",
      "Sadar Bazaar",
      "Sanjay Place",
      "Civil Lines",
      "Taj Mahal nearby area",
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} in Siddharth Nagar Agra at ${siteData.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4">
            <span className="font-semibold uppercase tracking-widest text-yellow-400">
              Spa Service in Agra
            </span>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold text-white md:text-6xl">
              {service.title} in {siteData.city}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-200">
              Experience {service.title.toLowerCase()} at {siteData.name} in{" "}
              {siteData.area}, {siteData.city}, near Fatehabad Road, Tajganj,
              Agra Cantt and nearby Taj Mahal areas.
            </p>

            <p className="mt-4 text-lg font-semibold text-yellow-400">
              Duration: {service.duration}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Premium Massage Therapy
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {service.title} in {siteData.area}, {siteData.city}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {service.description} This service is available at {siteData.name}{" "}
            in {siteData.area}, near Fatehabad Road, {siteData.city}. Customers
            from Tajganj, Agra Cantt, Sadar Bazaar, Sanjay Place, Civil Lines
            and nearby Taj Mahal areas can visit our spa for a relaxing and
            professional wellness experience.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            If you are searching for {service.title.toLowerCase()} in Agra, spa
            near Fatehabad Road, massage near Tajganj, or a wellness center in
            Siddharth Nagar, {siteData.name} offers a peaceful ambience,
            hygienic rooms and trained therapists.
          </p>

          <div className="mt-10 rounded-2xl bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Why Choose {service.title} at {siteData.name}?
            </h3>

            <ul className="space-y-3 leading-7 text-gray-700">
              <li>Professional and experienced therapists</li>
              <li>Clean, hygienic and private spa environment</li>
              <li>Premium wellness experience in Siddharth Nagar, Agra</li>
              <li>Comfortable private treatment rooms</li>
              <li>Relaxing ambience near Fatehabad Road and Tajganj</li>
              <li>Convenient location for Agra Cantt and Taj Mahal nearby areas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Local Spa Near You
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {service.title} Near Fatehabad Road, Tajganj & Agra Cantt
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            {siteData.name} is located in Siddharth Nagar, Agra and serves
            nearby areas including Fatehabad Road, Tajganj, Agra Cantt, Sadar
            Bazaar, Sanjay Place, Civil Lines and Taj Mahal nearby areas.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-yellow-300 bg-yellow-50 px-5 py-3 text-sm font-semibold text-gray-800"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-black p-8 text-white">
              <h3 className="text-2xl font-semibold">
                Book {service.title} in Agra
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                Experience luxury wellness at {siteData.name}, {siteData.area},{" "}
                {siteData.city}. Call us to book your spa appointment.
              </p>

              <a
                href={siteData.callLink}
                className="mt-6 inline-block rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
              >
                Call Now
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">
                Need Help Choosing a Service?
              </h3>

              <p className="mt-4 leading-7 text-gray-700">
                Contact us on WhatsApp for fast booking support and spa service
                details at {siteData.name} in Agra.
              </p>

              <a
                href={siteData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {service.title} in Agra
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {serviceFaqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="bg-white pb-20">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/services"
            className="inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Browse All Spa Services
          </Link>
        </div>
      </section>
    </main>
  );
}