<script context="module">
    export async function load({params, fetch}){
        const res = await fetch(`/api/jobs/${+params.id}`)
		const job = await res.json();
		console.log(job)
        return { props: { job }}
    }
</script>
<script>
    export let job;
</script>
<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase" >{job.title}</h1>
</div>
