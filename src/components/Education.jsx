export default function Education() {
  const education = [
    {
      degree: "B.Sc. Computer Science",
      university: "Usman Institute of Technology, Karachi",
      year: "08/2024",
      project: "AI-powered image processing system for sugarcane disease detection"
    }
  ];

  return (
    <section id="education" className="p-12 bg-gray-50 text-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Education</h2>
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        {education.map((edu, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-500">{edu.university} · {edu.year}</p>
            <p className="mt-2 text-gray-700">{edu.project}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
