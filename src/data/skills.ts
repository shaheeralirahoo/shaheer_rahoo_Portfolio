export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "Bash", "YAML"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "NestJS"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS, CloudFront)", "Docker", "Linux", "Nginx", "CI/CD"],
  },
  {
    category: "Architecture",
    skills: ["REST APIs", "WebSockets / Socket.IO", "JWT", "RBAC", "BullMQ"],
  },
  {
    category: "Payments",
    skills: ["Stripe", "Stripe Connect", "Google Play Billing", "Apple IAP", "OAuth", "Agora"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Swagger", "Postman"],
  },
];
