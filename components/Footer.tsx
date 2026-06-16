import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe, ImageIcon, Play } from "lucide-react";
import { siteData } from "@/data/site";
import { services } from "@/data/service";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA */}
      <section className="border-b border-yellow-500/20 bg-gradient-to-r from-yellow-600 to-yellow-400 px-4 py-10 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold">Book Your Luxury Spa Session</h2>
            <p className="mt-2 text-black/80">
              Relax, refresh, and rejuvenate at {siteData.name}.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteData.callLink}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-gray-900"
            >
              Call Now
            </a>

            <a
              href={siteData.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black px-6 py-3 font-semibold text-black hover:bg-black hover:text-white"
            >
              Book Online
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="py-14">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
           <Image className="mb-4 object-contain" src="/logo.png" alt={`${siteData.name} logo`} width={220} height={70} />
            <p className="mt-4 leading-7 text-gray-400">
              Premium Thai spa and wellness experience in {siteData.area},{" "}
              {siteData.city}. Enjoy luxury massage therapies, peaceful ambience,
              and professional care.
            </p>

            <div className="mt-6 flex gap-3">
              <a href={siteData.socials.facebook} className="rounded-full bg-white/10 p-3 hover:bg-yellow-500 hover:text-black" aria-label="Facebook">
                <Globe size={18} />
              </a>
              <a href={siteData.socials.instagram} className="rounded-full bg-white/10 p-3 hover:bg-yellow-500 hover:text-black" aria-label="Instagram">
                <ImageIcon size={18} />
              </a>
              <a href={siteData.socials.youtube} className="rounded-full bg-white/10 p-3 hover:bg-yellow-500 hover:text-black" aria-label="YouTube">
                <Play size={18} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-yellow-500">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
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
                  <Link href={href} className="hover:text-yellow-500">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-yellow-500">
              Our Services
            </h4>

            <ul className="space-y-3 text-gray-400">
              {services.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-yellow-500"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-yellow-500">
              Contact Info
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <MapPin className="mt-1 text-yellow-500" size={20} />
                <span>{siteData.address}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-yellow-500" size={20} />
                <a href={siteData.callLink} className="hover:text-yellow-500">
                  {siteData.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-yellow-500" size={20} />
                <a href={`mailto:${siteData.email}`} className="hover:text-yellow-500">
                  {siteData.email}
                </a>
              </li>

              <li className="flex gap-3">
                <Clock className="mt-1 text-yellow-500" size={20} />
                <span>Monday - Sunday: 10:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="border-t border-white/10 py-5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-center text-sm text-gray-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteData.name}. All Rights Reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-yellow-500">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-yellow-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
