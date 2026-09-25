"use client";

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Ambient Blob 1 - Royal Sapphire */}
            <div
                className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full opacity-15 dark:opacity-10 
                    bg-gradient-to-br from-blue-700/30 to-indigo-800/30 blur-[130px] animate-blob"
            />
            {/* Ambient Blob 2 - Subtle Warm Slate/Gold */}
            <div
                className="absolute top-28 right-0 w-[420px] h-[420px] rounded-full opacity-10 dark:opacity-5 
                    bg-gradient-to-tr from-amber-600/20 to-blue-700/20 blur-[140px] animate-blob-delay-2"
            />
            {/* Ambient Blob 3 - Deep Navy */}
            <div
                className="absolute -bottom-40 left-1/3 w-[480px] h-[480px] rounded-full opacity-15 dark:opacity-10 
                    bg-gradient-to-bl from-slate-600/20 to-blue-800/20 blur-[130px] animate-blob-delay-4"
            />
            {/* Subtle Corporate Grid Accent */}
            <div
                className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, var(--accent) 1px, transparent 1px)`,
                    backgroundSize: "44px 44px",
                }}
            />
        </div>
    );
}
