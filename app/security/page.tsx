'use client';

import { Shield, Lock, Eye, CheckCircle, AlertTriangle, Users, Globe, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Security First
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your security is our top priority. Learn how we protect your assets, data, and transactions 
              with enterprise-grade security measures and cutting-edge blockchain technology.
            </p>
            <Link
              href="/auth/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Secure Your Account <Shield className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Multi-Layer Security Architecture</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive security framework protects every aspect of your experience on Vectorium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Blockchain Security */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blockchain Security</h3>
              <p className="text-gray-600 mb-4">
                Immutable ledger technology ensures all transactions are cryptographically secured and tamper-proof.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  256-bit encryption
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Decentralized validation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Smart contract audits
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
              <p className="text-gray-600 mb-4">
                Advanced encryption and privacy controls keep your personal information secure and confidential.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  End-to-end encryption
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  GDPR compliance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Zero-knowledge architecture
                </li>
              </ul>
            </div>

            {/* Access Control */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Access Control</h3>
              <p className="text-gray-600 mb-4">
                Multi-factor authentication and role-based permissions ensure only authorized access to your account.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  2FA authentication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Biometric verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Session management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Certifications & Compliance</h2>
            <p className="text-lg text-gray-600">
              We maintain the highest security standards through rigorous certifications and compliance frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">ISO 27001</h3>
              <p className="text-sm text-gray-600">Information Security Management</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-gray-600">Security & Availability Controls</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">GDPR</h3>
              <p className="text-sm text-gray-600">Data Protection Regulation</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">PCI DSS</h3>
              <p className="text-sm text-gray-600">Payment Card Industry Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Security Features</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Real-time Monitoring</h4>
                    <p className="text-gray-600">24/7 security monitoring with AI-powered threat detection and automated response systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cold Storage</h4>
                    <p className="text-gray-600">Majority of digital assets stored in offline cold storage wallets for maximum security.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Audit Trails</h4>
                    <p className="text-gray-600">Complete audit trails for all transactions and system activities with immutable logging.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Identity Verification</h4>
                    <p className="text-gray-600">Multi-level KYC/AML verification process to prevent fraud and ensure regulatory compliance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
                alt="Security Infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Best Practices</h2>
            <p className="text-lg text-blue-100">
              Follow these guidelines to keep your account and assets secure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-800 p-6 rounded-xl">
              <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Strong Passwords</h3>
              <p className="text-blue-100 text-sm">
                Use unique, complex passwords with a combination of letters, numbers, and symbols. Enable two-factor authentication.
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-xl">
              <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Phishing Awareness</h3>
              <p className="text-blue-100 text-sm">
                Always verify URLs and never click suspicious links. Vectorium will never ask for your password via email.
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-xl">
              <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Device Security</h3>
              <p className="text-blue-100 text-sm">
                Keep your devices updated, use antivirus software, and avoid accessing your account on public networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Security Incident Response</h3>
                  <p className="text-gray-600 mb-6">
                    If you suspect any security issues with your account or notice suspicious activity, 
                    please contact our security team immediately.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Emergency Contact</h4>
                      <p className="text-sm text-gray-600">security@vectorium.com</p>
                      <p className="text-sm text-gray-600">+1 (555) 123-SECURITY</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response Time</h4>
                      <p className="text-sm text-gray-600">Critical: &lt; 1 hour</p>
                      <p className="text-sm text-gray-600">High: &lt; 4 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}