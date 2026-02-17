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
//         primary: '#4DA3FF',
//         primaryDark: '#2F80ED',
//         lightBlue: '#EAF4FF',
//         softBlue: '#CFE9FF',
//         accentGreen: '#7ED957',
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
        primary: {
          DEFAULT: '#2F80ED',
          light: '#4DA3FF',
          dark: '#1E5FC7',
        },
        accent: {
          DEFAULT: '#7ED957',
          light: '#9EE87A',
          dark: '#5CB53D',
        },
        background: {
          light: '#EAF4FF',
          gradient: '#CFE9FF',
        },
        text: {
          primary: '#2F80ED',
          secondary: '#4F8FCF',
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