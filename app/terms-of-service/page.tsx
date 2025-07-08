'use client';

import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the Vectorium platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Vectorium provides a blockchain-based platform for trading carbon credits. Our services include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Carbon credit marketplace and trading platform</li>
                <li>Digital wallet for storing and managing carbon credits</li>
                <li>Verification and certification services</li>
                <li>Environmental impact tracking and reporting</li>
                <li>Educational resources and market data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              
              <h3 className="text-xl font-semibold mb-3">Account Registration</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>You must be at least 18 years old to create an account</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>You must complete KYC verification as required</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Account Responsibilities</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Keep your login credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Ensure all account information remains current and accurate</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Trading Rules</h2>
              
              <h3 className="text-xl font-semibold mb-3">Permitted Activities</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Buying and selling verified carbon credits</li>
                <li>Transferring credits between verified accounts</li>
                <li>Retiring credits for offset purposes</li>
                <li>Accessing market data and analytics</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Prohibited Activities</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Market manipulation or fraudulent trading</li>
                <li>Creating multiple accounts to circumvent limits</li>
                <li>Using the platform for money laundering</li>
                <li>Attempting to hack or disrupt the platform</li>
                <li>Trading in non-verified or fraudulent credits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Fees and Payments</h2>
              <p className="text-gray-600 mb-4">
                Vectorium charges fees for certain services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Trading fees: 0.5% per transaction</li>
                <li>Withdrawal fees: Variable based on payment method</li>
                <li>Verification fees: As disclosed during the process</li>
                <li>Premium features: As listed in our pricing page</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All fees are clearly disclosed before you complete any transaction. 
                We reserve the right to modify our fee structure with 30 days' notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                The Vectorium platform and its content are protected by intellectual property laws:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All platform content is owned by Vectorium or its licensors</li>
                <li>You may not copy, modify, or distribute our content without permission</li>
                <li>Our trademarks and logos are protected intellectual property</li>
                <li>User-generated content remains your property but grants us usage rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-600">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, 
                which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Risk Disclosure</h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Important Risk Warning</h4>
                    <p className="text-orange-700 text-sm">
                      Trading carbon credits involves risks. Prices can be volatile and you may lose money. 
                      Only trade with funds you can afford to lose.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Carbon credit prices can fluctuate significantly</li>
                <li>Regulatory changes may affect market conditions</li>
                <li>Technology risks including blockchain network issues</li>
                <li>Counterparty risks in trading transactions</li>
                <li>Liquidity risks in certain market conditions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Vectorium is not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the fees you paid in the 12 months prior to the claim</li>
                <li>We are not responsible for losses due to market volatility</li>
                <li>We do not guarantee uninterrupted service availability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify and hold harmless Vectorium and its affiliates from any claims, damages, or expenses 
                arising from your use of the platform, violation of these terms, or infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your account at any time for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Violation of these Terms of Service</li>
                <li>Fraudulent or illegal activity</li>
                <li>Failure to complete required verification</li>
                <li>Extended period of inactivity</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Upon termination, you may withdraw your funds subject to applicable fees and verification requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
              <p className="text-gray-600">
                These Terms are governed by the laws of [Jurisdiction] without regard to conflict of law principles. 
                Any disputes will be resolved through binding arbitration in [Location].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. Material changes will be communicated via email 
                or platform notification at least 30 days before taking effect. Continued use of the platform constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Email:</strong> legal@vectorium.com</p>
                <p className="text-gray-600 mb-2"><strong>Address:</strong> 123 Blockchain Avenue, Crypto City, CC 12345</p>
                <p className="text-gray-600"><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}