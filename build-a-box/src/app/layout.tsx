import type { Metadata } from "next";
import { Fraunces, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart/cart-context";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { SmoothScroll } from "@/components/ux/smooth-scroll";
import { Cursor } from "@/components/ux/cursor";

const fontSerif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build-A-Box — Move in. Build up.",
  description:
    "Design-led moving boxes and build kits that become furniture and home decor. A marketing showcase for Build-A-Box.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSerif.variable} ${fontSans.variable} ${fontDisplay.variable}`}
    >
      <body className="min-h-screen paper-bg">
        <CartProvider>
          <SiteNav />
          <SmoothScroll>
            <main>{children}</main>
          </SmoothScroll>
          <SiteFooter />
          <CartDrawer />
          <Cursor />
        </CartProvider>
      </body>
    </html>
  );
}
