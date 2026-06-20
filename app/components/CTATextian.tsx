"use client";

import Link from 'next/link';

export default function CTATextian() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Streamline Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using ReserveMe to manage their appointments and grow their customer base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#"
              className="px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-gray-900 font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-white/25"
            >
              Start Free Trial
            </Link>
            <Link 
              href="#how-it-works"
              className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-lg transition-all hover:scale-105"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-4">Trusted by leading businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Company A</div>
              <div className="text-2xl font-bold">Company B</div>
              <div className="text-2xl font-bold">Company C</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
