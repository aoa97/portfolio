"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { projects } from "@/lib/data";
import SectionReveal, {
    StaggerContainer,
    StaggerItem,
} from "./SectionReveal";
import TiltCard from "./TiltCard";

export default function Projects() {
    return (
        <section id="projects" className="py-20 sm:py-28 bg-section-alt">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-muted max-w-xl mx-auto">
                            Production apps published on Google Play and the App Store
                        </p>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
                    </div>
                </SectionReveal>

                {/* Project Cards */}
                <StaggerContainer
                    className="grid md:grid-cols-2 gap-8"
                    staggerDelay={0.2}
                >
                    {projects.map((project) => (
                        <StaggerItem key={project.name}>
                            <TiltCard className="h-full">
                                <div
                                    className="glass border border-card-border rounded-2xl p-6 sm:p-8 h-full flex flex-col
                              hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10
                              transition-all duration-300 group"
                                >
                                    {/* Header with Icon */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-accent/20 group-hover:ring-accent/50 transition-all duration-300">
                                            <Image
                                                src={project.icon}
                                                alt={`${project.name} icon`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-200">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-muted mt-1">
                                                {project.period} · {project.location}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-2 mb-5 flex-1">
                                        {project.highlights.slice(0, 3).map((h, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-muted/80 flex items-start gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent border border-accent/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Store Badges */}
                                    {(project.playStoreUrl || project.appStoreUrl) && (
                                        <div className="flex gap-3 pt-2 border-t border-card-border">
                                            {project.playStoreUrl && (
                                                <motion.a
                                                    href={project.playStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg 
                                     bg-card border border-card-border
                                     hover:border-green-500/40 hover:text-green-600 dark:hover:text-green-400
                                     transition-all duration-200 text-sm font-medium"
                                                >
                                                    <SiGoogleplay className="w-4 h-4" />
                                                    Play Store
                                                </motion.a>
                                            )}
                                            {project.appStoreUrl && (
                                                <motion.a
                                                    href={project.appStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg 
                                     bg-card border border-card-border
                                     hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400
                                     transition-all duration-200 text-sm font-medium"
                                                >
                                                    <SiAppstore className="w-4 h-4" />
                                                    App Store
                                                </motion.a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
