import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b6f47',
        secondary: '#d4a574',
        accent: '#e8dcc4',
        spiritual: '#9b7e46',
        'lotus-pink': '#f4c3d2',
        'zen-green': '#a8b5a0',
        'calm-blue': '#b8c9d9',
        'mandala-gold': '#c9a961',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'lotus-bloom': 'lotus-bloom 3s ease-in-out infinite',
        breathe: 'breathe 4s ease-in-out infinite',
        'mandala-spin': 'mandala-spin 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'zen-wave': 'zen-wave 8s ease-in-out infinite',
        shimmer: 'shimmer 3s infinite linear',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'lotus-bloom': {
          '0%': { transform: 'scale(0.8) rotate(0deg)', opacity: '0.5' },
          '50%': { transform: 'scale(1.05) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        'mandala-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'zen-wave': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-10px)' },
          '75%': { transform: 'translateX(-10px) translateY(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 111, 71, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 111, 71, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
