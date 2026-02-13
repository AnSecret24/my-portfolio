import React from 'react';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-slate-950 transition-colors duration-500">
            <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-2">
                Chào bạn, mình là An
            </h2>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Software Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                    Chuyên về Full-stack Development
                </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
                Sinh viên năm 4 ngành Công nghệ phần mềm. Mình đam mê xây dựng các hệ thống web mạnh mẽ với{" "}
                <span className="font-semibold text-gray-900 dark:text-blue-300">ASP.NET Core</span>,{" "}
                <span className="font-semibold text-gray-900 dark:text-blue-300">Java Spring Boot</span> và{" "}
                <span className="font-semibold text-gray-900 dark:text-blue-300">MERN Stack</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                {/* Nút Xem dự án */}
                <a 
                    href="#projects" 
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
                >
                    Xem dự án của mình
                </a>

                {/* Nút Tải CV */}
                <a
                    href="/An_CV.pdf"
                    download="An_CV.pdf"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
                >
                    Tải xuống CV (PDF)
                </a>

                {/* Nút Liên hệ */}
                <a 
                    href="#contact" 
                    className="px-6 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition"
                >
                    Liên hệ
                </a>
            </div>
        </section>
    );
}