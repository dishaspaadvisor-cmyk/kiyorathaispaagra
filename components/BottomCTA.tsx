"use client";

"use client";

import { FaPhone, FaCalendarCheck } from "react-icons/fa6";
import { siteData } from "@/data/site";
import { trackGoogleAdsConversionAndNavigate } from "@/src/lib/googleAds";

export default function BottomCTA() {
  return (
    <section className="border-y border-yellow-100 bg-[#fffaf0] px-4 py-12 md:py-14">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-7 rounded-[30px] border border-yellow-200 bg-white px-6 py-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:flex-row md:px-10 md:py-10 md:text-left">
          
          {/* Content */}
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
              Relax • Refresh • Rejuvenate
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Book Your Luxury Spa Session
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              Relax, refresh, and rejuvenate with a premium wellness experience
              at {siteData.name}.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={siteData.callLink}
              onClick={(event) => {
                event.preventDefault();
                trackGoogleAdsConversionAndNavigate(siteData.callLink);
              }}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-6 text-sm font-bold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-100"
            >
              <FaPhone size={15} />
              Call Now
            </a>

            <a
              href={siteData.bookingLink}
              onClick={(event) => {
                event.preventDefault();
                trackGoogleAdsConversionAndNavigate(siteData.bookingLink);
              }}
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-7 text-sm font-bold text-gray-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <FaCalendarCheck size={16} />
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}