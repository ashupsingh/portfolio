/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0d1117", // Github Dark Bg
                secondary: "#161b22", // Github Dark Card
                accent: "#58a6ff", // Github Blue/Cyan
                "accent-glow": "rgba(88, 166, 255, 0.4)",
                "text-primary": "#ffffff",
                "text-secondary": "#8b949e",
            },
            fontFamily: {
                heading: ["Outfit", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}
