/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'), // Add this line
    ],
    // daisyUI config (optional - will be set to default if no config is provided)
    daisyui: {
        themes: ["light", "dark", "cupcake"], // Add the themes you want to use
        // other daisyUI configuration options...
    },
};