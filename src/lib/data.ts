import {
    SiFlutter,
    SiDart,
    SiFirebase,
    SiGithub,
    SiLinkedin,
    SiGoogleplay,
    SiAppstore,
} from "react-icons/si";
import {
    HiOutlineDevicePhoneMobile,
    HiOutlineCog6Tooth,
    HiOutlineCubeTransparent,
    HiOutlineServerStack,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

// ── Personal Info ──
export const personalInfo = {
    name: "Ahmed Usama",
    title: "Flutter Developer",
    tagline:
        "Flutter Developer with 4+ years of experience building scalable, production-ready cross-platform mobile applications.",
    bio: `Flutter Developer with 4+ years of experience in software engineering and 3+ years specializing in cross-platform mobile development. Experienced in building scalable, production-ready applications with clean architecture, SOLID principles, and modern design patterns. Proven track record of managing full mobile application lifecycles, implementing CI/CD pipelines, optimizing performance, and delivering apps published on Google Play and the App Store. Leverages AI-assisted development tools to accelerate implementation, enhance productivity, and maintain high engineering standards.`,
    phone: "+201119784561",
    email: "eng.ahmedusama@yahoo.com",
    github: "https://github.com/aoa97",
    linkedin: "https://www.linkedin.com/in/aoa97",
    whatsapp: "https://api.whatsapp.com/send?phone=00201119784561",
    location: "Egypt",
    profilePic: "/profile1.jpeg",
    resumeUrl:
        "https://drive.google.com/uc?export=download&id=1ML5LSfxpGDS_Vex9QhnV5qzuxrMm_DBk",
};

// ── Stats ──
export const stats = [
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Published Apps", value: 3, suffix: "+" },
];

// ── Skills ──
export interface SkillCategory {
    title: string;
    icon: IconType;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Mobile Development",
        icon: HiOutlineDevicePhoneMobile,
        skills: [
            "Flutter",
            "Dart",
            "Bloc / Cubit",
            "Riverpod",
            "Provider",
            "Animations",
            "Deep Linking",
            "Localization",
            "Push Notifications",
            "Google Maps",
            "Flavors",
        ],
    },
    {
        title: "DevOps & Distribution",
        icon: HiOutlineCog6Tooth,
        skills: [
            "CI/CD Pipelines",
            "Android & iOS Distribution",
            "Over-the-Air Patching",
            "Release Management",
            "Multi-Environment Config",
        ],
    },
    {
        title: "Architecture & Principles",
        icon: HiOutlineCubeTransparent,
        skills: [
            "OOP & SOLID Principles",
            "Design Patterns",
            "Clean Architecture",
            "Scalable Component Design",
            "Code Review & Quality",
        ],
    },
    {
        title: "Backend & Integration",
        icon: HiOutlineServerStack,
        skills: [
            "RESTful APIs",
            "Firebase Services",
            "WebSockets / SignalR",
            "Payment Gateway Integration",
            "Real-Time Systems",
        ],
    },
];

// ── Tech Icons (for the floating icons in Skills) ──
export const techIcons: { name: string; icon: IconType; color: string }[] = [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "GitHub", icon: SiGithub, color: "#6e5494" },
];

// ── Projects ──
export interface Project {
    name: string;
    description: string;
    period: string;
    location: string;
    highlights: string[];
    playStoreUrl?: string;
    appStoreUrl?: string;
    tags: string[];
    icon: string;
}

