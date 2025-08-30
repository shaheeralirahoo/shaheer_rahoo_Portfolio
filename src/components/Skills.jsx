const skills = [
  "JavaScript", "TypeScript", "SQL", "Express.js", "NestJS",
  "MongoDB", "PostgreSQL", "Docker", "Nginx", "Git",
  "AWS", "Firebase", "Stripe", "Agora", "WebSockets", "Webhooks"
];

export default function Skills() {
  return (
    <section id="skills" className="p-16 bg-gradient-to-b from-purple-50 via-white to-blue-50 text-gray-900">
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="relative bg-white p-5 rounded-xl shadow-md text-center font-semibold 
                       hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 hover:opacity-100 transition"></div>
            <span className="relative z-10">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
