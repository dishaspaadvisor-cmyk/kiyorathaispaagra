import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { siteData } from "@/data/site";
import { services } from "@/data/service";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-100 bg-[#fffdf8]">
      {/* Main Footer */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold text-gray-900">
                Kiyora Thai Spa
              </h3>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-yellow-600">
                Agra
              </p>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
              Thai massage and spa services in {siteData.area},{" "}
              {siteData.city}. Explore available treatments and contact us to
              arrange an appointment.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-gray-900">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["Reviews", "/reviews"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-yellow-700"
                  >
                    {name}

                    <FaArrowUpRightFromSquare className="text-[10px] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-gray-900">
              Our Services
            </h4>

            <ul className="space-y-3">
              {services.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-yellow-700"
                  >
                    {service.title}

                    <FaArrowUpRightFromSquare className="text-[10px] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-gray-900">
              Contact Info
            </h4>

            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-700">
                  <FaLocationDot size={16} />
                </div>

                <span className="pt-1 text-sm leading-6 text-gray-600">
                  {siteData.address}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-700">
                  <FaPhone size={15} />
                </div>

                <a
                  href={siteData.callLink}
                  className="text-sm font-medium text-gray-600 transition hover:text-yellow-700"
                >
                  {siteData.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-700">
                  <FaEnvelope size={16} />
                </div>

                <a
                  href={`mailto:${siteData.email}`}
                  className="break-all text-sm font-medium text-gray-600 transition hover:text-yellow-700"
                >
                  {siteData.email}
                </a>
              </li>

              <li className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-700">
                  <FaClock size={16} />
                </div>

                <span className="pt-1 text-sm leading-6 text-gray-600">
                  Monday - Sunday
                  <br />
                  10:00 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="border-t border-yellow-100 bg-white py-5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center text-sm text-gray-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteData.name}. All Rights
            Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition hover:text-yellow-700"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-yellow-700"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}