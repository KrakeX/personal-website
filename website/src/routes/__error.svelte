<script context="module">
	export function load({ error, status }) {
		return { props: { error, status } };
	}
</script>

<script>
	export let status;
	export let error = null;
</script>

<svelte:head>
	<title>{status} — Page not found · Pablo Durán Celis</title>
	<meta name="robots" content="noindex" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div style="position:relative;min-height:100vh;background:#011627;font-family:Manrope, ui-sans-serif, system-ui, sans-serif;color:#d6deeb;overflow-x:hidden;display:flex;align-items:center;justify-content:center">
	<div style="position:fixed;inset:0;pointer-events:none;overflow:hidden">
		<div
			style="position:absolute;top:-14%;left:6%;width:52vw;height:52vw;border-radius:50%;background:radial-gradient(circle at 40% 40%, rgba(173,219,103,.20), transparent 62%);filter:blur(60px);animation:orbA 30s ease-in-out infinite"
		/>
		<div
			style="position:absolute;top:18%;right:-10%;width:48vw;height:48vw;border-radius:50%;background:radial-gradient(circle at 55% 45%, rgba(130,170,255,.22), transparent 62%);filter:blur(60px);animation:orbB 38s ease-in-out infinite"
		/>
		<div
			style="position:absolute;bottom:-16%;left:26%;width:46vw;height:46vw;border-radius:50%;background:radial-gradient(circle at 50% 50%, rgba(199,146,234,.16), transparent 62%);filter:blur(60px);animation:orbC 34s ease-in-out infinite"
		/>
		<div
			style="position:absolute;inset:0;background-image:linear-gradient(rgba(29,59,83,.30) 1px,transparent 1px),linear-gradient(90deg,rgba(29,59,83,.30) 1px,transparent 1px);background-size:72px 72px"
		/>
	</div>

	<main style="position:relative;max-width:560px;margin:0 24px;padding:40px 36px;border-radius:24px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:16px;background:rgba(29,59,83,.34);backdrop-filter:blur(30px) saturate(175%);-webkit-backdrop-filter:blur(30px) saturate(175%);border:1px solid rgba(214,222,235,.10);box-shadow:0 14px 40px rgba(0,6,14,.42), inset 0 1px 0 rgba(214,222,235,.08);animation:rise .7s cubic-bezier(.2,.7,.2,1) both">
		<span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#7fdbca">{status}</span>
		<h1 style="margin:0;font-size:clamp(26px,4vw,34px);line-height:1.15;font-weight:800;letter-spacing:-0.03em;color:#fff">Page not found</h1>
		<p style="margin:0;font-size:14.5px;line-height:1.68;color:#8badc1;text-wrap:pretty">
			This page doesn't exist, or it may have moved. · Esta página no existe, o puede que se haya movido.
		</p>
		<a
			href="/"
			style="display:flex;align-items:center;gap:8px;margin-top:8px;padding:10px 15px;border-radius:11px;background:#addb67;color:#011627;font-size:12.5px;font-weight:700;transition:all .25s ease"
		>
			Back home · Volver al inicio
		</a>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
	}
	a {
		text-decoration: none;
	}
	a:hover {
		background: #c9f09a !important;
	}

	@keyframes orbA {
		0%,
		100% {
			transform: translate3d(0, 0, 0) scale(1);
		}
		50% {
			transform: translate3d(6%, -5%, 0) scale(1.14);
		}
	}
	@keyframes orbB {
		0%,
		100% {
			transform: translate3d(0, 0, 0) scale(1.05);
		}
		50% {
			transform: translate3d(-7%, 6%, 0) scale(0.92);
		}
	}
	@keyframes orbC {
		0%,
		100% {
			transform: translate3d(0, 0, 0) scale(0.95);
		}
		50% {
			transform: translate3d(4%, 7%, 0) scale(1.1);
		}
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(18px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
</style>
