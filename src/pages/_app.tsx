import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

import { Raleway } from "next/font/google";
import Header from "@/components/shared/Header";

// Configure the Raleway font
const raleway = Raleway({
   subsets: ["latin"], // You can add other subsets if needed
   weight: ["400", "500", "700"], // Specify font weights to load
   variable: "--font-raleway", // You can use a custom CSS variable for better control
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <div className={raleway.variable}>
         <Header />
         <Component {...pageProps} />
      </div>
   );
}
