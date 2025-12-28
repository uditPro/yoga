'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden lotus-pattern">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute w-96 h-96 rounded-full bg-linear-to-br from-lotus-pink to-transparent blur-3xl animate-float"
            style={{
              top: '10%',
              left: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          ></div>
          <div 
            className="absolute w-96 h-96 rounded-full bg-linear-to-br from-zen-green to-transparent blur-3xl animate-float"
            style={{
              top: '50%',
              right: '10%',
              animationDelay: '2s',
              transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.03}px)`
            }}
          ></div>
          <div 
            className="absolute w-96 h-96 rounded-full bg-linear-to-br from-calm-blue to-transparent blur-3xl animate-float"
            style={{
              bottom: '10%',
              left: '30%',
              animationDelay: '4s',
              transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * -0.025}px)`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Floating Lotus Icon */}
          <div className="mb-4 sm:mb-6 md:mb-8 inline-block animate-lotus-bloom">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl">🪷</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-up">
            <span className="gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Transform Your
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Body • Mind • Spirit
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed animate-fade-in-up px-2" style={{ animationDelay: '0.4s' }}>
            Embark on a journey of self-discovery through ancient wisdom and modern practice. 
            Unite physical strength with spiritual enlightenment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
            <button className="group relative px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 bg-white text-primary text-xs sm:text-sm md:text-base lg:text-lg font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center">
              <span className="relative z-10 whitespace-nowrap">Start Your Journey</span>
              <span className="group-hover:translate-x-1 transition-transform hidden sm:inline">→</span>
              <div className="absolute inset-0 bg-linear-to-r from-primary via-spiritual to-mandala-gold opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </button>
            
            <button className="px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 bg-white/90 backdrop-blur-sm text-primary text-xs sm:text-sm md:text-base lg:text-lg font-bold rounded-full border-2 border-white hover:bg-white hover:text-primary transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-xl w-full sm:w-auto whitespace-nowrap">
              Explore Classes
            </button>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div> */}
        </div>

        {/* Decorative Mandalas */}
        <div className="absolute top-20 right-10 w-32 h-32 opacity-20 animate-mandala-spin hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-spiritual"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-mandala-gold"/>
            <circle cx="50" cy="50" r="10" fill="currentColor" className="text-primary"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-linear-to-b from-transparent to-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Why Choose Serenity
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Experience yoga like never before with our unique approach
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: '🧘‍♀️',
                title: 'Physical Excellence',
                description: 'Master asanas with expert guidance. Build strength, flexibility, and balance through proven techniques.',
              },
              {
                icon: '✨',
                title: 'Spiritual Growth',
                description: 'Connect with your inner self. Explore meditation, mindfulness, and ancient yogic philosophy.',
              },
              {
                icon: '🌸',
                title: 'Holistic Wellness',
                description: 'Transform your entire being. Achieve harmony between body, mind, and spirit in every session.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="zen-card bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 lotus-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Our Classes
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              From beginner to advanced, find the perfect practice for your journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { name: 'Hatha Yoga', level: 'Beginner', color: 'from-lotus-pink to-pink-300', emoji: '🌺' },
              { name: 'Vinyasa Flow', level: 'Intermediate', color: 'from-zen-green to-green-300', emoji: '🍃' },
              { name: 'Ashtanga', level: 'Advanced', color: 'from-calm-blue to-blue-300', emoji: '💫' },
              { name: 'Kundalini', level: 'All Levels', color: 'from-mandala-gold to-yellow-300', emoji: '⚡' },
            ].map((yogaClass, index) => (
              <div
                key={index}
                className="zen-card group relative overflow-hidden rounded-3xl h-56 sm:h-64 md:h-72 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${yogaClass.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 text-white">
                  <div className="text-5xl sm:text-6xl mb-2 sm:mb-4 animate-breathe">{yogaClass.emoji}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {yogaClass.name}
                  </h3>
                  <span className="text-xs sm:text-sm bg-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {yogaClass.level}
                  </span>
                  <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="px-4 sm:px-6 py-1 sm:py-2 bg-white text-gray-900 rounded-full text-xs sm:text-sm font-bold hover:scale-110 transition-transform shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-linear-to-b from-accent/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Transformative Stories
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
              Real experiences from our community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Yoga Enthusiast',
                text: 'This place changed my life. The combination of physical practice and spiritual guidance is unmatched.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Beginner',
                text: 'I was nervous at first, but the welcoming atmosphere and expert instructors made me feel at home immediately.',
                rating: 5,
              },
              {
                name: 'Emma Williams',
                role: 'Advanced Practitioner',
                text: 'Even after years of practice, I continue to discover new depths in my journey here. Truly exceptional.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="zen-card bg-white rounded-3xl p-6 sm:p-8 shadow-lg"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg sm:text-2xl text-mandala-gold">⭐</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-primary text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-800 opacity-95"></div>
        <div className="absolute inset-0 lotus-pattern opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 sm:mb-6 md:mb-8 animate-breathe inline-block">
            <span className="text-5xl sm:text-6xl md:text-7xl drop-shadow-2xl">🕉️</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
            Begin Your Transformation Today
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-12 leading-relaxed text-white drop-shadow-md px-2">
            Join thousands who have discovered inner peace and physical vitality. Your journey to wellness starts with a single breath.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-2 sm:px-4">
            <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-white text-primary text-xs sm:text-sm md:text-base lg:text-lg font-bold rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-2 w-full sm:w-auto">
              <span className="whitespace-nowrap">Book Free Trial</span>
              <span className="hidden sm:inline">🎁</span>
            </button>
            <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-transparent border-2 sm:border-3 border-white text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 w-full sm:w-auto whitespace-nowrap">
              View Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🪷</span>
                <span className="text-lg sm:text-2xl font-bold">Serenity</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Transforming lives through the ancient art of yoga.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2">
                {['Classes', 'Schedule', 'About', 'Teachers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-4">Classes</h3>
              <ul className="space-y-1 sm:space-y-2">
                {['Hatha Yoga', 'Vinyasa Flow', 'Ashtanga', 'Kundalini', 'Meditation'].map((yogaClass) => (
                  <li key={yogaClass}>
                    <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                      {yogaClass}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-4">Connect</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">📧 hello@serenity.yoga</p>
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">📞 +1 (555) 123-4567</p>
              <div className="flex space-x-3">
                {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-xs sm:text-sm hover:bg-primary transition-colors"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">© 2025 Serenity Yoga. All rights reserved. Namaste 🙏</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
