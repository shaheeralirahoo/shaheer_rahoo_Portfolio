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
  <section id="education" className="py-16 bg-gray-50 text-gray-900 px-6">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>

    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      {education.map((edu, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition duration-300"
        >
          {/* Degree */}
          <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>

          {/* University & Year */}
          <p className="text-gray-500 text-sm mb-4">
            {edu.university} · {edu.year}
          </p>

          {/* Project / Extra */}
          <p className="text-gray-700">{edu.project}</p>
        </div>
      ))}
    </div>
  </section>
);

}
