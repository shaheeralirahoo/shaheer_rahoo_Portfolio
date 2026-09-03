export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "LaunchBox Pakistan",
    location: "Karachi",
    period: "May 2024 – Present",
    current: true,
    highlights: [
      "Designed and developed backend systems for 15+ commercial apps (enterprise management, social, fitness, dating, subscription, communication) using Node.js, Express.js, and NestJS.",
      "Built a reusable Socket.IO real-time platform (1:1 messaging, group chats, media sharing, voice notes, notifications) adopted across 5+ production apps.",
      "Engineered payment infrastructure: Stripe, Google Play Billing, and Apple In-App Purchases — subscriptions, payment intents, webhooks, and transaction lifecycle.",
      "Designed RBAC systems for complex user hierarchies and multi-role enterprise workflows.",
      "Designed MongoDB schemas, optimized database structure, and built modular service architecture.",
      "Worked with AWS (EC2, S3, RDS, CloudFront, Elastic IP).",
      "Built a reusable backend foundation adopted team-wide.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Indus Valley Technologies",
    location: "Karachi",
    period: "Aug 2022 – Apr 2024",
    highlights: [
      "Built backend services for a ride-hailing platform, including ride lifecycle and assignment workflows.",
      "Optimized PostgreSQL queries and database structures.",
      "Containerized applications with Docker; managed dev/staging/prod environments on Linux infrastructure.",
    ],
  },
];
