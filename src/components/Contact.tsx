"use client";

import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import {
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
    HiOutlineHeart,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import SectionReveal, {
    StaggerContainer,
    StaggerItem,
} from "./SectionReveal";

const contactCards = [
    {
        icon: HiOutlineEnvelope,
        label: "Email",
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        color: "hover:border-red-400/40 hover:shadow-red-500/10",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: personalInfo.phone,
        href: personalInfo.whatsapp,
        color: "hover:border-green-400/40 hover:shadow-green-500/10",
    },
    {
        icon: SiLinkedin,
        label: "LinkedIn",
        value: "in/aoa97",
        href: personalInfo.linkedin,
        color: "hover:border-blue-400/40 hover:shadow-blue-500/10",
    },
    {
        icon: SiGithub,
        label: "GitHub",
        value: "aoa97",
        href: personalInfo.github,
        color: "hover:border-purple-400/40 hover:shadow-purple-500/10",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-28 bg-section-alt relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
                      rounded-full bg-accent/5 blur-[120px]"
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Let&apos;s <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-muted max-w-xl mx-auto">
                            I&apos;m always open to new opportunities and interesting projects.
                            Feel free to reach out!
                        </p>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
                    </div>
                </SectionReveal>

                {/* Contact Cards */}
                <StaggerContainer
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
                    staggerDelay={0.1}
                >
                    {contactCards.map((card) => (
                        <StaggerItem key={card.label}>
                            <motion.a
                                href={card.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -6, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative glass border border-card-border rounded-2xl p-6 flex flex-col items-center text-center
                           hover:shadow-xl transition-all duration-300 group overflow-hidden ${card.color}`}
                            >
                                {/* Animated border gradient on hover */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, transparent, var(--accent), transparent)",
                                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        maskComposite: "xor",
                                        WebkitMaskComposite: "xor",
                                        padding: "1px",
                                    }}
                                />

                                <div
                                    className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4
                              group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300"
                                >
                                    <card.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="font-bold text-sm mb-1">{card.label}</h3>
                                <p className="text-muted text-xs break-all">{card.value}</p>
                            </motion.a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Location */}
                <SectionReveal>
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-card-border text-muted text-sm">
                            <HiOutlineMapPin className="w-4 h-4 text-accent" />
                            Based in {personalInfo.location} · Available Worldwide
                        </div>
                    </div>
                </SectionReveal>

                {/* Footer */}
                <SectionReveal delay={0.1}>
                    <div className="border-t border-card-border pt-8 text-center">
                        <p className="text-muted text-sm flex items-center justify-center gap-1.5">
                            Built with <HiOutlineHeart className="w-4 h-4 text-red-500 animate-pulse" /> using{" "}
                            <span className="font-medium text-foreground">Next.js</span>,{" "}
                            <span className="font-medium text-foreground">Tailwind CSS</span>
                            {" "}&{" "}
                            <span className="font-medium text-foreground">Framer Motion</span>
                        </p>
                        <p className="text-muted/60 text-xs mt-2">
                            © {new Date().getFullYear()} Ahmed Usama. All rights reserved.
                        </p>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
