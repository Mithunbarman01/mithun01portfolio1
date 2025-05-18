/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'var(--color-primary-400)', // indigo-400
          600: 'var(--color-primary-600)', // indigo-600
          800: 'var(--color-primary-800)', // indigo-800
        },
        slate: {
          50: 'var(--color-slate-50)', // slate-50
          200: 'var(--color-slate-200)', // slate-200
          400: 'var(--color-slate-400)', // slate-400
          600: 'var(--color-slate-600)', // slate-600
          900: 'var(--color-slate-900)', // slate-900
        },
        emerald: {
          500: 'var(--color-emerald-500)', // emerald-500
        },
        amber: {
          500: 'var(--color-amber-500)', // amber-500
        },
        rose: {
          500: 'var(--color-rose-500)', // rose-500
        },
        sky: {
          500: 'var(--color-sky-500)', // sky-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};