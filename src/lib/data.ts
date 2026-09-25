import {
    HiOutlineUsers,
    HiOutlineChartBar,
    HiOutlineBuildingOffice2,
    HiOutlineChatBubbleLeftRight,
    HiOutlineShieldCheck,
    HiOutlineClock,
    HiOutlineDocumentText,
    HiOutlineCheckBadge,
    HiOutlinePhone,
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlineBriefcase,
    HiOutlineAcademicCap,
} from "react-icons/hi2";
import { SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";

// ── Personal Info ──
export const personalInfo = {
    name: "Mohamed Magdy",
    fullName: "Mohamed Magdy Ahmed Fouad",
    title: "Real-Time & Performance Analyst | Customer Service Leader",
    titles: [
        "Real-Time & Performance Analyst",
        "Customer Service Team Leader",
        "Workforce Management & SLA Specialist",
        "Asset & Client Portfolio Manager",
    ],
    tagline:
        "Results-oriented professional with 14+ years of experience—including 12 years across high-volume UAE contact centers—specializing in real-time performance analytics, workforce scheduling, SLA optimization, asset management, and customer experience excellence.",
    bio: `With over 14 years of diverse professional experience across leading multinational organizations—including 12 years in Dubai, UAE—I specialize in real-time performance analytics, contact center shift planning, operational SLA optimization, and asset management. Promoted to Team Leader through consistent delivery of exceptional service quality, disciplined conflict mediation, and operational rigor. Adept at coordinating with cross-functional leadership, optimizing workforce productivity, and elevating brand reputation through customer satisfaction and data-driven insights.`,
    phone: "+971 56 121 2139",
    phoneRaw: "+971561212139",
    email: "Mouhamed_magdy@yahoo.com",
    linkedin: "https://www.linkedin.com/in/mouhamed-magdy-08222566?fromQR=1",
    whatsapp: "https://wa.me/971561212139",
    location: "Dubai, United Arab Emirates",
    profilePic: "/mohamed_magdy.jpeg",
    resumeUrl: "/Mohamed_Magdy_CV.docx",
};

// ── Key Stats ──
export const stats = [
    { label: "Years Total Experience", value: 14, suffix: "+" },
    { label: "Years UAE Experience", value: 12, suffix: "+" },
    { label: "Agents Coached & Led", value: 20, suffix: "+" },
    { label: "SLA Target Achievement", value: 98, suffix: "%" },
];

// ── Skills & Competencies ──
export interface SkillCategory {
    title: string;
    icon: IconType;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Workforce Management & Analytics",
        icon: HiOutlineChartBar,
        skills: [
            "Real-Time Queue Monitoring",
            "Shift Planning & Scheduling",
            "SLA & Service Level Optimization",
            "Workforce Capacity Management",
            "Daily & Weekly Performance Scorecards",
            "Agent Productivity & Variance Analysis",
            "Data Analytics & Trend Forecasting",
        ],
    },
    {
        title: "Customer Service & Contact Center",
        icon: HiOutlineChatBubbleLeftRight,
        skills: [
            "Customer Service Leadership",
            "Inbound & Outbound Call Operations",
            "Escalation & Dispute Mediation",
            "Customer Satisfaction (CSAT & NPS)",
            "First Contact Resolution (FCR)",
            "Quality Assurance (QA) & Coaching",
            "Product & System Education",
            "Multi-Channel Support (Voice, Chat, Email)",
        ],
    },
    {
        title: "Operations & Asset Management",
        icon: HiOutlineBuildingOffice2,
        skills: [
            "Company Asset Lifecycle Management",
            "Client Portfolio Development",
            "Supply Options Evaluation",
            "Purchase Orders & Procurement Approval",
            "Financial Statements & Forecasting",
            "Strategic Sourcing & Vendor Coordination",
            "Risk Assessment & Mitigation",
        ],
    },
    {
        title: "Tools, Systems & Methodologies",
        icon: HiOutlineDocumentText,
        skills: [
            "Advanced Commercial Excel",
            "Business Analytics with MS Excel",
            "CRM & Contact Center Software",
            "Workforce Management (WFM) Systems",
            "Cloud Systems & Telephony Platforms",
            "Six Sigma DMAIC & Quality Standards",
            "Project Performance Management",
        ],
    },
];

// ── Strategic Initiatives & Operational Impact ──
export interface Project {
    name: string;
    description: string;
    period: string;
    location: string;
    company: string;
    highlights: string[];
    tags: string[];
    icon: string;
}

