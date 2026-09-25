"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import SectionReveal, {
    StaggerContainer,
    StaggerItem,
} from "./SectionReveal";
import { HiOutlineCheckBadge, HiOutlineAcademicCap } from "react-icons/hi2";

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 sm:py-28 bg-section-alt relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div
                    className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full 
                               bg-accent/5 blur-[120px]"
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                            <HiOutlineAcademicCap className="w-4 h-4" />
                            Continuous Professional Development
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Certifications & <span className="gradient-text">Credentials</span>
                        </h2>
                        <p className="text-muted max-w-xl mx-auto">
                            Accredited credentials in Quality Improvement (Six Sigma), Project Governance (PMP), Advanced Analytics, and Customer Experience Standards
                        </p>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
                    </div>
                </SectionReveal>

                {/* Cards Grid */}
                <StaggerContainer
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    staggerDelay={0.12}
                >
                    {certifications.map((cert) => (
                        <StaggerItem key={cert.name}>
                            <motion.div
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="glass border border-card-border rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between
                                           hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10
                                           transition-all duration-300 group relative overflow-hidden"
                            >
                                <div>
                                    {/* Top Row: Icon + Status */}
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                                            <HiOutlineCheckBadge className="w-6 h-6" />
                                        </div>
                                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border bg-gradient-to-r ${cert.badgeColor}`}>
                                            {cert.status}
                                        </span>
                                    </div>

                                    {/* Certificate Name */}
                                    <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-200 mb-2">
                                        {cert.name}
                                    </h3>

                                    {/* Issuer */}
                                    <p className="text-xs text-accent font-medium mb-3">
                                        {cert.issuer}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-muted leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