export const projects: Project[] = [
    {
        name: "Internal Real-Time Chat System",
        description:
            "A real-time internal communication platform supporting secure authentication, group messaging, and push notifications with cloud-based backend services.",
        period: "2026",
        location: "Remote",
        highlights: [
            "Architected and developed a real-time internal communication platform",
            "Integrated cloud-based backend services for real-time data synchronization",
            "Designed scalable architecture supporting multi-environment configuration",
        ],
        tags: ["Flutter", "Dart", "SignalR", "Firebase", "Clean Architecture"],
        icon: "/chat_app.jpeg",
    },
    {
        name: "YaSchools App",
        description:
            "A production-grade educational platform serving thousands of users with authentication, payments, booking systems, and interactive UI components.",
        period: "09/2022 – Present",
        location: "Remote, Saudi Arabia",
        highlights: [
            "Led mobile development for a production-grade application serving thousands of users",
            "Implemented scalable feature modules including authentication, payments, and booking systems",
            "Managed CI/CD automation and release workflows for reliable Android and iOS deployments",
            "Optimized performance and ensured stability across multiple environments",
        ],
        playStoreUrl:
            "https://play.google.com/store/apps/details?id=com.yaschools",
        appStoreUrl:
            "https://apps.apple.com/eg/app/yaschools-parents/id1642532633",
        tags: ["Flutter", "Dart", "CI/CD", "Firebase", "Bloc"],
        icon: "/yaschools.jpeg",
    },
    {
        name: "Vult App",
        description:
            "A cross-platform mobile application featuring QR-based attendance tracking, real-time chat functionality, and onboarding workflows.",
        period: "12/2024 – 04/2025",
        location: "Remote, Saudi Arabia",
        highlights: [
            "Independently designed and developed from concept to store release",
            "Implemented QR-based attendance tracking and real-time chat functionality",
            "Applied clean architecture principles and structured release management",
            "Delivered production-ready builds for both Android and iOS platforms",
        ],
        playStoreUrl:
            "https://play.google.com/store/apps/details?id=com.amasi.vult",
        appStoreUrl:
            "https://apps.apple.com/eg/app/vult-%DA%A4%D9%88%D9%84%D8%AA/id6747215629",
        tags: ["Flutter", "Dart", "WebSockets", "Clean Architecture"],
        icon: "/vult.jpeg",
    },
    {
        name: "Capital Auctions App",
        description:
            "A real-time auction platform with live bidding, secure payment integration, and scalable UI architecture optimized for real-time updates.",
        period: "01/2024 – 01/2025",
        location: "Remote, UAE",
        highlights: [
            "Developed a real-time auction platform with live bidding and secure payment integration",
            "Implemented scalable UI architecture optimized for real-time updates",
            "Ensured stable store releases and production reliability",
        ],
        playStoreUrl:
            "https://play.google.com/store/apps/details?id=com.auctions.capital&hl=en",
        appStoreUrl:
            "https://apps.apple.com/us/app/capital-auctions/id6504776169",
        tags: ["Flutter", "Dart", "Real-Time", "Payment Integration"],
        icon: "/capital_auctions.jpeg",
    },

];

// ── Experience ──
export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    type: string;
    bullets: string[];
}

export const experiences: Experience[] = [
    {
        company: "YaSchools Innovative Solution",
        role: "Flutter Developer",
        period: "07/2022 – Present",
        location: "Remote, Egypt",
        type: "Full-time",
        bullets: [
            "Leading cross-platform mobile development with scalable architecture and reusable component design",
            "Applying SOLID principles and clean architecture practices to ensure maintainability and extensibility",
            "Owning the full application lifecycle from planning to production deployment",
            "Designing and managing CI/CD pipelines to automate build, testing, and release workflows",
            "Implementing over-the-air patching and optimizing release processes for reliable production rollouts",
            "Collaborating cross-functionally with backend, design, QA, and product teams",
        ],
    },
    {
        company: "Freelance",
        role: "Flutter Developer",
        period: "2023 – 2025",
        location: "Remote",
        type: "Freelance",
        bullets: [
            "Delivered production-ready mobile applications published on Google Play and the App Store",
            "Managed full development lifecycle from architecture design to deployment",
            "Implemented scalable features including real-time systems, payment integration, and QR-based workflows",
            "Applied clean architecture principles and structured release management",
        ],
    },
    {
        company: "Algoriza",
        role: "Front-End Developer Intern",
        period: "03/2022 – 05/2022",
        location: "Remote, Egypt",
        type: "Internship",
        bullets: [
            "Developed frontend projects using HTML, CSS, JavaScript, React, and Vue",
            "Participated in structured code reviews led by senior engineers",
            "Applied expert feedback to improve code quality, performance, and maintainability",
        ],
    },
    {
        company: "Devs on Duty",
        role: "Web Design & UI/UX Internship",
        period: "08/2019 – 09/2019",
        location: "Remote, Egypt",
        type: "Internship",
        bullets: [
            "Applied UX processes including user research, sitemap creation, and user flow design",
            "Created wireframes and visual designs using Adobe XD",
            "Converted design prototypes into responsive web interfaces using HTML and CSS",
        ],
    },
];

// ── Education ──
export const education = {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Modern Academy in Maadi",
    period: "2016 – 2020",
    location: "Cairo, Egypt",
};

// ── Nav Links ──
export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

// ── Store icon helpers ──
export { SiGoogleplay, SiAppstore, SiGithub, SiLinkedin };
