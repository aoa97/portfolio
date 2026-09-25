"use client";

import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
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
        subtext: "Send a direct message",
        href: `mailto:${personalInfo.email}`,
        color: "hover:border-red-400/40 hover:shadow-red-500/10",
        badge: "Primary",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: personalInfo.phone,
        subtext: "Fast instant messaging",
        href: personalInfo.whatsapp,
        color: "hover:border-emerald-400/40 hover:shadow-emerald-500/10",
        badge: "Quick Chat",
    },
    {
        icon: HiOutlinePhone,
        label: "Direct Call",
        value: personalInfo.phone,
        subtext: "Available for UAE & regional calls",
        href: `tel:${personalInfo.phoneRaw}`,
        color: "hover:border-blue-400/40 hover:shadow-blue-500/10",
        badge: "Direct",
    },
    {
        icon: SiLinkedin,
        label: "LinkedIn",
        value: "Mohamed Magdy",
        subtext: "Connect on LinkedIn",
        href: personalInfo.linkedin,
        color: "hover:border-blue-400/40 hover:shadow-blue-500/10",
        badge: "Professional",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-28 bg-section-alt relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
                      rounded-full bg-accent/5 blur-[140px]"
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                            <HiOutlinePhone className="w-4 h-4" />
                            Get in Touch
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Let&apos;s <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-muted max-w-xl mx-auto">
                            Available for leadership opportunities, real-time analytics roles, and operational consulting across Dubai, UAE, and the wider region
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
                                target={card.href.startsWith("http") ? "_blank" : undefined}
                                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                whileHover={{ y: -6, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative glass border border-card-border rounded-2xl p-6 flex flex-col items-center text-center
                           hover:shadow-xl transition-all duration-300 group overflow-hidden ${card.color}`}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4
                              group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300 text-accent">
                                    <card.icon className="w-7 h-7" />
                                </div>
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent/10 text-accent mb-2">
                                    {card.badge}
                                </span>
                                <h3 className="font-bold text-base mb-1 text-foreground">{card.label}</h3>
                                <p className="text-foreground/90 font-medium text-xs break-all mb-1">{card.value}</p>
                                <p className="text-muted text-[11px]">{card.subtext}</p>
                            </motion.a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Location */}
                <SectionReveal>
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-card-border text-muted text-sm shadow-xs">
                            <HiOutlineMapPin className="w-4 h-4 text-accent" />
                            Based in <span className="font-semibold text-foreground">{personalInfo.location}</span> · Available for In-Office & Hybrid Roles
                        </div>
                    </div>
                </SectionReveal>

                {/* Footer */}
                <SectionReveal delay={0.1}>
                    <div className="border-t border-card-border pt-8 text-center">
                        <p className="text-muted text-sm flex items-center justify-center gap-1.5">
                            Designed & Built with <HiOutlineHeart className="w-4 h-4 text-red-500" /> for{" "}
                            <span className="font-semibold text-foreground">{personalInfo.name}</span>
                        </p>
                        <p className="text-muted/60 text-xs mt-2">
                            © {new Date().getFullYear()} Mohamed Magdy. All rights reserved.
                        </p>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
