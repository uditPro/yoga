'use client';

import Navigation from '../components/Navigation';

export default function About() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-accent/30 via-lotus-pink/20 to-zen-green/20"></div>
        <div className="absolute inset-0 lotus-pattern"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 animate-lotus-bloom inline-block">
            <span className="text-7xl">🕉️</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Philosophy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where ancient wisdom meets modern understanding
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl">
              Serenity Yoga was born from a simple yet profound vision: to create a sanctuary where the 
              physical practice of yoga seamlessly merges with spiritual awakening.
            </p>
            
            <p>
              Founded in 2010, our studio has evolved into a thriving community of practitioners who 
              understand that yoga is not merely exercise—it's a transformative journey that touches 
              every aspect of our being. We honor the ancient traditions while embracing contemporary 
              insights into wellness and human potential.
            </p>
            
            <p>
              Our approach is holistic. We believe that true transformation occurs when we nurture the 
              body through asana, calm the mind through meditation, and awaken the spirit through 
              conscious living. Each class, each breath, each moment on the mat is an opportunity for 
              profound self-discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lotus-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our practice and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🙏',
                title: 'Authenticity',
                description: 'We honor the ancient roots of yoga while remaining true to our unique expression.',
              },
              {
                icon: '💝',
                title: 'Compassion',
                description: 'Every practitioner is met with kindness, understanding, and unconditional support.',
              },
              {
                icon: '🌱',
                title: 'Growth',
                description: 'We embrace continuous learning and evolution, both on and off the mat.',
              },
              {
                icon: '🤝',
                title: 'Community',
                description: 'Together we are stronger. Our sangha nurtures connection and belonging.',
              },
              {
                icon: '⚖️',
                title: 'Balance',
                description: 'We seek harmony between effort and ease, strength and flexibility, doing and being.',
              },
              {
                icon: '✨',
                title: 'Transformation',
                description: 'We believe in the profound capacity for change that exists within each of us.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="zen-card bg-white rounded-3xl p-8 shadow-lg text-center"
              >
                <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Eight Limbs */}
      <section className="py-20 bg-linear-to-b from-accent/20 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              The Eight Limbs of Yoga
            </h2>
            <p className="text-xl text-gray-600">
              Patanjali's ancient path to enlightenment guides our practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { number: '1', name: 'Yama', description: 'Ethical standards and integrity', icon: '🌟' },
              { number: '2', name: 'Niyama', description: 'Self-discipline and spiritual observances', icon: '📿' },
              { number: '3', name: 'Asana', description: 'Physical postures for body strength', icon: '🧘' },
              { number: '4', name: 'Pranayama', description: 'Breath control and energy regulation', icon: '💨' },
              { number: '5', name: 'Pratyahara', description: 'Withdrawal of the senses', icon: '🤫' },
              { number: '6', name: 'Dharana', description: 'Concentration and focused attention', icon: '🎯' },
              { number: '7', name: 'Dhyana', description: 'Meditation and contemplation', icon: '🧠' },
              { number: '8', name: 'Samadhi', description: 'State of bliss and enlightenment', icon: '✨' },
            ].map((limb, index) => (
              <div
                key={index}
                className="zen-card bg-white rounded-2xl p-6 shadow-lg flex items-start space-x-4"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary to-spiritual flex items-center justify-center text-white font-bold text-xl">
                    {limb.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {limb.name}
                    </h3>
                    <span className="text-3xl">{limb.icon}</span>
                  </div>
                  <p className="text-gray-600">
                    {limb.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 lotus-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Meet Our Teachers
            </h2>
            <p className="text-xl text-gray-600">
              Experienced guides on your journey to wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ananya Sharma',
                title: 'Founder & Lead Instructor',
                specialization: 'Hatha & Kundalini',
                bio: '20+ years of practice. Trained in Rishikesh, India.',
                emoji: '🌸',
              },
              {
                name: 'David Martinez',
                title: 'Vinyasa Specialist',
                specialization: 'Vinyasa & Power Yoga',
                bio: 'Former athlete turned yogi. Passionate about dynamic flow.',
                emoji: '🔥',
              },
              {
                name: 'Mei Lin',
                title: 'Yin & Meditation Guide',
                specialization: 'Yin Yoga & Mindfulness',
                bio: 'Buddhist practitioner. Specializes in deep relaxation.',
                emoji: '🌙',
              },
            ].map((instructor, index) => (
              <div
                key={index}
                className="zen-card bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="h-48 bg-linear-to-br from-primary via-spiritual to-mandala-gold flex items-center justify-center">
                  <span className="text-8xl">{instructor.emoji}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {instructor.name}
                  </h3>
                  <p className="text-spiritual font-semibold mb-2">
                    {instructor.title}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {instructor.specialization}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-spiritual to-mandala-gold opacity-95"></div>
        <div className="absolute inset-0 lotus-pattern opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <span className="text-7xl">📖</span>
          </div>
          
          <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
            "Yoga is the journey of the self, through the self, to the self."
          </blockquote>
          
          <p className="text-xl opacity-90">
            — The Bhagavad Gita
          </p>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-7xl">🤗</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Whether you're a complete beginner or an experienced practitioner, you'll find your place in our 
            welcoming sangha. Your transformation begins today.
          </p>
          <button className="px-10 py-4 bg-linear-to-r from-primary via-spiritual to-mandala-gold text-white text-lg font-bold rounded-full hover:scale-110 transition-transform shadow-2xl hover:shadow-3xl flex items-center space-x-2 mx-auto">
            <span>Start Your Journey</span>
            <span>🚀</span>
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
