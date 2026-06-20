import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Karan Kacha — Engineering Excellence Journal",
  description: "Portfolio of Karan Kacha, Full Stack Developer",
  icons: {
    icon: "https://img.icons8.com/?size=100&id=J3nZHWgT1e7m&format=png&color=000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-primary antialiased cursor-precision overflow-x-hidden min-h-screen flex flex-col transition-colors duration-200">
        <ThemeProvider>
          <ReactLenis root>
            {children}
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
