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
        "pinkImg": 'url("https://www.transparenttextures.com/patterns/fabric-plaid.png")',
      },
      backgroundColor: {
        "pinkImgBg": "#ffe3f4"
      },
      fontFamily: {
        'allan': ['Allan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
