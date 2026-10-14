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

export const skills = {
  "Programming Languages": [
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "PHP",
    "Dart",
  ],
  "Frameworks & Runtimes": [
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express",
    "NestJS",
    "CodeIgniter",
  ],
  Databases: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "TypeORM"],
  "Cloud & DevOps": [
    "AWS (Cognito, S3, SQS, WAF)",
    "Amazon QuickSight",
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitHub Actions CI/CD",
  ],
  Testing: ["Jest", "React Testing Library", "Playwright"],
  "Tools & Practices": [
    "GraphQL",
    "Apollo GraphQL",
    "REST API",
    "Third-party API Integrations (EagleEye, Gr4vy, Paragon)",
    "PostHog Analytics",
    "Figma",
    "Jira",
    "AI-assisted development",
  ],
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
      "GitHub",
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
      "Jest",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS S3",
      "AWS DynamoDB",
      "AWS CloudFormation",
      "EagleEye",
      "GitHub",
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
      "GitHub",
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
      "Apollo GraphQL",
      "GraphQL",
      "Chakra UI",
      "Redux Toolkit",
      "Vite",
      "Cypress",
      "Jest",
      "Node.js",
      "PostgreSQL",
      "AWS S3",
      "AWS DynamoDB",
      "AWS CloudFormation",
      "AWS Cognito",
      "Amazon QuickSight",
      "Paragon",
      "EagleEye",
      "GitHub",
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
      "AWS Aurora",
      "AWS RDS",
      "Cypress",
      "Jest",
      "Visa",
      "Mastercard",
      "Gr4vy",
      "GitHub",
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
      "GitHub",
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
      "Apollo GraphQL",
      "Apollo Client",
      "GitLab",
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
      "GitLab",
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
      "GitLab",
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
      "GitLab",
    ],
  },
];
