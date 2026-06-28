import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

type Service = {
  id: number;
  title: string;
  slug: string;
  duration?: string;
  image: string;
  description: string;
  localKeywords?: string[];
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <Link href={`/services/${service.slug}`} aria-label={`${service.title} in Agra`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={service.image}
            alt={`${service.title} in Siddharth Nagar Agra at ${siteData.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-yellow-600">
          Spa Service in Agra
        </span>

        <h3 className="mt-2 text-xl font-bold text-gray-900">
          <Link
            href={`/services/${service.slug}`}
            className="transition-colors hover:text-yellow-500"
          >
            {service.title} in Agra
          </Link>
        </h3>

        {service.duration && (
          <p className="mt-2 text-sm font-semibold text-gray-500">
            Duration: {service.duration}
          </p>
        )}

        <p className="mt-3 line-clamp-4 leading-7 text-gray-600">
          {service.description}
        </p>

        <p className="mt-4 text-sm leading-6 text-gray-500">
          Available at {siteData.name} in {siteData.area}, {siteData.city}, near
          Fatehabad Road, Tajganj and Agra Cantt.
        </p>

        <div className="mt-6">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={siteData.callLink}
              className="flex h-12 items-center justify-center rounded-xl bg-black px-4 text-sm font-semibold text-white transition hover:bg-gray-900"
              aria-label={`Call now for ${service.title} in Agra`}
            >
              Call Now
            </a>

            <a
              href={siteData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-xl bg-green-500 px-4 text-sm font-semibold text-white transition hover:bg-green-600"
              aria-label={`WhatsApp booking for ${service.title} in Agra`}
            >
              WhatsApp
            </a>
          </div>

          <a
            href={siteData.online_booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-yellow-500 px-4 text-sm font-semibold text-black transition hover:bg-yellow-400"
            aria-label={`Book ${service.title} appointment in Agra`}
          >
            Book Appointment
          </a>

          <Link
            href={`/services/${service.slug}`}
            className="mt-4 block text-center text-sm font-semibold text-gray-800 transition hover:text-yellow-600"
            aria-label={`Read more about ${service.title} in Agra`}
          >
            View Service Details
          </Link>
        </div>
      </div>
    </article>
  );
}