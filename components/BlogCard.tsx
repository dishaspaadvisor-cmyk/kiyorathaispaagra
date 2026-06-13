import Image from "next/image";
import Link from "next/link";

type Blog = {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
          {new Date(blog.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>

        <h3 className="mt-4 line-clamp-2 text-2xl font-bold text-gray-900">
          {blog.title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
          {blog.excerpt}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-600 transition hover:text-yellow-500"
        >
          Read More
          <span>&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
