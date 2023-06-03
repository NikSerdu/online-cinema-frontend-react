/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')
const colors = {
	transparent: twColors.transparent,
	white: '#fff',
	white2: '#D9D9D9',
	primary: '#7FB6F6',
	'bg-color': '#0E1327',
	'bg-color2': '#1B1C3C',
	yellow: '#FFB400',
	'gr-2': '#7FA7F6E3',
	'gr-3': '#227BE5',
	grey: '#878787',
	orange: '#FFB400',
	red: 'red'
}
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		fontFamily: {
			chau: ['Chau Philomene One', 'sans-serif']
		},
		colors,
		extend: {}
	},
	plugins: []
}
