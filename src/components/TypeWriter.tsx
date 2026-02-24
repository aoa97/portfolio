"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}

export default function TypeWriter({
    text,
    delay = 0,
    speed = 60,
    className = "",
}: TypeWriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            if (index >= text.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: done ? 0 : [1, 0] }}
                transition={{
                    duration: 0.6,
                    repeat: done ? 0 : Infinity,
                    repeatType: "reverse",
                }}
                className="inline-block ml-[2px] w-[3px] h-[1em] bg-accent align-middle"
            />
        </span>
    );
}
