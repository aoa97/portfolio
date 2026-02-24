"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on desktop with hover capability
        const hasHover = window.matchMedia("(hover: hover)").matches;
        if (!hasHover) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible]);

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999] hidden dark:block"
            animate={{
                x: position.x - 200,
                y: position.y - 200,
                opacity: isVisible ? 0.07 : 0,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            style={{
                width: 400,
                height: 400,
                borderRadius: "50%",
                background:
                    "radial-gradient(circle, var(--accent-light) 0%, transparent 70%)",
            }}
        />
    );
}
