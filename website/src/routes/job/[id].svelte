<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/jobs/${+params.id}`);
		const job = await res.json();
		return { props: { job } };
	}
</script>

<script>
import Icon from '../../components/icon/icon.svelte';
	export let job;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center mt-4">{job.title}</h1>
	<h2 class="mt-2">at {job.company}</h2>
</div>
<div class="grid grid-cols-1 text-left">
	{#if job.description}
	<div class="my-4 p-2">	
		<h3>Description</h3>
		<p class="text-justify">{job.description}</p>
	</div>
	{/if}
	{#if job.clients && job.clients.length > 0}
	<div class="my-4 dark:bg-cream dark:text-primary p-4 rounded">
		<h3 class="mb-4 text-center">Clients</h3>
		<div class="flex flex-row mt-4">
			{#each job.clients as clients}
			<Icon slug={clients} size={50}/>
			{/each}
		</div>
	</div>
	{/if}
	{#if job.integrations && job.integrations.length > 0}
		<div class="my-4 dark:bg-cream dark:text-primary p-4 rounded">
			<h3 class="mb-4 text-center">Integrations</h3>
			<div class="grid grid-flow-row mt-4">
				{#each job.integrations as integration}
					<Icon slug={integration} size={35}/>
				{/each}
			</div>
		</div>
	{/if}
	{#if job.technologies && job.technologies.length > 0}
	<div class="my-4 dark:bg-cream dark:text-primary p-4 rounded">
	<h3 class="mb-4 text-center">Tools & Technologies</h3>
	<div class="flex flex-row flex-wrap gap-2 mt-4">
		{#each job.technologies as techSlug}
		 	<Icon slug={techSlug} size={35}/>
		{/each}
	</div>
	</div>
	{/if}
	
</div>
