import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import { FaImages, FaLocationDot } from "react-icons/fa6";

export const metadata = pageMetadata({
  title: `Spa Gallery in ${siteData.city} | Massage Rooms & Wellness Photos | ${siteData.name}`,

  description: `View the spa gallery of ${siteData.name} in Siddharth Nagar, ${siteData.city}. Explore spa rooms, massage therapy setup, Jacuzzi ambience, hot oil massage space, aromatherapy area, relaxation rooms and wellness interiors near Fatehabad Road, Tajganj and Agra Cantt.`,

  path: "/gallery",

  image: "/images/smallhero.png",

  imageAlt: `${siteData.name} spa gallery, massage rooms and wellness interiors in Agra`,

  extraKeywords: [
    "spa gallery Agra",
    "massage room Agra",
    "spa photos Agra",
    "spa images Agra",
    "massage therapy room Agra",
    "spa interior Agra",
    "luxury spa gallery Agra",
    "wellness center photos Agra",
    "Jacuzzi spa photos Agra",
    "hot oil massage room Agra",
    "aromatherapy setup Agra",
    "spa gallery in Siddharth Nagar Agra",
    "massage room near Fatehabad Road Agra",
    "spa photos near Tajganj Agra",
    "spa near Taj Mahal photos",
    "Kiyora Thai Spa gallery",
    "Kiyora Thai Spa Agra photos",
  ],
});

export default function GalleryPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[430px] overflow-hidden">
        <Image
          src="/images/smallhero.png"
          alt={`${siteData.name} spa gallery in Agra`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light overlay - image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/5" />

        <div className="container relative z-10 mx-auto flex min-h-[430px] items-center px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <FaImages />
              Spa Gallery
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Discover Our
              <span className="block text-yellow-400">Spa Ambience</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
              Explore our premium rooms, relaxing interiors and wellness
              spaces.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/80">
              <FaLocationDot className="text-yellow-400" />
              Siddharth Nagar, Agra
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-600">
            Inside Kiyora Thai Spa
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            A Space Designed for Relaxation
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Take a closer look at our spa rooms, wellness spaces and peaceful
            ambience in Agra.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#fffaf2] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item, index) => (
              <article
                key={item.id}
                className={`group relative overflow-hidden rounded-[28px] bg-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.08)] ${
                  index === 0
                    ? "h-[420px] sm:col-span-2 lg:h-[500px]"
                    : "h-[320px] sm:h-[350px] lg:h-[380px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Only bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h2 className="text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}