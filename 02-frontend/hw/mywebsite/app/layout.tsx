import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breno Moraes",
  description: "Personal website of Breno Moraes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">

        <nav className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold tracking-tight hover:text-emerald-400">
              breno.
            </Link>
            <div className="flex gap-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-zinc-100">Home</Link>
              <Link href="/football" className="hover:text-zinc-100">Football</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}