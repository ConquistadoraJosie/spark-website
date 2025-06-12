/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,ts,jsx,tsx,css}",
        // Add any other paths where you use Tailwind/DaisyUI classes
    ],
    theme: {
        extend: {},
    },
};