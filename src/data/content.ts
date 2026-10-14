export const profile = {
  name: "Abdul Hamid AL Bayya",
  title: "Senior Software Engineer",
  location: "Medan, North Sumatera, Indonesia",
  email: "hamidoalbayya23@gmail.com",
  phone: "+62 899-7919-139",
  phoneHref: "+628997919139",
  whatsapp: "https://wa.me/628997919139",
  photo: "/profile-photo",
  github: "https://github.com/Hameedo79",
  linkedin: "https://www.linkedin.com/in/abdul-hamid-al-bayya-3147b4111/",
  instagram: "https://www.instagram.com/hameedo7799/?hl=en",
  tiktok: "https://www.tiktok.com/@hameedo7799?lang=en",
  about:
    "Senior Software Engineer with 8+ years of experience building full-stack products across mobile (React Native), web (React), and backend (Node.js/TypeScript) platforms. Skilled in owning features end-to-end, from design through implementation, testing, and production deployment, in cloud-based (AWS) environments, with a strong focus on code quality and clear cross-functional communication.",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  link?: string;
  remote?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Slyp Pty Ltd — Sydney, Australia",
    period: "Nov 2024 - Present",
    link: "https://www.slyp.com.au/",
    remote: true,
    highlights: [
      "Design, build, and maintain full-stack features across a loyalty/rewards platform spanning a React Native mobile app, a React web app, and multiple Node.js/TypeScript backend microservices.",
      "Build and evolve authentication and session-management flows (AWS Cognito, JWT issuance/refresh), balancing security with user experience.",
      "Design and maintain shared UI component/design-system libraries, ensuring consistency and preventing regressions through automated tests.",
      "Diagnose and resolve cross-platform compatibility issues (iOS/Android, multiple browsers) and production incidents, working from analytics/user reports back to root cause.",
      "Maintain CI/CD pipelines and deployment infrastructure to support frequent, reliable releases.",
    ],
  },
  {
    role: "Software Engineering Manager",
    company: "The Luxe Week — Bali, Indonesia",
    period: "Jul 2023 - Oct 2024",
    link: "https://www.theluxeweek.com/",
    highlights: [
      "Led and managed a team of software engineers to successfully deliver and launch a new software product on time and within budget.",
      "Oversaw the development and implementation of a new code review system, resulting in a 20% reduction in code errors and improved overall code quality.",
      "Collaborated with cross-functional teams to assess and prioritize product features, resulting in a 15% increase in customer satisfaction and retention.",
      "Implemented agile development methodology, resulting in a 20% increase in team productivity and efficiency.",
      "Mentored and coached junior software engineers, resulting in the promotion and growth of team members within the company.",
    ],
  },
  {
    role: "Senior Full Stack Developer",
    company: "Juleb - Digital Pharma Company — Jeddah, Saudi Arabia",
    period: "May 2022 - May 2023",
    link: "https://juleb.com/",
    remote: true,
    highlights: [
      "Built a React/Node.js web application, optimizing performance by reducing page load times.",
      "Developed a back-end API using Node.js and the NestJS framework.",
      "Improved data delivery and system stability with the integration of GraphQL.",
      "Refactored legacy code for increased extensibility.",
    ],
  },
  {
    role: "Full Stack Developer",
    company:
      "PT Visi Globalindo Data Utama (A CRIF Company) — Jakarta, Indonesia",
    period: "Dec 2019 - Feb 2022",
    link: "https://www.id.crifasia.com/",
    highlights: [
      "Created and implemented back-end and front-end solutions for client websites using HTML, CSS, JavaScript, and PHP.",
      "Developed RESTful API services for client apps and built endpoints to integrate the front-end with the back-end.",
      "Developed multi-tier web applications utilizing modern JavaScript and HTML frameworks.",
      "Implemented scalable server-side components to improve performance and navigate complex data structures.",
    ],
  },
  {
    role: "Backend Developer",
    company: "PT Mitra Tekno Madani — Jakarta, Indonesia",
    period: "Oct 2018 - Sep 2019",
    link: "https://mtm.co.id/",
    highlights: [
      "Built and maintained backend application logic and database architecture.", // TODO: name the product/domain if you recall it, for more specificity
      "Designed and optimized database schemas to support growing data and query requirements.",
      "Implemented algorithmic solutions for complex backend processing requirements.",
      "Refactored existing code to improve readability, performance, and maintainability.",
    ],
  },
  {
    role: "IT Support",
    company: "PT Perusahaan Listrik Negara (Persero) — Binjai, Indonesia",
    period: "Mar 2016 - Jul 2017",
    link: "https://www.pln.co.id/main",
    highlights: [
      "Performed network monitoring, troubleshooting, and maintenance of computers, laptops, and printers.",
      "Coordinated daily operations with the company's regional offices and other departments to ensure consistent service across the region.",
    ],
  },
  {
    role: "Computer Technician",
    company: "Simone Com — Medan, Indonesia",
    period: "May 2014 - Apr 2015",
    highlights: [
      "Installed and configured new hardware components and software programs.",
      "Diagnosed system performance problems and provided necessary solutions.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  link: string;
};

export const education: EducationItem[] = [
  {
    degree: "Computer Science",
    institution: "University of Pembangunan Panca Budi",
    period: "2016 - 2018",
    link: "https://www.pancabudi.ac.id/",
  },
  {
    degree: "Management Information System",
    institution: "Politeknik Unggul LP3M",
    period: "2013 - 2015",
    link: "https://politeknikunggul.ac.id/",
  },
];

export type Project = {
  name: string;
  description: string;
  frontend?: string[];
  backend?: string[];
  tags: string[];
  link?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    name: "Go Rewards",
    description:
      "Slyp's consumer loyalty app — lets members browse merchant programs, activate offers, track receipts, and earn rewards on the go.",
    frontend: ["slyp-app"],
    backend: ["bff-slyp-app", "api", "service-consumer", "service-rewards"],
    link: "https://www.gorewards.com.au/",
    images: [
      "/projects/go-rewards-app/go-rewards-app-1.jpeg",
      "/projects/go-rewards-app/go-rewards-app-2.jpeg",
      "/projects/go-rewards-app/go-rewards-app-3.jpeg",
      "/projects/go-rewards-app/go-rewards-app-4.jpeg",
      "/projects/go-rewards-app/go-rewards-app-5.jpeg",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "AWS Cognito",
      "TanStack Query",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS S3",
      "AWS DynamoDB",
      "AWS CloudFormation",
      "EagleEye",
      "Jest",
      "CI/CD",
    ],
  },
  {
    name: "Go Rewards on Web",
    description:
      "Web companion to Go Rewards — lets members land directly from a marketing email to view and activate merchant offers on desktop, without installing the app.",
    frontend: ["slyp-app-web"],
    backend: ["bff-slyp-app", "api", "service-consumer", "service-rewards"],
    link: "https://gorewards-web.slyp.com.au/",
    images: [
      "/projects/go-rewards-web/go-rewards-web-1.jpeg",
      "/projects/go-rewards-web/go-rewards-web-2.jpeg",
      "/projects/go-rewards-web/go-rewards-web-3.jpeg",
      "/projects/go-rewards-web/go-rewards-web-4.jpeg",
      "/projects/go-rewards-web/go-rewards-web-5.jpeg",
    ],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Router",
      "TanStack Query",
      "AWS Cognito",
      "Playwright",
      "Vitest",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS S3",
      "AWS DynamoDB",
      "AWS CloudFormation",
      "EagleEye",
      "CI/CD",
    ],
  },
  {
    name: "MySlyp",
    description:
      "Merchant portal for onboarding onto the Slyp platform and managing smart receipts, promotions, and company profile.",
    frontend: ["my-slyp"],
    backend: ["api", "bff-my-slyp"],
    link: "https://my.slyp.com.au/",
    images: [
      "/projects/my-slyp/my-slyp-1.jpeg",
      "/projects/my-slyp/my-slyp-2.jpeg",
      "/projects/my-slyp/my-slyp-3.jpeg",
      "/projects/my-slyp/my-slyp-4.jpeg",
      "/projects/my-slyp/my-slyp-5.jpeg",
      "/projects/my-slyp/my-slyp-6.jpeg",
      "/projects/my-slyp/my-slyp-7.jpeg",
      "/projects/my-slyp/my-slyp-8.jpeg",
    ],
    tags: [
      "Angular",
      "NgRx",
      "AWS Cognito",
      "Contentful",
      "Cypress",
      "Node.js",
      "PostgreSQL",
      "AWS S3",
      "AWS DynamoDB",
      "AWS CloudFormation",
      "CI/CD",
    ],
  },
  {
    name: "MySlyp v2",
    description:
      "Modern rewrite of the merchant portal, giving merchants a faster, GraphQL-powered experience for managing their Slyp presence, including creating the campaigns and offers that power Go Rewards.",
    frontend: ["my-slyp-v2"],
    backend: [
      "bff-my-slyp",
      "api",
      "service-rewards",
      "service-merchant-users",
    ],
    link: "https://my-v2.slyp.com.au/",
    images: [
      "/projects/my-slyp-v2/my-slyp-v2-1.jpeg",
      "/projects/my-slyp-v2/my-slyp-v2-2.jpeg",
      "/projects/my-slyp-v2/my-slyp-v2-3.jpeg",
      "/projects/my-slyp-v2/my-slyp-v2-4.jpeg",
      "/projects/my-slyp-v2/my-slyp-v2-5.jpeg",
      "/projects/my-slyp-v2/my-slyp-v2-6.jpeg",
      "/projects/my-slyp-v2/my-slyp-v2-7.jpeg",
      "/projects/my-slyp-v2/my-slyp-v2-8.jpeg",
      "/projects/my-slyp-v2/my-slyp-v2-9.jpeg",
      "/projects/my-slyp-v2/my-slyp-v2-10.jpeg",
    ],
    tags: [
      "React",
      "TypeScript",
      "Apollo Client",
      "GraphQL",
      "Chakra UI",
      "Redux Toolkit",
      "Vite",
      "Cypress",
      "Vitest",
      "Node.js",
      "PostgreSQL",
      "AWS S3",
      "AWS DynamoDB",
      "AWS CloudFormation",
      "AWS Cognito",
      "Amazon QuickSight",
      "Paragon",
      "EagleEye",
      "CI/CD",
    ],
  },
  {
    name: "Suncorp",
    description:
      "Card-linked offers integration for Suncorp Mastercard — backend service processing Visa/Mastercard scheme transactions and Gr4vy payments, with a dedicated web view for linking payment cards.",
    frontend: ["link-payment-card-external"],
    backend: ["service-pclo", "service-scheme-transactions"],
    images: [
      "/projects/suncorp/suncorp-1.jpeg",
      "/projects/suncorp/suncorp-2.jpeg",
    ],
    tags: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "AWS S3",
      "AWS DynamoDB",
      "AWS CloudFormation",
      "AWS SQS",
      "AWS SNS",
      "AWS RDS",
      "Cypress",
      "Jest",
      "Visa",
      "Mastercard",
      "Gr4vy",
      "CI/CD",
    ],
  },
  {
    name: "The Luxe Week",
    description:
      "Luxury travel company profile site — users browse trips, log in to book and pay, then download their trip itinerary.",
    link: "https://www.theluxeweek.com/",
    images: [
      "/projects/theluxeweek/theluxeweek-1.jpeg",
      "/projects/theluxeweek/theluxeweek-2.jpeg",
      "/projects/theluxeweek/theluxeweek-3.jpeg",
      "/projects/theluxeweek/theluxeweek-4.jpeg",
      "/projects/theluxeweek/theluxeweek-5.jpeg",
      "/projects/theluxeweek/theluxeweek-6.jpeg",
    ],
    tags: [
      "Strapi",
      "JavaScript",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "AWS Amplify",
      "AWS ECS",
      "AWS EKS",
      "CI/CD",
    ],
  },
  {
    name: "Juleb POS",
    description:
      "Cloud-based point-of-sale platform for retail and pharmacy — real-time multi-branch sales and inventory sync, barcode-driven checkout, and omnichannel order integrations.",
    link: "https://juleb.com/pos-system",
    images: [
      "/projects/juleb/juleb-1.jpeg",
      "/projects/juleb/juleb-2.jpeg",
      "/projects/juleb/juleb-3.jpeg",
      "/projects/juleb/juleb-4.jpeg",
    ],
    tags: [
      "React",
      "Redux Saga",
      "Node.js",
      "NestJS",
      "GraphQL",
      "TypeScript",
      "Styled Components",
      "Apollo Client",
      "CI/CD",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    name: "VGAS",
    description:
      "Internal workflow tool for producing Business Information Reports — tracks an investigation of a buyer's company, ownership, and financials (with translation and QC steps) through to a final report exportable as DOCX, PDF, or JSON for the client's decision-making.",
    tags: [
      "AngularJS",
      "jQuery",
      "Bootstrap",
      "JavaScript",
      "AJAX",
      "PHP",
      "CodeIgniter 3",
      "SQL Server",
      "MySQL",
      "REST API",
    ],
  },
  {
    name: "Cuti Online",
    description:
      "Internal HR system for employee time and leave management, used across the company's Indonesia, Philippines, Singapore, Vietnam, and Malaysia offices — clock in/out, submit leave requests (annual, maternity, etc.), and route them through manager/HR approval, with HR reporting tools.",
    tags: [
      "jQuery",
      "Bootstrap",
      "JavaScript",
      "AJAX",
      "Node.js",
      "Express",
      "MySQL",
      "REST API",
    ],
  },
  {
    name: "VAMS",
    description:
      "Asset management system — tracks company assets (e.g. laptops) and their assigned owner, generates QR codes per item for quick stock-opname scanning, and handles item requests and repair requests, with reporting.",
    tags: [
      "React",
      "TypeScript",
      "Context API",
      "GraphQL",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
  },
];

// Skills are derived from project tags, so new projects automatically surface their stack here.
// `additionalSkills` covers curated ordering plus skills not demonstrated by any project tag.
type SkillCategory =
  | "Programming Languages"
  | "Frameworks & Runtimes"
  | "UI Libraries & Styling"
  | "State Management & Data Fetching"
  | "Databases"
  | "Cloud & DevOps"
  | "Version Control"
  | "Testing"
  | "Tools & Practices"
  | "Personal Learning & Side Projects";

const skillCategoryOrder: SkillCategory[] = [
  "Programming Languages",
  "Frameworks & Runtimes",
  "UI Libraries & Styling",
  "State Management & Data Fetching",
  "Databases",
  "Cloud & DevOps",
  "Version Control",
  "Testing",
  "Tools & Practices",
  "Personal Learning & Side Projects",
];

// Maps every tag used across `projects` to the Skills section category it belongs to.
const tagSkillCategories: Record<string, SkillCategory> = {
  TypeScript: "Programming Languages",
  JavaScript: "Programming Languages",
  PHP: "Programming Languages",

  React: "Frameworks & Runtimes",
  "React Native": "Frameworks & Runtimes",
  Angular: "Frameworks & Runtimes",
  AngularJS: "Frameworks & Runtimes",
  Vite: "Frameworks & Runtimes",
  jQuery: "Frameworks & Runtimes",
  "Node.js": "Frameworks & Runtimes",
  Express: "Frameworks & Runtimes",
  NestJS: "Frameworks & Runtimes",
  "CodeIgniter 3": "Frameworks & Runtimes",
  Strapi: "Frameworks & Runtimes",

  "Tailwind CSS": "UI Libraries & Styling",
  "Chakra UI": "UI Libraries & Styling",
  "Styled Components": "UI Libraries & Styling",
  Bootstrap: "UI Libraries & Styling",

  "Redux Toolkit": "State Management & Data Fetching",
  "Redux Saga": "State Management & Data Fetching",
  NgRx: "State Management & Data Fetching",
  "TanStack Query": "State Management & Data Fetching",
  "TanStack Router": "State Management & Data Fetching",
  "Context API": "State Management & Data Fetching",

  PostgreSQL: "Databases",
  MySQL: "Databases",
  "SQL Server": "Databases",

  "AWS Cognito": "Cloud & DevOps",
  "AWS S3": "Cloud & DevOps",
  "AWS DynamoDB": "Cloud & DevOps",
  "AWS CloudFormation": "Cloud & DevOps",
  "AWS SQS": "Cloud & DevOps",
  "AWS SNS": "Cloud & DevOps",
  "AWS RDS": "Cloud & DevOps",
  "AWS Amplify": "Cloud & DevOps",
  "AWS ECS": "Cloud & DevOps",
  "AWS EKS": "Cloud & DevOps",
  "Amazon QuickSight": "Cloud & DevOps",
  Docker: "Cloud & DevOps",
  Kubernetes: "Cloud & DevOps",
  "CI/CD": "Cloud & DevOps",

  GitHub: "Version Control",
  GitLab: "Version Control",

  Jest: "Testing",
  Vitest: "Testing",
  Cypress: "Testing",
  Playwright: "Testing",

  GraphQL: "Tools & Practices",
  "Apollo Client": "Tools & Practices",
  "REST API": "Tools & Practices",
  EagleEye: "Tools & Practices",
  Gr4vy: "Tools & Practices",
  Paragon: "Tools & Practices",
  Stripe: "Tools & Practices",
  Contentful: "Tools & Practices",
  Visa: "Tools & Practices",
  Mastercard: "Tools & Practices",
  AJAX: "Tools & Practices",
};

// Curated ordering, plus skills not demonstrated by any project tag (e.g. Next.js, MongoDB).
const additionalSkills: Partial<Record<SkillCategory, string[]>> = {
  "Programming Languages": ["TypeScript", "JavaScript", "HTML/CSS", "PHP"],
  "Frameworks & Runtimes": [
    "React",
    "React Native",
    "Next.js",
    "Angular",
    "AngularJS",
    "Vite",
    "jQuery",
    "Node.js",
    "Express",
    "NestJS",
    "CodeIgniter 3",
    "Strapi",
  ],
  "UI Libraries & Styling": [
    "Tailwind CSS",
    "Chakra UI",
    "Styled Components",
    "Bootstrap",
  ],
  "State Management & Data Fetching": [
    "Redux Toolkit",
    "Redux Saga",
    "NgRx",
    "TanStack Query",
    "TanStack Router",
    "Context API",
  ],
  Databases: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "TypeORM"],
  "Cloud & DevOps": [
    "AWS Cognito",
    "AWS S3",
    "AWS DynamoDB",
    "AWS SQS",
    "AWS SNS",
    "AWS RDS",
    "AWS CloudFormation",
    "AWS Amplify",
    "AWS ECS",
    "AWS EKS",
    "AWS WAF",
    "Amazon QuickSight",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
  ],
  "Version Control": ["Git", "GitHub", "GitLab"],
  Testing: ["Jest", "Vitest", "Cypress", "React Testing Library", "Playwright"],
  "Tools & Practices": [
    "GraphQL",
    "Apollo Client",
    "REST API",
    "EagleEye",
    "Gr4vy",
    "Paragon",
    "Stripe",
    "Contentful",
    "Visa",
    "Mastercard",
    "AJAX",
    "PostHog",
    "Figma",
    "Jira",
    "Confluence",
    "Agile",
    "Scrum",
    "OOP",
    "Design Patterns",
    "SOLID Principles",
    "Clean Code",
    "Code Review",
    "Problem Solving",
    "Claude",
    "Claude Code",
    "GitHub Copilot",
    "AI-assisted development",
  ],
  // Self-taught / hobby skills, not tied to any professional project.
  "Personal Learning & Side Projects": [
    "Dart",
    "Flutter",
    "Python",
    "Django",
    "Ruby",
    "Ruby on Rails",
    "Go",
    "gRPC",
    "Kotlin",
    "Spring Boot",
    "Web Application Security",
    "Penetration Testing",
    "Social Engineering",
    "Kali Linux",
  ],
};

function buildSkills(): Record<SkillCategory, string[]> {
  const grouped = new Map<SkillCategory, Set<string>>();
  const add = (category: SkillCategory, skill: string) => {
    if (!grouped.has(category)) grouped.set(category, new Set());
    grouped.get(category)!.add(skill);
  };

  for (const [category, skillList] of Object.entries(additionalSkills) as [
    SkillCategory,
    string[],
  ][]) {
    skillList.forEach((skill) => add(category, skill));
  }

  for (const project of projects) {
    for (const tag of project.tags) {
      const category = tagSkillCategories[tag];
      if (category) add(category, tag);
    }
  }

  const result = {} as Record<SkillCategory, string[]>;
  for (const category of skillCategoryOrder) {
    const skillSet = grouped.get(category);
    if (skillSet) result[category] = Array.from(skillSet);
  }
  return result;
}

export const skills = buildSkills();
