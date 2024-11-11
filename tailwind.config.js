/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },

    },
  },
  plugins: [],
}

