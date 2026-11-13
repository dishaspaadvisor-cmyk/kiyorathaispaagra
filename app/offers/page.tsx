import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: `Spa Discount in ${siteData.city} | ${siteData.name}`,

  description: `Ask about the 20% discount on services at ${siteData.name} in Siddharth Nagar, ${siteData.city}. Contact the spa for current service and appointment details.`,

  path: "/offers",

  image: "/images/smallhero.png",

  imageAlt: `Spa services at ${siteData.name} in Agra`,

  extraKeywords: [
    "spa offers Agra",
    "massage package Agra",
    "spa discount Agra",
    "spa deals Agra",
    "massage offers Agra",
    "full body massage offers Agra",
    "Thai massage offers Agra",
    "Swedish massage package Agra",
    "deep tissue massage offers Agra",
    "hot oil massage package Agra",
    "aromatherapy massage offers Agra",
    "Jacuzzi massage package Agra",
    "spa offers in Siddharth Nagar Agra",
    "massage offers near Fatehabad Road Agra",
    "spa packages near Tajganj Agra",
    "best spa offers in Agra",
    "wellness deals Agra",
    "spa booking discount Agra",
  ],
});

export default function OffersPage() {
  return (
    <main>
      <section className="relative py-24 text-white" style={{ backgroundImage: "url('/images/smallhero.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
       {/* Dark Luxury Overlay */}
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0" />
      
        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-white">
            Special Offers
          </span>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Spa Offers & Wellness Packages
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Ask about the 20% discount on services at {siteData.name} in{" "}
            {siteData.city}.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900">20% Discount on Services</h2>
              <p className="mt-4 text-gray-600">
                Contact us to ask about the 20% discount on spa services.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900">Ask About Availability</h2>
              <p className="mt-4 text-gray-600">
                Call or send an inquiry to confirm service and appointment details.
              </p>
            </article>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
            >
              Book an Offer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
