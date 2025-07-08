'use client';

import { MapPin, Clock, Users, ArrowRight, Heart, Lightbulb, Globe, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Careers() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyPosition, setApplyPosition] = useState('');
  const [form, setForm] = useState<{ name: string; email: string; phone: string; cv: File | null }>({ name: '', email: '', phone: '', cv: null });
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string|null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const openPositions = [
    {
      title: "Senior Blockchain Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Lead the development of our blockchain infrastructure and smart contracts for carbon credit tokenization."
    },
    {
      title: "Climate Science Researcher",
      department: "Research",
      location: "Remote / London",
      type: "Full-time",
      description: "Analyze and verify carbon offset projects, ensuring scientific accuracy and environmental impact."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our carbon credit marketplace platform."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and beautiful user experiences for our web and mobile applications."
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote / Global",
      type: "Full-time",
      description: "Build partnerships with environmental organizations and expand our global market presence."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Manage and scale our cloud infrastructure to support millions of carbon credit transactions."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness stipends"
    },
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and quarterly team retreats"
    },
    {
      icon: Lightbulb,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and mentorship programs"
    },
    {
      icon: Award,
      title: "Equity & Impact",
      description: "Competitive equity package and the opportunity to make a real environmental impact"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Help us build the future of carbon markets and make a meaningful impact on climate change. 
              Join a team of passionate individuals working to create a more sustainable world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#open-positions"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                View Open Positions <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/about"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work at Vectorium?</h2>
            <p className="text-lg text-gray-600">
              Join a company where your work directly contributes to solving one of the world's most pressing challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Make a Real Impact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Mission</h4>
                    <p className="text-gray-600">Every line of code, every design decision, and every business strategy directly contributes to fighting climate change.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Collaborative Culture</h4>
                    <p className="text-gray-600">Work with a diverse, passionate team that values innovation, transparency, and continuous learning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cutting-Edge Technology</h4>
                    <p className="text-gray-600">Work with the latest blockchain, AI, and web technologies while solving complex environmental challenges.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits & Perks</h2>
            <p className="text-lg text-gray-600">
              We believe in taking care of our team so they can do their best work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Additional Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-600">Competitive salary and equity</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-600">Unlimited PTO policy</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-600">Home office setup stipend</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-600">Parental leave benefits</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-600">Annual team retreats</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-600">Carbon offset for personal use</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-600">Flexible working hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-600">Professional development budget</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Find your next opportunity to make a difference
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                      onClick={() => { setApplyPosition(position.title); setShowApplyModal(true); }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don&apos;t see a position that fits? We&apos;re always looking for talented people.</p>
            <button
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold transition-colors"
              onClick={() => { setShowResumeModal(true); }}
            >
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Hiring Process</h2>
            <p className="text-lg text-emerald-100">
              We believe in a fair, transparent, and efficient hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-emerald-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Application</h3>
              <p className="text-emerald-100 text-sm">Submit your application and we'll review it within 48 hours</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone Screen</h3>
              <p className="text-emerald-100 text-sm">30-minute call to discuss your background and the role</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Interview</h3>
              <p className="text-emerald-100 text-sm">Role-specific interview to assess technical skills and fit</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Final Interview</h3>
              <p className="text-emerald-100 text-sm">Meet the team and discuss culture fit and career goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Apply Now */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => { setShowApplyModal(false); setForm({ name: '', email: '', phone: '', cv: null }); setSubmitResult(null); }}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Apply for {applyPosition}</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setSubmitResult(null);
                const formData = new FormData();
                formData.append('name', form.name);
                formData.append('email', form.email);
                formData.append('phone', form.phone);
                formData.append('position', applyPosition);
                if (form.cv) formData.append('cv', form.cv);
                try {
                  const res = await fetch('/api/careers-apply', {
                    method: 'POST',
                    body: formData,
                  });
                  if (res.ok) {
                    setSubmitResult('Application sent successfully!');
                    setForm({ name: '', email: '', phone: '', cv: null });
                  } else {
                    const data = await res.json();
                    setSubmitResult(data.error || 'Failed to send application.');
                  }
                } catch (err) {
                  setSubmitResult('Failed to send application.');
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
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Upload CV</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full"
                  required
                  onChange={e => setForm(f => ({ ...f, cv: e.target.files?.[0] || null }))}
                />
              </div>
              {submitResult && (
                <div className={`text-sm ${submitResult.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{submitResult}</div>
              )}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded font-medium"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Send Us Your Resume */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => { setShowResumeModal(false); setForm({ name: '', email: '', phone: '', cv: null }); setSubmitResult(null); }}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Send Us Your Resume</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setSubmitResult(null);
                const formData = new FormData();
                formData.append('name', form.name);
                formData.append('email', form.email);
                formData.append('phone', form.phone);
                formData.append('position', 'General Resume Submission');
                if (form.cv) formData.append('cv', form.cv);
                try {
                  const res = await fetch('/api/careers-apply', {
                    method: 'POST',
                    body: formData,
                  });
                  if (res.ok) {
                    setSubmitResult('Resume sent successfully!');
                    setForm({ name: '', email: '', phone: '', cv: null });
                  } else {
                    const data = await res.json();
                    setSubmitResult(data.error || 'Failed to send resume.');
                  }
                } catch (err) {
                  setSubmitResult('Failed to send resume.');
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
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Upload CV</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full"
                  required
                  onChange={e => setForm(f => ({ ...f, cv: e.target.files?.[0] || null }))}
                />
              </div>
              {submitResult && (
                <div className={`text-sm ${submitResult.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{submitResult}</div>
              )}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded font-medium"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Send Resume'}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}