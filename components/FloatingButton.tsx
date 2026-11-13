"use client";

import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { siteData } from "@/data/site";
import { trackGoogleAdsConversionAndNavigate } from "@/src/lib/googleAds";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col gap-3 sm:bottom-6 sm:right-6">
      
      {/* WhatsApp */}
      <a
        href={siteData.whatsappLink}
        aria-label="Chat on WhatsApp"
        onClick={(event) => {
          event.preventDefault();
          trackGoogleAdsConversionAndNavigate(siteData.whatsappLink);
        }}
        className="group flex items-center justify-end"
      >
        {/* Desktop Label */}
        <span className="mr-3 hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow-lg ring-1 ring-gray-100 transition-all duration-300 lg:block lg:translate-x-3 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
          WhatsApp
        </span>

        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 sm:h-14 sm:w-14">
          <FaWhatsapp className="text-xl sm:text-2xl" />
        </span>
      </a>

      {/* Call */}
      <a
        href={`tel:${siteData.phone}`}
        aria-label="Call Now"
        onClick={(event) => {
          event.preventDefault();
          trackGoogleAdsConversionAndNavigate(siteData.callLink);
        }}
        className="group flex items-center justify-end"
      >
        {/* Desktop Label */}
        <span className="mr-3 hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow-lg ring-1 ring-gray-100 transition-all duration-300 lg:block lg:translate-x-3 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
          Call Now
        </span>

        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-gray-950 shadow-[0_8px_25px_rgba(234,179,8,0.35)] transition-all duration-300 hover:scale-105 hover:bg-yellow-400 active:scale-95 sm:h-14 sm:w-14">
          <FaPhone className="text-lg sm:text-xl" />
        </span>
      </a>
    </div>
  );
}