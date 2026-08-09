import Image from "next/image";
import Link from "next/link";
import {
  FaSpa,
  FaShieldHeart,
  FaHeart,
  FaAward,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";

import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: `About ${siteData.name} | Spa & Wellness Center in ${siteData.area}, ${siteData.city}`,

  description: `${siteData.name} is a premium spa and wellness center in ${siteData.area}, ${siteData.city}, near Fatehabad Road, Tajganj and Agra Cantt. We offer full body massage, Thai massage, Swedish massage, deep tissue massage, hot oil massage, aromatherapy, Jacuzzi massage, foot reflexology and relaxing wellness therapies in Agra.`,

  path: "/about",

  image: "/images/smallhero.png",

  imageAlt: `About ${siteData.name}, premium spa and massage center in Siddharth Nagar Agra`,

  extraKeywords: [
    "about Kiyora Thai Spa",
    "about Kiyora Thai Spa Agra",
    "premium spa Agra",
    "spa wellness center Agra",
    "spa center in Agra",
    "massage center in Agra",
    "spa in Siddharth Nagar Agra",
    "massage in Siddharth Nagar Agra",
    "spa near Fatehabad Road Agra",
    "massage near Fatehabad Road Agra",
    "spa near Tajganj Agra",
    "spa near Agra Cantt",
    "spa near Taj Mahal Agra",
    "best spa in Agra",
    "luxury spa in Agra",
  ],
});

export default function AboutPage() {
  const services = [
    "Full Body Massage",
    "Thai Massage",
    "Swedish Massage",
    "Deep Tissue Massage",
    "Balinese Massage",
    "Four Hand Massage",
    "Jacuzzi Massage",
    "Foot Reflexology",
  ];

  const nearbyAreas = [
    "Siddharth Nagar",
    "Fatehabad Road",
    "Tajganj",
    "Agra Cantt",
    "Sadar Bazaar",
    "Sanjay Place",
    "Civil Lines",
    "Taj Mahal Nearby",
  ];

  const aboutFaqs = [
    {
      question: "Where is Kiyora Thai Spa located in Agra?",
      answer:
        "Kiyora Thai Spa is located in Siddharth Nagar, Agra, near Fatehabad Road, Tajganj and Agra Cantt.",
    },
    {
      question: "What massage services are available at Kiyora Thai Spa?",
      answer:
        "We offer full body massage, Thai massage, Swedish massage, deep tissue massage, Balinese massage, Four Hand massage, Jacuzzi massage and foot reflexology.",
    },
    {
      question: "Is Kiyora Thai Spa near Fatehabad Road Agra?",
      answer:
        "Yes, Kiyora Thai Spa is located at Ramesh Plaza, Fatehabad Road, Siddharth Nagar, Agra.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[470px] overflow-hidden sm:min-h-[520px]">
        <Image
          src="/images/smallhero.png"
          alt={`About ${siteData.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Keep image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/5" />

        <div className="container relative z-10 mx-auto flex min-h-[470px] items-center px-4 py-20 sm:min-h-[520px]">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              About Kiyora Thai Spa
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Your Relaxation,
              <span className="block text-yellow-400">
                Our Priority.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
              Premium spa and wellness experience in Siddharth Nagar,
              Agra.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <FaLocationDot className="shrink-0 text-yellow-400" />
              Fatehabad Road, Agra
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          
          {/* Image */}
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-[32px] sm:h-[520px]">
              <Image
                src="/images/abouthero.png"
                alt={`${siteData.name} premium spa in Agra`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-5 rounded-2xl border border-yellow-100 bg-white px-5 py-4 shadow-xl sm:left-8">
              <p className="text-2xl font-bold text-gray-900">
                Premium
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-600">
                Wellness Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="pt-6 lg:pt-0">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
              Welcome To Kiyora
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              A Peaceful Spa Experience in Agra
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              {siteData.name} is a premium spa and wellness center in{" "}
              {siteData.area}, {siteData.city}, designed for relaxation,
              comfort and peaceful wellness.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-gray-600">
              Enjoy hygienic private rooms, professional care and a calm
              ambience near Fatehabad Road, Tajganj and Agra Cantt.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 text-sm font-bold text-gray-950 transition hover:bg-yellow-400"
              >
                Explore Services
                <FaArrowRight size={13} />
              </Link>

              <a
                href={siteData.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-6 text-sm font-bold text-gray-800 transition hover:border-yellow-300 hover:bg-yellow-50"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#fffaf1] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
              Our Services
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Massage & Wellness Services
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Choose from relaxing massage therapies and premium wellness
              treatments at Kiyora Thai Spa.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="group flex items-center gap-3 rounded-2xl border border-yellow-100 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 transition group-hover:bg-yellow-500 group-hover:text-white">
                  <FaSpa size={16} />
                </div>

                <p className="text-sm font-bold leading-5 text-gray-800">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FaSpa,
                title: "Luxury Ambience",
                text: "Peaceful interiors designed for complete relaxation.",
              },
              {
                icon: FaShieldHeart,
                title: "Hygienic Rooms",
                text: "Clean, private and comfortable treatment spaces.",
              },
              {
                icon: FaHeart,
                title: "Wellness Care",
                text: "Relaxing services focused on body comfort.",
              },
              {
                icon: FaAward,
                title: "Expert Therapists",
                text: "Professional and experienced wellness care.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-gray-100 bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-200 hover:shadow-[0_18px_45px_rgba(0,0,0,0.09)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= NEARBY AREAS ================= */}
      <section className="bg-[#fffaf1] py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
            Near You
          </span>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Spa Near Fatehabad Road, Tajganj & Agra Cantt
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Conveniently located in Siddharth Nagar and accessible from
            popular areas across Agra.
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

      {/* ================= FAQ ================= */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              About Kiyora Thai Spa
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {aboutFaqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-[22px] border border-gray-100 bg-[#fffdf8] p-6 transition hover:border-yellow-200 sm:p-7"
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