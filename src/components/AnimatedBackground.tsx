"use client";

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Blob 1 */}
            <div
                className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-20 
                    bg-gradient-to-br from-accent/40 to-accent-light/40 blur-[100px] animate-blob"
            />
            {/* Blob 2 */}
            <div
                className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-20 dark:opacity-15 
                    bg-gradient-to-tr from-accent-light/30 to-blue-400/30 blur-[100px] animate-blob-delay-2"
            />
            {/* Blob 3 */}
            <div
                className="absolute -bottom-40 left-1/3 w-[450px] h-[450px] rounded-full opacity-20 dark:opacity-10 
                    bg-gradient-to-bl from-cyan-300/30 to-accent/30 blur-[100px] animate-blob-delay-4"
            />
            {/* Grid Pattern (subtle) */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle, var(--accent) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />
        </div>
    );
}
