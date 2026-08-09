import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { siteData } from "@/data/site";

type Service = {
  id: number;
  title: string;
  slug: string;
  duration?: string;
  image: string;
  localKeywords?: string[];
};

type ServiceCardProps = {
  service: Service;
  priority?: boolean;
};

export default function ServiceCard({
  service,
  priority = false,
}: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(0,0,0,0.14)]">
      
      {/* Image */}
      <Link
        href={`/services/${service.slug}`}
        aria-label={`${service.title} in Agra`}
        className="relative block h-[320px] w-full overflow-hidden sm:h-[350px] lg:h-[380px]"
      >
        <Image
          src={service.image}
          alt={`${service.title} in Siddharth Nagar Agra at ${siteData.name}`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        {service.duration && (
          <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/45 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            {service.duration}
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="mb-2 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300">
            Premium Spa Service
          </span>

          <h3 className="text-2xl font-bold leading-tight text-white">
            {service.title}
          </h3>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <p className="text-sm leading-6 text-neutral-600">
          Experience {service.title} at{" "}
          <span className="font-semibold text-neutral-900">
            {siteData.name}
          </span>{" "}
          in {siteData.area}, {siteData.city}. Relax in a peaceful and premium
          spa environment with professional care.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={siteData.callLink}
            aria-label={`Call now for ${service.title} in Agra`}
            className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            <FaPhoneAlt className="text-xs" />
            Call Now
          </a>

          <a
            href={siteData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp booking for ${service.title} in Agra`}
            className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 text-sm font-semibold text-white transition hover:bg-[#1fbd5a]"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>
        </div>

        <a
          href={siteData.online_booking}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book ${service.title} appointment in Agra`}
          className="mt-3 flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#e7b73f] to-[#f4d474] px-4 text-sm font-bold text-neutral-950 shadow-sm transition hover:shadow-md"
        >
          Book Appointment
        </a>

        <Link
          href={`/services/${service.slug}`}
          aria-label={`Read more about ${service.title} in Agra`}
          className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-neutral-700 transition hover:text-yellow-600"
        >
          View Service Details
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}