'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden lotus-pattern">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-linear-to-br from-calm-blue to-transparent blur-3xl animate-float top-20 left-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 animate-breathe inline-block">
            <span className="text-7xl">💌</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions or to start your journey.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div className="zen-card bg-linear-to-br from-accent/20 to-white rounded-3xl p-8 sm:p-10 shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors bg-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors bg-white resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-white text-primary text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <span>✉️</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-4xl font-bold mb-8 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Visit Our Studio
                </h2>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-linear-to-br from-lotus-pink to-pink-300 rounded-2xl flex items-center justify-center shrink-0 animate-breathe">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        123 Serenity Lane<br />
                        Wellness District<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-linear-to-br from-zen-green to-green-300 rounded-2xl flex items-center justify-center shrink-0 animate-breathe" style={{ animationDelay: '1s' }}>
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri: 6AM - 9PM</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-linear-to-br from-calm-blue to-blue-300 rounded-2xl flex items-center justify-center shrink-0 animate-breathe" style={{ animationDelay: '2s' }}>
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                      <p className="text-gray-600">hello@serenity.yoga</p>
                      <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-linear-to-br from-mandala-gold to-yellow-300 rounded-2xl flex items-center justify-center shrink-0 animate-breathe" style={{ animationDelay: '3s' }}>
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Studio Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 6:00 AM - 9:00 PM<br />
                        Saturday - Sunday: 8:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="zen-card bg-linear-to-br from-primary/10 to-spiritual/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Follow Our Journey
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Instagram', icon: '📷', color: 'from-pink-400 to-purple-500' },
                    { name: 'Facebook', icon: '👥', color: 'from-blue-500 to-blue-600' },
                    { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-600' },
                    { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-500' },
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`zen-card p-6 bg-linear-to-br ${social.color} text-white rounded-2xl hover:scale-105 transition-transform shadow-lg`}
                    >
                      <div className="text-4xl mb-2">{social.icon}</div>
                      <div className="font-semibold">{social.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-linear-to-b from-accent/10 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Find Us
            </h2>
            <p className="text-gray-600">Located in the heart of San Francisco</p>
          </div>
          
          <div className="zen-card rounded-3xl overflow-hidden shadow-2xl h-96 bg-linear-to-br from-accent/30 to-calm-blue/20 flex items-center justify-center">
            <div className="text-center">
              <span className="text-8xl mb-4 block animate-float">🗺️</span>
              <p className="text-xl text-gray-600">Interactive map would be integrated here</p>
              <p className="text-sm text-gray-500 mt-2">Google Maps / Mapbox integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lotus-pattern">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do I need to bring my own mat?',
                a: 'We provide complimentary mats for all classes. However, you\'re welcome to bring your own if you prefer.',
              },
              {
                q: 'What should I wear to class?',
                a: 'Wear comfortable, breathable clothing that allows you to move freely. Most students wear leggings or shorts with a fitted top.',
              },
              {
                q: 'I\'ve never done yoga before. Which class should I start with?',
                a: 'We recommend starting with our Hatha Yoga class, which is perfect for beginners. Our instructors will guide you through the basics.',
              },
              {
                q: 'Can I book a private session?',
                a: 'Yes! We offer private and semi-private sessions. Contact us to schedule a personalized practice.',
              },
              {
                q: 'What is your cancellation policy?',
                a: 'You can cancel or reschedule up to 2 hours before class starts without penalty.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="zen-card bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-spiritual to-mandala-gold opacity-95"></div>
        <div className="absolute inset-0 lotus-pattern opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="mb-8 animate-breathe inline-block">
            <span className="text-7xl">🙏</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready to Begin?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Take the first step on your transformative journey today
          </p>

          <button className="px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:scale-110 transition-transform shadow-2xl hover:shadow-3xl flex items-center space-x-2 mx-auto">
            <span>Book Your First Class</span>
            <span>🧘</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">🪷</span>
                <span className="text-2xl font-bold">Serenity</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming lives through the ancient art of yoga.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Classes', 'About', 'Schedule', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Classes</h3>
              <ul className="space-y-2">
                {['Hatha Yoga', 'Vinyasa Flow', 'Ashtanga', 'Kundalini', 'Yin Yoga'].map((yogaClass) => (
                  <li key={yogaClass}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {yogaClass}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Get wellness tips and class updates
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none mb-3"
              />
              <button
                className="w-full px-4 py-2 bg-white text-primary rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Serenity Yoga. All rights reserved. Namaste 🙏</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
