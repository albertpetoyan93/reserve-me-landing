"use client";

import Image from "next/image";
import StoreButtons from "./StoreButtons";

export default function PremiumAppSelection() {
  return (
    <section
      id="application-selection"
      className="py-8 bg-white border-t border-gray-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Centered Header */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-heading font-bold text-gray-900 tracking-tight">
            One platform. Two distinct experiences.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ReserveMe separates the noise. We built a powerful management hub
            for restaurant teams, and a beautiful booking tool for guests.
          </p>
        </div>

        {/* RESTAURANT APPLICATION BLOCK */}
        <div className="mb-10 border-b border-gray-50 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Restaurant Copy Info */}
            <div className="space-y-6 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-bold uppercase tracking-wider">
                Business App
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Manage your restaurant operations professionally.
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                All the utility tools you need to maximize seat turnover
                efficiency — handle floor allocations, configure schedules, and
                view complete customer analytics.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-900 font-bold">
                    ✓
                  </span>
                  <span>Complete real-time floor plan dashboard</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-900 font-bold">
                    ✓
                  </span>
                  <span>No-show tracking and customer profiles</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-900 font-bold">
                    ✓
                  </span>
                  <span>Direct SMS and push confirmation relays</span>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <StoreButtons className="justify-start" />
              </div>
            </div>

            {/* Restaurant Visual Device Preview */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-center">
              <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl ring-1 ring-gray-900/5">
                <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative group">
                  {/* Screen Image Layer */}
                  <Image
                    src="/images/phone4.png"
                    alt="ReserveMe Restaurant App dashboard"
                    fill
                    sizes="256px"
                    className="object-fill object-top pointer-events-none select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CLIENT APPLICATION BLOCK */}
        <div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Client Copy Info */}
            <div className="space-y-6 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider">
                Client App
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Discover and book amazing tables instantly.
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Find the perfect dining slot in your city. Explore transparent
                real-time availability, read verified community ratings, and
                lock down bookings in exactly three taps.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-900 font-bold">
                    ✓
                  </span>
                  <span>Smart geographic culinary filters</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-900 font-bold">
                    ✓
                  </span>
                  <span>Interactive menu and picture galleries</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-900 font-bold">
                    ✓
                  </span>
                  <span>Seamless personal cancellation manager</span>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <StoreButtons className="justify-start" />
              </div>
            </div>

            {/* Client Visual Device Preview */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-center">
              <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl ring-1 ring-gray-900/5">
                <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative group">
                  <Image
                    src="/images/phone5.png"
                    alt="ReserveMe Client App booking screen"
                    fill
                    sizes="256px"
                    className="object-fill object-top pointer-events-none select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
