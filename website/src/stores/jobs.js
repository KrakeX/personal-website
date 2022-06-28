import { writable } from 'svelte/store';
export const jobs = writable([]);
const fetchJobs = async () => {
	jobs.set([
		{
			id: 1,
			company: 'Cencosud',
			startDate: '2021-09-01',
			endDate: '',
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
		},
		{
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
		}
	]);
};

fetchJobs();

const idJob = params.id;

const job = {
	id: 2,
	company: 'WiTI',
	startDate: '2021-03-01',
	endDate: '2022-08-31',
	isActualJob: true,
	description: 'This is an awesome company',
	tags: ['Node.js', 'Typescript', 'AWS', 'Postgresql', 'AuroraDB', 'AWS Lambda', 'RDS', 'React.js']
};
return { props: { job } };
