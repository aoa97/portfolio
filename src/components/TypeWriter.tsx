"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
    text?: string;
    texts?: string[];
    delay?: number;
    speed?: number;
    deleteSpeed?: number;
    pauseMs?: number;
    className?: string;
}

export default function TypeWriter({
    text,
    texts,
    delay = 500,
    speed = 60,
    deleteSpeed = 35,
    pauseMs = 2200,
    className = "",
}: TypeWriterProps) {
    const list = texts && texts.length > 0 ? texts : text ? [text] : [""];
    const [currentIdx, setCurrentIdx] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        const currentWord = list[currentIdx % list.length];

        if (list.length === 1 && displayedText === currentWord) {
            return;
        }

        let timer: NodeJS.Timeout;

        if (!isDeleting && displayedText.length < currentWord.length) {
            timer = setTimeout(() => {
                setDisplayedText(currentWord.slice(0, displayedText.length + 1));
            }, speed);
        } else if (!isDeleting && displayedText.length === currentWord.length) {
            if (list.length > 1) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseMs);
            }
        } else if (isDeleting && displayedText.length > 0) {
            timer = setTimeout(() => {
                setDisplayedText(currentWord.slice(0, displayedText.length - 1));
            }, deleteSpeed);
        } else if (isDeleting && displayedText.length === 0) {
            setIsDeleting(false);
            setCurrentIdx((prev) => (prev + 1) % list.length);
        }

        return () => clearTimeout(timer);
    }, [started, displayedText, isDeleting, currentIdx, list, speed, deleteSpeed, pauseMs]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="inline-block ml-[2px] w-[3px] h-[1em] bg-accent align-middle"
            />
        </span>
    );
}
