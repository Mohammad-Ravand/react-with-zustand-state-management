/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--accent-color)',
        dark: 'var(--dark-color)',
        lightDark: 'var(--light-dark-color)',
        light: 'var(--light-color)',
        grey: 'var(--grey-color)',
        lightGrey: 'var(--light-grey-color)',
        primaryColor: 'var(--primary-color)',
        lightPrimaryColor: 'var(--light-primary-color)',
      },
      backgroundColor: {
        // Use custom colors as background colors
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--accent-color)',
        dark: 'var(--dark-color)',
        lightDark: 'var(--light-dark-color)',
        light: 'var(--light-color)',
        grey: 'var(--grey-color)',
        lightGrey: 'var(--light-grey-color)',
        primaryColor: 'var(--primary-color)',
        lightPrimaryColor: 'var(--light-primary-color)',
        // You can add more custom background colors as needed
      },
    },
  },
  plugins: [],
}
