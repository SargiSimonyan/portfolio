import './globals.css';
import Link from 'next/link';
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: 'Sargis Simonyan Portfolio',
  description: 'Web developer portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="border-b border-gray-300 p-6">
          <nav className="max-w-5xl mx-auto flex gap-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link>
            <Link href="/about" className="hover:text-blue-600">About Me</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </header>
        <main className="">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <footer className="border-t border-gray-300 p-6 text-center text-sm text-gray-500">
          © 2025 Sargis Simonyan
        </footer>
      </body>
    </html>
  );
}
