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
            dark: 'rgba(15, 15, 26, 0.75)',
            light: 'rgba(255, 255, 255, 0.9)'
          }
        },
        brand: {
          primary: '#7C3AED',       // Codekrexx Primary (Electric Violet)
          'primary-light': '#9061F9',
          'primary-dark': '#5B21B6',
          secondary: '#06B6D4',     // Codekrexx Secondary (Cyber Cyan)
          'secondary-light': '#22D3EE',
          'secondary-dark': '#0891B2',
          accent: '#3B82F6',        // Codekrexx Accent (Electric Blue)
          'accent-light': '#60A5FA',
          'accent-dark': '#1D4ED8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 50%, #06B6D4 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #9061F9 0%, #60A5FA 50%, #22D3EE 100%)',
        'brand-glow': 'radial-gradient(circle at 50% 20%, rgba(124, 58, 237, 0.18), rgba(6, 182, 212, 0.12) 40%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'brand-primary': '0 0 25px -4px rgba(124, 58, 237, 0.4)',
        'brand-secondary': '0 0 25px -4px rgba(6, 182, 212, 0.4)',
        'brand-accent': '0 0 25px -4px rgba(59, 130, 246, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
        'glass-glow': '0 0 35px -8px rgba(124, 58, 237, 0.25)',
      }
    },
  },
  plugins: [],
}
