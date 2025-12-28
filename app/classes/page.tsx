'use client';

import Navigation from '../components/Navigation';

export default function Classes() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden lotus-pattern">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-lotus-pink to-transparent blur-3xl animate-float top-20 left-10"></div>
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-zen-green to-transparent blur-3xl animate-float bottom-20 right-10" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 animate-lotus-bloom inline-block">
            <span className="text-7xl">🧘‍♀️</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Yoga Classes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect practice for your journey. Each class is designed to nurture your body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-gradient-to-b from-transparent to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hatha Yoga */}
          <div className="mb-20 zen-card bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 sm:h-80 md:h-auto bg-gradient-to-br from-lotus-pink to-pink-300 flex items-center justify-center">
                <div className="text-7xl sm:text-9xl animate-breathe">🌺</div>
              </div>
              <div className="p-8 sm:p-12">
                <span className="inline-block px-4 py-1 bg-lotus-pink text-pink-800 rounded-full text-sm font-semibold mb-4">
                  BEGINNER FRIENDLY
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Hatha Yoga
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Perfect for beginners, Hatha Yoga focuses on basic poses and breathing techniques. 
                  This gentle practice builds a strong foundation for your yoga journey while promoting relaxation and mindfulness.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-gray-700">60 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💪</span>
                    <span className="text-gray-700">Low to Moderate Intensity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-gray-700">Focus: Foundation & Alignment</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-white text-pink-600 rounded-full font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-2xl flex items-center space-x-2">
                  <span>Book This Class</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Vinyasa Flow */}
          <div className="mb-20 zen-card bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 order-2 md:order-1">
                <span className="inline-block px-4 py-1 bg-zen-green text-green-800 rounded-full text-sm font-semibold mb-4">
                  INTERMEDIATE
                </span>
                <h2 className="text-4xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Vinyasa Flow
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dynamic and fluid, Vinyasa Flow connects breath with movement in a creative sequence. 
                  Build strength, flexibility, and endurance while experiencing the meditative quality of continuous flow.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-gray-700">75 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💪</span>
                    <span className="text-gray-700">Moderate to High Intensity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-gray-700">Focus: Flow & Creativity</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-white text-green-600 rounded-full font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-2xl flex items-center space-x-2">
                  <span>Book This Class</span>
                  <span>→</span>
                </button>
              </div>
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-zen-green to-green-300 flex items-center justify-center order-1 md:order-2">
                <div className="text-9xl animate-breathe" style={{ animationDelay: '1s' }}>🍃</div>
              </div>
            </div>
          </div>

          {/* Ashtanga */}
          <div className="mb-20 zen-card bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-calm-blue to-blue-300 flex items-center justify-center">
                <div className="text-9xl animate-breathe" style={{ animationDelay: '0.5s' }}>💫</div>
              </div>
              <div className="p-12">
                <span className="inline-block px-4 py-1 bg-calm-blue text-blue-800 rounded-full text-sm font-semibold mb-4">
                  ADVANCED
                </span>
                <h2 className="text-4xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Ashtanga Yoga
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A rigorous and structured practice following a specific sequence of poses. 
                  Ashtanga builds incredible strength, stamina, and discipline while purifying the body through internal heat.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-gray-700">90 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💪</span>
                    <span className="text-gray-700">High Intensity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-gray-700">Focus: Discipline & Strength</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-2xl flex items-center space-x-2">
                  <span>Book This Class</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Kundalini */}
          <div className="mb-20 zen-card bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 order-2 md:order-1">
                <span className="inline-block px-4 py-1 bg-mandala-gold text-yellow-800 rounded-full text-sm font-semibold mb-4">
                  ALL LEVELS
                </span>
                <h2 className="text-4xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Kundalini Yoga
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Awaken your spiritual energy through dynamic breathing, chanting, and specific postures. 
                  Kundalini is a transformative practice that balances your chakras and elevates consciousness.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-gray-700">60 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💪</span>
                    <span className="text-gray-700">Variable Intensity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-gray-700">Focus: Spiritual Awakening</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-white text-yellow-600 rounded-full font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-2xl flex items-center space-x-2">
                  <span>Book This Class</span>
                  <span>→</span>
                </button>
              </div>
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-mandala-gold to-yellow-300 flex items-center justify-center order-1 md:order-2">
                <div className="text-9xl animate-breathe" style={{ animationDelay: '1.5s' }}>⚡</div>
              </div>
            </div>
          </div>

          {/* Yin Yoga */}
          <div className="mb-20 zen-card bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-purple-300 to-purple-400 flex items-center justify-center">
                <div className="text-9xl animate-breathe">🌙</div>
              </div>
              <div className="p-12">
                <span className="inline-block px-4 py-1 bg-purple-300 text-purple-800 rounded-full text-sm font-semibold mb-4">
                  RESTORATIVE
                </span>
                <h2 className="text-4xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Yin Yoga
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A slow-paced, meditative practice where poses are held for longer periods. 
                  Yin Yoga targets deep connective tissues, promoting flexibility and inner calm.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-gray-700">75 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💪</span>
                    <span className="text-gray-700">Low Intensity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-gray-700">Focus: Deep Stretch & Meditation</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
                  Book This Class
                </button>
              </div>
            </div>
          </div>

          {/* Power Yoga */}
          <div className="zen-card bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 order-2 md:order-1">
                <span className="inline-block px-4 py-1 bg-red-300 text-red-800 rounded-full text-sm font-semibold mb-4">
                  INTENSE
                </span>
                <h2 className="text-4xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Power Yoga
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An athletic, vigorous style derived from Ashtanga. Power Yoga builds lean muscle mass, 
                  cardiovascular endurance, and mental toughness through challenging sequences.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-gray-700">60 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💪</span>
                    <span className="text-gray-700">Very High Intensity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-gray-700">Focus: Strength & Endurance</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
                  Book This Class
                </button>
              </div>
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-red-300 to-red-400 flex items-center justify-center order-1 md:order-2">
                <div className="text-9xl animate-breathe" style={{ animationDelay: '2s' }}>🔥</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-spiritual to-mandala-gold opacity-95"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Not Sure Which Class to Choose?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free consultation with one of our expert instructors
          </p>
          <button className="px-10 py-4 bg-white text-primary text-lg font-bold rounded-full hover:scale-110 transition-transform shadow-2xl hover:shadow-3xl flex items-center space-x-2 mx-auto">
            <span>Free Consultation</span>
            <span>💬</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-3xl">🪷</span>
              <span className="text-2xl font-bold">Serenity</span>
            </div>
            <p className="text-gray-400">© 2025 Serenity Yoga. All rights reserved. Namaste 🙏</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
