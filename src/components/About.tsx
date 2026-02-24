"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import SectionReveal, { StaggerContainer, StaggerItem } from "./SectionReveal";
import { useEffect, useState } from "react";
import {
    HiOutlineSparkles,
    HiOutlineRocketLaunch,
    HiOutlineMapPin,
    HiOutlineBriefcase,
    HiOutlineAcademicCap,
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
    const spring = useSpring(motionValue, { stiffness: 100, damping: 30 });
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
        value: "Egypt",
        color: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-cyan-400",
    },
    {
        icon: HiOutlineBriefcase,
        label: "Status",
        value: "Open to Opportunities",
        color: "from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-400",
    },
    {
        icon: HiOutlineAcademicCap,
        label: "Education",
        value: "BSc Computer Science",
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-400",
    },
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
                    </div>
                </SectionReveal>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10 mb-12">
                    {/* Bio Section */}
                    <SectionReveal direction="left">
                        <div className="space-y-6">
                            {/* Intro Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                           bg-gradient-to-r from-accent/10 to-accent-light/10 
                                           border border-accent/20 backdrop-blur-sm"
                            >
                                <HiOutlineSparkles className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-accent">
                                    Flutter Developer & Mobile Engineer
                                </span>
                            </motion.div>

                            {/* Bio Text with better typography */}
                            <div className="space-y-4">
                                <p className="text-foreground/90 dark:text-foreground/80 leading-relaxed text-base">
                                    <span className="text-accent font-semibold">4+ years</span> of
                                    experience in software engineering and{" "}
                                    <span className="text-accent font-semibold">3+ years</span>{" "}
                                    specializing in cross-platform mobile development.
                                </p>
                                <p className="text-muted leading-relaxed text-base">
                                    Experienced in building scalable, production-ready applications
                                    with <span className="font-medium text-foreground/80">clean architecture</span>,{" "}
                                    <span className="font-medium text-foreground/80">SOLID principles</span>, and
                                    modern design patterns. Proven track record of managing full mobile
                                    application lifecycles, implementing CI/CD pipelines, optimizing
                                    performance, and delivering apps published on{" "}
                                    <span className="font-medium text-foreground/80">Google Play</span> and the{" "}
                                    <span className="font-medium text-foreground/80">App Store</span>.
                                </p>
                            </div>
                        </div>
                    </SectionReveal>

                    {/* Stats - Larger and More Prominent */}
                    <SectionReveal direction="right">
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-5 h-full">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ scale: 1.03, y: -6 }}
                                    className="relative group flex-1"
                                >
                                    <div
                                        className="glass border border-card-border rounded-3xl p-8 h-full
                                                   hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20
                                                   transition-all duration-300 relative overflow-hidden"
                                    >
                                        {/* Background gradient on hover */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent 
                                                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />

                                        {/* Icon */}
                                        <div className="relative mb-4">
                                            {i === 0 ? (
                                                <HiOutlineSparkles className="w-10 h-10 text-accent/60 group-hover:text-accent transition-colors" />
                                            ) : (
                                                <HiOutlineRocketLaunch className="w-10 h-10 text-accent/60 group-hover:text-accent transition-colors" />
                                            )}
                                        </div>

                                        {/* Number */}
                                        <div className="relative text-5xl sm:text-6xl font-bold gradient-text mb-3">
                                            <AnimatedCounter
                                                value={stat.value}
                                                suffix={stat.suffix}
                                            />
                                        </div>

                                        {/* Label */}
                                        <div className="relative text-muted text-base font-medium uppercase tracking-wide">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </SectionReveal>
                </div>

                {/* Info Cards */}
                <StaggerContainer
                    className="grid sm:grid-cols-3 gap-5"
                    staggerDelay={0.1}
                >
                    {infoCards.map((card) => (
                        <StaggerItem key={card.label}>
                            <motion.div
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="group relative glass border border-card-border rounded-2xl p-5 
                                           hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10
                                           transition-all duration-300 overflow-hidden"
                            >
                                {/* Gradient background on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${card.color} 
                                               opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                />

                                <div className="relative flex items-center gap-4">
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center
                                                   group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300"
                                    >
                                        <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                                    </div>

                                    {/* Content */}
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
