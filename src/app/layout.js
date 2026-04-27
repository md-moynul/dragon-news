import dns from "node:dns";
dns.setServers(["8.8.8.8" , "8.8.4.4"])

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "-font-poppins ",
  subsets: ["latin"],
  weight : ["400","500","600","700","800"] 
})

export const metadata = {
  title: "Dragon news",
  description: "Best news portal in bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className={`${poppins.className}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
