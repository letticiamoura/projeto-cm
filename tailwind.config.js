/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue': '#038C7F',
       'green': '#03A678',
      },
    },
  },
  plugins: [],
}