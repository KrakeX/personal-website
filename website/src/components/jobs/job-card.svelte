<script>
    export let job;
</script>

<a class="p-6 bg-gray-100 {job.isActualJob ? 'dark:bg-tertiary': 'dark:bg-secondary'} {job.isActualJob ? 'dark:bg-opacity-90': 'dark:bg-opacity-60'}  hover:dark:bg-opacity-100 {job.isActualJob ? 'dark:text-primary': 'dark:text-cream'} rounded text-gray-800 text-center rounder-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/job/${job.id}`}>
    <h3>{job.title} at</h3>
    <h2 class="text-xl">{job.company}</h2>
    <p class="text-xs">({job.companyBrief})</p>
</a>