export const projects: Project[] = [
    {
        name: "Real-Time Performance Analytics & Scheduling System",
        company: "Teleperformance Dubai",
        description:
            "Orchestrating real-time shift scheduling and performance monitoring for agents using advanced Excel models and specialized software systems to secure outstanding service levels.",
        period: "2023 – Present",
        location: "Dubai, UAE",
        highlights: [
            "Engineered dynamic shift planning and scheduling models for frontline agents, managing schedule adherence and shrinking non-productive downtime",
            "Continuously monitored real-time queue performance and agent metrics, advising supervisors and coaching underperforming agents on skill enhancements",
            "Secured and sustained contractual Service Level Agreements (SLAs) through proactive load balancing and direct operational coordination",
            "Designed and delivered executive daily and weekly performance dashboards tracking KPIs across all shift rotations",
        ],
        tags: ["Real-Time Analytics", "Workforce Planning", "SLA Optimization", "Excel Modeling", "Performance KPIs"],
        icon: "/teleperformance.png",
    },
    {
        name: "Corporate Asset Management & Portfolio Operations",
        company: "Teleperformance Dubai",
        description:
            "Managing and auditing company assets, overseeing client portfolio growth, evaluating supply options, and structuring procurement approvals to maximize operational ROI.",
        period: "2021 – 2023",
        location: "Dubai, UAE",
        highlights: [
            "Audited and monitored lifecycle utilization of critical corporate assets, preventing inventory slippage and improving allocation efficiency",
            "Conducted comprehensive reviews with corporate clients to assess operational status, requirements, risk profiles, and delivery goals",
            "Prepared accurate financial statements, business activity reports, and expenditure forecasts for executive decision-makers",
            "Evaluated vendor supply proposals, negotiated commercial terms, and authorized purchase order issuance",
        ],
        tags: ["Asset Management", "Financial Statements", "Client Portfolios", "Procurement", "Risk Mitigation"],
        icon: "/teleperformance.png",
    },
    {
        name: "Contact Center Team Leadership & KPI Governance",
        company: "City Services Dubai",
        description:
            "Direct operational leadership for a team of 15–20 customer care agents across high-volume inbound, outbound, and digital live chat channels.",
        period: "2015 – 2017",
        location: "Dubai, UAE",
        highlights: [
            "Led, coached, and mentored a team of 15–20 customer service specialists in a fast-paced, multilingual multinational environment",
            "Specialized in omnichannel contact center workflows: voice call management, outbound campaigns, and live chat queues",
            "Enforced strict adherence to departmental policies, standard operating procedures (SOPs), and quality benchmarks",
            "Consistently surpassed organizational KPIs for customer satisfaction, first-call resolution, and average handle time",
        ],
        tags: ["Team Leadership", "KPI Achievement", "Omnichannel Operations", "Quality Coaching", "Process Optimization"],
        icon: "/cityservices.svg",
    },
    {
        name: "Executive Escalation & Dispute Mediation Framework",
        company: "Teleperformance & City Services",
        description:
            "Dedicated framework to address customer grievances fairly, resolve complex disputes, and protect enterprise brand reputation through memorable customer service.",
        period: "Multi-Year Track Record",
        location: "Dubai, UAE",
        highlights: [
            "Managed sensitive Tier-2 and Tier-3 escalated disputes, conducting deep-dive investigations to reach fair, decisive resolutions",
            "Maintained high customer satisfaction and brand retention by transforming frustrated clients into long-term brand advocates",
            "Partnered with operations and quality assurance to analyze root causes of recurring complaints and implement preventative controls",
            "Upheld respectful conflict management and professional communication under intense high-pressure circumstances",
        ],
        tags: ["Conflict Mediation", "Complaint Resolution", "Brand Reputation", "Customer Retention", "Client Care"],
        icon: "/teleperformance.png",
    },
];

// ── Work Experience ──
export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    type: string;
    bullets: string[];
    logo: string;
}

