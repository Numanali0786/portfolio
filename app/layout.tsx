import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
import AnimatedCursor from "react-animated-cursor"

export const metadata: Metadata = {
  title: "Numan's Portfolio",
  description: "Modern Web Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/exp1.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
<AnimatedCursor
showSystemCursor={true}
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
   innerStyle={{
    // backgroundColor: 'transparent'
  }}
  outerStyle={{
    backgroundColor: 'transparent',
    border: '2px solid gray'
  }}
/>
         {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
