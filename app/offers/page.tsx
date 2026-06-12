import { siteData } from "@/data/site";
import Link from "next/link";

export const metadata = {
  title: `Offers | ${siteData.name} ${siteData.city}`,
  description: `Discover current spa offers, wellness packages, and special booking discounts at ${siteData.name} in ${siteData.city}.`,
  alternates: {
    canonical: `${siteData.url}/offers`,
  },
  openGraph: {
    title: `Offers | ${siteData.name} ${siteData.city}`,
    description: `Discover current spa offers, wellness packages, and special booking discounts at ${siteData.name} in ${siteData.city}.`,
    url: `${siteData.url}/offers`,
    type: "website",
    images: [
      {
        url: `${siteData.url}/images/smallhero.png`,
        alt: `Offers | ${siteData.name}`,
      },
    ],
  },
};

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
            Explore our exclusive discounts, bundle treatments, and limited-time spa packages at {siteData.name} in {siteData.city}.
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
