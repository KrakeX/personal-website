<script context="module">
    export async function load({params, fetch}){
        const res = await fetch(`/api/jobs`);
        const data = await res.json();
    return {props: {jobs: data}}
    }
</script>

<script>
    
    import JobCard from '../components/jobs/job-card.svelte';

    export let jobs;

    let searchTerm = "";
    let filteredJobs = [];

    $:{
        if(searchTerm){
            filteredJobs = jobs.filter(job => {
                let scopedSearch = searchTerm.toLowerCase();
                const tags = job.tags.toString().toLowerCase();
                const termsToSearch = scopedSearch.replace(',',' ').split(' ');
                for(const term of termsToSearch){
                    return tags.match(new RegExp("\\b"+term+"\\b", "i")) != null;
                }
            })
        }else{
            filteredJobs = [...jobs]
        }
    }
</script>
<svelte:head>
    <title>Pablo Durán - Webpage</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to Pablo Durán's Webpage</h1>

<!-- <input class="w-full rounder-md text-lg p-4 border-2 border-gray-200" type="text" bind:value="{searchTerm}" placeholder="What experience do you need from me?"> -->

<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each jobs as job}
        <JobCard job={job} />
    {/each}
</div>



