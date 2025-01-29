import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Manrope, Montserrat, Playfair_Display } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Bangkok 7 Thai Restaurant | Authentic Thai Cuisine in Kendal",
  description: "Discover Bangkok 7 Thai Restaurant in Kendal&comma; offering a cozy ambiance and a menu of authentic Thai dishes&comma; including curries&comma; stir-fries&comma; and noodles&period; Perfect for casual dining or special occasions&comma; with vegetarian&comma; vegan&comma; and gluten-free options available&period;",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "Bangkok 7 Thai Restaurant&comma; Thai cuisine Kendal&comma; authentic Thai food&comma; best Thai restaurant Kendal&comma; Thai curries&comma; stir-fries&comma; noodles&comma; vegan Thai options&comma; gluten-free Thai dishes&comma; dining in Kendal&comma; Thai food Lake District&comma; Kendal restaurants&comma; cozy Thai dining",
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
