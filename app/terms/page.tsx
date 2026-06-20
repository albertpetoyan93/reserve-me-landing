import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | ReserveMe",
  description:
    "Read the comprehensive terms and conditions for using ReserveMe reservation management platform. Includes general terms, client terms, restaurant partner terms, and legal clauses.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Shared Navigation Component */}
      <Navigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass rounded-2xl p-8 sm:p-12 border border-gray-200">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-600">Last updated: June 19, 2026</p>
          </div>

          {/* Terms Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Part A: General Terms (Applies to Everyone)
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                1. The Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Reserve Me operates a marketplace platform. We do not own,
                manage, or operate any restaurants. We act strictly as an
                intermediary connecting users ("Clients") looking for table
                reservations with third-party food and beverage establishments
                ("Restaurants").
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                2. Account Security
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You must provide accurate, current, and complete information
                during registration. You are solely responsible for maintaining
                the confidentiality of your account credentials. Reserve Me is
                not liable for any unauthorized access to your account.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                3. Prohibited Conduct
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Users and Restaurants agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 mb-4 ml-4">
                <li>
                  Use the platform for any illegal purpose or fraudulent
                  reservation schemes
                </li>
                <li>Scrape, data-mine, or reverse-engineer the application</li>
                <li>Post false, defamatory, or abusive content/reviews</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                4. Platform Availability & Liability
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide the Platform "as-is" without warranties of
                uninterrupted service. Reserve Me is not responsible for
                disputes regarding food quality, service, health code
                violations, or unexpected restaurant closures.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Part B: Client Terms (For Regular Users)
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                1. Making Reservations
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Reservations made through Reserve Me are subject to restaurant
                availability. A reservation is only confirmed once you receive a
                "Confirmed" push notification or email status within the app.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                2. Cancellations and No-Show Policy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Clients must cancel reservations within the timeframe specified
                by the restaurant (e.g., at least 2 hours before the reservation
                time). No-Show Rule: If a client fails to show up to three (3)
                consecutive reservations without canceling, Reserve Me reserves
                the right to temporarily or permanently suspend the account.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Reservation Fees/Deposits: Certain restaurants may require a
                credit card authorization or non-refundable deposit for
                high-demand slots or large groups. These fees are collected on
                behalf of the restaurant and are subject to the restaurant's
                specific refund policies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                3. Late Arrival
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Restaurants are only required to hold tables for a standard
                grace period (typically 15 minutes). After this period, the
                restaurant reserves the right to mark you as a "No-Show" and
                release the table.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Part C: Restaurant Partner Terms (For Restaurants)
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                1. Profile Integrity & Operations
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Restaurants must ensure that operational hours, menu items,
                pricing, and seating availability are kept strictly up to date.
                Restaurants must honor all confirmed bookings processed via the
                Reserve Me application.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                2. Allocation & Dashboard Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The restaurant is responsible for monitoring its Reserve Me
                dashboard to manage incoming reservations. Overbooking due to a
                restaurant's failure to update internal capacity limits on the
                app is the sole liability of the restaurant.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                3. Fees and Payments (If applicable)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                SaaS/Commission Fees: The restaurant agrees to pay Reserve Me
                the agreed-upon monthly subscription fee or per-cover commission
                fee as detailed in their separate commercial agreement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Payouts: If Reserve Me processes booking deposits on behalf of
                the restaurant, funds will be disbursed minus processing fees on
                a weekly/monthly schedule.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                4. Direct Communication
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Restaurants may only contact Clients regarding their specific
                reservation. Using Client phone numbers or emails extracted from
                Reserve Me for unsolicited external marketing is strictly
                prohibited and constitutes a breach of GDPR/Data Privacy rules,
                leading to immediate off-boarding.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Part D: Legal Clauses
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                1. Intellectual Property
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All application layouts, branding, color palettes, and code
                belong exclusively to Reserve Me.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                2. Termination
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to terminate or restrict access to any
                Client or Restaurant account at our sole discretion, without
                prior notice, for violations of these Terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                3. Governing Law
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These terms are governed by and construed in accordance with the
                laws of [Your Country/State], without regard to its conflict of
                law principles.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Shared Footer Component */}
      <Footer />
    </div>
  );
}
