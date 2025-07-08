'use client';

import { HelpCircle, MessageCircle, Phone, Mail, Search, Book, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Support() {
  const [showQueryModal, setShowQueryModal] = useState(false);
  const [queryForm, setQueryForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string|null>(null);

  const faqs = [
    {
      question: "How do I get started with carbon credit trading?",
      answer: "Create an account, complete KYC verification, fund your wallet, and start browsing our marketplace of verified carbon credits."
    },
    {
      question: "What types of carbon credits are available?",
      answer: "We offer credits from renewable energy, forestry, agriculture, and waste management projects, all verified by recognized standards."
    },
    {
      question: "How are carbon credits verified?",
      answer: "All credits are verified by international standards like Verra, Gold Standard, and Climate Action Reserve before being listed."
    },
    {
      question: "What fees does Vectorium charge?",
      answer: "We charge a 0.5% trading fee per transaction and variable withdrawal fees based on your payment method."
    },
    {
      question: "How can I track my environmental impact?",
      answer: "Your dashboard shows real-time impact metrics, including total CO2 offset and equivalent environmental benefits."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use bank-level encryption and security measures to protect your data and comply with privacy regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get the support you need to make the most of your Vectorium experience. 
              Find answers, get help, and connect with our community.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and FAQs..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Support</h2>
            <p className="text-lg text-gray-600">
              Choose the support option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Live Chat */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Get instant help from our support team. Available 24/7 for urgent issues.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Start Chat
              </button>
              <div className="mt-4 text-sm text-gray-500">
                <div className="flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Avg. response: 2 minutes</span>
                </div>
              </div>
            </div>

            {/* Email Support */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send us a detailed message and we&apos;ll get back to you with a comprehensive answer.
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors inline-block"
                onClick={() => setShowQueryModal(true)}
              >
                Send Email
              </button>
              <div className="mt-4 text-sm text-gray-500">
                <div className="flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Avg. response: 4 hours</span>
                </div>
              </div>
            </div>

            {/* Phone Support */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our support team for complex issues or urgent matters.
              </p>
              <a
                href="tel:+15551234567"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors inline-block"
              >
                Call Now
              </a>
              <div className="mt-4 text-sm text-gray-500">
                <div className="flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about Vectorium
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-open:bg-blue-100 transition-colors">
                        <span className="text-gray-600 group-open:text-blue-600 group-open:rotate-45 transition-transform">+</span>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
            <Link
              href="/help-center"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Browse our full help center →
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Resources</h2>
            <p className="text-lg text-gray-600">
              Explore more ways to get help and learn about carbon credits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive guides and API documentation for developers and advanced users.
              </p>
              <Link
                href="/docs"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                View Docs →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Community</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join our community forum to connect with other users and share experiences.
              </p>
              <Link
                href="/community"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Join Community →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Tutorials</h3>
              <p className="text-gray-600 text-sm mb-4">
                Step-by-step video tutorials to help you get the most out of Vectorium.
              </p>
              <Link
                href="/tutorials"
                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                Watch Tutorials →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our support team is here to help you succeed. Don't hesitate to reach out with any questions or concerns.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Support Query */}
      {showQueryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => { setShowQueryModal(false); setQueryForm({ name: '', email: '', subject: '', message: '' }); setSubmitResult(null); }}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Contact Support</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setSubmitResult(null);
                try {
                  const res = await fetch('/api/support-query', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(queryForm),
                  });
                  if (res.ok) {
                    setSubmitResult('Your message has been sent!');
                    setQueryForm({ name: '', email: '', subject: '', message: '' });
                  } else {
                    const data = await res.json();
                    setSubmitResult(data.error || 'Failed to send message.');
                  }
                } catch (err) {
                  setSubmitResult('Failed to send message.');
                }
                setSubmitting(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={queryForm.name}
                  onChange={e => setQueryForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={queryForm.email}
                  onChange={e => setQueryForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={queryForm.subject}
                  onChange={e => setQueryForm(f => ({ ...f, subject: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={4}
                  required
                  value={queryForm.message}
                  onChange={e => setQueryForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              {submitResult && (
                <div className={`text-sm ${submitResult.includes('sent') ? 'text-green-600' : 'text-red-600'}`}>{submitResult}</div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium"
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}