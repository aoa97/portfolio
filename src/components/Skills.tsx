"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionReveal, {
    StaggerContainer,
    StaggerItem,
} from "./SectionReveal";

export default function Skills() {
    return (
        <section id="skills" className="py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Skills & <span className="gradient-text">Tech Stack</span>
                        </h2>
                        <p className="text-muted max-w-xl mx-auto">
                            Technologies and tools I use to bring ideas to life
                        </p>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
                    </div>
                </SectionReveal>

                {/* Skill Category Cards */}
                <StaggerContainer
                    className="grid sm:grid-cols-2 gap-6"
                    staggerDelay={0.15}
                >
                    {skillCategories.map((category) => (
                        <StaggerItem key={category.title}>
                            <motion.div
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="glass border border-card-border rounded-2xl p-6 sm:p-8 h-full
                           hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10
                           transition-all duration-300 group"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <motion.div
                                        whileHover={{ rotateY: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center
                               group-hover:bg-accent/20 transition-colors duration-300"
                                    >
                                        <category.icon className="w-6 h-6 text-accent" />
                                    </motion.div>
                                    <h3 className="text-lg font-bold">{category.title}</h3>
                                </div>

                                {/* Skill Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.08 }}
                                            className="px-3 py-1.5 text-sm font-medium rounded-lg
                                 bg-card border border-card-border
                                 hover:border-accent/40 hover:text-accent hover:bg-accent/5
                                 transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
