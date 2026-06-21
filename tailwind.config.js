/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        rose:    { DEFAULT: '#d0a3a5', light: '#e8c8ca', dark: '#b8888a' },
        berry:   { DEFAULT: '#a50152', light: '#c2006a', dark: '#7a003d' },
        sage:    { DEFAULT: '#949a5d', light: '#b0b578', dark: '#737848' },
        olive:   { DEFAULT: '#505939', light: '#6b7550', dark: '#363d27' },
        ivory:   { DEFAULT: '#faf6f0', light: '#fdfaf6', dark: '#f0e8dc' },
        cream:   { DEFAULT: '#f5ede0', light: '#faf5ee', dark: '#e8d8c4' },
        parchment: { DEFAULT: '#ede0cc' },
      },
      fontFamily: {
        script: ['Homemade Apple', 'cursive'],
        serif:  ['Alice', 'Georgia', 'serif'],
        sans:   ['Alice', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'float':      'float 6s ease-in-out infinite',
        'countdown':  'pulse 1s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
