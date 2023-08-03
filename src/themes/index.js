const typography = require('./typography')
const defaultTheme = require('tailwindcss/defaultTheme')

const appTheme = {
    fontFamily: {
        sans: [
            'Raleway',
            'Roboto',
            'InterVariable',
            ...defaultTheme.fontFamily.sans,
        ],
        serif: ['Merriweather', 'serif'],
    },
    extend: {
        colors: {
            black: '#000',
            white: '#fff',
            primary: '#a2258d',
            blue: '#1fb6ff',
            purple: '#7e5bef',
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#13ce66',
            yellow: '#ffc82c',
            'gray-dark': '#273444',
            mainTheme: 'var(--app-custom-color)',
            'gray-light': '#d3dce6',
            //Latest
            gray: {
                light: '#f5f5f5',
                DEFAULT: '#f9f9f9',
                dark: '#273444',
            },
        },
        lineHeight: {
            11: '2.75rem',
            12: '3rem',
            13: '3.25rem',
            14: '3.5rem',
        },
        spacing: {
            '9/16': '56.25%',
            '8xl': '96rem',
            '9xl': '128rem',
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
        },
        typography: typography,
        borderRadius: {
            '4xl': '2rem',
        },
        backgroundImage: {
            'hero-pattern': "url('/img/hero-pattern.svg')",
            'footer-texture': "url('/img/footer-texture.png')",
            'body-pattern': "url('/img/footer-texture.png')",
        },
    },
}
module.exports = appTheme
