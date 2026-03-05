import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
            },
            animation: {
                "bounce-slow": "bounce 2s infinite",
                "pulse-glow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "fade-in": "fadeIn 0.5s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            boxShadow: {
                "blue-glow": "0 0 20px rgba(59, 130, 246, 0.4)",
                "green-glow": "0 0 20px rgba(34, 197, 94, 0.4)",
            },
        },
    },
    plugins: [],
};
export default config;
