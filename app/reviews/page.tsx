import { Star, Quote } from "lucide-react";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import { reviews } from "@/data/reviews";

export const metadata = pageMetadata({
  title: `Spa Reviews in ${siteData.city} | ${siteData.name}`,
  description: `Read guest reviews for ${siteData.name} in ${siteData.city} and follow the link to view more customer feedback on Google.`,
  path: "/reviews",
  image: "/images/smallhero.png",
  imageAlt: `${siteData.name} customer reviews in Agra`,
  extraKeywords: [
    "spa reviews Agra",
    "massage reviews Agra",
    "Kiyora Thai Spa reviews",
  ],
});

export default function ReviewsPage() {
  return (
    <main>
      <section className="relative py-24 text-black" style={{ backgroundImage: "url('/images/smallhero.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-500">
            Customer Feedback
          </span>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Customer Reviews
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 border-yellow-500 pl-4 leading-8 text-yellow-400">
            See what our guests say about their spa and wellness experience at{" "}
            {siteData.name}.
          </p>

          <a
            href={siteData.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
          >
            Check Reviews on Google
          </a>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <Quote className="text-yellow-500" size={42} />

                <div className="mt-5 flex gap-1 text-yellow-500">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-5 leading-8 text-gray-600">
                  &quot;{item.review}&quot;
                </p>

                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {item.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
