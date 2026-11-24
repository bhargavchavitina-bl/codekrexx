/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#07070e',
          light: '#f8fafc',
          card: {
            dark: 'rgba(15, 15, 26, 0.7)',
            light: 'rgba(255, 255, 255, 0.85)'
          }
        },
        brand: {
          violet: '#8B5CF6',
          purple: '#A855F7',
          cyan: '#06B6D4',
          sky: '#38BDF8',
          magenta: '#EC4899',
          fuchsia: '#D946EF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.1) 40%, transparent 70%)',
        'neon-glow': 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 50%, #06B6D4 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 9s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'border-beam': 'border-beam 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-1.5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'neon-violet': '0 0 25px -3px rgba(139, 92, 246, 0.35)',
        'neon-cyan': '0 0 25px -3px rgba(6, 182, 212, 0.35)',
        'neon-magenta': '0 0 25px -3px rgba(236, 72, 153, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
        'glass-glow': '0 0 40px -10px rgba(139, 92, 246, 0.25)',
      }
    },
  },
  plugins: [],
}
