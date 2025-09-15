/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f5f5f5',
        muted: '#9ca3af',
        primary: { DEFAULT: '#0f5132', foreground: '#ffffff' },
        card: '#111111',
        border: '#1f2937'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [],
}


