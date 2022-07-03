<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/jobs`);
		const data = await res.json();
		return { props: { jobs: data } };
	}
</script>

<script>
	import JobCard from '../components/jobs/job-card.svelte';

	export let jobs;


	let technologies = [];
	/* let searchTerm = '';
	let filteredJobs = [];

	for(const job of jobs){
		if(technologies.length != 0){
			technologies = [...technologies.concat(job.technologies)];
		}else{
			technologies = [...job.technologies]
		}
	}

	

	console.log(technologies)

	$: {
		if (searchTerm) {
			filteredJobs = jobs.filter((job) => {
				let scopedSearch = searchTerm.toLowerCase();
				const tags = job.tags.toString().toLowerCase();
				const termsToSearch = scopedSearch.replace(',', ' ').split(' ');
				for (const term of termsToSearch) {
					return tags.match(new RegExp('\\b' + term + '\\b', 'i')) != null;
				}
			});
		} else {
			filteredJobs = [...jobs];
		}
	} */
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
	<title>Pablo Durán Celis</title>
</svelte:head>

<div class="grid gap-1">
	<h1 class="text-4xl text-center mt-8 uppercase">Pablo E. Durán Celis</h1>
	<h2 class="text-2xl text-center mb-4">Software Engineer</h2>
</div>



<h3 class="mb-4 text-center">My experience</h3>
<div class="grid gap-2 my-4 md:grid-cols-2 grid-cols-1">
		{#each jobs as job}
			<JobCard {job} />
		{/each}
</div>

{#if technologies.length > 0}
<h3 class="mb-4 text-center">Tools & Technologies</h3>
<div class="grid gap-2 lg:grid-cols-6 md:grid-cols-4 grid-cols-2 my-4">
	{#each technologies as tech}
		<div>{tech}</div>
	{/each}
</div>	
{/if}

