/** @type {import('tailwindcss').Config} */

const appTheme = require('./src/themes')

module.exports = {
    // experimental: {
    //   optimizeUniversalDefaults: true,
    // },
    darkMode: ['class', '[data-mode="dark"]'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './lib/**/*.js',
        './data/**/*.mdx',
    ],
    theme: appTheme,
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
