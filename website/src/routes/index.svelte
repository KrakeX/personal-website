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
	import Banner from '../components/banner/banner.svelte'

	export let jobs;


	let technologies = [];
	let bannerText = `You can explore the source code of this project on the next Link`
	let bannerIconSrc = `https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg`
	let bannerButtonText = `Go to Github`;
	let bannerButtonUrl = 'https://github.com/KrakeX/personal-website/tree/main/website'

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

<Banner text={bannerText} button={bannerButtonText} icon={bannerIconSrc} url={bannerButtonUrl}/>

<div class="grid gap-2 py-4 md:grid-cols-2 grid-cols-1">
		{#each jobs as job}
			<JobCard {job} />
		{/each}
</div>

{#if technologies.length > 0}
{#if technologies && technologies.length > 0}
	<div class="my-4 dark:text-primary xl:px-12 p-4 dark:bg-white dark:bg-opacity-90 rounded">
	<h3 class="mb-4 text-center">Tools & Technologies I've worked with...</h3>
	<div class="flex flex-row flex-wrap xl:gap-8 gap-2 mt-4">
		{#each technologies as techSlug}
		 	<Icon slug={techSlug} size={30}/>
		{/each}
	</div>
	</div>
	{/if}	
{/if}

