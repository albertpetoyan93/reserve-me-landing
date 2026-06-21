"use client";

interface AppSelectionData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  visualIcon: string;
  visualColor: string;
  features: string[];
  targetUser: "restaurant" | "client";
}

export default function AppSelection() {
  const appSelections: AppSelectionData[] = [
    {
      title: "Manage Your Restaurant Professionally",
      description: "All the tools you need to run your restaurant efficiently — from menu management to customer analytics.",
      features: [
        "Complete restaurant management dashboard",
        "Customer booking & management",
        "Analytics and business insights"
      ],
      buttonText: "Manage Your Restaurant",
      buttonLink: "/restaurant",
      visualIcon: "📊",
      visualColor: "bg-blue-100 text-blue-600",
      targetUser: "restaurant"
    },
    {
      title: "Discover & Book Amazing Restaurants",
      description: "Find the perfect dining experience — search, book, and review restaurants with ease.",
      features: [
        "Instant restaurant search and booking",
        "Read reviews and ratings",
        "Manage your reservations easily"
      ],
      buttonText: "Find & Book Restaurants",
      buttonLink: "/client",
      visualIcon: "🔍",
      visualColor: "bg-purple-100 text-purple-600",
      targetUser: "client"
    }
  ];

  return (
    <section id="application-selection" className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Choose Your World with ReserveMe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ReserveMe offers two distinct applications tailored to your needs —
            whether you're running a restaurant or discovering dining experiences.
          </p>
        </div>

        {appSelections.map((app, index) => (
          <div key={index} className={`${index % 2 === 0 ? 'mb-20' : 'mb-20'} `}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {app.targetUser === "restaurant" ? (
                // Restaurant App Content
                <>
                  <div className="order-2 lg:order-1">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                      For Restaurant Owners
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6">
                      {app.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      {app.description}
                    </p>
                    <div className="space-y-4 mb-8">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={app.buttonLink}
                      className="inline-block px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
                    >
                      {app.buttonText}
                    </a>
                  </div>
                  
                  {/* Restaurant App Visual */}
                  <div className="order-1 lg:order-2">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
                      <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-20 h-20 ${app.visualColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>{app.visualIcon}</div>
                          <p className="text-blue-600 font-medium">Restaurant Dashboard Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Client App Content
                <>
                  {/* Client App Visual */}
                  <div className="order-2">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
                      <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-20 h-20 ${app.visualColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>{app.visualIcon}</div>
                          <p className="text-purple-600 font-medium">Client App Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Client App Content */}
                  <div className="order-1">
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
                      For Customers & Visitors
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6">
                      {app.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      {app.description}
                    </p>
                    <div className="space-y-4 mb-8">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-800 text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={app.buttonLink}
                      className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
                    >
                      {app.buttonText}
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
