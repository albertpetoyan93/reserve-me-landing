"use client";

interface RestaurantAppData {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  visualIcon: string;
  visualColor: string;
}

interface ClientAppData {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  visualIcon: string;
  visualColor: string;
}

export default function RestaurantAppSection() {
  const restaurantAppData: RestaurantAppData = {
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
    visualColor: "bg-blue-100 text-blue-600"
  };

  return (
    <div className="mb-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Restaurant App Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            For Restaurant Owners
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            {restaurantAppData.title}
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            {restaurantAppData.description}
          </p>
          <div className="space-y-4 mb-8">
            {restaurantAppData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <a
            href={restaurantAppData.buttonLink}
            className="inline-block px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            {restaurantAppData.buttonText}
          </a>
        </div>
        
        {/* Restaurant App Visual */}
        <div className="order-1 lg:order-2">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className={`w-20 h-20 ${restaurantAppData.visualColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>                    {restaurantAppData.visualIcon}
                </div>
                <p className="text-blue-600 font-medium">Restaurant Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
