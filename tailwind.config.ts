import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",

            brandColor: "red",
         },
         height: {
            "screen-minus-112": "calc(100vh - 112px)",
         },
         keyframes: {
            spin: {
               to: { transform: "rotate(360deg)" },
            },
            spinReverse: {
               to: { transform: "rotate(-360deg)" },
            },
         },
         animation: {
            "slow-spin": "spin 4s linear infinite",
            "slow-spin-reverse": "spinReverse 10s linear infinite",
         },
      },
   },
   plugins: [],
};
export default config;
