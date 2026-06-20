"use client";

export default function HowItWorksSection() {
  return (
    <section
      id="howItWorks"
      className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started in just 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-700">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 mx-auto">
                <span className="text-xl font-bold text-gray-900">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Create Your Account
              </h3>
              <p className="text-gray-300 text-center">
                Sign up for free in just 60 seconds. No credit card required.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-700">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 mx-auto">
                <span className="text-xl font-bold text-gray-900">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Customize Your Settings
              </h3>
              <p className="text-gray-300 text-center">
                Set up your business hours, services, pricing, and team members.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-700">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 mx-auto">
                <span className="text-xl font-bold text-gray-900">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Start Accepting Bookings
              </h3>
              <p className="text-gray-300 text-center">
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
