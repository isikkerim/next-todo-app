import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'To-Do App',
  description: 'A simple To-Do App built with Next.js 15, Tailwind, and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
