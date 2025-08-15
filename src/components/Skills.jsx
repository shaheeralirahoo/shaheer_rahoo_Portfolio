const skills = [
    "JavaScript", "TypeScript", "SQL", "Express.js", "NestJS",
    "MongoDB", "PostgreSQL", "Docker", "Nginx", "Git",
    "AWS", "Firebase", "Stripe", "Agora", "WebSockets", "Webhooks"
];

export default function Skills() {
    return (
        <section id="skills" className="p-12 bg-gray-50 text-gray-900">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {skills.map((skill, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-md text-center font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
