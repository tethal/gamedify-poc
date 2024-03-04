import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GamEdify PoC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="h-[2em]">
          <Link className="mx-2 underline" href="/">Home</Link>
          <Link className="mx-2 underline" href="/demo1">SVG Board demo</Link>
        </nav>
        {children}
      </body>
    </html >
  );
}
