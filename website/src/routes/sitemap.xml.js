import { sitemapEntries } from '$lib/seo/sitemap.js';
import { canonical } from '$lib/seo/seo.js';

export async function get() {
	const urls = sitemapEntries()
		.map(
			({ path, lastmod }) => `
	<url>
		<loc>${canonical(path)}</loc>
		<lastmod>${lastmod}</lastmod>
	</url>`
		)
		.join('');

	return {
		headers: {
			'Content-Type': 'application/xml'
		},
		body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`
	};
}
