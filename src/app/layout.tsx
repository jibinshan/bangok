import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Manrope, Montserrat, Playfair_Display } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Bangkok | Restaurent",
  description: "Bangkok",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "Bangkok, Best steak house Liverpool, beef steak Liverpool, fine dining Liverpool, steak restaurant Woolton Village, Bangkok menu, premium steaks, signature steaks, curated wines, group dining Liverpool",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen bg-[#070707] font-manrope text-[#FBEAD2] antialiased",
          manrope.variable,
          playfair.variable,
          montserrat.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
