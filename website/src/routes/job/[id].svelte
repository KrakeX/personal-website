<script context="module">
    export async function load({params}){
        console.log('url',params)
        const idJob = params.id;
        console.log('ID RECIEVED', idJob)

        const job = {
			id: 2,
			company: 'WiTI',
			startDate: '2021-03-01',
			endDate: '2022-08-31',
			isActualJob: true,
			description: 'This is an awesome company',
			tags: [
				'Node.js',
				'Typescript',
				'AWS',
				'Postgresql',
				'AuroraDB',
				'AWS Lambda',
				'RDS',
				'React.js'
			]
		};
        return { props: {job}}
    }
</script>
<script>
    export let job;
</script>
<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase" >{job.company}</h1>

</div>
