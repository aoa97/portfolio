"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";
import useScrollSpy from "@/hooks/useScrollSpy";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const activeId = useScrollSpy(
        navLinks.map((l) => l.href.replace("#", "")),
        120
    );

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
                        ? "glass shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-card-border/60"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <a
                            href="#home"
                            className="flex items-center gap-2.5 group"
                            aria-label="Home"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent/20 to-accent-light/30 border border-accent/40 flex items-center justify-center font-bold text-accent group-hover:scale-105 group-hover:shadow-md group-hover:shadow-accent/20 transition-all duration-300">
                                MM
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base sm:text-lg font-bold gradient-text tracking-tight leading-tight">
                                    {personalInfo.name}
                                </span>
                                <span className="text-[11px] text-muted font-medium hidden sm:inline-block">
                                    Performance & Operations
                                </span>
                            </div>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const id = link.href.replace("#", "");
                                const isActive = activeId === id;
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-card/50
                      ${isActive
                                                ? "text-accent font-semibold"
                                                : "text-muted hover:text-foreground"
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg 
                            hover:bg-card transition-colors border border-card-border"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? (
                                    <HiOutlineXMark className="w-6 h-6" />
                                ) : (
                                    <HiOutlineBars3 className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-background border-l border-card-border
                         shadow-2xl md:hidden flex flex-col justify-between"
                        >
                            <div className="flex flex-col pt-20 px-6">
                                <div className="mb-6 pb-4 border-b border-card-border">
                                    <div className="font-bold text-lg text-foreground">{personalInfo.name}</div>
                                    <div className="text-xs text-muted">Dubai, UAE</div>
                                </div>
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 + i * 0.04 }}
                                        className={`py-3 px-4 text-base font-medium rounded-xl transition-colors mb-1
                      ${activeId === link.href.replace("#", "")
                                                ? "text-accent bg-accent/10 font-semibold"
                                                : "text-muted hover:text-foreground hover:bg-card"
                                            }`}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="p-6 border-t border-card-border">
                                <a
                                    href={personalInfo.resumeUrl}
                                    download="Mohamed_Magdy_CV.docx"
                                    className="w-full py-2.5 rounded-xl bg-accent text-white text-center text-sm font-semibold block"
                                >
                                    Download CV
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
