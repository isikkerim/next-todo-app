import Link from 'next/link';

export const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <Link href="/" className="text-xl font-bold">
        To-Do App
      </Link>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/todos" className="hover:underline">
          To-Do
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>
    </div>
  </nav>
);