export const experiences: Experience[] = [
    {
        company: "Teleperformance",
        role: "Real-Time & Performance Analyst",
        period: "2023 – Present",
        location: "Dubai, UAE",
        type: "Full-time",
        bullets: [
            "Direct shift scheduling and capacity planning for agents utilizing advanced Excel models and specialized contact center software.",
            "Monitor real-time agent status, adherence, and queue performance, identifying bottlenecks and advising on skill improvements.",
            "Safeguard and secure contractual Service Level Agreements (SLAs) during peak volume surges and seasonal demand shifts.",
            "Generate daily, weekly, and monthly analytical performance scorecards for operations management and client stakeholders.",
            "Coordinate closely with operations and workforce planning to align staffing levels with evolving client expectations.",
        ],
        logo: "/teleperformance.png",
    },
    {
        company: "Teleperformance",
        role: "Assets Manager",
        period: "2021 – 2023",
        location: "Dubai, UAE",
        type: "Full-time",
        bullets: [
            "Maintained comprehensive oversight of company assets, auditing inventory, and tracking lifecycle utilization.",
            "Met with corporate clients to assess operational status, requirements, potential risks, and delivery milestones.",
            "Prepared financial statements, business activity summaries, and revenue/expenditure forecasts.",
            "Analyzed market dynamics to identify cost-saving and investment opportunities for client portfolios.",
            "Evaluated vendor proposals, conducted supplier assessments, and authorized the issuance of purchase orders.",
        ],
        logo: "/teleperformance.png",
    },
    {
        company: "Teleperformance",
        role: "Outbound & Complaint Coordinator",
        period: "2020 – 2021",
        location: "Dubai, UAE",
        type: "Full-time",
        bullets: [
            "Proactively contacted customers to mediate and resolve high-priority escalations with fairness, transparency, and urgency.",
            "Addressed customer inquiries across communication channels, providing precise information and restoring customer trust.",
            "Documented dispute trends and partnered with quality assurance teams to mitigate recurring friction points.",
        ],
        logo: "/teleperformance.png",
    },
    {
        company: "City Services",
        role: "Acting Team Leader",
        period: "2015 – 2017",
        location: "Dubai, UAE",
        type: "Full-time",
        bullets: [
            "Directed and motivated a team of 15–20 customer care agents specializing in inbound calls, outbound campaigns, and live chat.",
            "Handled complex inquiries and sensitive customer grievances with polished professional diplomacy.",
            "Operated and troubleshot contact center software systems to minimize downtime and maintain uninterrupted queue handling.",
            "Enforced departmental policies and procedures while driving the team to achieve and exceed all target KPIs.",
        ],
        logo: "/cityservices.svg",
    },
    {
        company: "City Services",
        role: "Senior Customer Service Agent",
        period: "2013 – 2015",
        location: "Dubai, UAE",
        type: "Full-time",
        bullets: [
            "Delivered responsive, white-glove customer support across inbound telephone inquiries and multi-channel requests.",
            "Mentored newer team members on product knowledge, call etiquette, and system navigation.",
            "Consistently achieved top-quartile customer satisfaction (CSAT) and first-contact resolution (FCR) ratings.",
        ],
        logo: "/cityservices.svg",
    },
    {
        company: "Vodafone Egypt",
        role: "Customer Service Agent",
        period: "2012 – 2013",
        location: "Cairo, Egypt",
        type: "Full-time",
        bullets: [
            "Provided frontline customer service for Vodafone’s high-volume telecommunications consumer base.",
            "Handled account inquiries, billing questions, and network service troubleshooting with high precision.",
            "Adhered to rigorous multinational contact center KPIs and customer quality assurance standards.",
        ],
        logo: "/vodafone.jpg",
    },
];

// ── Education ──
export const education = {
    degree: "Bachelor of Commerce and Administrative Affairs",
    institution: "Ain Shams University",
    period: "2007 – 2011",
    location: "Cairo, Egypt",
    details: "Core specialization in commercial accounting, administration, and organizational management.",
    logo: "/ainshams.jpeg",
};

// ── Certifications & Professional Credentials ──
export interface Certification {
    name: string;
    issuer: string;
    status: string;
    description: string;
    badgeColor: string;
}

export const certifications: Certification[] = [
    {
        name: "Six Sigma Yellow Belt",
        issuer: "Quality & Process Improvement",
        status: "Certified",
        description: "Process streamlining, defect elimination, and continuous operational improvement methodologies.",
        badgeColor: "from-amber-500/20 to-yellow-500/20 text-amber-500 border-amber-500/30",
    },
    {
        name: "PMP (Project Management Professional)",
        issuer: "PMI Methodologies & Frameworks",
        status: "Completed",
        description: "Strategic project planning, resource scheduling, risk management, and governance standards.",
        badgeColor: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
        name: "Business Analytics with MS Excel",
        issuer: "Executive Data Analytics",
        status: "Certified",
        description: "Advanced data modeling, statistical analysis, trend forecasting, and executive dashboard reporting.",
        badgeColor: "from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
        name: "ICDL Expert & Commercial Excel",
        issuer: "ICDL Foundation",
        status: "Certified",
        description: "Mastery of commercial spreadsheets, financial functions, pivot analysis, and workflow automation.",
        badgeColor: "from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/30",
    },
    {
        name: "GDCCS (Global Digital Customer Care)",
        issuer: "Contact Center Standards",
        status: "Certified",
        description: "Omni-channel customer experience, digital contact center operations, and service excellence.",
        badgeColor: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
    },
    {
        name: "Introduction to Six Sigma",
        issuer: "Quality Management",
        status: "Certified",
        description: "DMAIC framework, quality assurance metrics, and root-cause analytical techniques.",
        badgeColor: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30",
    },
];

// ── Nav Links ──
export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Initiatives", href: "#initiatives" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

export {
    HiOutlineUsers,
    HiOutlineChartBar,
    HiOutlineBuildingOffice2,
    HiOutlineChatBubbleLeftRight,
    HiOutlineShieldCheck,
    HiOutlineClock,
    HiOutlineCheckBadge,
    HiOutlinePhone,
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlineBriefcase,
    HiOutlineAcademicCap,
    SiLinkedin,
    FaWhatsapp,
};