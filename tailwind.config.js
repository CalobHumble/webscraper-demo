import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: 'rgb(22,22,22)',
          foreground: 'rgb(226,224,220)'
        }
      }
    }
  })],
}