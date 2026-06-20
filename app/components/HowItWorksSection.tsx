"use client";

export default function HowItWorksSection() {
  return (
    <section id="howItWorks" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-gray-900">How It Works</h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Get started in just 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 mx-auto">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-heading font-semibold text-gray-900 mb-4 text-center">
                Create Your Account
              </h3>
              <p className="text-body text-gray-600 text-center">
                Sign up for free in just 60 seconds. No credit card required.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-10">
              <svg
                className="w-8 h-8 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 mx-auto">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-heading font-semibold text-gray-900 mb-4 text-center">
                Customize Your Settings
              </h3>
              <p className="text-body text-gray-600 text-center">
                Set up your business hours, services, pricing, and team members.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-10">
              <svg
                className="w-8 h-8 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 mx-auto">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-heading font-semibold text-gray-900 mb-4 text-center">
                Start Accepting Bookings
              </h3>
              <p className="text-body text-gray-600 text-center">
                Go live and start receiving reservations from your customers
                today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
