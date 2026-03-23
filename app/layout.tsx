import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Toronto Downtown Parking Survival Guide 2026",
  description:
    "Park Smart, Toronto. Street parking now tops $7.00/hr. Compare Green P, SpotHero, HonkMobile & Clicknpark for the best downtown options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('parking-guide-theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.add(d?'dark':'light');})();`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
