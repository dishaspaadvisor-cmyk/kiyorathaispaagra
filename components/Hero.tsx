import Link from "next/link";
import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import { siteData } from "@/data/site";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('/images/kiyorathaispa.png')",
                }}
            />

            {/* Dark Luxury Overlay */}
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-24">
                <div className="max-w-3xl">
                    {/* Rating */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-black/50 px-4 py-2 text-sm text-yellow-400">
                        <Star size={16} fill="currentColor" />
                        5-Star Luxury Thai Spa Experience
                    </div>

                    <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                        Best Thai Spa in{" "}
                        <span className="text-yellow-500">Agra</span>
                    </h1>

                    <p className="mb-6 max-w-2xl text-base leading-8 text-gray-200 md:text-xl">
                        Relax, refresh, and rejuvenate at Kiyora Thai Spa. Experience
                        premium massage therapies, peaceful ambience, hygienic rooms, and
                        professional wellness care in Siddharth Nagar, Agra.
                    </p>

                    {/* Location */}
                    <div className="mb-8 flex items-start gap-3 text-gray-300">
                        <MapPin className="mt-1 text-yellow-500" size={22} />
                        <p>
                            Shop No. 201, 2nd Floor, Ramesh Plaza, Fatehabad Road,
                            Siddharth Nagar, Agra, Uttar Pradesh 282001
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-start max-w-md">
                        <a
                            href={siteData.callLink}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400 sm:w-auto"
                        >
                            <Phone size={16} />
                            Call Now
                        </a>

                        <a
                            href={siteData.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-black sm:w-auto"
                        >
                            <MessageCircle size={16} />
                            WhatsApp
                        </a>
                    </div>

                    {/* Trust Cards */}
                    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {[
                            "Private Rooms",
                            "Expert Therapists",
                            "Hygienic Spa",
                            "Premium Ambience",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-yellow-500/20 bg-white/10 p-4 text-center backdrop-blur-md"
                            >
                                <p className="text-sm font-medium text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}