'use client';

import { ArrowRight, Shield, Zap, Globe, CheckCircle, Users, BarChart3, Leaf, Coins, Lock, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How Vectorium Works
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how our blockchain-powered platform revolutionizes carbon credit trading, 
              making environmental impact transparent, verifiable, and accessible to everyone.
            </p>
            <Link
              href="/auth/signup"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple 3-Step Process</h2>
            <p className="text-lg text-gray-600">
              Our streamlined process makes it easy for anyone to participate in the carbon credit market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <Users className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Create Your Account</h3>
              <p className="text-gray-600 leading-relaxed">
                Sign up in minutes with our secure authentication system. Complete KYC verification 
                and set up your digital wallet to start trading carbon credits.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <BarChart3 className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Browse & Trade</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore our marketplace of verified carbon credits from projects worldwide. 
                Buy, sell, or trade credits with transparent pricing and instant settlement.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <Leaf className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Track Your Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your environmental impact in real-time. Generate certificates, 
                track carbon offset progress, and share your sustainability achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by Advanced Technology</h2>
            <p className="text-lg text-gray-600">
              Our platform leverages cutting-edge blockchain technology to ensure transparency, security, and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Blockchain Infrastructure</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Immutable Records</h4>
                    <p className="text-gray-600">Every transaction is permanently recorded on the blockchain, ensuring complete transparency and preventing fraud.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Smart Contracts</h4>
                    <p className="text-gray-600">Automated execution of trades and settlements through secure smart contracts, eliminating intermediaries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Global Accessibility</h4>
                    <p className="text-gray-600">Access the platform from anywhere in the world with 24/7 availability and cross-border transactions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop"
                alt="Blockchain Technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rigorous Verification Process</h2>
            <p className="text-lg text-gray-600">
              Every carbon credit on our platform undergoes strict verification to ensure authenticity and environmental impact
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Project Validation</h3>
                <p className="text-gray-600 mb-4">
                  All carbon offset projects are validated by internationally recognized standards including Verra, Gold Standard, and Climate Action Reserve.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Third-party auditing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Environmental impact assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Additionality verification
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Digital Certification</h3>
                <p className="text-gray-600 mb-4">
                  Each carbon credit is tokenized and secured on the blockchain with unique digital certificates that prevent double-counting.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Unique token identification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Tamper-proof records
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Real-time tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Vectorium?</h2>
            <p className="text-lg text-emerald-100">
              Experience the future of carbon credit trading with unmatched transparency, security, and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Lower Costs</h3>
              <p className="text-emerald-100">
                Eliminate intermediaries and reduce transaction costs by up to 70% compared to traditional carbon markets.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Settlement</h3>
              <p className="text-emerald-100">
                Complete transactions in seconds with automated smart contracts and real-time settlement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Access</h3>
              <p className="text-emerald-100">
                Access carbon credits from projects worldwide with 24/7 trading and cross-border capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-emerald-50 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of individuals and organizations using Vectorium to offset their carbon footprint and contribute to a sustainable future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/auth/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Start Trading <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/marketplace"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}