import { jobs } from '../../../utils/json/jobs';

export async function get() {
	return {
		status: 200,
		body: JSON.stringify(jobs)
	};
}
