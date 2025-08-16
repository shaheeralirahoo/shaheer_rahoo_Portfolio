export default function Projects() {
    const projects = [
        {
            title: "Perfect Boat: A Complete Boat Management System",
            period: "2023",
            company: "LaunchBox Pakistan",
            description:
                "Platform for owners, managers, employees, and boat users with multiple mobile apps and web portals, role-based access, and payment integration.",
            skills: ["Express.js", "Amazon EC2", "Mongoose ODM"],
            links: [
                { name: "Owner Portal", url: "https://owner.theperfectboat.com/" },
                { name: "Manager Portal", url: "https://manager.theperfectboat.com/" },
                {
                    name: "Employee App",
                    url: "https://play.google.com/store/apps/details?id=com.dignitestudios.perfectboat"
                },
                {
                    name: "Employee App (iOS)",
                    url: "https://apps.apple.com/us/app/the-perfect-boat-employees/id6739242690"
                },
                {
                    name: "Single User App",
                    url: "https://play.google.com/store/apps/details?id=com.dignitestudios.perfectboatuser"
                },
                {
                    name: "Single User App (iOS)",
                    url: "https://apps.apple.com/us/app/the-perfect-boat-user/id6738095170"
                }
            ]
        },

        {
            title: "TERA: Easy & Affordable Rides",
            period: "Sep 2022 - Apr 2023",
            company: "Indus Valley Technologies",
            description:
                "Comprehensive ride booking platform connecting users, drivers, scanners, and admins through an integrated system.",
            skills: [
                "NestJS",
                "AWS",
                "Firebase",
                "Google Maps API",
                "Stripe Connect",
                "Node.js"
            ],
            links: [
                {
                    name: "User App",
                    url: "https://play.google.com/store/apps/details?id=com.tera.appshuttelapp"
                },
                {
                    name: "Driver App",
                    url: "https://play.google.com/store/apps/details?id=com.tera.appdriver"
                },
                {
                    name: "Scanner App",
                    url: "https://play.google.com/store/apps/details?id=com.tera.appshuttelapp"
                }
            ]
        },
        {
            title: "Brisbon Notary",
            period: "2024",
            company: "LaunchBox Pakistan",
            description:
                "Digital platform for notary service bookings with user-friendly mobile app and admin panel.",
            skills: ["Node.js", "Stripe", "AWS", "Firebase"],
            links: [
                {
                    name: "Google Play",
                    url: "https://play.google.com/store/apps/details?id=com.dignitestudios.brisbonnotary&pcampaignid=web_share"
                },
                {
                    name: "Apple App",
                    url: "https://apps.apple.com/us/app/brisbon-notary/id6743931780"
                }
            ]
        },
                {
            title: "Scavenger Hunt",
            period: "Jan 2024 - Feb 2024",
            company: "Indus Valley Technologies",
            description:
                "Interactive single-page web app offering adventure-driven challenges, real-time leaderboard, and vendor/admin portals.",
            skills: [
                "NestJS",
                "Flutter",
                "Prisma ORM",
                "PostgreSQL",
                "Stripe",
                "Next.js",
                "SendGrid",
                "Node.js"
            ],
            // links: [
            //     { name: "LeaderBoard", url: "#" },
            //     { name: "Home Screen", url: "#" },
            //     { name: "Answer Screen", url: "#" }
            // ]
        },
        {
            title: "Sweep Stake",
            period: "Oct 2023 - Nov 2023",
            company: "Indus Valley Technologies",
            description:
                "Interactive spinning-wheel game with real-time feedback, admin dashboard, vendor portal, and subscription features.",
            skills: [
                "NestJS",
                "Flutter",
                "Next.js",
                "TypeORM",
                "MySQL",
                "Stripe",
                "AngularJS",
                "Node.js"
            ],
            // links: [{ name: "Marketing Website", url: "#" }]
        },
        {
            title: "Kacheri Law",
            period: "Apr 2023 - Oct 2023",
            company: "Indus Valley Technologies",
            description:
                "Legal practice management app with Lawyer App, Admin Panel, and Website Interface. Streamlined appointments & legal resources.",
            skills: ["NestJS", "AWS", "Firebase", "SendGrid", "Node.js"],
            links: [
                {
                    name: "Download App",
                    url: "https://play.google.com/store/apps/details?id=com.kacheri.klp"
                }
            ]
        },
        {
            title: "Carveeps",
            period: "2023",
            company: "LaunchBox Pakistan",
            description:
                "Web platform connecting car dealers and customers through subscription service with admin oversight.",
            skills: ["Node.js", "Stripe", "AWS", "React"],
            links: [
                { name: "User Portal", url: "https://app.carveeps.com/" },
                { name: "Dealer Portal", url: "https://www.carveeps.com/splash-screen" }
            ]
        },
        {
            title: "Wing App",
            period: "2024",
            company: "LaunchBox Pakistan",
            description:
                "Dating + social networking app with real-time chat, profile matching, and scalable backend architecture.",
            skills: ["Node.js", "Firebase", "Agora"],
            links: [
                {
                    name: "Google Play Store",
                    url: "https://play.google.com/store/apps/details?id=com.dignitestudios.wingapp&pli=1"
                }
            ]
        },
        {
            title: "Fitness by Faith",
            period: "2023",
            company: "LaunchBox Pakistan",
            description:
                "All-in-one fitness app with workout plans, meal plans, tutorials, and in-app subscriptions for users; Admin portal for managing content.",
            skills: ["Express.js", "Amazon EC2", "Mongoose ODM"],
            links: [
                {
                    name: "App Link",
                    url: "https://play.google.com/store/apps/details?id=com.dignitestudios.fitnessbyfaithapp&pli=1"
                }
            ]
        },

        {
            title: "WingX - Dating App",
            period: "2023",
            company: "LaunchBox Pakistan",
            description:
                "Social dating app with unique 'wing' feature allowing users to recommend profiles to friends, enhancing trust-based connections.",
            skills: ["Node.js", "Firebase", "React Native"],
            links: [{ name: "Google Play Store", url: "#" }]
        },

    ];


    return (
        <section id="projects" className="py-16 bg-gray-100 text-gray-900 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                {projects.map((proj, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
                        <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                        <p className="text-gray-500 text-sm mb-2">{proj.company} | {proj.period}</p>
                        <p className="text-gray-700 mb-4">{proj.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {proj.skills.map((skill, i) => (
                                <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">{skill}</span>
                            ))}
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            {proj?.links?.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
