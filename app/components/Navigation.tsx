import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="relative border-b border-gray-200 bg-white/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-gray-900">
              Reserve<span className="text-gray-700">Me</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/terms"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Terms
            </Link>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#"
              className="px-6 py-2 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-medium transition-all text-sm"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
