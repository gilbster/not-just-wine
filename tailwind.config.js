module.exports = {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["coffee", "retro"],
  },
};
