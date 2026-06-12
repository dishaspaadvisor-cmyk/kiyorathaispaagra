import { blogs } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import { siteData } from "@/data/site";

export const metadata = {
  title: "Spa Blog | Kiyora Thai Spa Agra",
  description:
    "Read wellness articles, Thai massage guides, spa treatments, relaxation tips, and health benefits from Kiyora Thai Spa Agra.",
  alternates: {
    canonical: `${siteData.url}/blog`,
  },
  openGraph: {
    title: "Spa Blog | Kiyora Thai Spa Agra",
    description:
      "Read wellness articles, Thai massage guides, spa treatments, relaxation tips, and health benefits from Kiyora Thai Spa Agra.",
    url: `${siteData.url}/blog`,
    type: "website",
    images: [
      {
        url: `${siteData.url}/images/smallhero.png`,
        alt: "Spa Blog - Kiyora Thai Spa",
      },
    ],
  },
};

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
            and luxury spa experiences in Agra.
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