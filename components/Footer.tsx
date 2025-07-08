'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
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
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Revolutionizing sustainability through blockchain technology. Join us in creating a greener future with transparent carbon credit trading and environmental impact solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Lasnamäe 4B-26 11412, Tallinn, Estonia</span>
              </div>
              {/* <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>contact@vectorium.com</span>
              </div> */}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/vectorium/about/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4 text-emerald-400">Platform</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/how-it-works" className="hover:text-emerald-400 transition-colors">How it Works</Link></li>
              <li><Link href="/marketplace" className="hover:text-emerald-400 transition-colors">Marketplace</Link></li>
              <li><Link href="/wallet" className="hover:text-emerald-400 transition-colors">Wallet</Link></li>
              <li><Link href="/security" className="hover:text-emerald-400 transition-colors">Security</Link></li>
              {/* <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">API Documentation</Link></li>
              <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">Developer Tools</Link></li> */}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-emerald-400">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
              <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
              {/* <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">Press</Link></li>
              <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">Investors</Link></li>
              <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">Partnerships</Link></li> */}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4 text-emerald-400">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/250617 Vectorium (VECT) – Whitepaper .25 Edition.pdf" target="_blank" className="hover:text-emerald-400 transition-colors">White Paper</Link></li>
              {/* <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">Help Center</Link></li> */}
              <li><Link href="/support" className="hover:text-emerald-400 transition-colors">Support</Link></li>
              {/* <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">Community</Link></li>
              <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">System Status</Link></li> */}
              <li><Link href="/coming-soon" className="hover:text-emerald-400 transition-colors">Carbon Calculator</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Vectorium. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Terms of Service</Link>
              <Link href="/coming-soon" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Cookie Policy</Link>
              <Link href="/coming-soon" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}