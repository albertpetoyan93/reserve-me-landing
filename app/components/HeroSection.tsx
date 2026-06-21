"use client";

import Image from "next/image";

function PhoneMockup({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
}) {
  return (
    <div
      className={`bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl ${className}`}
    >
      <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority
          className="object-fill object-top pointer-events-none select-none"
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative py-8 lg:py-8 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-6 max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Smart reservations,
            <span className="block text-gray-500 font-medium">
              for restaurants and guests.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ReserveMe connects your guests with seamless booking tools while
            providing your staff with an intuitive dashboard to manage tables
            and live statuses.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="#application-selection"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 hover:bg-gray-800 text-white transition-all hover:-translate-y-0.5 shadow-md font-semibold text-sm"
          >
            Choose your app →
          </a>
          <a
            href="#howItWorks"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-all hover:-translate-y-0.5 font-semibold text-sm"
          >
            See how it works
          </a>
        </div>
        <div className="relative max-w-5xl mx-auto flex items-end justify-center h-[520px] sm:h-[580px] px-4">
          <PhoneMockup
            src="/images/image2.png"
            alt="ReserveMe table availability screen"
            sizes="(max-width: 640px) 0px, 256px"
            className="w-56 sm:w-64 h-[440px] sm:h-[480px] transform -rotate-6 translate-x-12 sm:translate-x-16 transition-all hover:rotate-0 hover:z-40 z-10 hidden sm:block"
          />

          <PhoneMockup
            src="/images/image.png"
            alt="ReserveMe Client App home screen"
            sizes="(max-width: 640px) 288px, 320px"
            className="w-64 sm:w-72 h-[480px] sm:h-[540px] rounded-[2.8rem] p-3 shadow-2xl z-30 transform translate-y-4 hover:scale-105 transition-transform"
          />

          <PhoneMockup
            src="/images/image3.png"
            alt="ReserveMe chat and support screen"
            sizes="(max-width: 640px) 0px, 256px"
            className="w-56 sm:w-64 h-[440px] sm:h-[480px] transform rotate-6 -translate-x-12 sm:-translate-x-16 transition-all hover:rotate-0 hover:z-40 z-20 hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
