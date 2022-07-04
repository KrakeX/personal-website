/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: 'class',
	theme: {
		colors: {
			oxford: '#011028',
			viridian: '#119DA4',
			teal: '#0C7489',
			cream: '#D7D9CE',
			white: '#FDFFFC',
			honey: '#F2AF29',
			cardinal: '#AD343E',
			primary: '#011028',
			secondary: '#724CF9',
			tertiary: '#EDF67D',
			quaternary: '#CA7DF9',
			senary: '#D36135',
			septenary: '#7FB069'
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		}
	}
};
