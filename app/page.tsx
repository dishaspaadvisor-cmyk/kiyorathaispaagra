import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/servicecard";
import BlogCard from "@/components/BlogCard";

import { services } from "@/data/service";
import { galleryImages } from "@/data/gallery";
import { blogs } from "@/data/blog";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";

import {
  FaSpa,
  FaShieldHeart,
  FaHeart,
  FaStar,
  FaWhatsapp,
  FaLocationDot,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa6";

/* =========================================================
   PAGE METADATA
========================================================= */

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
    "massage near Agra Cantt",

    "spa near Sadar Bazaar Agra",
    "spa near Taj Mahal Agra",

    "full body massage in Agra",
    "Thai massage in Agra",
    "Swedish massage in Agra",
    "deep tissue massage in Agra",
    "full body oil massage in Agra",
    "Balinese massage in Agra",
    "aromatherapy massage in Agra",
    "Jacuzzi massage in Agra",
    "four hand massage in Agra",
    "foot reflexology in Agra",

    "luxury spa in Agra",
    "premium spa in Agra",
    "wellness center in Agra",
    "massage center in Agra",

    "Kiyora Thai Spa Agra",
  ],
});

/* =========================================================
   REVIEWS
========================================================= */

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
    rating: 5,
    g_icons: "/images/greview.png",
    review:
      "Excellent Thai massage experience. Rooms are hygienic, staff is professional, and the environment feels luxurious.",
  },

  {
    id: 3,
    name: "Priya Singh",
    rating: 5,
    g_icons: "/images/greview.png",
    review:
      "Beautiful spa room, calm music, and a very comfortable experience. A peaceful place to relax after a busy day.",
  },

  {
    id: 4,
    name: "Sandeep Gupta",
    rating: 4,
    g_icons: "/images/greview.png",
    review:
      "Good service and nice ambience. The location near Fatehabad Road is also convenient.",
  },

  {
    id: 5,
    name: "Neha Agarwal",
    rating: 5,
    g_icons: "/images/greview.png",
    review:
      "One of the best spa experiences in Agra. Clean rooms, soft lighting and a relaxing massage experience.",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

export default function HomePage() {
  const localAreas = [
    "Siddharth Nagar",
    "Fatehabad Road",
    "Tajganj",
    "Agra Cantt",
    "Sadar Bazaar",
    "Sanjay Place",
    "Civil Lines",
    "Taj Mahal Area",
  ];

  const homeFaqs = [
    {
      question: "Which spa is located in Siddharth Nagar Agra?",
      answer:
        "Kiyora Thai Spa is located in Siddharth Nagar, Agra on Fatehabad Road. We offer full body massage, Thai massage, Swedish massage, deep tissue massage, oil massage, Jacuzzi massage and other wellness services.",
    },

    {
      question: "Is Kiyora Thai Spa near Fatehabad Road Agra?",
      answer:
        "Yes. Kiyora Thai Spa is located at Ramesh Plaza on Fatehabad Road in Siddharth Nagar, Agra, with convenient access from Tajganj, Agra Cantt and nearby areas.",
    },

    {
      question: "What massage services are available at Kiyora Thai Spa Agra?",
      answer:
        "Our massage services include full body massage, Thai massage, Swedish massage, deep tissue massage, Balinese massage, full body oil massage, four hand massage, Jacuzzi treatments, aromatherapy and foot reflexology.",
    },

    {
      question: "How can I book a massage at Kiyora Thai Spa Agra?",
      answer:
        "You can contact Kiyora Thai Spa directly by phone or WhatsApp to check service availability and request an appointment.",
    },
  ];

  const whyChooseItems = [
    {
      icon: FaSpa,
      title: "Premium Ambience",
      text: "Peaceful interiors designed to create a relaxing spa experience in Agra.",
    },

    {
      icon: FaShieldHeart,
      title: "Hygienic Rooms",
      text: "Clean, private and comfortable treatment rooms prepared for every guest.",
    },

    {
      icon: FaHeart,
      title: "Trained Therapists",
      text: "Professional wellness care and relaxing massage therapies from trained therapists.",
    },

    {
      icon: FaStar,
      title: "Premium Service",
      text: "A comfortable spa experience focused on relaxation, privacy and wellness.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero />

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-[#fffaf2] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-700 sm:text-xs">
              <FaSpa />
              Premium Services
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Spa & Massage Services
              <span className="block text-yellow-500">
                in Agra
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Discover relaxing massage and wellness services at{" "}
              <strong className="font-semibold text-gray-800">
                {siteData.name}
              </strong>{" "}
              in {siteData.area}, {siteData.city}. Choose from full body
              massage, Thai massage, Swedish massage, deep tissue massage,
              Balinese massage, oil massage, Jacuzzi treatments and more.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                priority={index < 2}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center sm:mt-12">
            <Link
              href="/services"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-4 text-sm font-bold text-gray-950 shadow-[0_10px_30px_rgba(234,179,8,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-[0_15px_35px_rgba(234,179,8,0.3)] sm:px-8"
            >
              View All Services

              <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-700 sm:text-xs">
              Our Gallery
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Explore Our
              <span className="block text-yellow-500">
                Spa Ambience
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Explore our spa rooms, relaxing interiors and peaceful wellness
              spaces in Agra.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {galleryImages.slice(0, 6).map((item, index) => (
              <a
                key={item.id}
                href={siteData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${item.title} on WhatsApp`}
                className={`group relative block overflow-hidden rounded-[24px] bg-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.13)] sm:rounded-[28px] ${
                  index === 0
                    ? "h-[360px] sm:col-span-2 sm:h-[440px] lg:h-[500px]"
                    : "h-[300px] sm:h-[340px] lg:h-[380px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Soft Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-white/90">
                    <FaWhatsapp
                      size={16}
                      className="text-[#25D366]"
                    />

                    Enquire on WhatsApp
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Gallery CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 transition hover:text-yellow-600"
            >
              View Complete Gallery

              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCAL AREAS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fcfaf5] py-16 sm:py-20 md:py-24">
        {/* Decorative Elements */}
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-[26px] border border-yellow-100 bg-white/90 px-5 py-10 text-center shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:rounded-[32px] sm:px-10 sm:py-14 md:py-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-700 sm:text-xs">
              <FaLocationDot />

              Local Spa Near You
            </span>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Spa Near Fatehabad Road,
              <span className="block text-yellow-500">
                Tajganj & Agra Cantt
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              {siteData.name} is located in Siddharth Nagar on Fatehabad Road,
              Agra. Our location is convenient for visitors from Tajganj, Agra
              Cantt, Sadar Bazaar, Sanjay Place, Civil Lines and areas near the
              Taj Mahal.
            </p>

            {/* Areas */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:mt-10 sm:gap-3">
              {localAreas.map((area) => (
                <span
                  key={area}
                  className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-800 sm:px-5 sm:py-3 sm:text-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-yellow-500 transition-transform duration-300 group-hover:scale-125" />

                  {area}
                </span>
              ))}
            </div>

            {/* Location CTA */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-yellow-700 transition hover:text-yellow-600"
              >
                View Our Location

                <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REVIEWS
      ===================================================== */}

      <section className="bg-[#faf8f3] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-700 sm:text-xs">
              Customer Reviews
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Relaxing Spa Experience
              <span className="block text-yellow-500">
                in Agra
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Guests choose {siteData.name} for its peaceful ambience,
              comfortable rooms and relaxing massage services in Siddharth
              Nagar, Agra.
            </p>
          </div>

          {/* Review Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {reviews.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)] sm:rounded-[28px] sm:p-7"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 sm:text-xs">
                      Customer Feedback
                    </p>

                    <div className="mt-3 flex gap-1 text-yellow-500">
                      {Array.from({ length: item.rating }).map(
                        (_, index) => (
                          <FaStar key={index} size={16} />
                        )
                      )}
                    </div>
                  </div>

                  {/* Google Icon */}
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm sm:h-11 sm:w-11">
                    <Image
                      src={item.g_icons}
                      alt="Customer review"
                      fill
                      sizes="44px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Quote Icon */}
                <FaQuoteLeft className="mt-6 text-xl text-yellow-200" />

                {/* Review */}
                <p className="mt-3 min-h-[110px] text-sm leading-7 text-gray-600 sm:text-[15px]">
                  {item.review}
                </p>

                <div className="my-5 h-px bg-gray-100 sm:my-6" />

                {/* Customer */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-base font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-lg">
                    {item.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-400">
                      Spa Guest
                    </p>
                  </div>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOGS
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-700 sm:text-xs">
              Wellness Blog
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Spa & Massage Guides
              <span className="block text-yellow-500">
                in Agra
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Explore massage guides, wellness information and helpful articles
              about Thai massage, full body massage, relaxation and spa care.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}
          </div>

          {/* Blog CTA */}
          <div className="mt-10 text-center sm:mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-7 py-4 text-sm font-bold text-gray-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 sm:px-8"
            >
              Read More Blogs

              <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="bg-[#fffdf8] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-700 sm:text-xs">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              A Comfortable Wellness
              <span className="block text-yellow-500">
                Experience in Agra
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Choose {siteData.name} for peaceful ambience, clean spa rooms,
              trained therapists and relaxing wellness services in Siddharth
              Nagar, Agra.
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {whyChooseItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[24px] border border-yellow-100 bg-white p-6 text-center shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200 hover:shadow-[0_20px_45px_rgba(0,0,0,0.09)] sm:rounded-[28px] sm:p-7"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white sm:h-16 sm:w-16">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900 sm:mt-6 sm:text-xl">
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

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-700 sm:text-xs">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Spa & Massage
              <span className="block text-yellow-500">
                in Agra
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Find quick answers about our location, massage services and
              booking options.
            </p>
          </div>

          {/* FAQ Cards */}
          <div className="mx-auto mt-9 max-w-4xl space-y-4 sm:mt-10 sm:space-y-5">
            {homeFaqs.map((faq, index) => (
              <article
                key={faq.question}
                className="rounded-[20px] border border-yellow-100 bg-[#fffaf2] p-5 transition-all duration-300 hover:border-yellow-200 hover:bg-yellow-50 sm:rounded-[24px] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-gray-950">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-base font-bold leading-6 text-gray-900 sm:text-lg">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Need help choosing a massage service?
            </p>

            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={siteData.callLink}
                className="inline-flex h-12 items-center justify-center rounded-full border border-yellow-300 bg-yellow-50 px-6 text-sm font-bold text-gray-900 transition hover:bg-yellow-100"
              >
                Call Kiyora Thai Spa
              </a>

              <a
                href={siteData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white transition hover:bg-[#1fbd5a]"
              >
                <FaWhatsapp size={17} />

                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}