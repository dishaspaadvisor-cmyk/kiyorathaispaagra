"use client";

import { useEffect, useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { siteData } from "@/data/site";
import { trackGoogleAdsConversionAndNavigate } from "@/src/lib/googleAds";

const desktopHeroVideo = "/videos/hero-desktop.mp4";
const mobileHeroVideo = "/videos/hero-mobile.mp4";

export default function Hero() {
  const [videoSource, setVideoSource] = useState<string>();

  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 768px)");
    const updateVideoSource = () => {
      setVideoSource(
        desktopViewport.matches ? desktopHeroVideo : mobileHeroVideo,
      );
    };

    updateVideoSource();
    desktopViewport.addEventListener("change", updateVideoSource);

    return () => {
      desktopViewport.removeEventListener("change", updateVideoSource);
    };
  }, []);

  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={videoSource}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/kiyorathaispa-poster.webp"
        aria-hidden="true"
      >
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/5 md:from-black/50 md:via-black/20" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[88svh] items-end px-4 pb-16 pt-24 sm:items-center sm:pb-20 md:py-24">
        <div className="max-w-2xl">
          {/* Label */}
          <h1 className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md sm:mb-5 sm:px-4 sm:text-sm">
            <FaStar className="text-yellow-400" />
            Premium Spa & Massage in Agra
          </h1>

       

          {/* Short Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
            Premium massage therapies, private rooms and peaceful wellness at{" "}
            {siteData.name}.
          </p>

          {/* Location */}
          <div className="mt-4 flex max-w-xl items-start gap-2 text-xs text-white/80 sm:mt-5 sm:text-sm">
            <FaLocationDot className="mt-0.5 shrink-0 text-yellow-400" />

            <span>
              Siddharth Nagar, Fatehabad Road, Agra
            </span>
          </div>

          {/* CTA */}
          <div className="mt-6 flex gap-3 sm:mt-8">
            <a
              href={siteData.callLink}
              onClick={(event) => {
                event.preventDefault();
                trackGoogleAdsConversionAndNavigate(siteData.callLink);
              }}
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-yellow-400 px-4 text-xs font-bold text-gray-950 shadow-lg transition-all duration-300 hover:bg-yellow-300 sm:h-12 sm:flex-none sm:px-6 sm:text-sm"
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
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-gray-950 sm:h-12 sm:flex-none sm:px-6 sm:text-sm"
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