import adapter from '@sveltejs/adapter-auto';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter({
			fallback: null,
			precompress: false
		}),
		vite: {
			build: { target: 'es2015' },
			server: {
				fs: {
					allow: ['.']
				}
			}
		}
	}
};

export default config;
