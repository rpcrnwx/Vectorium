'use client';

import { Shield, Eye, Lock, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At Vectorium, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Government-issued identification for KYC verification</li>
                <li>Financial information for transaction processing</li>
                <li>Wallet addresses and transaction history</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Usage Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Platform usage patterns and preferences</li>
                <li>Transaction data and trading activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process transactions and verify your identity</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To improve our platform and user experience</li>
                <li>To communicate with you about your account and our services</li>
                <li>To detect and prevent fraud and security threats</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>With service providers who assist in operating our platform</li>
                <li>To comply with legal obligations and regulatory requirements</li>
                <li>To protect our rights and prevent fraud</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>End-to-end encryption for sensitive data</li>
                <li>Multi-factor authentication</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Employee access controls and training</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access: Request a copy of your personal data</li>
                <li>Rectification: Correct inaccurate or incomplete information</li>
                <li>Erasure: Request deletion of your personal data</li>
                <li>Portability: Receive your data in a structured format</li>
                <li>Restriction: Limit how we process your information</li>
                <li>Objection: Object to certain types of processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Essential cookies for platform functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Preference cookies to remember your settings</li>
                <li>Marketing cookies for personalized content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. International Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data during international transfers, 
                including standard contractual clauses and adequacy decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. 
                Specific retention periods vary based on the type of information and applicable regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for individuals under 18 years of age. 
                We do not knowingly collect personal information from children under 18.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@vectorium.com</p>
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