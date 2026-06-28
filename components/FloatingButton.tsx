"use client";

import { Phone } from "lucide-react";
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
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <svg
          xmlns="http://w3.org"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.615-5.34 11.962-11.91 11.962a11.905 11.905 0 01-5.698-1.44l-6.194 1.624zm6.59-3.38a9.893 9.893 0 005.278 1.52c5.475 0 9.932-4.457 9.934-9.934.001-2.652-1.03-5.145-2.905-7.022a9.902 9.902 0 00-7.036-2.909c-5.486 0-9.943 4.456-9.946 9.934a9.87 9.87 0 001.514 5.25L2.29 21.75l3.966-.998l.391.232zm11.332-6.52c-.287-.144-1.702-.84-1.965-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.129-.167.192-.335.216-.622.072a9.112 9.112 0 01-2.3-1.417a10.12 10.12 0 01-1.592-1.98c-.168-.288-.018-.444.126-.586.13-.127.287-.335.43-.503.144-.168.192-.288.288-.48c.096-.192.048-.36-.024-.504-.072-.144-.648-1.56-.888-2.136-.234-.56-.473-.483-.648-.492l-.552-.01c-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.399 0 1.416 1.032 2.784 1.176 2.976.144.192 2.032 3.102 4.921 4.347.687.296 1.224.473 1.643.606.69.219 1.319.188 1.815.114.553-.083 1.702-.696 1.942-1.367.24-.672.24-1.248.168-1.368-.071-.12-.263-.192-.55-.336z" />
        </svg>
      </a>

      {/* Call */}
      <a
        href={`tel:${siteData.phone}`}
        aria-label="Call Now"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-black shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
