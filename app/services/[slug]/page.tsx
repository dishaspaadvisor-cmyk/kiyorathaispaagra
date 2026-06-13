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
    title: `${service.title} in ${siteData.city} | ${siteData.name}`,
    description: `${service.description} Book ${service.title.toLowerCase()} at ${siteData.name} in ${siteData.area}, near Fatehabad Road, ${siteData.city}.`,
    keywords: keywords([
      `${service.title} in ${siteData.city}`,
      `${service.title} in ${siteData.area}`,
      `${service.title} near Fatehabad Road`,
      `book ${service.title} Agra`,
    ]),
    alternates: {
      canonical: `${siteData.url}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${siteData.name}`,
      description: `${service.description} Available at ${siteData.name} in ${siteData.city}.`,
      url: `${siteData.url}/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: absoluteUrl(service.image),
          alt: `${service.title} at ${siteData.name} Agra`,
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in ${siteData.city}`,
    serviceType: service.title,
    description: service.description,
    image: absoluteUrl(service.image),
    provider: {
      "@type": "HealthAndBeautyBusiness",
      "@id": `${siteData.url}/#business`,
      name: siteData.name,
      url: siteData.url,
      telephone: siteData.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteData.address,
        addressLocality: siteData.city,
        addressRegion: siteData.state,
        postalCode: siteData.pincode,
        addressCountry: "IN",
      },
    },
    areaServed: [siteData.city, siteData.area, "Fatehabad Road"],
    url: absoluteUrl(`/services/${service.slug}`),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }}
      />
      {/* Hero */}
      <section className="relative h-125 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4">
            <h1 className="max-w-4xl text-4xl font-bold text-white md:text-6xl">
              {service.title}
            </h1>

            <p className="mt-4 text-lg text-gray-200">
              Duration: {service.duration}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold">
            {service.title} in {siteData.city}
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            {service.description} This service is available at {siteData.name} in{" "}
            {siteData.area}, near Fatehabad Road, {siteData.city}, along with
            other spa and wellness therapies.
          </p>

          <div className="mt-10 rounded-2xl bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-semibold">
              Why Choose {service.title}?
            </h3>

            <ul className="space-y-3">
              <li>Professional and experienced therapists</li>
              <li>Clean and hygienic spa environment</li>
              <li>Premium wellness experience in Agra</li>
              <li>Comfortable private treatment rooms</li>
              <li>Relaxing atmosphere and ambience</li>
            </ul>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-black p-8 text-white">
              <h3 className="text-2xl font-semibold">Book Your Appointment Today</h3>

              <p className="mt-4 text-gray-300">
                Experience luxury wellness at {siteData.name}, {siteData.area}, {siteData.city}.
              </p>

              <a
                href={siteData.callLink}
                className="mt-6 inline-block rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
              >
                Call Now
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold">Need Help?</h3>

              <p className="mt-4 text-gray-700">
                Contact us on WhatsApp for fast booking support and service details.
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

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Browse all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
