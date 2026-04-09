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
    title: "Software Engineer | Flutter Developer",
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
            "GoRouter",
            "Deep Linking",
            "Animations",
            "Localization",
            "Push Notifications",
            "Google Maps",
            "Flavors",
            "Unit, Widget & Integration Testing",
        ],
    },
    {
        title: "DevOps & Distribution",
        icon: HiOutlineCog6Tooth,
        skills: [
            "CI/CD Pipelines",
            "Azure Pipelines",
            "Android & iOS Distribution",
            "Over-the-Air Patching (Shorebird)",
            "Release Management",
            "Multi-Environment Config",
            "Git & Version Control",
        ],
    },
    {
        title: "Architecture & Principles",
        icon: HiOutlineCubeTransparent,
        skills: [
            "OOP & SOLID Principles",
            "Design Patterns",
            "Clean Architecture",
            "MVVM, MVC",
            "Scalable & Reusable Component Design",
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
            "A real-time internal communication platform built for YaSchools team members, supporting secure authentication, group messaging, and push notifications.",
        period: "02/2026 – Present",
        location: "Remote, Saudi Arabia",
        highlights: [
            "Architected and developed a real-time internal communication platform supporting secure authentication, group messaging, and push notifications",
            "Built with Flutter, WebSockets, and Firebase for real-time messaging, data synchronization, and push delivery",
            "Designed scalable Clean Architecture to support multi-environment configuration and production-ready releases",
        ],
        tags: ["Flutter", "Firebase", "WebSockets", "Riverpod", "Clean Architecture", "Flavors", "Push Notifications", "Real-Time Chat"],
        icon: "/chat_app.jpeg",
    },
    {
        name: "YaSchools App",
        description:
            "A production-grade educational platform serving thousands of active users across Saudi Arabia with authentication, payments, booking systems, and interactive UI components.",
        period: "09/2022 – Present",
        location: "Remote, Saudi Arabia",
        highlights: [
            "Published on Google Play and App Store, serving thousands of active users across Saudi Arabia",
            "Led full app UI/UX redesign and rebranding, independently translating new Figma specs into pixel-perfect Flutter components across the entire application",
            "Delivered authentication, payments, and booking systems as independently deployable feature modules",
        ],
        playStoreUrl:
            "https://play.google.com/store/apps/details?id=com.yaschools",
        appStoreUrl:
            "https://apps.apple.com/eg/app/yaschools-parents/id1642532633",
        tags: ["Bloc & Cubit", "Booking", "E-commerce", "Filters", "Rating & Reviews", "Payment Gateways", "Flavors", "Azure Pipelines", "Shorebird", "Clean Architecture"],
        icon: "/yaschools.jpeg",
    },
    {
        name: "Vult App",
        description:
            "A Flutter sports academy management app featuring QR attendance, player performance tracking, parent portal, and real-time chat — with full UI/UX designed from scratch.",
        period: "12/2024 – 04/2025",
        location: "Remote, Saudi Arabia",
        highlights: [
            "Built a Flutter sports academy management app featuring QR attendance, player performance tracking, parent portal, and real-time chat",
            "Designed and implemented the entire UI/UX from scratch with no design handoff — including per-academy theme switching and multi-academy navigation",
            "Delivered push notification workflows (e.g. parent trip confirmation alerts) and production-ready builds for Android and iOS",
        ],
        playStoreUrl:
            "https://play.google.com/store/apps/details?id=com.amasi.vult",
        appStoreUrl:
            "https://apps.apple.com/eg/app/vult-%DA%A4%D9%88%D9%84%D8%AA/id6747215629",
        tags: ["Flutter", "QR Attendance", "Player Performance", "Parent Portal", "Real-Time Chat", "Theme Switching", "Push Notifications", "Clean Architecture"],
        icon: "/vult.jpeg",
    },
    {
        name: "Capital Auctions App",
        description:
            "A real-time auction platform with live bidding on auction lots, PayPal payment integration, full e-commerce flow, and instant updates powered by SignalR.",
        period: "01/2024 – 01/2025",
        location: "Remote, UAE",
        highlights: [
            "Built a Flutter real-time auction platform with live bidding on auction lots and instant updates powered by SignalR",
            "Integrated PayPal payment gateway with full e-commerce flow including shop, cart, and checkout",
            "Implemented push notifications for auction alerts and delivered production-ready builds for Android and iOS",
        ],
        playStoreUrl:
            "https://play.google.com/store/apps/details?id=com.auctions.capital&hl=en",
        appStoreUrl:
            "https://apps.apple.com/us/app/capital-auctions/id6504776169",
        tags: ["Flutter", "Live Bidding", "SignalR", "PayPal", "E-commerce", "Push Notifications", "Clean Architecture"],
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
    logo?: string;
}

export const experiences: Experience[] = [
    {
        company: "YaSchools Innovative Solution",
        role: "Flutter Developer",
        period: "12/2023 – Present",
        location: "Remote, Riyadh, Saudi Arabia",
        type: "Full-time",
        bullets: [
            "Built and maintained a production Flutter app serving thousands of users across Android and iOS",
            "Refactored legacy codebase from tightly coupled, unstructured code to decoupled feature modules using Clean Architecture, SOLID principles, and design patterns — significantly improving maintainability, testability, and scalability",
            "Migrated routing system from legacy Navigator to GoRouter, enabling deep linking, declarative route management, and improved navigation scalability",
            "Configured Android & iOS Flavors to support multi-environment builds (dev, production), eliminating manual config switching",
            "Designed and managed CI/CD pipelines using Azure Pipelines to automate build, testing, and release workflows for Android and iOS",
            "Implemented over-the-air patching using Shorebird to enable code push updates, ensuring reliable production rollouts with minimal downtime",
            "Integrated multiple payment gateways applying design patterns and DRY principles to build a reusable, extensible payment abstraction layer",
            "Led full app UI/UX redesign and rebranding, independently translating new Figma specs into pixel-perfect Flutter components across the entire application",
            "Collaborated cross-functionally with backend, design, QA, and product teams — managing delivery tracking via Azure Boards to ensure on-time, high-quality releases",
        ],
        logo: "/yaschools_co_.jpeg",
    },
    {
        company: "Algoriza",
        role: "Junior Flutter Developer",
        period: "07/2022 – 12/2023",
        location: "Remote, Egypt",
        type: "Full-time",
        bullets: [
            "Transitioned from frontend to Flutter development, contributing to production-grade applications integrating APIs and third-party services",
            "Collaborated with senior engineers on architectural decisions, code reviews, and quality standards",
        ],
        logo: "/algoriza.jpeg",
    },
    {
        company: "Algoriza",
        role: "Front-End Developer Intern",
        period: "03/2022 – 05/2022",
        location: "Remote, Egypt",
        type: "Internship",
        bullets: [
            "Developed frontend projects using HTML, CSS, JavaScript, React, and Vue — receiving detailed code reviews and applying senior engineer feedback to improve quality and performance",
            "Attended technical sessions on industry best practices and real-world project applications",
        ],
        logo: "/algoriza.jpeg",
    },
    {
        company: "Devs on Duty",
        role: "Web Design & UI/UX Internship",
        period: "08/2019 – 09/2019",
        location: "Remote, Egypt",
        type: "Internship",
        bullets: [
            "Conducted user research, sitemaps, and user flow design using UX processes",
            "Designed wireframes using Adobe XD and converted them into responsive web interfaces with HTML and CSS",
        ],
        logo: "/devs_on_duty.jpeg",
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