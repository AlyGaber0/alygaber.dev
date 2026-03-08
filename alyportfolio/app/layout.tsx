"use client";

import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${spaceMono.variable} bg-[#111111] text-[#a1a1aa] antialiased min-h-screen flex flex-col items-center pt-8 pb-12 px-6`}>
        <div className="w-full max-w-3xl flex flex-col min-h-screen">
          
          <nav className="flex justify-between items-center text-sm font-medium text-zinc-500 mb-16 shrink-0">
            <div className="flex gap-6">
              <TransitionLink href="/" className={`transition-colors hover:text-white ${pathname === '/' ? 'text-zinc-100' : ''}`}>Home</TransitionLink>
              <TransitionLink href="/mcgill" className={`transition-colors hover:text-white ${pathname.includes('/mcgill') ? 'text-zinc-100' : ''}`}>McGill</TransitionLink>
              <TransitionLink href="/projects" className={`transition-colors hover:text-white ${pathname.includes('/projects') ? 'text-zinc-100' : ''}`}>Projects</TransitionLink>
              <TransitionLink href="/about" className={`transition-colors hover:text-white ${pathname === '/about' ? 'text-zinc-100' : ''}`}>About</TransitionLink>
            </div>
            <TransitionLink href="/cv" className={`transition-colors hover:text-white ${pathname === '/cv' ? 'text-zinc-100' : ''}`}>CV</TransitionLink>
          </nav>

          <main className="w-full flex-grow">
            <AnimatePresence mode="wait">
              <div key={pathname} className="w-full h-full">
                {children}
              </div>
            </AnimatePresence>
          </main>
          
        </div>
      </body>
    </html>
  );
}
