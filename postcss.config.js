module.exports = {
    plugins: {
        autoprefixer: {},
        tailwindcss: { config: './tailwind.config.js' },
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
}
