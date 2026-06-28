import Image from "next/image";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import { Award, Heart, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = pageMetadata({
  title: `About ${siteData.name} | Spa & Wellness Center in ${siteData.area}, ${siteData.city}`,

  description:
    `${siteData.name} is a premium spa and wellness center in ${siteData.area}, ${siteData.city}, near Fatehabad Road, Tajganj and Agra Cantt. We offer full body massage, Thai massage, Swedish massage, deep tissue massage, hot oil massage, aromatherapy, Jacuzzi massage, foot reflexology and relaxing wellness therapies in Agra.`,

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
    "wellness center in Siddharth Nagar Agra",
    "spa near Fatehabad Road Agra",
    "massage near Fatehabad Road Agra",
    "spa near Tajganj Agra",
    "spa near Agra Cantt",
    "spa near Taj Mahal Agra",
    "best spa in Agra",
    "luxury spa in Agra",
    "professional spa in Agra",
    "full body massage in Agra",
    "Thai massage in Agra",
    "Swedish massage in Agra",
    "deep tissue massage in Agra",
    "hot oil massage in Agra",
    "aromatherapy massage in Agra",
    "Jacuzzi massage in Agra",
    "foot reflexology in Agra",
  ],
});

export default function AboutPage() {
  const services = [
    "Full Body Massage",
    "Thai Massage",
    "Swedish Massage",
    "Deep Tissue Massage",
    "Hot Oil Massage",
    "Aromatherapy Massage",
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
    "Taj Mahal nearby area",
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
        "We offer full body massage, Thai massage, Swedish massage, deep tissue massage, hot oil massage, aromatherapy massage, Jacuzzi massage and foot reflexology.",
    },
    {
      question: "Is Kiyora Thai Spa near Fatehabad Road Agra?",
      answer:
        "Yes, Kiyora Thai Spa is located at Ramesh Plaza, Fatehabad Road, Siddharth Nagar, Agra.",
    },
  ];

  return (
    <main>
      <section
        className="relative py-24 text-white"
        style={{
          backgroundImage: "url('/images/smallhero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-400">
            About Us
          </span>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            About {siteData.name} in {siteData.city}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl border-l-4 border-yellow-500 pl-4 text-lg leading-8 text-white">
            A premium spa and massage center in {siteData.area},{" "}
            {siteData.city}, offering relaxing wellness therapies near
            Fatehabad Road, Tajganj and Agra Cantt.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-yellow-50 to-amber-50 py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/abouthero.png"
              alt={`${siteData.name} premium spa and massage center in Siddharth Nagar Agra`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              Luxury Wellness
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Premium Spa & Massage Experience in {siteData.city}
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              {siteData.name} is a premium spa and wellness center located in{" "}
              {siteData.area}, {siteData.city}. We provide professional spa and
              massage therapies designed to relax the body, refresh the mind,
              reduce stress and improve overall wellness.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our spa is located at {siteData.address}. We serve customers from
              Siddharth Nagar, Fatehabad Road, Tajganj, Agra Cantt, Sadar
              Bazaar, Sanjay Place, Civil Lines and nearby areas around the Taj
              Mahal.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you are searching for a spa in Agra, massage in Agra, spa
              near Fatehabad Road or a wellness center in Siddharth Nagar,{" "}
              {siteData.name} offers a peaceful ambience, hygienic rooms and
              trained therapists for a comfortable experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-amber-50 via-yellow-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Spa & Massage Services in Agra
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            At {siteData.name}, we offer relaxing spa and massage services in
            Agra including full body massage, Thai massage, Swedish massage,
            deep tissue massage, hot oil massage, aromatherapy massage, Jacuzzi
            massage and foot reflexology.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl bg-white p-5 font-semibold text-gray-800 shadow-md"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Nearby Areas
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Spa Near Fatehabad Road, Tajganj & Agra Cantt
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Kiyora Thai Spa is a convenient choice for customers looking for a
            spa near Siddharth Nagar, Fatehabad Road, Tajganj, Agra Cantt,
            Sadar Bazaar and nearby areas of Agra.
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

      <section className="bg-gradient-to-b from-amber-50 via-yellow-50 to-white py-20">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Sparkles,
              title: "Luxury Ambience",
              text: "Peaceful interiors designed for deep relaxation and comfort.",
            },
            {
              icon: ShieldCheck,
              title: "Hygienic Rooms",
              text: "Clean, private and comfortable spa rooms for every session.",
            },
            {
              icon: Heart,
              title: "Wellness Care",
              text: "Therapies focused on relaxation, stress relief and body comfort.",
            },
            {
              icon: Award,
              title: "Expert Therapists",
              text: "Professional spa care with trained and experienced therapists.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-lg"
            >
              <item.icon className="mx-auto text-yellow-500" size={42} />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              FAQ
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              About Kiyora Thai Spa Agra
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-5">
            {aboutFaqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-yellow-50 p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}