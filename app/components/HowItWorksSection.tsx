"use client";

const restaurantSteps = [
  {
    title: "Create your restaurant account",
    description:
      "Sign up in the Restaurant App, verify your business, and invite your team.",
  },
  {
    title: "Configure your floor and hours",
    description:
      "Set tables, schedules, and availability so guests always see accurate slots.",
  },
  {
    title: "Accept live bookings",
    description:
      "Manage arrivals, walk-ins, and no-shows from one real-time dashboard.",
  },
];

const clientSteps = [
  {
    title: "Download the Client App",
    description:
      "Browse restaurants near you with filters for cuisine, location, and mood.",
  },
  {
    title: "Pick a time that works",
    description:
      "See real-time availability and confirm a reservation in a few taps.",
  },
  {
    title: "Show up and enjoy",
    description:
      "Get reminders, manage changes, and keep your dining history in one place.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="howItWorks"
      className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Two apps, two journeys — both built for speed and clarity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider mb-8">
              Restaurant App
            </div>
            <div className="space-y-6">
              {restaurantSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-gray-900">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider mb-8">
              Client App
            </div>
            <div className="space-y-6">
              {clientSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-gray-900">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
