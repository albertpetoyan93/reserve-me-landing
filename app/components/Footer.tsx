"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-gray-900">
            Reserve<span className="text-gray-700">Me</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-600">
            <Link href="/terms" className="hover:text-gray-900 transition-colors">
              Terms & Conditions
            </Link>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="text-sm text-gray-600">
            © 2026 ReserveMe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
