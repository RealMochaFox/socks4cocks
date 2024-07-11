import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    flowbite.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        birdBlue: '#6cbfd5',
        cockRed: '#f5475d',
        sockBlack: '#1e1339',
        wormWhite: '#e7e6dd',
        cluckOrange: '#f49737'
      }
    },
  },
  plugins: [
    flowbite.plugin()
]
};
export default config;
