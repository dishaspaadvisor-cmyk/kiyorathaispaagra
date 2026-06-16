"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { siteData } from "@/data/site";
import Image from "next/image";

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
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-600/20">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            
            <Image src="/logo.png" alt={`${siteData.name} logo`} width={220} height={70} className="object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-500 transition duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteData.callLink}
              className="flex items-center gap-2 rounded-full border border-yellow-500 px-4 py-2 text-sm text-white hover:bg-yellow-500 hover:text-black transition"
            >
              <Phone size={16} />
              Call Now
            </a>

            <a
              href={siteData.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-400 transition"
            >
              <Calendar size={16} />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-black border-t border-yellow-500/20">
          <nav className="flex flex-col px-5 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="py-3 text-white border-b border-gray-800 hover:text-yellow-500"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={siteData.callLink}
                className="rounded-lg border border-yellow-500 px-4 py-3 text-center text-white"
              >
                Call Now
              </a>

              <a
                href={siteData.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-yellow-500 px-4 py-3 text-center font-semibold text-black"
              >
                Book Appointment
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}