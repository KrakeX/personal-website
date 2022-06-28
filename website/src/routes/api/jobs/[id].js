import { jobs } from '../../../utils/json/jobs';

export async function get({ params }) {
	const allJobs = jobs;

	const filteredJob = allJobs.filter(searchByParams)[0];

	function searchByParams(job) {
		return job.id == params.id || job.slug == params.slug;
	}

	return {
		status: 200,
		body: filteredJob
	};
}
