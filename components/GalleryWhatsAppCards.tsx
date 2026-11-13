"use client";

import Image from "next/image";
import { trackGoogleAdsConversionAndNavigate } from "@/src/lib/googleAds";
import { galleryImages } from "@/data/gallery";
import { siteData } from "@/data/site";

export default function GalleryWhatsAppCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {galleryImages.map((item, index) => (
        <a
          key={item.id}
          href={siteData.whatsappLink}
          aria-label={`Enquire about ${item.title} on WhatsApp`}
          onClick={(event) => {
            event.preventDefault();
            trackGoogleAdsConversionAndNavigate(siteData.whatsappLink);
          }}
          className={`group relative block overflow-hidden rounded-[28px] bg-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)] ${
            index === 0
              ? "h-[420px] sm:col-span-2 lg:h-[500px]"
              : "h-[320px] sm:h-[350px] lg:h-[380px]"
          }`}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes={
              index === 0
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-white sm:text-xl">
              {item.title}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-white/90">
              <span className="text-[#25D366]" aria-hidden="true">
                ●
              </span>
              Tap to enquire on WhatsApp
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
