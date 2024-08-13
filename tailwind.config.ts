import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pinkImg": 'url("https://www.transparenttextures.com/patterns/groovepaper.png")',
      },
      backgroundColor: {
        "pinkImgBg": "#ffe3ed"
      },
      fontFamily: {
        'allan': ['Allan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
