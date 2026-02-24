"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface SectionRevealProps {
    children: ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

const directionVariants = {
    up: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    down: {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 },
    },
    left: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
} as const;

export default function SectionReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    className = "",
    once = true,
}: SectionRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-80px" });

    const { hidden, visible } = directionVariants[direction];

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden,
                visible: {
                    ...visible,
                    transition: {
                        duration,
                        delay,
                        ease: [0.25, 0.4, 0.25, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ── Stagger Container ──
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ── Stagger Item (works inside StaggerContainer) ──
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    direction?: Direction;
}

export function StaggerItem({
    children,
    className = "",
    direction = "up",
}: StaggerItemProps) {
    const { hidden, visible } = directionVariants[direction];

    return (
        <motion.div
            variants={{
                hidden,
                visible: {
                    ...visible,
                    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
