"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, education } from "@/lib/data";
import SectionReveal from "./SectionReveal";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi2";

function TimelineEntry({
    exp,
    index,
    total,
}: {
    exp: (typeof experiences)[0];
    index: number;
    total: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const isLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative flex items-start gap-6 md:gap-0 ${index < total - 1 ? "pb-12" : ""
                }`}
        >
            {/* Desktop: alternating layout */}
            {/* Left content (desktop) */}
            <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-8">
                {isLeft && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.25, 0.4, 0.25, 1],
                        }}
                        className="max-w-md"
                    >
                        <TimelineCard exp={exp} />
                    </motion.div>
                )}
            </div>

            {/* Center Line + Node */}
            <div className="flex flex-col items-center z-10 absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0">
                {/* Node */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative w-4 h-4 rounded-full bg-accent flex-shrink-0 mt-2"
                >
                    {isInView && (
                        <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-pulse-ring" />
                    )}
                </motion.div>
                {/* Line */}
                {index < total - 1 && (
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-0.5 flex-1 timeline-line origin-top mt-2"
                    />
                )}
            </div>

            {/* Right content (desktop) */}
            <div className="hidden md:flex md:w-1/2 md:pl-8">
                {!isLeft && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.25, 0.4, 0.25, 1],
                        }}
                        className="max-w-md"
                    >
                        <TimelineCard exp={exp} />
                    </motion.div>
                )}
            </div>

            {/* Mobile Content (always on right) */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.25, 0.4, 0.25, 1],
                }}
                className="md:hidden pl-8"
            >
                <TimelineCard exp={exp} />
            </motion.div>
        </div>
    );
}

function TimelineCard({ exp }: { exp: (typeof experiences)[0] }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="glass border border-card-border rounded-2xl p-5 sm:p-6 
                 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10
                 transition-all duration-300 group"
        >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
                <div
                    className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0
                      group-hover:bg-accent/20 transition-colors"
                >
                    <HiOutlineBriefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                    <h3 className="text-base font-bold group-hover:text-accent transition-colors">
                        {exp.role}
                    </h3>
                    <p className="text-sm text-accent font-medium">{exp.company}</p>
                </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent font-medium">
                    {exp.period}
                </span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-card border border-card-border text-muted">
                    {exp.location}
                </span>
                <span className="px-2.5 py-1 text-xs rounded-md bg-card border border-card-border text-muted">
                    {exp.type}
                </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5">
                {exp.bullets.slice(0, 4).map((bullet, i) => (
                    <li key={i} className="text-sm text-muted flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {bullet}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Work <span className="gradient-text">Experience</span>
                        </h2>
                        <p className="text-muted max-w-xl mx-auto">
                            My professional journey in software engineering
                        </p>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
                    </div>
                </SectionReveal>

                {/* Timeline */}
                <div className="relative">
                    {experiences.map((exp, i) => (
                        <TimelineEntry
                            key={exp.company}
                            exp={exp}
                            index={i}
                            total={experiences.length}
                        />
                    ))}
                </div>

                {/* Education */}
                <SectionReveal delay={0.2} className="mt-16">
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="glass border border-card-border rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto
                       hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10
                       transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div
                                className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0
                            group-hover:bg-accent/20 transition-colors"
                            >
                                <HiOutlineAcademicCap className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                                    {education.degree}
                                </h3>
                                <p className="text-accent font-medium">
                                    {education.institution}
                                </p>
                                <div className="flex gap-2 mt-2">
                                    <span className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent font-medium">
                                        {education.period}
                                    </span>
                                    <span className="px-2.5 py-1 text-xs rounded-md bg-card border border-card-border text-muted">
                                        {education.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </SectionReveal>
            </div>
        </section>
    );
}
