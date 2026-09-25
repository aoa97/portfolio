"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import SectionReveal, {
    StaggerContainer,
    StaggerItem,
} from "./SectionReveal";
import TiltCard from "./TiltCard";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export default function Projects() {
    return (
        <section id="initiatives" className="py-20 sm:py-28 bg-section-alt relative">
            {/* Anchor tag for backward compatibility with #projects */}
            <span id="projects" className="absolute -top-20" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                            <HiOutlineRocketLaunch className="w-4 h-4" />
                            Operational Excellence
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Strategic <span className="gradient-text">Initiatives</span>
                        </h2>
                        <p className="text-muted max-w-xl mx-auto">
                            Proven impact across real-time workforce analytics, corporate asset governance, contact center team leadership, and VIP escalation resolution
                        </p>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
                    </div>
                </SectionReveal>

                {/* Project / Initiative Cards */}
                <StaggerContainer
                    className="grid md:grid-cols-2 gap-8"
                    staggerDelay={0.15}
                >
                    {projects.map((project) => (
                        <StaggerItem key={project.name}>
                            <TiltCard className="h-full">
                                <div
                                    className="glass border border-card-border rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between
                                               hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10
                                               transition-all duration-300 group"
                                >
                                    <div>
                                        {/* Header with Company Logo / Icon */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-2xl bg-white border border-card-border/80 flex items-center justify-center flex-shrink-0 p-2 group-hover:scale-105 transition-all overflow-hidden shadow-xs ring-2 ring-accent/20 group-hover:ring-accent/40">
                                                <Image
                                                    src={project.icon}
                                                    alt={`${project.company} logo`}
                                                    width={44}
                                                    height={44}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                                                    {project.company}
                                                </span>
                                                <h3 className="text-lg sm:text-xl font-bold group-hover:text-accent transition-colors duration-200 mt-0.5">
                                                    {project.name}
                                                </h3>
                                                <p className="text-xs text-muted mt-1">
                                                    {project.period} · {project.location}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted text-sm leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul className="space-y-2 mb-6">
                                            {project.highlights.map((h, i) => (
                                                <li
                                                    key={i}
                                                    className="text-xs sm:text-sm text-foreground/80 flex items-start gap-2.5 leading-relaxed"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-card-border/60">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-accent/10 text-accent border border-accent/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
