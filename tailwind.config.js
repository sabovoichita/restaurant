const { keyframes } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    colors: {
      body: "#e5e5e5",
      white: "#fff",
      dark: "#0a0909",
      green: {
        DEFAULT: "#539592",
        hover: "#40807d",
      },
      black: {
        DEFAULT: "#273029",
        heavy: "#1b211c",
      },
      grey: "#888888",
      orange: {
        DEFAULT: "#f2994a",
        hover: "#d0863c",
      },
      outline: "#f1f1f1",
      pink: "#ffa5a5",
    },
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },

      boxShadow: {
        primary: "40px 4px 40px 0px rgba(68, 68, 68, 0.25)",
      },
      keyframes: {
        "according-down": {
          from: { height: 0 },
          to: { height: "var(--radix-according-content-height)" },
        },
        "according-up": {
          from: { height: 0 },
          to: { height: "var(--radix-according-content-height)" },
        },
      },
      animation: {
        "according-down": "according-down 0.2s ease-out",
        "according-up": "according-up 0.2s ease-out",
      },

      backgroundImage: {
        pattern: "url('assets/img/body-bg-pattern.png')",
        hero: "url('assets/img/hero/bg.png')",
        menu: "url('assets/img/menu/bg.png')",
        testimonial: "url('assets/img/testimonial/bg.png')",
        newsletter: "url('assets/img/newsletter/bg.png')",
        footer: "url('assets/img/footer/bg.png')",
      },
    },
  },
  plugins: [],
};
