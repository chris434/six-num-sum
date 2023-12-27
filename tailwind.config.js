import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            screens: {
                'xs': '430px',
                'xs2': '375px'
            }
        },
    },
    plugins: [],
}