import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClient } from "convex/browser";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = inter; // Fix the font declaration
const geistMono = 'Inter_Mono'; // Change the variable name to match the font

export const metadata: Metadata = {
  title: "NoteSphere",
  description: "The Connect Workspace where people connect via codes faster.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.png",
        href: "/favicon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.png", // Fix the dark theme favicon
        href: "/favicon-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="notesphere-theme-2"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}