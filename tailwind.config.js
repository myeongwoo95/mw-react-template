/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // tailwind CSS의 실험적인 기능 중 하나인 JIT(Just-In-Time) 모드
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
