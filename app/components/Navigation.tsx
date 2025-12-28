'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-mandala-gold to-spiritual rounded-full animate-breathe opacity-70"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🪷</span>
              </div>
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Serenity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Classes', 'Teachers', 'Schedule', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`relative text-sm font-medium tracking-wide transition-colors group ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <button className="px-6 py-3 bg-white text-primary rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center space-x-2 group">
              <span>Book Class</span>
              <span className="group-hover:rotate-45 transition-transform">✨</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 z-50"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              } ${isScrolled ? 'bg-primary' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              } ${isScrolled ? 'bg-primary' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${isScrolled ? 'bg-primary' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-white/95 backdrop-blur-lg shadow-2xl overflow-y-auto">
          <div className="flex flex-col space-y-1 p-4">
            {['Home', 'Classes', 'Teachers', 'Schedule', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary font-bold text-lg py-4 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="group-hover:scale-110 transition-transform">
                  {item === 'Home' && '🏠'}
                  {item === 'Classes' && '🧘'}
                  {item === 'Teachers' && '👥'}
                  {item === 'Schedule' && '📅'}
                  {item === 'Blog' && '📚'}
                  {item === 'Contact' && '💌'}
                </span>
                <span>{item}</span>
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <button className="w-full px-6 py-4 bg-gradient-to-r from-primary to-spiritual text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center space-x-2">
                <span>Book Class</span>
                <span>✨</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
