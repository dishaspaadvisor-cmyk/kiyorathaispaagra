"use client";

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaXmark,
  FaGift,
  FaPercent,
} from "react-icons/fa6";
import { siteData } from "@/data/site";
import { trackGoogleAdsConversionAndNavigate } from "@/src/lib/googleAds";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // First popup after 35 seconds
    const firstTimer = setTimeout(() => {
      setIsOpen(true);
    }, 35000);

    // Show again every 35 seconds
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 35000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-3 py-4 backdrop-blur-[2px] sm:px-4">
      {/* Popup */}
      <div className="relative max-h-[92vh] w-full max-w-[900px] overflow-y-auto rounded-[24px] border border-yellow-100 bg-white shadow-[0_25px_90px_rgba(0,0,0,0.22)] sm:rounded-[28px]">
        {/* Close */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close offer popup"
          className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-md transition hover:bg-yellow-50 sm:h-10 sm:w-10"
        >
          <FaXmark size={17} />
        </button>

        <div className="grid md:grid-cols-[1.05fr_0.95fr]">
          {/* Image */}
          <div className="relative h-[190px] overflow-hidden sm:h-[260px] md:h-auto md:min-h-[500px]">
            <Image
              src="/images/popup.png"
              alt={`Spa service discount at ${siteData.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Soft Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Offer Badge */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[11px] font-bold text-gray-900 shadow-lg backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-4 sm:text-sm">
              <FaGift className="text-yellow-500" />
              Service Offer
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-yellow-700 sm:px-4 sm:text-xs">
              <FaPercent />
              Current Discount
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:mt-5 sm:text-4xl">
              Get
              <span className="block text-yellow-500">
                20% OFF
              </span>
              <span className="block text-lg sm:text-xl">
                Spa Services
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600 sm:leading-7">
              Ask us about the 20% discount on services at{" "}
              <span className="font-semibold text-gray-900">
                {siteData.name}
              </span>
              .
            </p>

            {/* Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
              <a
                href={siteData.callLink}
                onClick={(event) => {
                  event.preventDefault();
                  trackGoogleAdsConversionAndNavigate(siteData.callLink);
                }}
                className="flex h-11 items-center justify-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-3 text-xs font-bold text-gray-900 transition-all duration-300 hover:bg-yellow-100 sm:h-12 sm:px-4 sm:text-sm"
                aria-label="Call now to book massage"
              >
                <FaPhone size={13} />
                Call Now
              </a>

              <a
                href={siteData.whatsappLink}
                onClick={(event) => {
                  event.preventDefault();
                  trackGoogleAdsConversionAndNavigate(siteData.whatsappLink);
                }}
                className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#1fbd5a] sm:h-12 sm:px-4 sm:text-sm"
                aria-label="Book massage on WhatsApp"
              >
                <FaWhatsapp size={17} />
                WhatsApp
              </a>
            </div>

            <p className="mt-4 text-center text-[10px] leading-4 text-gray-400 sm:mt-5 sm:text-[11px]">
              Offer availability may vary. Contact us for current booking
              details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}