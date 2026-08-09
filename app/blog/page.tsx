import Image from "next/image";
import { blogs } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import { FaBookOpen, FaLocationDot } from "react-icons/fa6";

export const metadata = pageMetadata({
  title: `Spa & Massage Blog in ${siteData.city} | Wellness Tips in Siddharth Nagar | ${siteData.name}`,

  description: `Read spa and massage blogs from ${siteData.name} in Siddharth Nagar, ${siteData.city}. Explore wellness tips, full body massage benefits, Thai massage guides, Swedish massage advice, deep tissue massage tips, hot oil massage, aromatherapy, Jacuzzi spa and foot reflexology articles for people near Fatehabad Road, Tajganj, Agra Cantt and nearby Agra areas.`,

  path: "/blog",

  image: "/images/smallhero.png",

  imageAlt: `Spa and massage blog by ${siteData.name} in Siddharth Nagar Agra`,

  extraKeywords: [
    "spa blog Agra",
    "massage blog Agra",
    "spa and massage blog Agra",
    "wellness blog Agra",
    "wellness tips Agra",
    "massage guide Agra",
    "spa guide Agra",
    "spa blog in Siddharth Nagar Agra",
    "massage blog in Siddharth Nagar Agra",
    "wellness tips in Siddharth Nagar Agra",
    "spa tips near Fatehabad Road Agra",
    "massage guide near Fatehabad Road Agra",
    "spa blog near Tajganj Agra",
    "massage tips near Tajganj Agra",
    "spa blog near Agra Cantt",
    "wellness tips near Taj Mahal Agra",
    "full body massage benefits Agra",
    "Thai massage benefits Agra",
    "Swedish massage guide Agra",
    "deep tissue massage tips Agra",
    "Jacuzzi spa benefits Agra",
    "foot reflexology benefits Agra",
    "Kiyora Thai Spa blog",
    "Kiyora Thai Spa Agra blog",
  ],
});

export default function BlogPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[430px] overflow-hidden">
        <Image
          src="/images/smallhero.png"
          alt={`${siteData.name} spa and massage blog`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/5" />

        <div className="container relative z-10 mx-auto flex min-h-[430px] items-center px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <FaBookOpen />
              Wellness Blog
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Spa & Wellness
              <span className="block text-yellow-400">Tips in Agra</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
              Simple guides about massage, relaxation and wellness from{" "}
              {siteData.name}.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/80">
              <FaLocationDot className="text-yellow-400" />
              Siddharth Nagar, Agra
            </div>
          </div>
        </div>
      </section>

      {/* Blog Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
            Latest Articles
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Massage & Wellness Guides
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Explore useful articles about massage therapies, relaxation and
            premium spa experiences in Agra.
          </p>
        </div>
      </section>

      {/* Blogs */}
      <section className="bg-[#fffaf2] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}