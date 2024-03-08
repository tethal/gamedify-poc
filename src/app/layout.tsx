import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Avatar from "@/components/auth/Avatar";

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
          <Link className="mx-2 underline" href="/qset">DB demo</Link>
          <Avatar />
        </nav>
        {children}
      </body>
    </html >
  );
}
