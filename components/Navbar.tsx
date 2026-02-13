import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-blue-800 shadow-md fixed w-full top-0 z-50">
      <h1 className="text-xl font-bold">An | Software Engineer</h1>
      <div className="space-x-6">
        <Link href="#about" className="hover:text-blue-600">Giới thiệu</Link>
        <Link href="#projects" className="hover:text-blue-600">Dự án</Link>
        <Link href="#contact" className="hover:text-blue-600">Liên hệ</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}