import Image from "next/image";
import ServiceCard from "@/components/servicecard";
import { services } from "@/data/service";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import { FaLocationDot, FaSpa } from "react-icons/fa6";

export const metadata = pageMetadata({
  title: `Spa Services in ${siteData.city} | Massage & Wellness Therapies | ${siteData.name}`,

  description: `View the massage and spa services offered at ${siteData.name} in ${siteData.area}, ${siteData.city}. Check treatment details and contact us to arrange an appointment.`,

  path: "/services",

  image: "/images/smallhero.png",

  imageAlt: `Spa services and massage therapies at ${siteData.name} in Siddharth Nagar Agra`,

  extraKeywords: [
    "spa services Agra",
    "massage services Agra",
    "spa menu Agra",
    "spa treatments Agra",
    "massage therapies Agra",
    "wellness therapies Agra",
    "spa services in Siddharth Nagar Agra",
    "massage services in Siddharth Nagar Agra",
    "spa services near Fatehabad Road Agra",
    "massage services near Fatehabad Road Agra",
    "spa near Tajganj Agra",
    "spa near Agra Cantt",
    "full body massage in Agra",
    "Thai massage in Agra",
    "Swedish massage in Agra",
    "deep tissue massage in Agra",
    "Jacuzzi massage in Agra",
    "four hand massage in Agra",
    "best spa services in Agra",
    "Kiyora Thai Spa Agra services",
  ],
});

export default function ServicesPage() {
  const localAreas = [
    "Siddharth Nagar",
    "Fatehabad Road",
    "Tajganj",
  ];

  const serviceFaqs = [
    {
      question: "What spa services are available at Kiyora Thai Spa Agra?",
      answer:
        "Kiyora Thai Spa offers full body massage, Thai massage, Swedish massage, deep tissue massage, Jacuzzi massage, foot reflexology, four hand massage and other relaxing wellness services in Agra.",
    },
    {
      question: "Is Kiyora Thai Spa near Fatehabad Road Agra?",
      answer:
        "Yes, Kiyora Thai Spa is located in Siddharth Nagar on Fatehabad Road, Agra.",
    },
    {
      question: "Do you offer full body massage in Agra?",
      answer:
        "Yes, we offer full body massage in Agra along with several other massage and wellness therapies.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[440px] overflow-hidden">
        <Image
          src="/images/smallhero.png"
          alt={`Spa services at ${siteData.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Lighter overlay so image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/5" />

        <div className="container relative z-10 mx-auto flex min-h-[440px] items-center px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Premium Wellness
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Spa & Massage
              <span className="block text-yellow-400">Services in Agra</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
              Relaxing massage therapies, private rooms and premium wellness
              care at {siteData.name}.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/80">
              <FaLocationDot className="text-yellow-400" />
              Siddharth Nagar, Fatehabad Road, Agra
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
            Massage Therapies
          </span>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Choose Your Relaxation Experience
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Explore our professional spa and massage services in Siddharth Nagar,
            Agra, designed for relaxation, comfort and complete wellness.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#fffaf2] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
              <FaSpa />
              Our Spa Menu
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Massage & Wellness Therapies
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
            Local Spa Near You
          </span>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Spa on Fatehabad Road in Siddharth Nagar, Agra
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
            Find us at Ramesh Plaza on Fatehabad Road in Siddharth Nagar, Agra.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {localAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
              >
                <FaLocationDot className="text-xs text-yellow-500" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fffaf2] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Spa Services in Agra
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {serviceFaqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-[24px] border border-yellow-100 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-yellow-200 hover:shadow-md sm:p-7"
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
    </main>
  );
}