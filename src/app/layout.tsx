import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joyous — Health, Wealth & The Art of Living",
  description:
    "Join Jodi Yang on Joyous, the podcast exploring the powerful intersection of health and wealth. Candid conversations with world-class guests on building a life of vitality, purpose, and prosperity.",
  openGraph: {
    title: "Joyous — Health, Wealth & The Art of Living",
    description:
      "Join Jodi Yang on Joyous, the podcast exploring the powerful intersection of health and wealth.",
    siteName: "Joyous Podcast",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyous — Health, Wealth & The Art of Living",
    description:
      "Join Jodi Yang on Joyous, the podcast exploring the powerful intersection of health and wealth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
