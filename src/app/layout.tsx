import "./globals.css";
import { Spline_Sans } from "next/font/google";
import { LandingNavbar } from "@/components/landingpage/navbar";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline-sans",
  display: "swap",
});

export const metadata = {
  title: "LinkCoin - The OG Reimagined",
  description: "Born in 2014. Revived for a hyper-connected future. Decentralized, secure, and ready for the next generation of Web3.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${splineSans.variable} bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-[#1c1c0d] dark:text-[#f4f4e6] overflow-x-hidden selection:bg-primary selection:text-black`}
      >
        <LandingNavbar />
        {children}
      </body>
    </html>
  );
}