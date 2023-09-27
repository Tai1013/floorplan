/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {}
}
