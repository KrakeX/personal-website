import adapter from '@sveltejs/adapter-auto';
import { jobs } from './src/utils/json/jobs.js';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter({
			fallback: null,
			precompress: false
		}),
		prerender: {
			entries: ['*', '/sitemap.xml', ...jobs.map((j) => `/job/${j.id}`)]
		},
		vite: {
			assetsInclude: ['**/*.JPG'],
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
