<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/jobs`);
		const data = await res.json();
		return { props: { jobs: data } };
	}
</script>

<script>
	import JobCard from '../components/jobs/job-card.svelte';
	import Icon from '../components/icon/icon.svelte';

	export let jobs;


	let technologies = [];

	for(const job of jobs){
		if(technologies.length != 0){
			technologies = [...technologies.concat(job.technologies)];
		}else{
			technologies = [...job.technologies]
		}
	}
	technologies = technologies.filter((i,p)=>technologies.indexOf(i)===p)
</script>

<svelte:head>
	<title>Professional Experience - Pablo Durán Celis</title>
</svelte:head>



<div class="grid gap-2 my-4 md:grid-cols-2 grid-cols-1">
		{#each jobs as job}
			<JobCard {job} />
		{/each}
</div>

{#if technologies.length > 0}
{#if technologies && technologies.length > 0}
	<div class="my-4 dark:bg-cream dark:text-primary p-4 dark:bg-opacity-60 rounded">
	<h3 class="mb-4 text-center">Tools & Technologies I've worked with...</h3>
	<div class="flex flex-row flex-wrap gap-6 mt-4">
		{#each technologies as techSlug}
		 	<Icon slug={techSlug} size={30}/>
		{/each}
	</div>
	</div>
	{/if}	
{/if}

