'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const schedule = {
    Monday: [
      { time: '6:00 AM', class: 'Hatha Yoga', instructor: 'Ananya Sharma', level: 'Beginner', color: 'lotus-pink' },
      { time: '9:00 AM', class: 'Vinyasa Flow', instructor: 'David Martinez', level: 'Intermediate', color: 'zen-green' },
      { time: '12:00 PM', class: 'Yin Yoga', instructor: 'Mei Lin', level: 'All Levels', color: 'calm-blue' },
      { time: '6:00 PM', class: 'Power Yoga', instructor: 'David Martinez', level: 'Advanced', color: 'mandala-gold' },
    ],
    Tuesday: [
      { time: '7:00 AM', class: 'Kundalini', instructor: 'Ananya Sharma', level: 'All Levels', color: 'mandala-gold' },
      { time: '10:00 AM', class: 'Hatha Yoga', instructor: 'Ananya Sharma', level: 'Beginner', color: 'lotus-pink' },
      { time: '4:00 PM', class: 'Ashtanga', instructor: 'David Martinez', level: 'Advanced', color: 'calm-blue' },
      { time: '7:00 PM', class: 'Yin Yoga', instructor: 'Mei Lin', level: 'All Levels', color: 'zen-green' },
    ],
    Wednesday: [
      { time: '6:00 AM', class: 'Vinyasa Flow', instructor: 'David Martinez', level: 'Intermediate', color: 'zen-green' },
      { time: '9:30 AM', class: 'Hatha Yoga', instructor: 'Ananya Sharma', level: 'Beginner', color: 'lotus-pink' },
      { time: '5:00 PM', class: 'Kundalini', instructor: 'Ananya Sharma', level: 'All Levels', color: 'mandala-gold' },
      { time: '7:30 PM', class: 'Power Yoga', instructor: 'David Martinez', level: 'Advanced', color: 'calm-blue' },
    ],
    Thursday: [
      { time: '7:00 AM', class: 'Hatha Yoga', instructor: 'Ananya Sharma', level: 'Beginner', color: 'lotus-pink' },
      { time: '10:00 AM', class: 'Yin Yoga', instructor: 'Mei Lin', level: 'All Levels', color: 'zen-green' },
      { time: '4:30 PM', class: 'Vinyasa Flow', instructor: 'David Martinez', level: 'Intermediate', color: 'calm-blue' },
      { time: '7:00 PM', class: 'Ashtanga', instructor: 'David Martinez', level: 'Advanced', color: 'mandala-gold' },
    ],
    Friday: [
      { time: '6:00 AM', class: 'Power Yoga', instructor: 'David Martinez', level: 'Advanced', color: 'mandala-gold' },
      { time: '9:00 AM', class: 'Hatha Yoga', instructor: 'Ananya Sharma', level: 'Beginner', color: 'lotus-pink' },
      { time: '5:00 PM', class: 'Vinyasa Flow', instructor: 'David Martinez', level: 'Intermediate', color: 'zen-green' },
      { time: '7:00 PM', class: 'Yin Yoga', instructor: 'Mei Lin', level: 'All Levels', color: 'calm-blue' },
    ],
    Saturday: [
      { time: '8:00 AM', class: 'Kundalini', instructor: 'Ananya Sharma', level: 'All Levels', color: 'mandala-gold' },
      { time: '10:00 AM', class: 'Vinyasa Flow', instructor: 'David Martinez', level: 'Intermediate', color: 'zen-green' },
      { time: '12:00 PM', class: 'Hatha Yoga', instructor: 'Ananya Sharma', level: 'Beginner', color: 'lotus-pink' },
      { time: '4:00 PM', class: 'Ashtanga', instructor: 'David Martinez', level: 'Advanced', color: 'calm-blue' },
    ],
    Sunday: [
      { time: '9:00 AM', class: 'Yin Yoga', instructor: 'Mei Lin', level: 'All Levels', color: 'zen-green' },
      { time: '11:00 AM', class: 'Hatha Yoga', instructor: 'Ananya Sharma', level: 'Beginner', color: 'lotus-pink' },
      { time: '5:00 PM', class: 'Vinyasa Flow', instructor: 'David Martinez', level: 'Intermediate', color: 'calm-blue' },
    ],
  };

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden lotus-pattern">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-mandala-gold to-transparent blur-3xl animate-float top-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 animate-breathe inline-block">
            <span className="text-7xl">📅</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
            Class Schedule
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your perfect class time and begin your transformation
          </p>
        </div>
      </section>

      {/* Day Selector */}
      <section className="py-10 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-2 sm:space-x-4 pb-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold whitespace-nowrap text-sm sm:text-base transition-all duration-300 ${
                  selectedDay === day
                    ? 'bg-gradient-to-r from-primary to-spiritual text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              {selectedDay}'s Classes
            </h2>
            <p className="text-gray-600">All classes are 60-90 minutes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {schedule[selectedDay as keyof typeof schedule].map((session, index) => (
              <div
                key={index}
                className="zen-card bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                      {session.time}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {session.class}
                    </h3>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-${session.color} bg-opacity-30 whitespace-nowrap`}>
                    {session.level}
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">👤</span>
                  <span className="text-gray-600 font-medium">{session.instructor}</span>
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-600">Main Studio</span>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 px-6 py-3 bg-white text-primary rounded-full font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2">
                    <span>Book Now</span>
                    <span>✓</span>
                  </button>
                  <button className="px-6 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-primary transition-all hover:scale-105">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lotus-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              Membership Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Drop-In',
                price: '$25',
                period: 'per class',
                features: [
                  'Single class access',
                  'All class types',
                  'Mat rental included',
                  'No commitment',
                ],
                color: 'from-lotus-pink to-pink-400',
                icon: '🌺',
              },
              {
                name: 'Monthly Unlimited',
                price: '$120',
                period: 'per month',
                features: [
                  'Unlimited classes',
                  'Priority booking',
                  'Free mat storage',
                  'Workshop discounts',
                  'Community events',
                ],
                color: 'from-primary via-spiritual to-mandala-gold',
                icon: '⭐',
                popular: true,
              },
              {
                name: 'Annual Membership',
                price: '$1,200',
                period: 'per year',
                features: [
                  'Everything in Monthly',
                  '2 months free',
                  'Guest passes (5/year)',
                  'Private session discount',
                  'Retreat discounts',
                ],
                color: 'from-mandala-gold to-yellow-400',
                icon: '👑',
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`zen-card relative overflow-hidden rounded-3xl shadow-xl ${
                  plan.popular ? 'md:scale-110 z-10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-spiritual text-white px-6 py-2 rounded-bl-3xl font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`h-40 bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                  <span className="text-7xl">{plan.icon}</span>
                </div>
                
                <div className="p-8 bg-white">
                  <h3 className="text-3xl font-bold mb-2 text-primary" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r ${plan.color} hover:scale-105 transition-transform shadow-lg hover:shadow-2xl`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-spiritual to-mandala-gold opacity-95"></div>
        <div className="absolute inset-0 lotus-pattern opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="mb-8 animate-breathe inline-block">
            <span className="text-7xl">🎁</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            New Student Special
          </h2>
          
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Try 3 classes for only $30! Experience our community and find your perfect practice.
          </p>

          <button className="px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:scale-110 transition-transform shadow-2xl hover:shadow-3xl flex items-center space-x-2 mx-auto">
            <span>Claim Your Offer</span>
            <span>🎉</span>
          </button>
          
          <p className="mt-6 text-sm opacity-75">
            *New students only. Valid for 30 days from purchase.
          </p>
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
