import plugin from 'tailwindcss/plugin';

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
          dark: '#070C17',
          light: '#FDF3DA',
          cream: '#FFFDF7',
          card: {
            dark: 'rgba(13, 22, 38, 0.80)',
            light: 'rgba(255, 253, 247, 0.92)'
          }
        },
        brand: {
          primary: '#045EAC',       // Codekrexx Logo Deep Royal Blue
          'primary-light': '#1E78C8',
          'primary-dark': '#034680',
          secondary: '#08A3FF',     // Codekrexx Logo Bright Sky Blue
          'secondary-light': '#3CB6FF',
          'secondary-dark': '#0284C7',
          accent: '#0B78D6',        // Mid Cobalt Blue bridge
          'accent-light': '#3B9AEA',
          'accent-dark': '#0658A6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #045EAC 0%, #0B78D6 50%, #08A3FF 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #0B78D6 0%, #3CB6FF 100%)',
        'brand-glow': 'radial-gradient(circle at 50% 20%, rgba(4, 94, 172, 0.14), rgba(8, 163, 255, 0.10) 40%, transparent 70%)',
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
        'brand-primary': '0 10px 28px -6px rgba(4, 94, 172, 0.24)',
        'brand-secondary': '0 10px 28px -6px rgba(8, 163, 255, 0.24)',
        'brand-accent': '0 10px 28px -6px rgba(11, 120, 214, 0.24)',
        'glass': '0 8px 30px 0 rgba(4, 42, 82, 0.08)',
        'glass-glow': '0 12px 32px -8px rgba(4, 94, 172, 0.18)',
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('light', 'html.light &');
    }),
  ],
};
