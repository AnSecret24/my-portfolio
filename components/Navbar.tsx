import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#1a36b1] text-white fixed w-full top-0 z-50 shadow-lg">
      {/* Bên trái: Tên thương hiệu */}
      <div className="text-2xl font-bold tracking-tight">
        An | Software Engineer
      </div>

      {/* Bên phải: Các mục điều hướng */}
      <div className="flex items-center space-x-8 text-lg font-medium">
        <Link href="#about" className="hover:text-gray-300 transition-colors">
          Giới thiệu
        </Link>
        <Link href="#projects" className="hover:text-gray-300 transition-colors">
          Dự án
        </Link>
        <Link href="#contact" className="hover:text-gray-300 transition-colors">
          Liên hệ
        </Link>
      </div>
    </nav>
  );
}