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
	import Banner from '../components/banner/banner.svelte';
	import profilePicture from '$lib/assets/profile.jpeg';

	export let jobs;


	let technologies = [];
	let bannerText = `You can explore the source code of this project on the next Link`
	let bannerIconSrc = `https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg`
	let bannerButtonText = `Check this project`;
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

<div class="md:mt-4 p-4 gap-4 md:text-base text-sm">
	<img class="rounded-full md:w-52 md:h-52 h-32 w-32 md:float-right float-none md:mx-6 mx-auto my-2" src={profilePicture} alt="profile" />
	<p class="my-3 md:text-left text-justify">
		Diligent software engineer with 8+ years of experience in software development trying to create innovative and cutting edge solutions so we can bring exceptional services to our internal/external customers. My main goal nowadays is to become a better professional for the videogames industry, so I keep learning about it, but still loving what I'm doing today for retail.	
	</p>
	<p class="my-3 md:text-left text-justify">
		My goal is to be “whatever the business needs”, always looking for personal growth. I always like to take the initiative, going forward through new challenges with positive and team-based leadership. This goal brought me where I am right now, allowing me to learn different languages from C# at the beginning, going through Java, javascript, Typescript and learning Python at this moment. My personal seal and compromise with the company will always be: “To become the best professional the company needs”.
	</p>
</div>

<div class="grid gap-2 py-4 md:grid-cols-2 grid-cols-1">
		{#each jobs as job}
			<JobCard {job} />
		{/each}
</div>

{#if technologies.length > 0}
{#if technologies && technologies.length > 0}
	<div class="my-4 dark:text-primary xl:px-12 p-4 dark:bg-white dark:bg-opacity-90 rounded">
	<h3 class="mb-4 text-center">Tools & Technologies I've worked with...</h3>
	<div class="flex flex-row flex-wrap xl:gap-8 gap-3 mt-4">
		{#each technologies as techSlug}
		 	<Icon slug={techSlug} size={30}/>
		{/each}
	</div>
	</div>
	{/if}	
{/if}

