import ServiceCard from "@/components/servicecard";
import { services } from "@/data/service";
import { siteData } from "@/data/site";

export const metadata = {
  title: "Spa Services in Agra | Kiyora Thai Spa",
  description:
    "Explore premium spa treatments including Thai Massage, Deep Tissue Massage, Swedish Massage, Jacuzzi Massage, Foot Reflexology and Full Body Massage in Agra.",
  keywords:
    "Spa Services Agra, Thai Massage Agra, Body Massage Agra, Spa Near Me Agra, Luxury Spa Agra",
  alternates: {
    canonical: `${siteData.url}/services`,
  },
  openGraph: {
    title: "Spa Services in Agra | Kiyora Thai Spa",
    description:
      "Explore premium spa treatments including Thai Massage, Deep Tissue Massage, Swedish Massage, Jacuzzi Massage, Foot Reflexology and Full Body Massage in Agra.",
    url: `${siteData.url}/services`,
    type: "website",
    images: [
      {
        url: `${siteData.url}/images/smallhero.png`,
        alt: "Spa Services in Agra",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 text-black" style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Premium Wellness
          </span>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Our Spa Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 border-yellow-500 pl-4 leading-8 text-yellow-400">
            Discover luxury massage therapies and wellness treatments
            designed to relax your body, refresh your mind, and
            rejuvenate your spirit.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}