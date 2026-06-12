import { Star, Quote } from "lucide-react";
import { siteData } from "@/data/site";

export const metadata = {
  title: `Customer Reviews | ${siteData.name} ${siteData.city}`,
  description: `Read customer reviews and guest experiences for ${siteData.name}, a premium spa in ${siteData.city}.`,
  alternates: {
    canonical: `${siteData.url}/reviews`,
  },
  openGraph: {
    title: `Customer Reviews | ${siteData.name} ${siteData.city}`,
    description: `Read customer reviews and guest experiences for ${siteData.name}, a premium spa in ${siteData.city}.`,
    url: `${siteData.url}/reviews`,
    type: "website",
    images: [
      {
        url: `${siteData.url}/images/smallhero.png`,
        alt: `Customer Reviews | ${siteData.name}`,
      },
    ],
  },
};

const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    rating: 5,
    review:
      "Very clean and peaceful spa. The ambience is premium and the massage service was relaxing. Great place in Agra for wellness.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    rating: 5,
    review:
      "Excellent Thai massage experience. Rooms are hygienic, staff is professional, and the environment feels luxurious.",
  },
  {
    id: 3,
    name: "Priya Singh",
    rating: 5,
    review:
      "Beautiful spa room, calm music, and very comfortable experience. Perfect place to relax after a busy day.",
  },
  {
    id: 4,
    name: "Sandeep Gupta",
    rating: 4,
    review:
      "Good service and nice ambience. The location near Fatehabad Road is also convenient.",
  },
  {
    id: 5,
    name: "Neha Agarwal",
    rating: 5,
    review:
      "One of the best spa experiences in Agra. Clean rooms, soft lighting, and relaxing massage therapy.",
  },
];

export default function ReviewsPage() {
  return (
    <main>
      <section className="relative py-24 text-black" style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
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
            href="https://www.google.com/search?q=Kiyora+Thai+Spa+Agra+reviews"
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
                  “{item.review}”
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