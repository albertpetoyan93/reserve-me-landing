"use client";

import Link from "next/link";

export default function CTATextian() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you run a restaurant or love discovering new places to eat,
            ReserveMe has the right app for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/restaurant"
              className="px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-gray-900 font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-white/25"
            >
              Restaurant App
            </Link>
            <Link
              href="/client"
              className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-lg transition-all hover:scale-105"
            >
              Client App
            </Link>
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            Not sure which one you need?{" "}
            <a href="#application-selection" className="text-white underline">
              Compare both apps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
