import Hero from "@/components/Hero";
import ServiceCard from "@/components/servicecard";
import BlogCard from "@/components/BlogCard";
import { services } from "@/data/service";
import { blogs } from "@/data/blog";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, Star, Quote } from "lucide-react";


export const metadata = pageMetadata({
  title: siteData.seo.title,
  description: siteData.seo.description,
  imageAlt: `${siteData.name} spa and massage center in Agra`,
  extraKeywords: [
    "spa near Taj Mahal Agra",
    "spa near me Agra",
    "massage near me Agra",
  ],
});


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

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              Premium Services
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Spa & Massage Services in Agra
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-gray-600">
              Experience full body massage, Thai massage, Swedish massage, deep
              tissue massage, hot oil massage, Jacuzzi massage, foot reflexology,
              and aromatherapy at {siteData.name} in {siteData.area},{" "}
              {siteData.city}.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white hover:bg-yellow-500 hover:text-black"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
       {/* Reviews */}
      <section className="bg-white py-20">
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

      {/* Why Choose */}
      <section className="bg-black py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-yellow-500">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Premium Wellness Experience
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sparkles,
                title: "Luxury Ambience",
                text: "Peaceful interiors for a relaxing spa experience.",
              },
              {
                icon: ShieldCheck,
                title: "Hygienic Rooms",
                text: "Clean, private, and comfortable treatment rooms.",
              },
              {
                icon: Heart,
                title: "Expert Therapists",
                text: "Professional wellness care with trained therapists.",
              },
              {
                icon: Star,
                title: "Premium Service",
                text: "A luxury spa experience designed for relaxation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 text-center"
              >
                <item.icon className="mx-auto text-yellow-500" size={42} />
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              Wellness Blog
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Latest Spa Articles
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
            >
              Read More Blogs
            </Link>
          </div>
        </div>
      </section>

     

    </main>
  );
}
