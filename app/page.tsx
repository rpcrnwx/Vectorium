'use client';

import { ArrowRight, Shield, Zap, Globe, ChartBar, Users, ArrowUpRight, Check, Wallet } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContactSalesModal from '@/components/ContactSalesModal';
import { useState } from 'react';

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false);
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Earth from space"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionizing Sustainability with Crypto Carbon Credits
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Join the future of environmental conservation through blockchain technology. Trade verified carbon credits seamlessly and make a real impact on climate change.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 backdrop-blur-sm transition-colors">
                Learn More <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-emerald-900 py-8 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">1M+</div>
              <div className="text-emerald-200">Carbon Credits Traded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-emerald-200">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">50K+</div>
              <div className="text-emerald-200">Users Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">$100M+</div>
              <div className="text-emerald-200">Trading Volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Vectorium?
            </h2>
            <p className="text-gray-600">
              Our platform combines blockchain technology with environmental sustainability to create a transparent and efficient carbon credit trading ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Blockchain</h3>
              <p className="text-gray-600 mb-4">
                Every transaction is recorded on our immutable blockchain, ensuring complete transparency and security.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-emerald-600" /> Immutable records
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-emerald-600" /> Smart contracts
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-emerald-600" /> Audit trails
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
              <p className="text-gray-600 mb-4">
                Support verified environmental projects worldwide and track your contribution to global sustainability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-emerald-600" /> Verified projects
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-emerald-600" /> Real-time impact
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-emerald-600" /> Global reach
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Efficient Trading</h3>
              <p className="text-gray-600 mb-4">
                Experience fast, low-cost trading with our advanced matching engine and liquidity pools.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-emerald-600" /> Instant matching
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-emerald-600" /> Low fees
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-emerald-600" /> Deep liquidity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Vectorium Works
            </h2>
            <p className="text-gray-600">
              Get started with carbon credit trading in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Create Account</h3>
              <p className="text-gray-600">
                Set up your digital wallet and complete verification in minutes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBar className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Start Trading</h3>
              <p className="text-gray-600">
                Browse verified projects and trade carbon credits instantly
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Track Impact</h3>
              <p className="text-gray-600">
                Monitor your environmental impact and project contributions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Making a Real Impact
              </h2>
              <p className="text-lg text-emerald-100 mb-8">
                Our platform has already contributed to the reduction of over 1 million tons of CO2 emissions through verified carbon credit projects worldwide.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">1M+</div>
                  <div className="text-emerald-200">Tons of CO2 Offset</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-emerald-200">Active Projects</div>
                </div>
              </div>
              <button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-emerald-50 transition-colors">
                View Impact Report <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
                alt="Renewable energy project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* White Paper Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">Read Our White Paper</h2>
            <p className="text-lg text-gray-600 mb-6">
              Dive deep into the vision, technology, and impact of Vectorium. Our white paper details how we are revolutionizing the carbon credit market with blockchain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/250617 Vectorium (VECT) – Whitepaper .25 Edition.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                View PDF
              </a>
              <a
                href="/250617 Vectorium (VECT) – Whitepaper .25 Edition.pdf"
                download
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Download
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <iframe
              src="/250617 Vectorium (VECT) – Whitepaper .25 Edition.pdf"
              title="Vectorium White Paper"
              className="w-full max-w-3xl h-[600px] rounded-xl border border-gray-200 shadow-md bg-white"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-emerald-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Green Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of the solution to climate change. Start trading carbon credits on our platform today and make a lasting impact on our planet's future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/auth/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
                onClick={() => setShowContactModal(true)}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        <ContactSalesModal open={showContactModal} onClose={() => setShowContactModal(false)} />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <Image
                  src="https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg"
                  alt="Vectorium"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold text-emerald-400">Vectorium</span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Revolutionizing sustainability through blockchain technology. Join us in creating a greener future with transparent carbon credit trading.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How it Works</a></li>
                <li><a href="/marketplace" className="hover:text-emerald-400 transition-colors">Marketplace</a></li>
                <li><a href="/wallet" className="hover:text-emerald-400 transition-colors">Wallet</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/250617 Vectorium (VECT) – Whitepaper .25 Edition.pdf" target="_blank" className="hover:text-emerald-400 transition-colors">White Paper</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2025 Vectorium. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}