"use client";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-gray-900">
            All the Features You Need
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage appointments and grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer group border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-gray-300 transition-colors">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Smart Scheduling
            </h3>
            <p className="text-gray-600 text-sm">
              Intelligent booking system that prevents double bookings and
              optimizes your schedule automatically.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer group border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-gray-300 transition-colors">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Smart Reminders
            </h3>
            <p className="text-gray-600 text-sm">
              Automated SMS and email reminders to reduce no-shows and keep
              customers informed.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer group border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-gray-300 transition-colors">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Analytics Dashboard
            </h3>
            <p className="text-gray-600 text-sm">
              Comprehensive insights into your bookings, customer trends, and
              business performance.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer group border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-gray-300 transition-colors">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Mobile Ready
            </h3>
            <p className="text-gray-600 text-sm">
              Manage reservations on the go with our responsive mobile
              interface.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer group border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-gray-300 transition-colors">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Customer Management
            </h3>
            <p className="text-gray-600 text-sm">
              Build lasting relationships with detailed customer profiles and
              booking history.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer group border border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-gray-300 transition-colors">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Secure & Reliable
            </h3>
            <p className="text-gray-600 text-sm">
              Enterprise-grade security with 99.9% uptime guarantee to keep
              your business running.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
