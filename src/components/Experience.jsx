export default function Experience() {
  const experiences = [
    {
      role: "Mid-Level Backend Developer",
      company: "LaunchBox Pakistan",
      period: "05/2024 - Present",
      details: "Developed REST APIs for fitness, dating, CRM apps. Integrated Stripe & in-app purchases."
    },
    {
      role: "Junior Backend Developer",
      company: "Indus Valley Technologies",
      period: "08/2022 - 04/2024",
      details: "Led backend for ride-hailing and food POS apps. Deployed servers using Nginx + PM2."
    }
  ];

  return (
    <section id="experience" className="p-12 bg-gray-50 text-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Experience</h2>
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-gray-500">{exp.company} · {exp.period}</p>
            <p className="mt-2 text-gray-700">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
