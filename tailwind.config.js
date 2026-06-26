/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forsythia:   '#FFC801',
        nocturnal:   '#114C5A',
        arctic:      '#F1F6F4',
        mystic:      '#D9E8E2',
        saffron:     '#FF9932',
        oceanic:     '#172B36',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
