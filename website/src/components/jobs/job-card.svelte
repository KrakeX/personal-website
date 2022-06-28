<script>
    export let job;
</script>

<a class="p-6 bg-gray-100 text-gray-800 text-center rounder-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/job/${job.id}`}>
    <h2>{job.company}</h2>
    <p>{job.description}</p>
</a>