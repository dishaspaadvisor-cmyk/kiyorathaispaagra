import type { Metadata } from "next";
import { blogs } from "@/data/blog";
import { siteData } from "@/data/site";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: `The requested blog article was not found on ${siteData.name}.`,
      alternates: {
        canonical: `${siteData.url}/blog`,
      },
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: `${blog.title}, Spa Blog Agra, Thai Massage Blog, Wellness Blog`,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `${siteData.url}/blog/${blog.slug}`,
      type: "article",
      images: [
        {
          url: `${siteData.url}${blog.image}`,
          alt: blog.title,
        },
      ],
    },
    alternates: {
      canonical: `${siteData.url}/blog/${blog.slug}`,
    },
  };
}

export default async function BlogDetailsPage({ params }: Params) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs
    .filter((item) => item.id !== blog.id)
    .slice(0, 3);

  return (
    <main>
      {/* Hero Image */}
      <section className="relative h-125 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4">
            <span className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium text-black">
              Wellness Blog
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold text-white md:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-4 text-gray-300">
              {new Date(blog.date).toLocaleDateString("en-IN")}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-9 text-gray-700">
              {blog.content}
            </p>

            <h2>Why Choose {siteData.name}?</h2>

            <p>
              Located in {siteData.area}, {siteData.city}, {siteData.state},
              {siteData.name} offers premium wellness services, luxury spa
              treatments, and professional massage therapies.
            </p>

            <h2>Benefits</h2>

            <ul>
              <li>Stress Relief</li>
              <li>Muscle Relaxation</li>
              <li>Improved Blood Circulation</li>
              <li>Better Sleep Quality</li>
              <li>Luxury Wellness Experience</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-3xl bg-black p-10 text-center text-white">
            <h3 className="text-3xl font-bold">Ready to Relax?</h3>

            <p className="mt-4 text-gray-300">
              Book your spa appointment now and experience complete wellness at {siteData.name}.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={siteData.callLink}
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Call Now
              </a>
              <a
                href={siteData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Related Articles
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {relatedBlogs.map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.slug}`}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}