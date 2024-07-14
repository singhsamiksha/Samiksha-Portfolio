/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(20, 20, 20)',
      },
      screens: {
        'xxs': '300px', // Custom screen size for very small devices
        'xs': '480px',  // Custom screen size for small devices
        'sm': '640px',
        'md': '768px',  // Adjusted to standard breakpoint
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      width: {
        '120': '34.5rem', 
        '42': '20rem',
        '21': '15rem',
        '40': '10rem',
        '30': '7.5rem',
        '60': '15rem',
        '80': '22rem',
        '48': '12rem',
        '64': '16rem',
        '16': '4rem',
      },
    },
  },
  plugins: [],
}
