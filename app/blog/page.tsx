import { blogs } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: `Spa & Massage Blog in ${siteData.city} | Wellness Tips in Siddharth Nagar | ${siteData.name}`,

  description:
    `Read spa and massage blogs from ${siteData.name} in Siddharth Nagar, ${siteData.city}. Explore wellness tips, full body massage benefits, Thai massage guides, Swedish massage advice, deep tissue massage tips, hot oil massage, aromatherapy, Jacuzzi spa and foot reflexology articles for people near Fatehabad Road, Tajganj, Agra Cantt and nearby Agra areas.`,

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
    "hot oil massage benefits Agra",
    "aromatherapy massage tips Agra",
    "Jacuzzi spa benefits Agra",
    "foot reflexology benefits Agra",

    "best spa tips Agra",
    "best massage guide Agra",
    "Kiyora Thai Spa blog",
    "Kiyora Thai Spa Agra blog",
  ],
});

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 text-white bg-"  style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        
         {/* Dark Luxury Overlay */}
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          
            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
               Kiyora Thai Spa Blog
            </h1>
         

          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 pl-4 leading-8">
            Discover massage benefits, wellness tips, relaxation techniques,
            and luxury spa experiences in Agra across full body massage, Thai
            massage, Swedish massage, deep tissue massage, hot oil massage,
            Jacuzzi massage, and foot reflexology.
          </p>
        </div>
      </section>

      {/* Blogs */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
