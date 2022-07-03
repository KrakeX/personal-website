<script>
    export let job;
</script>

<a class="p-6 bg-gray-100 {job.isActualJob ? 'dark:bg-honey': 'dark:bg-teal'} dark:bg-opacity-70 {job.isActualJob ? 'dark:text-oxford': 'dark:text-cream'} rounded text-gray-800 text-center rounder-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/job/${job.id}`}>
    <h3>{job.title} at</h3>
    <h2 class="text-xl">{job.company}</h2>
    <p class="text-xs">({job.companyBrief})</p>
</a>