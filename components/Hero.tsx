import {
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/kiyorathaispa.png"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/5" />

      {/* Bottom Soft Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[88svh] items-center px-4 py-24">
        <div className="max-w-2xl">
          {/* Small Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md sm:text-sm">
            <FaStar className="text-yellow-400" />
            Premium Spa & Massage in Agra
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Relax. Refresh.
            <span className="block text-yellow-400">Feel Your Best.</span>
          </h1>

          {/* Short Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
            Premium massage therapies, private rooms and a peaceful spa
            experience at {siteData.name}.
          </p>

          {/* Location */}
          <div className="mt-5 flex max-w-xl items-start gap-2 text-sm text-white/80">
            <FaLocationDot className="mt-1 shrink-0 text-yellow-400" />

            <span>
              Siddharth Nagar, Fatehabad Road, Agra
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteData.callLink}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 text-sm font-bold text-gray-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              <FaPhone size={14} />
              Call Now
            </a>

            <a
              href={siteData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-gray-950"
            >
              <FaWhatsapp size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}