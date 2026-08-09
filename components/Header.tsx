"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaBars,
  FaXmark,
  FaPhone,
  FaCalendarCheck,
  FaWhatsapp,
} from "react-icons/fa6";
import { siteData } from "@/data/site";
import { trackGoogleAdsConversionAndNavigate } from "@/src/lib/googleAds";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex min-h-[82px] items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="Kiyora Thai Spa Agra"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-yellow-200 bg-white shadow-sm">
              <Image
                src="/logo.png"
                alt="Kiyora Thai Spa Agra"
                fill
                priority
                sizes="56px"
                className="object-contain p-1"
              />
            </div>

            <div className="leading-tight">
              <p className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                Kiyora Thai Spa
              </p>

              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.28em] text-yellow-600">
                Agra
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative py-2 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-yellow-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={siteData.callLink}
              aria-label="Call Kiyora Thai Spa"
              onClick={(event) => {
                event.preventDefault();
                trackGoogleAdsConversionAndNavigate(siteData.callLink);
              }}
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700"
            >
              <FaPhone size={15} />
              Call
            </a>

            <a
              href={siteData.whatsappLink}
              aria-label="WhatsApp Kiyora Thai Spa"
              onClick={(event) => {
                event.preventDefault();
                trackGoogleAdsConversionAndNavigate(siteData.whatsappLink);
              }}
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1fbd5a]"
            >
              <FaWhatsapp size={17} />
              WhatsApp
            </a>

            <a
              href={siteData.bookingLink}
              aria-label="Book appointment"
              onClick={(event) => {
                event.preventDefault();
                trackGoogleAdsConversionAndNavigate(siteData.bookingLink);
              }}
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 text-sm font-bold text-gray-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <FaCalendarCheck size={16} />
              Book Now
            </a>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileMenu((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? (
              <FaXmark size={24} />
            ) : (
              <FaBars size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="container mx-auto px-4 py-5">
            <nav className="flex flex-col">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="border-b border-gray-100 py-3.5 text-[15px] font-semibold text-gray-800 transition hover:pl-2 hover:text-yellow-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={siteData.callLink}
                onClick={(event) => {
                  event.preventDefault();
                  trackGoogleAdsConversionAndNavigate(siteData.callLink);
                }}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-yellow-300 bg-yellow-50 text-sm font-semibold text-gray-900"
              >
                <FaPhone size={15} />
                Call Now
              </a>

              <a
                href={siteData.whatsappLink}
                onClick={(event) => {
                  event.preventDefault();
                  trackGoogleAdsConversionAndNavigate(siteData.whatsappLink);
                }}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white"
              >
                <FaWhatsapp size={17} />
                WhatsApp
              </a>
            </div>

            <a
              href={siteData.bookingLink}
              onClick={(event) => {
                event.preventDefault();
                trackGoogleAdsConversionAndNavigate(siteData.bookingLink);
              }}
              className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 text-sm font-bold text-gray-950"
            >
              <FaCalendarCheck size={16} />
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}