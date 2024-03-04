/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        'gray-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 14%)',
      },
      fontSize: {
        body: '18px',
      },
      backgroundImage: {
        'boost-mobile': "url('/src/assets/bg-boost-mobile.svg')",
        'boost-desktop': "url('/src/assets/bg-boost-desktop.svg')",
        'shorten-mobile': "url('/src/assets/bg-shorten-mobile.svg')",
        'shorten-desktop': "url('/src/assets/bg-shorten-desktop.svg')",
      },
    },
  },
  plugins: [],
};
