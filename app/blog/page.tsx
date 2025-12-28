'use client';

import Navigation from '../components/Navigation';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'The Science Behind Yoga',
      category: 'Health',
      excerpt: 'Discover how yoga affects your brain chemistry and physical health',
      image: '🧠',
      color: 'from-calm-blue to-blue-400',
      date: 'Dec 20, 2025',
    },
    {
      id: 2,
      title: 'Meditation for Beginners',
      category: 'Spiritual',
      excerpt: 'Start your meditation journey with simple techniques anyone can learn',
      image: '🧘',
      color: 'from-purple-300 to-purple-500',
      date: 'Dec 18, 2025',
    },
    {
      id: 3,
      title: 'Chakra Balancing Guide',
      category: 'Energy',
      excerpt: 'Learn how to align your chakras for optimal energy flow',
      image: '⚡',
      color: 'from-mandala-gold to-yellow-400',
      date: 'Dec 15, 2025',
    },
    {
      id: 4,
      title: 'Flexibility Training',
      category: 'Physical',
      excerpt: 'Increase your flexibility safely with proven yoga techniques',
      image: '🤸',
      color: 'from-lotus-pink to-pink-400',
      date: 'Dec 12, 2025',
    },
    {
      id: 5,
      title: 'Breathwork for Stress Relief',
      category: 'Wellness',
      excerpt: 'Master pranayama techniques to calm your nervous system',
      image: '💨',
      color: 'from-zen-green to-green-400',
      date: 'Dec 10, 2025',
    },
    {
      id: 6,
      title: 'Yoga Philosophy 101',
      category: 'Education',
      excerpt: 'Understanding the ancient wisdom behind modern yoga',
      image: '📖',
      color: 'from-spiritual to-amber-700',
      date: 'Dec 8, 2025',
    },
  ];

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden lotus-pattern">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-calm-blue to-transparent blur-3xl animate-float top-20 left-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-lotus-pink to-transparent blur-3xl animate-float bottom-20 right-20" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 animate-lotus-bloom inline-block">
            <span className="text-7xl">📚</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
            Yoga & Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and inspiration for your yoga journey
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-transparent to-accent/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="zen-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center overflow-hidden relative`}>
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{article.image}</span>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-bold text-primary">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 font-semibold">{article.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-spiritual transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <button className="px-6 py-2.5 bg-white text-primary rounded-full font-bold border-2 border-primary hover:bg-primary hover:text-white transition-all hover:scale-105">
                    Read Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lotus-pattern">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="zen-card bg-white rounded-3xl p-12 shadow-2xl text-center">
            <div className="mb-6 inline-block text-5xl animate-breathe">
              📧
            </div>
            
            <h2 className="text-4xl font-bold mb-4 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Subscribe to Our Newsletter
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get weekly yoga tips, wellness articles, and special offers delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-full focus:border-primary focus:outline-none text-gray-800 font-semibold"
              />
              <button className="px-10 py-4 bg-white text-primary rounded-full font-bold border-2 border-primary hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-lg whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Free Resources
            </h2>
            <p className="text-xl text-gray-600">
              Download guides and tools to enhance your practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Yoga for Beginners',
                description: 'Complete guide to starting your yoga journey',
                icon: '📖',
                color: 'from-lotus-pink to-pink-300',
              },
              {
                title: 'Meditation Journal',
                description: 'Track your spiritual progress with our journal',
                icon: '📔',
                color: 'from-calm-blue to-blue-300',
              },
              {
                title: 'Poses Illustrated',
                description: 'A visual guide to 50+ essential yoga poses',
                icon: '🎨',
                color: 'from-zen-green to-green-300',
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="zen-card bg-white rounded-2xl p-8 shadow-lg text-center cursor-pointer group"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${resource.color} rounded-full flex items-center justify-center text-5xl mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <button className="px-6 py-2.5 bg-white text-primary rounded-full font-bold border-2 border-primary hover:bg-primary hover:text-white transition-all hover:scale-105">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-spiritual to-mandala-gold opacity-95"></div>
        <div className="absolute inset-0 lotus-pattern opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready to Transform?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Knowledge is power. Start learning and practicing today.
          </p>

          <button className="px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:scale-110 transition-transform shadow-2xl hover:shadow-3xl flex items-center space-x-2 mx-auto">
            <span>Join a Class</span>
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
