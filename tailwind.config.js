/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Typography
      fontFamily: {
        heading: ['Hedvig Letters Serif', 'serif'],
        body: ['PP Neue Montreal', 'sans-serif'],
      },
      fontSize: {
        '2xs': '10px',
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'md': '18px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
      },
      fontWeight: {
        heading: '400',
        body: '450',
      },
      // Colors
      colors: {
        white: '#FFFFFF',
        cream: '#EFF1EC',
        black: {
          DEFAULT: '#000000',
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#454545',
          900: '#3D3D3D',
          1000: '#000000',
        },
        blue: {
          100: '#CDD2D5',
          200: '#72829C',
          300: '#486188',
          400: '#263F5D',
          500: '#080E1F',
          600: '#020109',
        },
        cello: {
          50: '#F4F7FB',
          100: '#E7EEF7',
          200: '#CADBED',
          300: '#9BBCDE',
          400: '#6699CA',
          500: '#427DB5',
          600: '#316398',
          700: '#294F7B',
          800: '#254467',
          900: '#263F5D',
          950: '#182639',
        },
      },
      // Spacing (keeping these from before - add your own if you have them)
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
    },
  },
  plugins: [],
}
