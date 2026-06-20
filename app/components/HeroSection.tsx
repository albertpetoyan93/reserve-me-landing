"use client";

export default function HeroSection() {
  return (
    <section className="relative py-8 lg:py-8 bg-white overflow-hidden">
      {/* Soft Blue Cloud/Gradient Background effect behind phones */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Centered Main Typography Header */}
        <div className="space-y-6 max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Smart reservations,
            <span className="block text-gray-500 font-medium">
              packed restaurant tables.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ReserveMe connects your diners with seamless booking tools while
            providing your staff with an intuitive dashboard to manage tables
            and live statuses.
          </p>
        </div>

        {/* Store CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-5">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white transition-all hover:-translate-y-0.5 shadow-md font-semibold text-sm"
          >
            {/* Apple Icon Standard representation */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] font-normal uppercase tracking-wider text-gray-400 leading-none">
                Download on the
              </p>
              <p className="text-sm font-semibold leading-tight mt-0.5">
                App Store
              </p>
            </div>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white transition-all hover:-translate-y-0.5 shadow-md font-semibold text-sm"
          >
            {/* Google Play Standard Icon representation */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.783 12 3.609 22.186c-.183-.173-.314-.44-.314-.775V2.589c0-.335.131-.602.314-.775zm11.134 9.222l2.673-2.673c.189-.189.206-.491.038-.688L5.352 2.15c-.179-.179-.476-.164-.645.033L14.743 11.036zm3.327 1.341l2.581-1.488a1.002 1.002 0 000-1.738l-2.581-1.488-2.95 2.95 2.95 2.955zm-3.327.382l-10.036 8.85c.169.198.466.213.645.033l12.102-5.525c.168-.197.151-.499-.038-.688l-2.673-2.67z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] font-normal uppercase tracking-wider text-gray-400 leading-none">
                Get it on
              </p>
              <p className="text-sm font-semibold leading-tight mt-0.5">
                Google Play
              </p>
            </div>
          </a>
        </div>

        {/* Triple Overlapping Phone Mockup Layout */}
        <div className="relative max-w-5xl mx-auto flex items-end justify-center h-[520px] sm:h-[580px] px-4">
          {/* LEFT PHONE (Diner Application Side) */}
          <div className="w-56 sm:w-64 h-[440px] sm:h-[480px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl transform -rotate-6 translate-x-12 sm:translate-x-16 transition-all hover:rotate-0 hover:z-40 z-10 hidden sm:block">
            <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative group">
              {/* Screen Image Layer */}
              <img
                src="/images/image2.png"
                alt="ReserveMe Client App UI Feed"
                className="w-full h-full object-fill object-top pointer-events-none select-none"
              />
            </div>
          </div>

          {/* CENTER PHONE (Main Restaurant Aggregator Client App) */}
          <div className="w-64 sm:w-72 h-[480px] sm:h-[540px] bg-gray-900 rounded-[2.8rem] p-3 shadow-2xl z-30 transform translate-y-4 hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative group">
              {/* Screen Image Layer */}
              <img
                src="/images/image.png"
                alt="ReserveMe Client App UI Feed"
                className="w-full h-full object-fill object-top pointer-events-none select-none"
              />

              {/* Subtle Inner Glass Glare Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT PHONE (Reservation Table Detail View) */}
          <div className="w-56 sm:w-64 h-[440px] sm:h-[480px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl transform rotate-6 -translate-x-12 sm:-translate-x-16 transition-all hover:rotate-0 hover:z-40 z-20 hidden sm:block">
            <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative group">
              {/* Screen Image Layer */}
              <img
                src="/images/image3.png"
                alt="ReserveMe Client App UI Feed"
                className="w-full h-full object-fill object-top pointer-events-none select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
