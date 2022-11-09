/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,php}"],
    theme: {
        extend: {},
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
}