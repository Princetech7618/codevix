// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#38bdf8',
//         primaryDark: '#0ea5e9',
//         lightBlue: '#eff6ff',
//         softBlue: '#7dd3fc',
//         accent: '#38bdf8',
//         textGray: '#6B8FB8',
//       },
//       fontFamily: {
//         sans: ['var(--font-poppins)'],
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eff6ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        primary: {
          DEFAULT: '#38bdf8',
          light: '#7dd3fc',
          dark: '#0ea5e9',
        },
        accent: {
          DEFAULT: '#38bdf8',
          light: '#7dd3fc',
          dark: '#0ea5e9',
        },
        background: {
          light: '#EAF4FF',
          gradient: '#CFE9FF',
        },
        text: {
          primary: '#0ea5e9',
          secondary: '#38bdf8',
          muted: '#6B8FB8',
        },
        white: '#ffffff',
      },
      fontFamily: {
  sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif',
        ],
            },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .9 },
        },
      },
    },
  },
  plugins: [],
}