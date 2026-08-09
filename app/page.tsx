import Hero from "@/components/Hero";
import ServiceCard from "@/components/servicecard";
import BlogCard from "@/components/BlogCard";
import { services } from "@/data/service";
import { galleryImages } from "@/data/gallery";
import { blogs } from "@/data/blog";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, Star, Quote } from "lucide-react";
import Image from "next/image";


export const metadata = pageMetadata({
  title: siteData.seo.title,

  description: siteData.seo.description,

  path: "/",

  image: "/images/smallhero.png",

  imageAlt: `${siteData.name} premium spa and massage center in Siddharth Nagar Agra near Fatehabad Road`,

  extraKeywords: [
    "spa in Agra",
    "best spa in Agra",
    "massage in Agra",
    "best massage in Agra",
    "spa near me Agra",
    "massage near me Agra",

    "spa in Siddharth Nagar Agra",
    "massage in Siddharth Nagar Agra",
    "spa near Siddharth Nagar Agra",

    "spa near Fatehabad Road Agra",
    "massage near Fatehabad Road Agra",
    "spa near Tajganj Agra",
    "massage near Tajganj Agra",
    "spa near Agra Cantt",
    "spa near Sadar Bazaar Agra",
    "spa near Taj Mahal Agra",

    "full body massage in Agra",
    "Thai massage in Agra",
    "Swedish massage in Agra",
    "deep tissue massage in Agra",
    "hot oil massage in Agra",
    "aromatherapy massage in Agra",
    "Jacuzzi massage in Agra",
    "foot reflexology in Agra",

    "luxury spa in Agra",
    "premium spa in Agra",
    "wellness center in Agra",
    "massage center in Agra",
    "Kiyora Thai Spa Agra",
  ],
});

const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    rating: 5,
    g_icons: "/images/greview.png",
    review:
      "Very clean and peaceful spa. The ambience is premium and the massage service was relaxing. Great place in Agra for wellness.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    g_icons: "/images/greview.png",
    rating: 5,
    review:
      "Excellent Thai massage experience. Rooms are hygienic, staff is professional, and the environment feels luxurious.",
  },
  {
    id: 3,
    name: "Priya Singh",
    g_icons: "/images/greview.png",
    rating: 5,
    review:
      "Beautiful spa room, calm music, and very comfortable experience. Perfect place to relax after a busy day.",
  },
  {
    id: 4,
    name: "Sandeep Gupta",
    g_icons: "/images/greview.png",
    rating: 4,
    review:
      "Good service and nice ambience. The location near Fatehabad Road is also convenient.",
  },
  {
    id: 5,
    name: "Neha Agarwal",
    g_icons: "/images/greview.png",
    rating: 5,
    review:
      "One of the best spa experiences in Agra. Clean rooms, soft lighting, and relaxing massage therapy.",
  },
];

