import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: `Spa Gallery in ${siteData.city} | ${siteData.name}`,
  description: `View spa rooms, massage therapy setup, Jacuzzi ambience, hot oil massage space, aromatherapy setup and wellness gallery of ${siteData.name} in ${siteData.city}.`,
  path: "/gallery",
  image: "/images/smallhero.png",
  imageAlt: `${siteData.name} spa gallery in Agra`,
  extraKeywords: ["spa gallery Agra", "massage room Agra", "spa photos Agra"],
});

export default function GalleryPage() {
  return (
    <main>
      <section className="relative py-24 text-black" style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-500">
            Spa Gallery
          </span>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Our Gallery
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 border-yellow-500 pl-4 leading-8 text-yellow-400">
            Discover luxury spa rooms, tranquil ambience, massage therapy
            spaces, and rejuvenating wellness experiences at {siteData.name} in
            {siteData.city}.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative h-80 overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/45" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-xl font-bold text-white">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
