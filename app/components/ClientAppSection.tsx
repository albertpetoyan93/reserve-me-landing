"use client";

interface ClientAppData {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  visualIcon: string;
  visualColor: string;
}

export default function ClientAppSection() {
  const clientAppData: ClientAppData = {
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
    visualColor: "bg-purple-100 text-purple-600"
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Client App Visual */}
        <div className="order-2">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
            <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className={`w-20 h-20 ${clientAppData.visualColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>{clientAppData.visualIcon}</div>
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
            {clientAppData.title}
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            {clientAppData.description}
          </p>
          <div className="space-y-4 mb-8">
            {clientAppData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-800 text-sm">✓</span>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <a
            href={clientAppData.buttonLink}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            {clientAppData.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
