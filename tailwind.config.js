/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#00FFFF',
        black: '#000000',
        white: '#FFFFFF'
      }
    }
  },
  plugins: []
}
