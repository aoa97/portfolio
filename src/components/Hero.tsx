"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    HiOutlineArrowDown,
    HiOutlineDocumentArrowDown,
} from "react-icons/hi2";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import AnimatedBackground from "./AnimatedBackground";
import TypeWriter from "./TypeWriter";
import { personalInfo } from "@/lib/data";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
    },
};

const socialLinks = [
    {
        icon: SiGithub,
        href: personalInfo.github,
        label: "GitHub",
        hoverColor: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
        icon: SiLinkedin,
        href: personalInfo.linkedin,
        label: "LinkedIn",
        hoverColor: "hover:text-blue-600",
    },
    {
        icon: HiOutlineMail,
        href: `mailto:${personalInfo.email}`,
        label: "Email",
        hoverColor: "hover:text-red-500",
    },
    {
        icon: FaWhatsapp,
        href: personalInfo.whatsapp,
        label: "WhatsApp",
        hoverColor: "hover:text-green-500",
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <AnimatedBackground />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center"
            >
                {/* Profile Picture with Glow Ring */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="relative animate-float">
                        {/* Rotating Glow Ring */}
                        <div className="absolute -inset-1 rounded-full glow-ring p-[3px]">
                            <div className="w-full h-full rounded-full bg-background" />
                        </div>
                        {/* Profile Image */}
                        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-4 ring-background">
                            <Image
                                src={personalInfo.profilePic}
                                alt={personalInfo.name}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 640px) 144px, 176px"
                            />
                        </div>
                        {/* Pulse Ring Behind */}
                        <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse-ring" />
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                >
                    {personalInfo.name}
                </motion.h1>

                {/* Typewriter Title */}
                <motion.div
                    variants={itemVariants}
                    className="text-xl sm:text-2xl lg:text-3xl font-medium text-accent mb-6 h-10"
                >
                    <TypeWriter text={personalInfo.title} delay={800} speed={80} />
                </motion.div>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-muted text-base sm:text-lg max-w-2xl mb-8 leading-relaxed"
                >
                    {personalInfo.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 mb-10"
                >
                    {/* Download Resume */}
                    <a
                        href={personalInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 rounded-full 
                       bg-accent text-white font-semibold
                       hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25
                       hover:scale-[1.03] active:scale-[0.98]
                       transition-all duration-200"
                    >
                        <HiOutlineDocumentArrowDown className="w-5 h-5" />
                        Download Resume
                    </a>

                    {/* Get in Touch */}
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full 
                       border-2 border-accent text-accent font-semibold
                       hover:bg-accent/10 hover:scale-[1.03] active:scale-[0.98]
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
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative group w-11 h-11 rounded-full glass border border-card-border 
                          flex items-center justify-center text-muted ${social.hoverColor}
                          transition-colors duration-200`}
                            aria-label={social.label}
                        >
                            <social.icon className="w-5 h-5" />
                            {/* Tooltip */}
                            <span
                                className="absolute -top-9 px-2 py-1 text-xs font-medium rounded-md 
                              bg-foreground text-background opacity-0 group-hover:opacity-100
                              transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                            >
                                {social.label}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={itemVariants}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-muted/40 flex items-start justify-center p-1.5"
                    >
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-accent"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
