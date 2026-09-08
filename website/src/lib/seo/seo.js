import { SITE_ORIGIN, SITE_NAME, SAME_AS } from './config.js';

/**
 * Build the canonical URL for a given route path.
 * '/' -> ORIGIN + '/'; anything else -> ORIGIN + path, no trailing slash.
 */
export function canonical(path) {
	if (!path || path === '/') return `${SITE_ORIGIN}/`;
	return `${SITE_ORIGIN}${path}`;
}

/**
 * Turn a root-relative (or already absolute) asset path into an absolute URL.
 */
export function absolute(assetPath) {
	if (!assetPath) return assetPath;
	if (/^https?:\/\//.test(assetPath)) return assetPath;
	return `${SITE_ORIGIN}${assetPath}`;
}

/**
 * Truncate text on a word boundary, appending an ellipsis when cut.
 */
export function truncate(text, max = 155) {
	if (!text || text.length <= max) return text;
	const cut = text.slice(0, max);
	const lastSpace = cut.lastIndexOf(' ');
	return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

/**
 * Build the Person JSON-LD payload wrapped in a ProfilePage, per spec.
 */
export function buildPersonJsonLd({ description, image }) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		mainEntity: {
			'@type': 'Person',
			name: SITE_NAME,
			image,
			sameAs: SAME_AS,
			jobTitle: 'Senior Software Engineer, CTO & CEO',
			description
		}
	};
}

/**
 * Serialize a JSON-LD object safely for embedding inside a <script> tag.
 */
export function serializeJsonLd(obj) {
	return JSON.stringify(obj).replace(/</g, '\\u003c');
}
