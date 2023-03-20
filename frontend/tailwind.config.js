/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                foundation: {
                    primaryA: '#068BEE',
                    primaryB: '#1948A3',
                    accent: '#DDB9FF',
                    negative: '#E11900',
                    warning: '#FFC043',
                    positive: '#048848',
                },
                background: {
                    primaryLight: '#FFFFFF',
                    secondaryLight: '#E8E8E8',
                    primaryDark: '#000000',
                    secondaryDark: '#282828',
                    disabled: '#F3F3F3',
                    accentLite: '#F9F1FF',
                    negativeLite: '#FFF0EE',
                    warningLite: '#FDF2DC',
                    positiveLite: '#EAF6ED',
                    overlayArt: 'rgba(0, 0, 0, 0)',
                    overlayDark: 'rgba(0, 0, 0, 0.3)',
                    overlayLight: 'rgba(0, 0, 0, 0.08)',
                    accent: '#DDB9FF',
                    negative: '#E11900',
                    warning: '#FFC043',
                    positive: '#048848',
                    white: '#FFFFFF',
                    black: '#000000',
                },
                content: {
                    primaryLight: '#282828',
                    secondaryLight: '#4B4B4B',
                    tertiaryLight: '#5E5E5E',
                    primaryDark: '#F3F3F3',
                    secondaryDark: '#E8E8E8',
                    tertiaryDark: '#DDDDDD',
                    selected: '#068BEE',
                    disabled: '#DDDDDD',
                    accent: '#1948A3',
                    negative: '#DE1135',
                    warning: '#9F6402',
                    positive: '#0E8345',
                },
                border: {
                    opaqueLight: '#E8E8E8',
                    opaqueDark: '#4B4B4B',
                    selectedLight: '#068BEE',
                    selectedDark: '#1948A3',
                    transparentLight: 'rgba(6, 139, 238, 0.08)',
                    transparentDark: 'rgba(25, 72, 163, 0.2)',
                    disabled: '#F3F3F3',
                    accent: '#1948A3',
                    accentLite: '#E2F8FB',
                    negative: '#DE1135',
                    warning: '#9F6402',
                    positive: '#0E8345',
                },
            },
        },
    },
    plugins: [],
};
