"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "@/data/site";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${siteData.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>

      {/* Call */}
      <a
        href={`tel:${siteData.phone}`}
        aria-label="Call Now"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-black shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}