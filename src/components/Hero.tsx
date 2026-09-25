"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    HiOutlineArrowDown,
    HiOutlineDocumentArrowDown,
    HiOutlinePhone,
    HiOutlineEnvelope,
} from "react-icons/hi2";
import { SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";
import TypeWriter from "./TypeWriter";
import { personalInfo } from "@/lib/data";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
    },
};

const socialLinks = [
    {
        icon: SiLinkedin,
        href: personalInfo.linkedin,
        label: "LinkedIn",
        hoverColor: "hover:text-[#0077B5] hover:border-[#0077B5]/40",
    },
    {
        icon: FaWhatsapp,
        href: personalInfo.whatsapp,
        label: "WhatsApp",
        hoverColor: "hover:text-[#25D366] hover:border-[#25D366]/40",
    },
    {
        icon: HiOutlineEnvelope,
        href: `mailto:${personalInfo.email}`,
        label: "Email",
        hoverColor: "hover:text-red-500 hover:border-red-500/40",
    },
    {
        icon: HiOutlinePhone,
        href: `tel:${personalInfo.phoneRaw}`,
        label: "Direct Call",
        hoverColor: "hover:text-blue-600 hover:border-blue-600/40",
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            <AnimatedBackground />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center relative z-10"
            >
                {/* Profile Picture with Glow Ring */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="relative animate-float">
                        {/* Rotating Glow Ring */}
                        <div className="absolute -inset-1 rounded-full glow-ring p-[3px]">
                            <div className="w-full h-full rounded-full bg-background" />
                        </div>
                        {/* Profile Image with clean framing */}
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-background bg-card shadow-2xl">
                            <Image
                                src={personalInfo.profilePic}
                                alt={personalInfo.name}
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 640px) 160px, 192px"
                            />
                        </div>
                        {/* Pulse Ring Behind */}
                        <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-pulse-ring pointer-events-none" />
                    </div>
                </motion.div>

                {/* Location Pill */}
                <motion.div variants={itemVariants} className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold glass border border-card-border text-muted">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Based in {personalInfo.location} · 12 Years UAE Experience
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
                >
                    {personalInfo.name}
                </motion.h1>

                {/* Animated Typewriter Titles */}
                <motion.div
                    variants={itemVariants}
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-6 min-h-[2.5rem] flex items-center justify-center"
                >
                    <TypeWriter texts={personalInfo.titles} delay={500} speed={65} pauseMs={2200} />
                </motion.div>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-muted text-base sm:text-lg max-w-3xl mb-10 leading-relaxed font-normal"
                >
                    {personalInfo.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                    {/* Download Resume */}
                    <a
                        href={personalInfo.resumeUrl}
                        download="Mohamed_Magdy_CV.docx"
                        className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full 
                       bg-accent text-white font-semibold
                       hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25
                       hover:scale-[1.03] active:scale-[0.98]
                       transition-all duration-200"
                    >
                        <HiOutlineDocumentArrowDown className="w-5 h-5" />
                        Download CV
                    </a>

                    {/* Get in Touch */}
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full 
                       border-2 border-accent/70 text-accent font-semibold
                       hover:bg-accent/10 hover:border-accent hover:scale-[1.03] active:scale-[0.98]
                       transition-all duration-200"
                    >
                        <HiOutlineArrowDown className="w-5 h-5" />
                        Get in Touch
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div variants={itemVariants} className="flex gap-4">
                    {socialLinks.map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            whileHover={{ scale: 1.12, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative group w-12 h-12 rounded-2xl glass border border-card-border 
                          flex items-center justify-center text-muted ${social.hoverColor}
                          transition-all duration-200`}
                            aria-label={social.label}
                        >
                            <social.icon className="w-5 h-5" />
                            {/* Tooltip */}
                            <span
                                className="absolute -top-9 px-2.5 py-1 text-xs font-medium rounded-lg 
                              bg-foreground text-background opacity-0 group-hover:opacity-100
                              transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md"
                            >
                                {social.label}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={itemVariants}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2"
                >
                    <a
                        href="#about"
                        aria-label="Scroll to about section"
                        className="flex flex-col items-center gap-2 text-xs text-muted hover:text-accent transition-colors"
                    >
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-5 h-8 rounded-full border-2 border-muted/40 flex items-start justify-center p-1"
                        >
                            <motion.div
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1.5 h-1.5 rounded-full bg-accent"
                            />
                        </motion.div>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
