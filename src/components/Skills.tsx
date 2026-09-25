"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionReveal, {
    StaggerContainer,
    StaggerItem,
} from "./SectionReveal";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function Skills() {
    return (
        <section id="skills" className="py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                            <HiOutlineSparkles className="w-4 h-4" />
                            Core Capabilities
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Skills & <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-muted max-w-xl mx-auto">
                            Specialized competencies spanning workforce management, high-volume contact center leadership, and enterprise asset governance
                        </p>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
                    </div>
                </SectionReveal>

                {/* Skill Category Cards */}
                <StaggerContainer
                    className="grid sm:grid-cols-2 gap-6"
                    staggerDelay={0.12}
                >
                    {skillCategories.map((category) => (
                        <StaggerItem key={category.title}>
                            <motion.div
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="glass border border-card-border rounded-2xl p-6 sm:p-8 h-full
                                           hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10
                                           transition-all duration-300 group flex flex-col justify-between"
                            >
                                <div>
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent
                                                       group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300"
                                        >
                                            <category.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skill Tags */}
                                    <div className="flex flex-wrap gap-2.5">
                                        {category.skills.map((skill) => (
                                            <motion.span
                                                key={skill}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl
                                                           bg-card border border-card-border text-foreground/90
                                                           hover:border-accent/40 hover:text-accent hover:bg-accent/5
                                                           transition-all duration-200 cursor-default shadow-xs"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
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
