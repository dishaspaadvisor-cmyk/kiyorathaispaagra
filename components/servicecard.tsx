import Image from "next/image";
import { siteData } from "@/data/site";
import Link from "next/link";

export default function ServiceCard({ service }: { service: any }) {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Link href={`/services/${service.slug}`}>
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-110"
                    />
                </div>
            </Link>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                    <Link
                        href={`/services/${service.slug}`}
                        className="hover:text-yellow-500 transition-colors"
                    >
                        {service.title}
                    </Link>
                </h3>

                <p className="mt-3 text-gray-600 leading-7">{service.description}</p>

                <div className="mt-6">
                    {/* First Row */}
                    <div className="grid grid-cols-2 gap-3">
                        <a
                            href={siteData.callLink}
                            className="flex h-12 items-center justify-center rounded-xl bg-black px-4 text-sm font-semibold text-white transition hover:bg-gray-900"
                            aria-label="Call now"
                        >
                            Call Now
                        </a>

                        <a
                            href={siteData.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-12 items-center justify-center rounded-xl bg-green-500 px-4 text-sm font-semibold text-white transition hover:bg-green-600"
                            aria-label="WhatsApp"
                        >
                            WhatsApp
                        </a>
                    </div>

                    {/* Second Row */}
                    <a
                        href={siteData.online_booking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-yellow-500 px-4 text-sm font-semibold text-black transition hover:bg-yellow-400"
                        aria-label="Book now"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>

        </div>
    );
}
