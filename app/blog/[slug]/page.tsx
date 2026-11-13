import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  FaCalendarDays,
  FaUser,
  FaPhone,
  FaWhatsapp,
  FaArrowRight,
  FaCheck,
  FaSpa,
} from "react-icons/fa6";

import { blogs } from "@/data/blog";
import { siteData } from "@/data/site";
import { absoluteUrl, jsonLd } from "@/data/seo";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) notFound();

  const pageUrl = `${siteData.url}/blog/${blog.slug}`;

  return {
    title: {
      absolute: `${blog.title} | ${siteData.name}`,
    },

    description: blog.excerpt,

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: pageUrl,
      siteName: siteData.name,
      locale: "en_IN",
      type: "article",

      images: [
        {
          url: absoluteUrl(blog.image),
          width: 1200,
          height: 630,
          alt: `${blog.title} by ${siteData.name}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [absoluteUrl(blog.image)],
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

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "BlogPosting",

  "@id": `${siteData.url}/blog/${blog.slug}#article`,

  headline: blog.title,

  description: blog.excerpt,

  image: absoluteUrl(blog.image),

  url: absoluteUrl(`/blog/${blog.slug}`),

  datePublished: blog.date,

  dateModified: blog.date,

  author: {
    "@type": "Organization",
    name: blog.author || siteData.name,
    url: siteData.url,
  },

  publisher: {
    "@id": `${siteData.url}/#business`,
  },

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": absoluteUrl(`/blog/${blog.slug}`),
  },
};

  return (
    <main className="overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden md:min-h-[600px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Lighter overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/5" />

        <div className="container relative z-10 mx-auto flex min-h-[520px] items-end px-4 pb-16 pt-24 md:min-h-[600px] md:pb-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <FaSpa className="text-yellow-400" />
              Wellness Blog
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {blog.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <FaCalendarDays className="text-yellow-400" />

                {new Date(blog.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <span className="inline-flex items-center gap-2">
                <FaUser className="text-yellow-400" />
                {blog.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-4xl">
            {/* Intro */}
            <p className="border-l-4 border-yellow-400 pl-5 text-lg font-medium leading-8 text-gray-700 sm:text-xl sm:leading-9">
              {blog.excerpt}
            </p>

            {/* Main Content */}
            <div className="mt-10">
              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                {blog.content}
              </p>

              {/* Divider */}
              <div className="my-12 h-px bg-gray-100" />

              {/* Why Choose */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                  Premium Wellness
                </span>

                <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Why Choose {siteData.name}?
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  Located in {siteData.area}, {siteData.city},{" "}
                  {siteData.name} offers a peaceful spa environment,
                  comfortable treatment rooms and professional massage
                  therapies designed for relaxation.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-12 rounded-[28px] border border-yellow-100 bg-[#fffaf2] p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Benefits of Massage Therapy
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Stress Relief",
                    "Muscle Relaxation",
                    "Improved Body Comfort",
                    "Better Relaxation",
                    "Refreshing Wellness Experience",
                    "Peaceful Mind & Body",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                        <FaCheck size={12} />
                      </span>

                      <span className="text-sm font-semibold text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 overflow-hidden rounded-[30px] border border-yellow-200 bg-[#fffaf2] p-7 text-center sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                Book Your Session
              </span>

              <h3 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to Relax?
              </h3>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                Book your spa appointment and enjoy a peaceful wellness
                experience at {siteData.name}.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={siteData.callLink}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-yellow-300 bg-white px-7 text-sm font-bold text-gray-900 transition hover:bg-yellow-50"
                >
                  <FaPhone size={14} />
                  Call Now
                </a>

                <a
                  href={siteData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-bold text-white transition hover:bg-[#1fbd5a]"
                >
                  <FaWhatsapp size={17} />
                  WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="bg-[#fffaf2] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
              Keep Reading
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Related Articles
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedBlogs.map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.slug}`}
                className="group overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.1)]"
              >
                {/* Image */}
                <div className="relative h-[230px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <FaCalendarDays className="text-yellow-600" />

                    {new Date(item.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>

                  <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-snug text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                    {item.excerpt}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-yellow-700">
                    Read Article

                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}