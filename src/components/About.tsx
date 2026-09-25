"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import SectionReveal, { StaggerContainer, StaggerItem } from "./SectionReveal";
import {
    HiOutlineSparkles,
    HiOutlineBriefcase,
    HiOutlineMapPin,
    HiOutlineAcademicCap,
    HiOutlineUsers,
    HiOutlineCheckBadge,
    HiOutlineClock,
    HiOutlineShieldCheck,
} from "react-icons/hi2";

// ── Counter Component ──
function AnimatedCounter({
    value,
    suffix,
}: {
    value: number;
    suffix: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });
    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, { stiffness: 90, damping: 25 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = spring.on("change", (v) => {
            setDisplay(Math.round(v));
        });
        return unsubscribe;
    }, [spring]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}

const infoCards = [
    {
        icon: HiOutlineMapPin,
        label: "Location",
        value: "Dubai, UAE",
        color: "from-blue-600/10 to-indigo-600/10",
        iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
        icon: HiOutlineBriefcase,
        label: "Current Role",
        value: "Real-Time & Performance Analyst",
        color: "from-amber-600/10 to-yellow-600/10",
        iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
        icon: HiOutlineAcademicCap,
        label: "Education",
        value: "B.Com, Ain Shams University",
        color: "from-slate-600/10 to-blue-600/10",
        iconColor: "text-indigo-600 dark:text-indigo-400",
    },
];

const statIcons = [
    HiOutlineSparkles,
    HiOutlineClock,
    HiOutlineUsers,
    HiOutlineShieldCheck,
];

export default function About() {
    return (
        <section id="about" className="py-20 sm:py-28 bg-section-alt relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div
                    className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full 
                               bg-accent/5 blur-[100px]"
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                            <HiOutlineBriefcase className="w-4 h-4" />
                            Executive Profile
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
                    </div>
                </SectionReveal>

                {/* Main Content */}
                <div className="grid lg:grid-cols-12 gap-10 mb-12 items-center">
                    {/* Bio Section */}
                    <div className="lg:col-span-6 space-y-6">
                        <SectionReveal direction="left">
                            <div className="space-y-5">
                                {/* Intro Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                               bg-gradient-to-r from-accent/10 to-accent-light/10 
                                               border border-accent/20 backdrop-blur-sm">
                                    <HiOutlineCheckBadge className="w-4 h-4 text-accent" />
                                    <span className="text-sm font-semibold text-accent">
                                        14+ Years of Professional Leadership
                                    </span>
                                </div>

                                {/* Bio Paragraphs */}
                                <div className="space-y-4 text-foreground/90 dark:text-foreground/80 leading-relaxed text-base">
                                    <p>
                                        I am a dedicated operations and customer experience professional with{" "}
                                        <strong className="text-accent font-semibold">14+ years of comprehensive experience</strong>,
                                        including <strong className="text-accent font-semibold">12 years in Dubai, UAE</strong> driving
                                        performance within high-volume multinational contact centers and enterprise environments.
                                    </p>
                                    <p className="text-muted text-sm sm:text-base">
                                        My journey spans frontline customer resolution, team leadership of 15–20 agents, corporate asset and client portfolio management, and advanced real-time performance analytics. I specialize in shift planning, capacity forecasting, and rigorous Service Level Agreement (SLA) protection.
                                    </p>
                                    <p className="text-muted text-sm sm:text-base">
                                        Armed with a Bachelor of Commerce from Ain Shams University and certifications including Six Sigma Yellow Belt and PMP methodologies, I combine strong analytical acumen with empathetic leadership to optimize operational efficiency and enhance brand reputation.
                                    </p>
                                </div>

                                {/* Key Highlights Pills */}
                                <div className="pt-2 flex flex-wrap gap-2">
                                    {[
                                        "Workforce Shift Planning",
                                        "Real-Time Queue Adherence",
                                        "SLA & KPI Management",
                                        "Asset Lifecycle & Procurement",
                                        "Conflict Mediation",
                                        "Six Sigma DMAIC",
                                    ].map((badge) => (
                                        <span
                                            key={badge}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-card border border-card-border text-foreground/80 shadow-xs"
                                        >
                                            ✓ {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SectionReveal>
                    </div>

                    {/* Stats Grid */}
                    <div className="lg:col-span-6">
                        <SectionReveal direction="right">
                            <div className="grid grid-cols-2 gap-4 sm:gap-5">
                                {stats.map((stat, i) => {
                                    const Icon = statIcons[i % statIcons.length];
                                    return (
                                        <motion.div
                                            key={stat.label}
                                            whileHover={{ scale: 1.03, y: -4 }}
                                            className="glass border border-card-border rounded-2xl p-6 
                                                       hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10
                                                       transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                                        >
                                            {/* Hover gradient glow */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                                                <Icon className="w-5 h-5" />
                                            </div>

                                            <div>
                                                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                                                    <AnimatedCounter
                                                        value={stat.value}
                                                        suffix={stat.suffix}
                                                    />
                                                </div>
                                                <div className="text-xs sm:text-sm text-muted font-medium uppercase tracking-wider">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </SectionReveal>
                    </div>
                </div>

                {/* Info Cards */}
                <StaggerContainer
                    className="grid sm:grid-cols-3 gap-5"
                    staggerDelay={0.1}
                >
                    {infoCards.map((card) => (
                        <StaggerItem key={card.label}>
                            <motion.div
                                whileHover={{ y: -4, scale: 1.01 }}
                                className="group relative glass border border-card-border rounded-2xl p-5 
                                           hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10
                                           transition-all duration-300 overflow-hidden"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${card.color} 
                                               opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                />

                                <div className="relative flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0
                                                   group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300"
                                    >
                                        <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs text-muted font-medium uppercase tracking-wider mb-0.5">
                                            {card.label}
                                        </div>
                                        <div className="text-sm font-semibold text-foreground truncate">
                                            {card.value}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
