'use client';

import Navigation from '../components/Navigation';

export default function Teachers() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden lotus-pattern">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-mandala-gold to-transparent blur-3xl animate-float top-10 right-10"></div>
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-lotus-pink to-transparent blur-3xl animate-float bottom-10 left-10" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 animate-lotus-bloom inline-block">
            <span className="text-7xl">👥</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Expert Teachers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the skilled instructors who will guide your transformative journey
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-gradient-to-b from-transparent to-accent/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Teacher 1 - Ananya Sharma */}
          <div className="mb-20 zen-card bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-full bg-gradient-to-br from-mandala-gold via-spiritual to-primary flex items-center justify-center text-9xl animate-breathe">
                🌸
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-mandala-gold text-yellow-800 rounded-full text-sm font-bold mb-4 w-fit">
                  FOUNDER & LEAD
                </span>
                <h2 className="text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Ananya Sharma
                </h2>
                <p className="text-xl text-spiritual font-bold mb-6">Yoga Master • Spiritual Guide</p>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  With 25+ years of dedicated practice and teaching, Ananya has transformed thousands of lives through the ancient wisdom of yoga. Trained in Rishikesh under renowned gurus, she seamlessly blends traditional techniques with modern understanding.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏆</span>
                    <span className="text-gray-700 font-semibold">Certified Master Instructor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📚</span>
                    <span className="text-gray-700 font-semibold">Specializes in Hatha & Kundalini</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">❤️</span>
                    <span className="text-gray-700 font-semibold">5000+ Students Guided</span>
                  </div>
                </div>

                <button className="px-8 py-3 bg-white text-primary rounded-full font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-2xl flex items-center space-x-2 w-fit">
                  <span>Book with Ananya</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Teacher 2 - David Martinez */}
          <div className="mb-20 zen-card bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center order-2 md:order-1">
                <span className="inline-block px-4 py-1 bg-zen-green text-green-800 rounded-full text-sm font-bold mb-4 w-fit">
                  VINYASA SPECIALIST
                </span>
                <h2 className="text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  David Martinez
                </h2>
                <p className="text-xl text-spiritual font-bold mb-6">Power Flow Expert • Movement Coach</p>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Former professional athlete turned yoga instructor, David brings dynamic energy to every class. His creative flows and motivational teaching style inspire students to push their boundaries while honoring their bodies.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🔥</span>
                    <span className="text-gray-700 font-semibold">High-Energy Vinyasa & Power Yoga</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💪</span>
                    <span className="text-gray-700 font-semibold">Athletic Movement Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🎯</span>
                    <span className="text-gray-700 font-semibold">Goal-Oriented Coaching</span>
                  </div>
                </div>

                <button className="px-8 py-3 bg-white text-primary rounded-full font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-2xl flex items-center space-x-2 w-fit">
                  <span>Book with David</span>
                  <span>→</span>
                </button>
              </div>
              <div className="relative h-96 md:h-full bg-gradient-to-br from-zen-green via-emerald-500 to-teal-600 flex items-center justify-center text-9xl animate-breathe order-1 md:order-2" style={{ animationDelay: '1s' }}>
                🔥
              </div>
            </div>
          </div>

          {/* Teacher 3 - Mei Lin */}
          <div className="mb-20 zen-card bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-full bg-gradient-to-br from-calm-blue via-indigo-400 to-purple-500 flex items-center justify-center text-9xl animate-breathe" style={{ animationDelay: '2s' }}>
                🌙
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-calm-blue text-blue-800 rounded-full text-sm font-bold mb-4 w-fit">
                  MEDITATION GUIDE
                </span>
                <h2 className="text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Mei Lin
                </h2>
                <p className="text-xl text-spiritual font-bold mb-6">Yin Yoga Specialist • Mindfulness Coach</p>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  A lifelong Buddhist practitioner and certified meditation teacher, Mei Lin creates a sanctuary of peace in every class. Her gentle guidance and deep wisdom help students access profound states of relaxation and inner clarity.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧘</span>
                    <span className="text-gray-700 font-semibold">Yin Yoga & Restorative Practice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🕉️</span>
                    <span className="text-gray-700 font-semibold">Meditation & Mindfulness</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💆</span>
                    <span className="text-gray-700 font-semibold">Stress Relief & Healing</span>
                  </div>
                </div>

                <button className="px-8 py-3 bg-white text-primary rounded-full font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-2xl flex items-center space-x-2 w-fit">
                  <span>Book with Mei Lin</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Teacher 4 - Sarah Johnson */}
          <div className="zen-card bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center order-2 md:order-1">
                <span className="inline-block px-4 py-1 bg-lotus-pink text-pink-800 rounded-full text-sm font-bold mb-4 w-fit">
                  HATHA SPECIALIST
                </span>
                <h2 className="text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Sarah Johnson
                </h2>
                <p className="text-xl text-spiritual font-bold mb-6">Alignment Expert • Beginner Coach</p>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  With a passion for helping beginners discover yoga, Sarah creates a nurturing environment where everyone feels welcome. Her attention to alignment and modifications ensures every student can practice safely and confidently.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📐</span>
                    <span className="text-gray-700 font-semibold">Perfect Alignment Instruction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👶</span>
                    <span className="text-gray-700 font-semibold">Beginner-Friendly Teaching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🤝</span>
                    <span className="text-gray-700 font-semibold">Supportive & Encouraging</span>
                  </div>
                </div>

                <button className="px-8 py-3 bg-white text-primary rounded-full font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-2xl flex items-center space-x-2 w-fit">
                  <span>Book with Sarah</span>
                  <span>→</span>
                </button>
              </div>
              <div className="relative h-96 md:h-full bg-gradient-to-br from-lotus-pink via-rose-400 to-pink-500 flex items-center justify-center text-9xl animate-breathe order-1 md:order-2" style={{ animationDelay: '3s' }}>
                💕
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-spiritual to-mandala-gold opacity-95"></div>
        <div className="absolute inset-0 lotus-pattern opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Learn From The Best
          </h2>
          
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Our instructors are dedicated to your growth and transformation. Choose your perfect teacher.
          </p>

          <button className="px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:scale-110 transition-transform shadow-2xl hover:shadow-3xl flex items-center space-x-2 mx-auto">
            <span>Browse Schedule</span>
            <span>📅</span>
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
