import ServiceCard from "@/components/servicecard";
import { services } from "@/data/service";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: `Spa Services in ${siteData.city} | Massage & Wellness Therapies | ${siteData.name}`,

  description:
    `Explore spa and massage services at ${siteData.name} in ${siteData.area}, ${siteData.city}. We offer full body massage, Thai massage, Swedish massage, deep tissue massage, hot oil massage, Jacuzzi massage, foot reflexology, four hand massage, aromatherapy and relaxing wellness therapies near Fatehabad Road, Tajganj and Agra Cantt.`,

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
    "spa menu in Siddharth Nagar Agra",

    "spa services near Fatehabad Road Agra",
    "massage services near Fatehabad Road Agra",
    "spa near Tajganj Agra",
    "massage near Tajganj Agra",
    "spa near Agra Cantt",
    "spa near Taj Mahal Agra",

    "full body massage in Agra",
    "Thai massage in Agra",
    "Swedish massage in Agra",
    "deep tissue massage in Agra",
    "hot oil massage in Agra",
    "Jacuzzi massage in Agra",
    "foot reflexology in Agra",
    "four hand massage in Agra",
    "aromatherapy massage in Agra",

    "luxury spa services Agra",
    "premium massage services Agra",
    "best spa services in Agra",
    "best massage services in Agra",
    "Kiyora Thai Spa services",
    "Kiyora Thai Spa Agra services",
  ],
});

export default function ServicesPage() {
  const localAreas = [
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
      question: "What spa services are available at Kiyora Thai Spa Agra?",
      answer:
        "Kiyora Thai Spa offers full body massage, Thai massage, Swedish massage, deep tissue massage, hot oil massage, Jacuzzi massage, foot reflexology, four hand massage and aromatherapy in Agra.",
    },
    {
      question: "Is Kiyora Thai Spa near Fatehabad Road Agra?",
      answer:
        "Yes, Kiyora Thai Spa is located in Siddharth Nagar, Agra, near Fatehabad Road, Tajganj and Agra Cantt.",
    },
    {
      question: "Do you offer full body massage in Agra?",
      answer:
        "Yes, we offer relaxing full body massage in Agra along with Thai massage, Swedish massage, deep tissue massage, hot oil massage and aromatherapy.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative py-20 text-white"
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
            Premium Wellness
          </span>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Spa & Massage Services in Agra
          </h1>

          <p className="mx-auto mt-6 max-w-3xl border-l-4 border-yellow-500 pl-4 text-lg leading-8 text-white">
            Discover luxury spa and massage services at {siteData.name} in{" "}
            {siteData.area}, {siteData.city}. Our spa menu includes full body
            massage, Thai massage, Swedish massage, deep tissue massage, hot oil
            massage, Jacuzzi massage, foot reflexology, four hand massage and
            aromatherapy near Fatehabad Road, Tajganj and Agra Cantt.
          </p>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Massage Therapies
          </span>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold text-gray-900 md:text-5xl">
            Premium Spa Services in Siddharth Nagar, Agra
          </h2>

          <p className="mx-auto mt-6 max-w-4xl leading-8 text-gray-600">
            Kiyora Thai Spa provides professional spa and massage therapies in
            Siddharth Nagar, Agra. Customers looking for spa services in Agra,
            massage services near Fatehabad Road, spa near Tajganj or wellness
            therapy near Agra Cantt can enjoy a peaceful ambience, hygienic
            rooms and relaxing massage treatments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              Our Spa Menu
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Massage & Wellness Therapies in Agra
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              Choose from full body massage, Thai massage, Swedish massage, deep
              tissue massage, hot oil massage, Jacuzzi massage, foot reflexology,
              four hand massage and aromatherapy at {siteData.name}.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Local Spa Near You
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Spa Near Fatehabad Road, Tajganj & Agra Cantt
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Located in Siddharth Nagar, Kiyora Thai Spa is a convenient choice
            for customers searching for spa near Fatehabad Road, massage near
            Tajganj, spa near Agra Cantt, spa near Sadar Bazaar and massage near
            Taj Mahal Agra.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {localAreas.map((area) => (
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

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              FAQ
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Spa Services in Agra
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-5">
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
    </main>
  );
}