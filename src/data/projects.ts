export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  summary?: string;
  tech: string[];
  links?: ProjectLink[];
  featured?: boolean;
  gradient?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  responsibilities?: string[];
  challenges?: string[];
  keyFeatures?: string[];
  impact?: string[];
}

export const projects: Project[] = [
  {
    slug: "perfect-boat",
    title: "Perfect Boat",
    description:
      "Enterprise fleet & operations platform. Hierarchical RBAC (admins, owners, managers, employees), Stripe subscription billing (recurring, prorated, failed-payment handling, webhooks), and Google Play Billing + Apple IAP integration.",
    summary:
      "An enterprise operations platform with hierarchical access control and cross-platform subscription billing.",
    tech: ["Node.js", "Express.js", "MongoDB", "Stripe", "Google Play Billing", "Apple IAP", "JWT", "RBAC"],
    featured: true,
    gradient: "from-blue-500/20 to-cyan-500/20",
    links: [
      { label: "Owner Portal", url: "https://owner.theperfectboat.com/" },
      { label: "Manager Portal", url: "https://manager.theperfectboat.com/" },
    ],
    overview:
      "Perfect Boat is an enterprise fleet and operations platform that serves different roles within a single business — admins, owners, managers, and employees — each needing a distinct set of permissions and capabilities.",
    problem:
      "Enterprises needed one system that could serve multiple organizational roles with different levels of access, while also handling revenue through subscriptions across both web and mobile. The complexity lay in the permission matrix between roles and in reliable, consistent subscription billing.",
    solution:
      "I built a backend that models a hierarchical RBAC system so each role gets exactly the access it should, and integrated Stripe subscription billing (recurring charges, proration, failed-payment handling, and webhooks) alongside Google Play Billing and Apple In-App Purchases for mobile.",
    architecture:
      "Node.js and Express.js API with MongoDB for data, JWT-based authentication, a hierarchical RBAC layer for authorization, and a payment service orchestrating Stripe plus Google Play Billing and Apple IAP.",
    responsibilities: [
      "Designed the hierarchical RBAC model covering admins, owners, managers, and employees",
      "Built Stripe subscription billing with recurring charges, proration, and failed-payment handling",
      "Integrated Google Play Billing and Apple In-App Purchases for mobile subscriptions",
      "Implemented webhook-driven payment lifecycle events",
    ],
    challenges: [
      "Reconciling subscription state across three payment providers (Stripe, Play, App Store)",
      "Modeling and enforcing hierarchical permissions without leaking data between roles",
    ],
    keyFeatures: [
      "Hierarchical role-based access control",
      "Stripe subscription billing and webhooks",
      "Google Play Billing and Apple IAP support",
      "Separate owner and manager portal backends",
    ],
  },
  {
    slug: "vybex",
    title: "Vybex",
    description:
      "Social networking & real-time engagement platform. User engagement scoring/ranking, reusable social content modules (posts, comments, reactions), Agora live streaming, and virtual currency & in-app payments.",
    summary:
      "A social platform with real-time engagement, live streaming, and in-app economy features.",
    tech: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "Agora", "Stripe", "Google Play Billing", "Apple IAP"],
    featured: true,
    gradient: "from-purple-500/20 to-pink-500/20",
    overview:
      "Vybex is a social networking and real-time engagement platform that combines familiar social content features (posts, comments, reactions) with live streaming and an in-app economy.",
    problem:
      "The platform needed to support real-time engagement — ranking users, streaming live, and handling an in-app currency and payment system — while keeping the social content features consistent and reusable across the product.",
    solution:
      "I built reusable social content modules so posts, comments, and reactions worked consistently, implemented engagement scoring and ranking to surface activity, integrated Agora for live streaming, and wired up virtual currency plus in-app payments.",
    architecture:
      "Node.js and Express.js API with MongoDB, Socket.IO for real-time messaging and events, Agora for live streaming, and payment integration for virtual currency and in-app purchases.",
    responsibilities: [
      "Built engagement scoring and user ranking logic",
      "Created reusable social content modules (posts, comments, reactions)",
      "Integrated Agora live streaming",
      "Implemented virtual currency and in-app payments",
    ],
    challenges: [
      "Designing reusable social content modules so features stayed consistent across the app",
      "Supporting real-time engagement at scale with Socket.IO",
    ],
    keyFeatures: [
      "User engagement scoring and ranking",
      "Posts, comments, and reactions",
      "Agora live streaming",
      "Virtual currency and in-app payments",
    ],
  },
  {
    slug: "carveeps",
    title: "Carveeps",
    description:
      "Subscription & dealer platform. Recurring billing, renewals, cancellations, and webhook-driven events; dealer dashboard APIs, payment reporting, and onboarding & commission handling via Stripe Connect.",
    summary:
      "A subscription platform with dealer onboarding, commissions, and payment reporting.",
    tech: ["Node.js", "Express.js", "MongoDB", "Stripe", "Stripe Connect"],
    featured: true,
    gradient: "from-emerald-500/20 to-teal-500/20",
    links: [
      { label: "User Portal", url: "https://app.carveeps.com/" },
      { label: "Dealer Portal", url: "https://www.carveeps.com/splash-screen" },
    ],
    overview:
      "Carveeps is a subscription and dealer platform that pairs recurring billing with a dealer ecosystem — onboarding, commissions, and payment reporting in one system.",
    problem:
      "The product needed both a consumer subscription model and a dealer marketplace where dealers could onboard and earn commissions — two payment flows that had to work together reliably.",
    solution:
      "I built the subscription backend (recurring billing, renewals, cancellations, webhook-driven events), dealer dashboard APIs, payment reporting, and onboarding and commission handling using Stripe Connect.",
    architecture:
      "Node.js and Express.js API with MongoDB, Stripe for subscriptions and payments, and Stripe Connect for dealer onboarding, commissions, and payouts.",
    responsibilities: [
      "Built recurring billing, renewals, cancellations, and webhook events",
      "Developed dealer dashboard APIs and payment reporting",
      "Handled onboarding and commission flows via Stripe Connect",
    ],
    challenges: [
      "Juggling consumer subscriptions alongside dealer commissions and payouts in one system",
      "Keeping payment reporting accurate across both flows",
    ],
    keyFeatures: [
      "Subscription billing lifecycle",
      "Dealer onboarding and commissions via Stripe Connect",
      "Payment reporting",
      "Webhook-driven events",
    ],
  },
  {
    slug: "tera",
    title: "TERA",
    description:
      "Comprehensive ride booking platform connecting users, drivers, scanners, and admins through an integrated system.",
    summary:
      "A ride-hailing platform connecting users, drivers, scanners, and admins.",
    tech: ["NestJS", "AWS", "Firebase", "Google Maps API", "Stripe Connect", "Node.js"],
    gradient: "from-orange-500/20 to-amber-500/20",
    links: [
      { label: "User App", url: "https://play.google.com/store/apps/details?id=com.tera.appshuttelapp" },
    ],
  },
  {
    slug: "brisbon-notary",
    title: "Brisbon Notary",
    description:
      "Digital platform for notary service bookings with a user-friendly mobile app and admin panel.",
    summary:
      "A digital notary service booking platform with a mobile app and admin panel.",
    tech: ["Node.js", "Stripe", "AWS", "Firebase"],
    gradient: "from-rose-500/20 to-red-500/20",
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.dignitestudios.brisbonnotary" }],
  },
  {
    slug: "scavenger-hunt",
    title: "Scavenger Hunt",
    description:
      "Interactive single-page web app offering adventure-driven challenges, a real-time leaderboard, and vendor/admin portals.",
    summary:
      "An adventure challenge app with a real-time leaderboard and vendor/admin portals.",
    tech: ["NestJS", "Flutter", "Prisma ORM", "PostgreSQL", "Stripe", "Next.js", "Node.js"],
    gradient: "from-violet-500/20 to-indigo-500/20",
  },
  {
    slug: "sweep-stake",
    title: "Sweep Stake",
    description:
      "Interactive spinning-wheel game with real-time feedback, an admin dashboard, vendor portal, and subscription features.",
    summary:
      "A spinning-wheel game with real-time feedback, admin and vendor portals, and subscriptions.",
    tech: ["NestJS", "Flutter", "Next.js", "TypeORM", "MySQL", "Stripe", "Node.js"],
    gradient: "from-yellow-500/20 to-lime-500/20",
  },
  {
    slug: "kacheri-law",
    title: "Kacheri Law",
    description:
      "Legal practice management app with a lawyer app, admin panel, and website interface that streamlines appointments and legal resources.",
    summary:
      "A legal practice management app for appointments and legal resources.",
    tech: ["NestJS", "AWS", "Firebase", "SendGrid", "Node.js"],
    gradient: "from-slate-500/20 to-zinc-500/20",
    links: [{ label: "Download App", url: "https://play.google.com/store/apps/details?id=com.kacheri.klp" }],
  },
  {
    slug: "fitness-by-faith",
    title: "Fitness by Faith",
    description:
      "All-in-one fitness app with workout plans, meal plans, tutorials, and in-app subscriptions for users, plus an admin portal for managing content.",
    summary:
      "A fitness app with workout/meal plans, tutorials, and in-app subscriptions.",
    tech: ["Express.js", "Amazon EC2", "Mongoose ODM"],
    gradient: "from-green-500/20 to-emerald-500/20",
    links: [{ label: "App Link", url: "https://play.google.com/store/apps/details?id=com.dignitestudios.fitnessbyfaithapp" }],
  },
  {
    slug: "wingx",
    title: "WingX",
    description:
      "Social dating app with a unique 'wing' feature that lets users recommend profiles to friends, enhancing trust-based connections.",
    summary:
      "A social dating app with a trust-based profile recommendation feature.",
    tech: ["Node.js", "Firebase", "React Native"],
    gradient: "from-pink-500/20 to-rose-500/20",
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.dignitestudios.wingapp" }],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
