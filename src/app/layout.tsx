import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/libs/utils";
import "./globals.css";
import { ThemeProvider } from "@/libs/providers/next-theme-provider";
import ReactQueryProvider from "@/libs/providers/react-query-provider";
import Navbar from "@/components/@common/navbar";
import SessionProvider from "@/libs/providers/session-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ReactQueryProvider>
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
