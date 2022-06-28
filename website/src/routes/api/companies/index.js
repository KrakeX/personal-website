import { companies } from '../../../utils/json/companies';

export async function get() {
	return {
		status: 200,
		body: JSON.stringify(companies)
	};
}
