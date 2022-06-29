<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/jobs`);
		const data = await res.json();
		return { props: { jobs: data } };
	}
</script>

<svelte:head>
	<title>Pablo Durán - Webpage</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to Pablo Durán's Webpage</h1>
<h2 class="text-4xl text-center my-8 uppercase">Under construction</h2>