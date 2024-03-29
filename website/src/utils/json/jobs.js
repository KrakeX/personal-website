export const jobs = [
	{
		id: 1,
		title: 'Sr. Software Engineer - Track Leader',
		company: 'Cencosud S.A.',
		companyBrief: 'South-american retail company',
		slug: 'cencosud',
		startDate: '2021-09-01',
		endDate: '',
		isActualJob: true,
		description:
			'Capacity Center .- Internalized from WiTI SpA. In charge of new developments and maintenance of our product: MonCap (Monitor de Capacidades). Product made for logistics management at holding-level for our supermarkets brands: JUMBO, EASY, SANTA ISABEL. Our developments are mainly in the Typescript stack, Nestjs, Microservices, RDS, Lambda Functions, SQS, Cronjobs, Hexagonal Architecture, SOLID.',
		technologies: [
			'nodedotjs',
			'express',
			'nestjs',
			'javascript',
			'typescript',
			'amazonaws',
			'postgresql',
			'auroradb',
			'awslambda',
			'amazonrds',
			'react',
			'reactNative',
			'fastify',
			'typeorm',
			'docker',
			'kubernetes',
			'jira',
			'visualstudiocode',
			'swagger',
			'terraform',
			'gitlab'
		],
		clients: [],
		integrations: ['vtex']
	},
	{
		id: 2,
		title: 'Semi Senior Software Engineer',
		company: 'WiTI  SpA',
		companyBrief: 'Outsourcing development company',
		slug: 'witi',
		startDate: '2021-03-01',
		endDate: '2022-08-31',
		isActualJob: false,
		description:
			"Development in different projects for WiTI, Alsea: New Burger King API for delivery app and Cencosud's Capacity Center developing in the javascript/typescript stack with Nestjs. Libraries and frameworks used: Reactjs, Angular, Ionic, Redux, Nodejs, Nestjs. Service integrations with AWS: Elastic Beanstalk, DynamoDb, Postgres, S3. Documentation with OpenAPI (Swagger) and pipelines.",
		technologies: [
			'nodedotjs',
			'javascript',
			'typescript',
			'amazonaws',
			'postgresql',
			'amazondynamodb',
			'awslambda',
			'amazonec2',
			'angular',
			'react',
			'ionic',
			'nestjs',
			'visualstudiocode',
			'swagger',
			'amazons3',
			'redux'
		],
		clients: ['burgerking', 'cencosud', 'witi'],
		integrations: ['alsea']
	},
	{
		id: 3,
		title: 'Semi Senior Software Developer',
		company: 'Crossover Consulting Ltda',
		companyBrief: 'Recruiting Company',
		slug: 'crossover',
		startDate: '2021-03-01',
		endDate: '2022-08-31',
		isActualJob: false,
		description:
			"Developer in charge of updating AFP Cuprum's proprietary Legacy software to .Net Core stack with Agile development strategies.",
		technologies: [
			'dotnet',
			'visualstudio',
			'microsoftsqlserver',
			'razor',
			'wcf',
			'docker',
			'visualbasic',
			'jira'
		],
		clients: ['cuprum']
	},
	{
		id: 4,
		title: 'IT Lead',
		company: 'Klu Trending & Novelties',
		companyBrief: 'Entertainment Company',
		slug: 'klu',
		startDate: '2021-03-01',
		endDate: '2022-08-31',
		isActualJob: false,
		description:
			'Technical Leader in charge of project management with external providers, also focused on the development of internal applications, performing the analysis and subsequent execution.',
		technologies: [
			'wordpress',
			'visualstudiocode',
			'php',
			'sequelize',
			'shopify',
			'adobephotoshop',
			'mysql',
			'woocommerce'
		],
		clients: []
	},
	{
		id: 5,
		title: 'Software Developer',
		company: 'Gestión Operativa SpA',
		companyBrief: 'Banking Services',
		slug: 'gop',
		startDate: '2021-03-01',
		endDate: '2022-08-31',
		isActualJob: false,
		description:
			'Developer for a company in the banking sector, creating an internal application to improve management, response times and automation of billing for services provided by workers.',
		technologies: ['visualstudio', 'microsoftsqlserver', 'dotnet'],
		clients: ['bancoBci']
	}
];
