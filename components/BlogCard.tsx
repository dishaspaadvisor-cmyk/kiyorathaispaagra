import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";

type Blog = {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(0,0,0,0.11)]">
      
      {/* Image */}
      <Link
        href={`/blog/${blog.slug}`}
        className="relative block h-[280px] w-full overflow-hidden sm:h-[310px]"
        aria-label={blog.title}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Soft bottom gradient only */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

        {/* Category */}
        <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-yellow-700 shadow-sm backdrop-blur-md">
          Wellness Blog
        </span>
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-7">
        {/* Date */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
          <FaCalendarDays className="text-yellow-600" />
          {new Date(blog.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>

        {/* Title */}
        <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
          <Link
            href={`/blog/${blog.slug}`}
            className="transition-colors duration-300 hover:text-yellow-700"
          >
            {blog.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-600">
          {blog.excerpt}
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-100" />

        {/* Read More */}
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 transition-colors duration-300 hover:text-yellow-700"
        >
          Read Article

          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}