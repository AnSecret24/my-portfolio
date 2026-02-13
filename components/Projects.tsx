import React from 'react';

const projects = [
  {
    title: "Hệ thống Quản lý Phòng khám",
    tech: "ASP.NET Core MVC, SQL Server, Entity Framework",
    description: "Xây dựng hệ thống quản lý đặt lịch hẹn, hồ sơ bệnh nhân và hóa đơn.",
    link: "#" // Thay link GitHub của An vào đây
  },
  {
    title: "App Chat Real-time cho Team",
    tech: "MERN Stack (MongoDB, Express, React, Node.js), Socket.io",
    description: "Ứng dụng nhắn tin trực tuyến thời gian thực với tính năng thông báo và lưu lịch sử.",
    link: "#"
  },
  {
    title: "Hệ thống Quản lý Khách sạn",
    tech: "Java Spring Boot, MySQL",
    description: "Phát triển hệ thống đặt phòng, quản lý dịch vụ và thông tin khách hàng.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Dự án tiêu biểu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-blue-600 text-sm font-medium mb-4">{project.tech}</p>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <a 
                href={project.link} 
                className="text-gray-900 font-semibold flex items-center hover:underline"
              >
                Xem chi tiết GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}