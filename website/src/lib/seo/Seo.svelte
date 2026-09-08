<script>
	import { canonical, absolute, serializeJsonLd } from './seo.js';
	import { SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from './config.js';

	export let title = DEFAULT_TITLE;
	export let description = DEFAULT_DESCRIPTION;
	export let path = '/';
	export let image = DEFAULT_OG_IMAGE;
	export let type = 'website';
	export let jsonLd = null;

	$: url = canonical(path);
	$: absoluteImage = absolute(image);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={absoluteImage} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteImage} />

	{#if jsonLd}
		{@html `<script type="application/ld+json">${serializeJsonLd(jsonLd)}<\/script>`}
	{/if}
</svelte:head>
