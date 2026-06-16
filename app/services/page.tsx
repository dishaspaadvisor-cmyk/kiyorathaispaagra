import ServiceCard from "@/components/servicecard";
import { services } from "@/data/service";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: `Spa Services in ${siteData.city} - Massage & Wellness Therapies`,
  description:
    "Explore full body massage, Thai massage, Swedish massage, deep tissue massage, hot oil massage, Jacuzzi massage, foot reflexology, four hand massage and aromatherapy at Kiyora Thai Spa in Agra.",
  path: "/services",
  image: "/images/smallhero.png",
  imageAlt: "Spa services and massage therapies at Kiyora Thai Spa Agra",
  extraKeywords: [
    "spa services Agra",
    "massage services Agra",
    "spa menu Agra",
  ],
});

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 text-white" style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
       
        {/* Dark Luxury Overlay */}
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="text-white font-semibold uppercase tracking-widest">
            Premium Wellness
          </span>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Our Spa Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 border-yellow-500 pl-4 leading-8 text-white">
            Discover luxury massage therapies and wellness treatments in
            Siddharth Nagar, Agra. Our spa menu covers body massage, Thai
            massage, deep tissue therapy, Swedish massage, hot oil massage,
            Jacuzzi sessions, foot reflexology, and aromatherapy.
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
