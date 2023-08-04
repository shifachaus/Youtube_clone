/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {},
  },
  plugins: [],
};
