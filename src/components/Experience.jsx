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
