/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        black: '#1D1D1D',
        tBlack: '#212529',
        white: '#F8F9FA',
        blue: '#6FC2FF',
      },
      backgroundImage: {
        gwhite: 'linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%)',
        gblack: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
      },
      keyframes: {
        show: {
          '0%, 99%': { visibility: 'hidden' },
          '100%': { visibility: 'visible' },
        },
      },
      animation: {
        show: 'show 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
