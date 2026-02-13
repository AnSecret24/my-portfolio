import React from 'react';

export default function Contact() {
  return (
    <footer id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Bạn đang tìm kiếm cộng tác viên?</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Mình hiện đang tìm kiếm cơ hội thực tập vị trí Software Engineer bắt đầu từ tháng 3/2026. 
          Rất mong được trao đổi thêm với quý công ty.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <a href="mailto:email-cua-an@gmail.com" className="hover:text-blue-400 transition">
            📧 email-cua-an@gmail.com
          </a>
          <a href="tel:0123456789" className="hover:text-blue-400 transition">
            📞 012xxx.xxx.xx
          </a>
          <a href="https://github.com/your-github" target="_blank" className="hover:text-blue-400 transition">
            🔗 GitHub Profile
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p>© 2026 - Designed and Built by An</p>
          <p className="mt-2 italic">Chuyên ngành Công nghệ phần mềm - Khoa CNTT</p>
        </div>
      </div>
    </footer>
  );
}