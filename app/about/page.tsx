import Image from "next/image";
import { siteData } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import { Award, Heart, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = pageMetadata({
  title: `About ${siteData.name} - Spa & Wellness Center in ${siteData.city}`,
  description: `${siteData.name} is a premium spa and wellness center in ${siteData.area}, ${siteData.city}, offering full body massage, Thai massage, deep tissue massage, Swedish massage, hot oil massage, Jacuzzi massage and foot reflexology.`,
  path: "/about",
  image: "/images/smallhero.png",
  imageAlt: `About ${siteData.name} spa in Agra`,
  extraKeywords: ["about Kiyora Thai Spa", "premium spa Agra"],
});

export default function AboutPage() {
  return (
    <main>
      <section className="relative  py-24 text-white" style={{ backgroundImage: "url('/images/smallhero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
       {/* Dark Luxury Overlay */}
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0" />
       
        <div className="container relative z-10 mx-auto px-4 text-center">

          <span className="font-semibold uppercase tracking-widest text-white">
            About Us
          </span>
         

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            {siteData.name}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg border-l-4 border-yellow-500 pl-4 leading-8 text-white">
            A luxury spa and massage experience in {siteData.area},{" "}
            {siteData.city}, created for complete relaxation, wellness,
            comfort, and peace.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-yellow-50 to-amber-50 py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative h-105 overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/abouthero.png"
              alt={`${siteData.name} luxury spa in Agra`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              Luxury Wellness
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Premium Spa & Massage Experience in {siteData.city}
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              {siteData.name} offers professional spa and massage therapies
              designed to relax the body, refresh the mind, and improve overall
              wellness.
              Our peaceful ambience, hygienic rooms, and trained therapists make
              every visit comfortable and rejuvenating.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Located at {siteData.address}, we provide luxury massage services
              including Thai Massage, Full Body Massage, Deep Tissue Massage,
              Swedish Massage, Hot Oil Massage, Jacuzzi Massage, and Foot
              Reflexology.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-amber-50 via-yellow-50 to-white py-20">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Sparkles,
              title: "Luxury Ambience",
              text: "Peaceful interiors designed for deep relaxation.",
            },
            {
              icon: ShieldCheck,
              title: "Hygienic Rooms",
              text: "Clean, private, and comfortable spa rooms.",
            },
            {
              icon: Heart,
              title: "Wellness Care",
              text: "Therapies focused on relaxation and body comfort.",
            },
            {
              icon: Award,
              title: "Expert Therapists",
              text: "Professional spa care with trained therapists.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-lg"
            >
              <item.icon className="mx-auto text-yellow-500" size={42} />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
