'use client';

import { Clock, ArrowLeft, Mail, Bell, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Beautiful Illustration */}
            <div className="relative mb-12">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="Coming Soon - Earth from Space"
                  fill
                  className="object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-600/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-6 inline-block">
                      <Clock className="w-16 h-16 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                      Coming Soon
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 drop-shadow-md">
                      We're working on something amazing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Thank You for Visiting!
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're currently working hard to bring you this exciting new feature. 
                  Our team is dedicated to creating the best possible experience for our users, 
                  and we want to make sure everything is perfect before we launch.
                </p>

                {/* Features Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="text-center p-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enhanced Features</h3>
                    <p className="text-sm text-gray-600">New and improved functionality</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Better Experience</h3>
                    <p className="text-sm text-gray-600">Improved user interface and design</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">More Value</h3>
                    <p className="text-sm text-gray-600">Additional tools and resources</p>
                  </div>
                </div>

                {/* Email Subscription */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                  <p className="text-gray-600 mb-6">
                    Be the first to know when this feature launches. We'll send you an email as soon as it's ready!
                  </p>
                  
                  {!subscribed ? (
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <Bell className="w-5 h-5" />
                        Notify Me
                      </button>
                    </form>
                  ) : (
                    <div className="text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h4>
                      <p className="text-green-700">
                        You'll be the first to know when this feature is ready.
                      </p>
                    </div>
                  )}
                </div>

                {/* Explore Other Pages */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    While You Wait, Explore Other Pages
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/marketplace"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      Browse Marketplace
                    </Link>
                    <Link
                      href="/how-it-works"
                      className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      How It Works
                    </Link>
                    <Link
                      href="/about"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}