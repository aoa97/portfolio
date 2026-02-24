"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";
import useScrollSpy from "@/hooks/useScrollSpy";
import { navLinks } from "@/lib/data";

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
                        ? "glass shadow-lg shadow-black/5 dark:shadow-black/20"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a
                            href="#home"
                            className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
                        >
                            {"<AU />"}
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
                                        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200
                      ${isActive
                                                ? "text-accent"
                                                : "text-muted hover:text-foreground"
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full"
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
                           hover:bg-card transition-colors"
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
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-background border-l border-card-border
                         shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col pt-20 px-6">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                        className={`py-3 px-4 text-lg font-medium rounded-lg transition-colors 
                      ${activeId === link.href.replace("#", "")
                                                ? "text-accent bg-accent/10"
                                                : "text-muted hover:text-foreground hover:bg-card"
                                            }`}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
