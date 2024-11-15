/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        funnelFont: ["Funnel Sans", "sans-serif"],
        funnelDisplay: ["Funnel Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
