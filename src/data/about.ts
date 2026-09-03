export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface AboutEntry {
  background: string[];
  focus: string[];
  strengths: string[];
  careerDirection: string;
}

export const about: AboutEntry = {
  background: [
    "I'm a backend engineer with 3+ years of experience building the server-side systems behind production apps across SaaS, social, ride-hailing, subscription, fitness, dating, and property platforms.",
    "My work centers on the parts of a product users don't see: REST and real-time APIs, payment and subscription infrastructure, hierarchical permissions, and database design — the systems that need to stay reliable, consistent, and secure under real usage.",
    "I currently work as a Software Engineer at LaunchBox Pakistan, where I've built backend foundations that other teams now reuse across a number of shipped applications.",
  ],
  focus: [
    "Backend services in Node.js, Express.js, and NestJS",
    "Payment infrastructure: Stripe, Google Play Billing, Apple In-App Purchases, Stripe Connect",
    "Real-time systems with Socket.IO (chat, notifications, live features)",
    "Database design and optimization: MongoDB, PostgreSQL, MySQL, Redis",
    "Cloud infrastructure and deployment on AWS (EC2, S3, RDS, CloudFront)",
  ],
  strengths: [
    "Designing and shipping production backends end-to-end",
    "Building reusable backend foundations adopted across multiple apps",
    "Payment and subscription lifecycle management (recurring billing, webhooks, proration, failures)",
    "Hierarchical role-based access control (RBAC) for complex multi-role products",
    "Real-time features and background job processing (Socket.IO, BullMQ)",
  ],
  careerDirection:
    "I'm interested in backend engineering roles focused on building and scaling robust API and data systems — payments, real-time products, and distributed services in particular.",
};

export const highlights: Highlight[] = [
  {
    icon: "api",
    title: "API & System Design",
    description:
      "REST APIs on Node.js, Express.js, and NestJS — with authentication (JWT), validation, and clean separation of concerns.",
  },
  {
    icon: "payment",
    title: "Payments & Subscriptions",
    description:
      "Recurring billing, proration, failed-payment handling, and webhooks across Stripe, Google Play Billing, and Apple IAP.",
  },
  {
    icon: "realtime",
    title: "Real-Time Systems",
    description:
      "Socket.IO platforms for messaging and live features, plus background jobs with BullMQ.",
  },
  {
    icon: "database",
    title: "Database Design",
    description:
      "Schema design and query optimization across MongoDB, PostgreSQL, MySQL, and Redis.",
  },
  {
    icon: "rbac",
    title: "Access Control",
    description:
      "Hierarchical RBAC for multi-role products — admins, owners, managers, employees — with secure authorization.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Deployment and infrastructure on AWS (EC2, S3, RDS, CloudFront), with Docker and Linux.",
  },
];
