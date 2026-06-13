import { blogs } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: `Spa & Massage Blog in ${siteData.city} | ${siteData.name}`,
  description:
    "Read wellness articles, massage guides, Thai massage tips, full body massage benefits, deep tissue massage advice, spa treatments and relaxation tips from Kiyora Thai Spa Agra.",
  path: "/blog",
  image: "/images/smallhero.png",
  imageAlt: "Spa and massage blog by Kiyora Thai Spa Agra",
  extraKeywords: ["spa blog Agra", "massage guide Agra", "wellness tips Agra"],
});

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 text-black" style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container relative z-10 mx-auto px-4 text-center">
          
            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
               Kiyora Thai Spa Blog
            </h1>
         

          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 border-yellow-500 pl-4 leading-8 text-yellow-400">
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
