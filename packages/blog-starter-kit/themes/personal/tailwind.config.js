/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				'void': '#0E0E0E',
				'candy': '#FDB7EF',
				'lime': '#D7FE39',
				'olive': '#B7CF32',
				'cotton': '#F7F6F2',
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
				primary: colors.blue,
			},
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			fontFamily: {
				gabriella: ['"gabriella"', 'sans-serif'],
				globs: ['"tt-globs"', 'serif'],
			},	
			boxShadow: {
				'hard-void': '2px 2px 0 0 rgba(14, 14, 14, 1)',
				'hard-cotton': '2px 2px 0 0 rgba(247, 246, 242, 1)',
				'hard-candy': '2px 2px 0 0 rgba(253, 183, 239, 1)',
				'hard-lime': '2px 2px 0 0 rgba(215, 254, 17, 1)',
				sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
				md: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
