import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: `Spa Offers in ${siteData.city} | ${siteData.name}`,
  description: `Discover spa offers, massage packages, wellness deals and special booking discounts for full body massage, Thai massage, aromatherapy and relaxation therapies at ${siteData.name} in ${siteData.city}.`,
  path: "/offers",
  image: "/images/smallhero.png",
  imageAlt: `Spa offers at ${siteData.name} Agra`,
  extraKeywords: ["spa offers Agra", "massage package Agra", "spa discount Agra"],
});

export default function OffersPage() {
  return (
    <main>
      <section className="relative py-24 text-black" style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-500">
            Special Offers
          </span>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Spa Offers & Wellness Packages
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Explore exclusive discounts, bundle treatments, massage packages,
            and limited-time spa offers at {siteData.name} in {siteData.city}.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900">Relaxation Package</h2>
              <p className="mt-4 text-gray-600">
                Enjoy a full body massage plus aromatherapy session at a special rate.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900">Couples Spa Offer</h2>
              <p className="mt-4 text-gray-600">
                Book with a partner and receive a discounted luxury wellness experience.
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
