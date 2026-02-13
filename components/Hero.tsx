import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">
        Chào bạn, mình là An
      </h2>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Software Engineer <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Chuyên về Full-stack Development
        </span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Sinh viên năm 4 ngành Công nghệ phần mềm. Mình đam mê xây dựng các hệ thống web mạnh mẽ với 
        **ASP.NET Core, Java Spring Boot** và **MERN Stack**.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-yellow-50 rounded-lg font-medium hover:bg-blue-700 transition">
          Xem dự án của mình
        </a>
        <a href="#contact" className="px-6 py-3 border border-black rounded-lg font-medium hover:bg-black transition">
          Liên hệ
        </a>
      </div>
    </section>
  );
}