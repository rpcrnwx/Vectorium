'use client';

import { Users, Target, Globe, Award, ArrowRight, Heart, Lightbulb, Shield, MapPin, Calendar, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Vectorium
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We&apos;re on a mission to democratize carbon markets and accelerate the world&apos;s transition 
              to a sustainable future through innovative blockchain technology.
            </p>
            <Link
              href="/careers"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Join Our Mission <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To create a transparent, accessible, and efficient carbon credit marketplace that empowers 
                individuals and organizations to take meaningful climate action while supporting verified 
                environmental projects worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Target className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Transparency First</h4>
                    <p className="text-gray-600 text-sm">Every transaction is recorded on an immutable blockchain ledger</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Globe className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Global Impact</h4>
                    <p className="text-gray-600 text-sm">Supporting environmental projects across all continents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Accessible to All</h4>
                    <p className="text-gray-600 text-sm">Making carbon markets available to everyone, not just institutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://simplyeducate.me/wp-content/uploads/images/environmental-sustainability-nIY.jpeg"
                alt="Environmental conservation and sustainability mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Founded in 2022 by a team of environmental scientists, blockchain engineers, and climate policy experts, 
                Vectorium was born from the vision of making carbon markets accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
                  alt="Team collaboration and innovation in sustainable technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our founders recognized that traditional carbon markets were complex, opaque, and accessible only to large institutions. 
                  They envisioned a world where anyone could participate in climate action through transparent, verified carbon credits.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By combining blockchain technology with rigorous environmental science, we created a platform that brings 
                  trust, transparency, and accessibility to carbon credit trading.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Today, Vectorium connects environmental projects from around the world with individuals and organizations 
                  committed to reducing their carbon footprint. Our platform has facilitated the trading of over 1 million 
                  carbon credits, supporting projects across 25 countries.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">1M+</div>
                    <div className="text-sm text-gray-600">Credits Traded</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">25</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=2070&auto=format&fit=crop"
                  alt="Global environmental projects and renewable energy initiatives"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at Vectorium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Environmental Stewardship</h3>
              <p className="text-gray-600">
                We believe in taking responsibility for our planet&apos;s future and supporting projects that create real environmental impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of technology to create better solutions for carbon market challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust & Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of transparency, security, and ethical business practices in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team section commented out by request */}
      {/*
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the visionaries driving Vectorium&apos;s mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1887&auto=format&fit=crop"
                  alt="Sarah Chen - CEO & Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
              <p className="text-emerald-600 font-medium mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm mb-4">
                Former climate policy advisor with 15+ years in sustainable finance and blockchain technology.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                  alt="Marcus Rodriguez - CTO & Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marcus Rodriguez</h3>
              <p className="text-emerald-600 font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm mb-4">
                Blockchain architect and former lead engineer at major fintech companies with expertise in DeFi protocols.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Austin, TX</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                  alt="Dr. Amara Okafor - Chief Science Officer"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Amara Okafor</h3>
              <p className="text-emerald-600 font-medium mb-3">Chief Science Officer</p>
              <p className="text-gray-600 text-sm mb-4">
                Environmental scientist and carbon market expert with PhD in Climate Change and 20+ years of research experience.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>London, UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact So Far</h2>
            <p className="text-lg text-gray-600">
              Numbers that reflect our commitment to environmental change
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1M+</div>
              <div className="text-gray-600">Carbon Credits Traded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Verified Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>

          {/* Visual Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
                alt="Forest conservation and reforestation projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-semibold mb-1">Forest Conservation</h4>
                <p className="text-sm text-gray-200">Protecting 50,000+ acres of rainforest</p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop"
                alt="Renewable energy and solar power projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-semibold mb-1">Renewable Energy</h4>
                <p className="text-sm text-gray-200">Supporting 200+ clean energy projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>  

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Key milestones in Vectorium&apos;s growth and development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2022
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Company Founded</h3>
                  <p className="text-gray-600">Vectorium was founded with the vision of democratizing carbon markets through blockchain technology.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2025
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Platform Launch</h3>
                  <p className="text-gray-600">Launched our next-generation platform, expanding access to verified carbon credit projects and growing our global user base.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2027
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Global Expansion</h3>
                  <p className="text-gray-600">Expanded our presence to over 50 countries and established strategic partnerships with leading environmental organizations worldwide.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  2030
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise Solutions</h3>
                  <p className="text-gray-600">Rolled out advanced enterprise solutions, empowering corporations and institutions to seamlessly manage and optimize their carbon portfolios on a global scale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Presence</h2>
            <p className="text-lg text-gray-600">
              Our team works from around the world to serve our global community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
                  alt="San Francisco office location"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">San Francisco</h3>
              <p className="text-gray-600 text-sm mb-3">Headquarters & Engineering</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>123 Market Street, CA 94105</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
                  alt="London office location"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">London</h3>
              <p className="text-gray-600 text-sm mb-3">European Operations</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>45 Finsbury Square, EC2A 1PX</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
                  alt="Singapore office location"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Singapore</h3>
              <p className="text-gray-600 text-sm mb-3">Asia-Pacific Hub</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>1 Marina Boulevard, 018989</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              Whether you're looking to offset your carbon footprint, invest in environmental projects, 
              or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/careers"
                className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-emerald-50 transition-colors"
              >
                View Open Positions <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/auth/signup"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}