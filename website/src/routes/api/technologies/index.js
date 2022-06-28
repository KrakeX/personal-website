const technologies = [
	{
		company: 'Typescript',
		slug: 'typescript',
		logo: ''
	},
	{
		company: 'AWS',
		slug: 'aws',
		logo: ''
	},
	{
		company: 'Nest.js',
		slug: 'nest',
		logo: ''
	},
	{
		company: 'React.js',
		slug: 'react',
		logo: ''
	},
	{
		company: 'C#',
		slug: 'c-sharp',
		logo: ''
	}
];

export async function get() {
	return {
		status: 200,
		body: JSON.stringify(technologies)
	};
}
