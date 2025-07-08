'use client';

import { Cookie, Settings, Eye, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and analyzing how you use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Settings className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold">Essential Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Settings className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg font-semibold">Preference Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Remember your settings and preferences for a personalized experience.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-orange-600" />
                    <h3 className="text-lg font-semibold">Marketing Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Detailed Cookie Information</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">session_id</td>
                      <td className="border border-gray-300 px-4 py-2">Maintains user session</td>
                      <td className="border border-gray-300 px-4 py-2">Session</td>
                      <td className="border border-gray-300 px-4 py-2">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">auth_token</td>
                      <td className="border border-gray-300 px-4 py-2">User authentication</td>
                      <td className="border border-gray-300 px-4 py-2">30 days</td>
                      <td className="border border-gray-300 px-4 py-2">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">preferences</td>
                      <td className="border border-gray-300 px-4 py-2">User settings and preferences</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                      <td className="border border-gray-300 px-4 py-2">Preference</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics tracking</td>
                      <td className="border border-gray-300 px-4 py-2">2 years</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use our cookie preference center (available at the bottom of our website)</li>
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions that manage cookies</li>
                <li>Opt out of specific tracking services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                <li><strong>Intercom:</strong> Customer support and messaging</li>
                <li><strong>Stripe:</strong> Payment processing and fraud prevention</li>
                <li><strong>Social Media:</strong> Social sharing and login functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Browser Settings</h2>
              <p className="text-gray-600 mb-4">
                Most browsers allow you to control cookies through their settings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-600 mb-4">
                Disabling certain cookies may affect your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You may need to log in repeatedly</li>
                <li>Your preferences may not be saved</li>
                <li>Some features may not work properly</li>
                <li>You may see less relevant content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. 
                We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about our use of cookies, please contact us:
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