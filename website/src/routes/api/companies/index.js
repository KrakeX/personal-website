const companies = [
	{
		company: 'Cencosud',
		slug: 'cencosud',
		logo: ''
	},
	{
		company: 'Burger King',
		slug: 'burger-king',
		logo: ''
	},
	{
		company: 'WiTI SpA.',
		slug: 'witi',
		logo: ''
	},
	{
		company: 'Fondos On Line - FOL.cl',
		slug: 'fol',
		logo: ''
	},
	{
		company: 'AFP Cuprum',
		slug: 'cuprum',
		logo: ''
	},
	{
		company: 'Vtex',
		slug: 'vtex',
		logo: ''
	}
];

export async function get() {
	return {
		status: 200,
		body: JSON.stringify(companies)
	};
}
