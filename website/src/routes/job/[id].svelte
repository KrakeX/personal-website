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
<div class="grid grid-cols-1 gap-2 text-left">
	{#if job.description}
	<div class="my-4">	
	<h3>Job Description</h3>
		<div>
			<p class="text-justify">{job.description}</p>
		</div>
	</div>
	{/if}
	{#if job.clients && job.clients.length > 0}
	<div class="my-4">
		<h3>Clients</h3>
		<div class="grid grid-flow-row">
			{#each job.clients as clients}
				<div> - {clients}</div>
			{/each}
		</div>
	</div>
	{/if}
	{#if job.integrations && job.integrations.length > 0}
		<div class="my-4">
			<h3>Integrations</h3>
			<div class="grid grid-flow-row">
				{#each job.integrations as integration}
					<div> - {integration}</div>
				{/each}
			</div>
		</div>
	{/if}
	{#if job.technologies && job.technologies.length > 0}
	<h3 class="mb-4 text-center">Tools & Technologies</h3>
	<div class="grid gap-2 lg:grid-cols-6 md:grid-cols-4 grid-cols-2 my-4">
		{#each job.technologies as tech}
		 	<Icon icon={tech} />
		{/each}
	</div>	
	{/if}
</div>
