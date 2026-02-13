import React from 'react';

const skills = [
  { category: "Web Backend", items: ["ASP.NET Core MVC", "Java Spring Boot", "Node.js (Express)"] },
  { category: "Web Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"] },
  { category: "Database", items: ["SQL Server", "MongoDB", "Entity Framework"] },
  { category: "Management & Testing", items: ["MS Project (WBS, Critical Path)", "Software Testing (Unit Test, Test Plan)", "Git/GitHub"] },
  { category: "Network", items: ["Cisco Configuration (OSPF, RIPv2)", "Packet Tracer"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-green-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Năng lực chuyên môn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}