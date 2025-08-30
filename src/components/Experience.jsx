export default function Experience() {
    const experiences = [
        {
            role: "Mid-Level Backend Developer",
            company: "LaunchBox Pakistan",
            location: "Karachi",
            period: "05/2024 - Present",
            details: [
                "Developed REST APIs for 6+ applications (fitness, dating, CRM, social media, subscriptions).",
                "Integrated Stripe Connect, Apple/Google in-app purchases.",
                "Built CI/CD pipelines using GitHub Actions.",
                "Managed deployments with PM2 on EC2; used Firebase for auth and notifications.",
                "Delivered the fastest backend system in the company."
            ]
        },
        {
            role: "Junior Backend Developer",
            company: "Indus Valley Technologies",
            location: "Karachi",
            period: "08/2022 - 04/2024",
            details: [
                "Led backend for 5+ apps including ride-hailing and food POS systems.",
                "Used NestJS, PostgreSQL (TypeORM, Prisma), Firebase, and Google APIs.",
                "Deployed multi-app (NestJS + Next.js) servers using Nginx and PM2.",
                "Set up domains via Cloudflare, SSL with GoDaddy.",
                "Grew from intern to backend dev responsible for all server-side operations."
            ]
        }
    ];

    return (
        <section id="experience" className="p-16 bg-gradient-to-b from-purple-50 via-white to-blue-50 text-gray-900">
            <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Experience
            </h2>

            <div className="relative max-w-5xl mx-auto">
                {/* Vertical timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>

                <div className="flex flex-col gap-10 pl-12">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            {/* Circle marker */}
                            <div className="absolute -left-7 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"></div>

                            <h3 className="text-2xl font-semibold text-gray-800">{exp.role}</h3>
                            <p className="text-gray-500">{exp.company} · {exp.period}</p>
                            <p className="mt-3 text-gray-700 leading-relaxed">{exp.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}
