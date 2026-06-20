"use client";

export default function FeaturesSection2() {
  return (
    <section className="py-24 bg-white space-y-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIRST FEATURE ROW: Analytics (Image Top Right Concept) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Side: Clean Tailwind Phone Mockup representing Analytics */}
          <div className="flex justify-center lg:justify-center">
            <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl ring-1 ring-gray-900/5">
              <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative group">
                {/* Screen Image Layer */}
                <img
                  src="/images/phone4.png"
                  alt="ReserveMe Client App UI Feed"
                  className="w-full h-full object-fill object-top pointer-events-none select-none"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Text Description */}
          <div className="space-y-6 text-left">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Understand your restaurant with powerful analytics.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              Track your total reservations, analyze high-demand peak hours, and
              discover floor patterns that shape your kitchen pipeline — all in
              one unified dashboard view.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <span className="text-green-500">✓</span> Real-time table
                capacity tracking
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <span className="text-green-500">✓</span> Peak-hour and guest
                insights
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <span className="text-green-500">✓</span> Clear operational
                patterns at a glance
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-bold shadow-md hover:bg-gray-800 transition-colors"
              >
                Download now
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-bold text-gray-900 hover:underline"
              >
                Discover features <span className="text-xs">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECOND FEATURE ROW: Floor Control (Image Bottom Left Concept) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Description (Reversed Order for Desktop Grid layout) */}
          <div className="space-y-6 text-left order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Your floor plan, clear and in control.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              ReserveMe gives your staff a simple, transparent interface of your
              active dining rooms so you always know exactly where every party
              stands.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <span className="text-green-500">✓</span> Real-time client
                arrival statuses
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <span className="text-green-500">✓</span> Instant floor plan
                layout optimization
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <span className="text-green-500">✓</span> Easy modification and
                walk-in entry
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-bold shadow-md hover:bg-gray-800 transition-colors"
              >
                Download now
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-bold text-gray-900 hover:underline"
              >
                Learn more <span className="text-xs">→</span>
              </a>
            </div>
          </div>

          {/* Right Side: Second Phone Mockup representing Main Dashboard View */}
          <div className="flex justify-center lg:justify-center order-1 lg:order-2">
            <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl ring-1 ring-gray-900/5">
              <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative group ">
                {/* Screen Image Layer */}
                <img
                  src="/images/phone5.png"
                  alt="ReserveMe Client App UI Feed"
                  className="w-full h-full object-fill object-top pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