export default function HomePage() {
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

  const homeFaqs = [
    {
      question: "Which is the best spa in Siddharth Nagar Agra?",
      answer:
        "Kiyora Thai Spa is a premium spa and massage center in Siddharth Nagar, Agra, offering full body massage, Thai massage, Swedish massage, deep tissue massage, hot oil massage, Jacuzzi massage, aromatherapy and foot reflexology.",
    },
    {
      question: "Is Kiyora Thai Spa near Fatehabad Road Agra?",
      answer:
        "Yes, Kiyora Thai Spa is located at Ramesh Plaza, Fatehabad Road, Siddharth Nagar, Agra, near Tajganj and Agra Cantt.",
    },
    {
      question: "What massage services are available at Kiyora Thai Spa Agra?",
      answer:
        "Our services include full body massage, Thai massage, Swedish massage, deep tissue massage, hot oil massage, aromatherapy massage, Jacuzzi massage and foot reflexology.",
    },
  ];

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

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              Experience full body massage, Thai massage, Swedish massage, deep
              tissue massage, hot oil massage, Jacuzzi massage, foot reflexology
              and aromatherapy at {siteData.name} in {siteData.area},{" "}
              {siteData.city}. Our spa is a convenient choice for customers
              searching for spa near Fatehabad Road, massage near Tajganj and
              wellness center near Agra Cantt.
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

      {/* Gallery Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
              Our Gallery
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Explore Our Spa Ambience
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Take a look at our relaxing interiors, premium treatment rooms and
              peaceful wellness spaces.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative h-[300px] overflow-hidden rounded-[26px] border border-gray-100 bg-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.07)] sm:h-[340px] lg:h-[380px]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Only bottom gradient - image stays visible */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="relative overflow-hidden bg-[#fcfaf5] py-20 md:py-28">
        {/* Decorative Background */}
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-yellow-100 bg-white/90 px-6 py-12 text-center shadow-[0_20px_70px_rgba(0,0,0,0.07)] backdrop-blur-sm sm:px-10 md:py-16">

            {/* Small Heading */}
            <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
              Local Spa Near You
            </span>

            {/* Heading */}
            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Spa Near Fatehabad Road, Tajganj & Agra Cantt
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Located in Siddharth Nagar, Kiyora Thai Spa serves customers from
              Fatehabad Road, Tajganj, Agra Cantt, Sadar Bazaar, Sanjay Place,
              Civil Lines and nearby areas around the Taj Mahal.
            </p>

            {/* Areas */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {localAreas.map((area) => (
                <span
                  key={area}
                  className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-800 hover:shadow-md"
                >
                  <span className="h-2 w-2 rounded-full bg-yellow-500 transition-transform duration-300 group-hover:scale-125" />
                  {area}
                </span>
              ))}
            </div>

            {/* Bottom Highlight */}
            <div className="mx-auto mt-10 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      {/* Reviews */}
      <section className="bg-[#faf8f3] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
              Customer Reviews
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Trusted Spa Experience in Agra
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Our customers choose Kiyora Thai Spa for relaxing massage, hygienic
              rooms, peaceful ambience and professional spa services in Siddharth
              Nagar, Agra.
            </p>
          </div>

          {/* Review Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-8"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Google Review
                    </p>

                    <div className="mt-3 flex gap-1 text-yellow-500">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <Star key={index} size={18} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  {/* Google Icon */}
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
                    <Image
                      src={item.g_icons}
                      alt="Google review"
                      fill
                      sizes="44px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Review */}
                <p className="mt-6 min-h-[120px] text-[15px] leading-7 text-gray-600">
                  &ldquo;{item.review}&rdquo;
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-100" />

                {/* Customer */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-lg font-bold text-white shadow-sm">
                    {item.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>

                    <p className="mt-1 text-xs font-medium text-gray-400">
                      Verified Customer
                    </p>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 group-hover:w-full" />
              </article>
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
              Latest Spa & Massage Articles in Agra
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              Read helpful wellness articles, massage guides, Thai massage tips,
              full body massage benefits and spa care advice from Kiyora Thai
              Spa Agra.
            </p>
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
      {/* Why Choose */}
      <section className="bg-[#fffdf8] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Premium Wellness Experience in Agra
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Choose {siteData.name} for luxury ambience, hygienic spa rooms,
              trained therapists and relaxing massage therapies in Siddharth
              Nagar, Agra.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sparkles,
                title: "Luxury Ambience",
                text: "Peaceful interiors for a relaxing spa experience in Agra.",
              },
              {
                icon: ShieldCheck,
                title: "Hygienic Rooms",
                text: "Clean, private and comfortable treatment rooms.",
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
                className="group rounded-[28px] border border-yellow-100 bg-white p-7 text-center shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-200 hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 transition duration-300 group-hover:bg-yellow-500 group-hover:text-white">
                  <item.icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              FAQ
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Spa & Massage in Agra
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-5">
            {homeFaqs.map((faq) => (
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
