/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: 'class',
	theme: {
		colors: {
			oxfordlight: '#032863',
			oxford: '#011028',
			viridian: '#119DA4',
			teal: '#0C7489',
			cream: '#D7D9CE',
			white: '#FDFFFC',
			honey: '#F2AF29',
			cardinal: '#AD343E'
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
