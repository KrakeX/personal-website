<script>
	import { onMount, onDestroy } from 'svelte';
	import profilePicture from '$lib/assets/profile.JPG';

	const YEARS = new Date().getFullYear() - 2012;

	const ROLES = [
		{
			id: 'cencosud',
			current: true,
			company: 'Cencosud S.A.',
			badge: { en: 'Current', es: 'Actual' },
			place: 'Santiago, Chile',
			role: { en: 'Senior Software Engineer & Track Leader', es: 'Senior Software Engineer & Track Leader' },
			period: { en: 'Sep 2021 — Present', es: 'sep 2021 — Presente' },
			length: { en: '5 yrs 1 mo', es: '5 años 1 mes' },
			desc: {
				es: 'Internalizado desde WiTI SpA, me mantengo trabajando en la célula de Capacity Center, encargado de todo el alcance logístico de la compañía, a cargo de el backend de gestión de capacidades. Desarrollando principalmente en Nest.js un framework de Node que trabaja con Typescript, Postgresql, Kubernetes y otros productos AWS.',
				en: 'Internalized from WiTI SpA, I keep working in the Capacity Center cell, responsible for the whole logistics scope of the company and in charge of the capacity management backend. Developing mainly in Nest.js, a Node framework working with Typescript, Postgresql, Kubernetes and other AWS products.'
			},
			tech: [
				'Nest.js',
				'Node.js',
				'TypeScript',
				'PostgreSQL',
				'AuroraDB',
				'AWS Lambda',
				'AWS RDS',
				'Kubernetes',
				'Docker',
				'Terraform',
				'React',
				'React Native',
				'Fastify',
				'TypeORM',
				'Swagger',
				'GitLab',
				'Jira'
			]
		},
		{
			id: 'brander',
			current: true,
			company: 'Brander.gg',
			badge: { en: 'CTO', es: 'CTO' },
			place: 'Santiago, Chile',
			role: { en: 'Chief Technology Officer', es: 'Chief Technology Officer' },
			period: { en: 'Nov 2023 — Present', es: 'nov 2023 — Presente' },
			length: { en: '2 yrs 11 mos', es: '2 años 11 meses' },
			desc: {
				es: 'Encargado del desarrollo de plataformas tecnológicas de Brander.gg, para la automatización de procesos y mejoras de experiencia para los usuarios.',
				en: "In charge of developing Brander.gg's technology platforms, for process automation and user experience improvements."
			},
			tech: ['Marketing Tools', 'TypeScript', 'Node.js', 'AWS']
		},
		{
			id: 'astralis',
			current: true,
			company: 'Astralis Group',
			badge: { en: 'CEO', es: 'CEO' },
			place: 'Santiago, Chile',
			role: { en: 'Chief Executive Officer', es: 'Chief Executive Officer' },
			period: { en: 'Present', es: 'Presente' },
			length: { en: '—', es: '—' },
			desc: { es: 'Consultora de marketing y software.', en: 'Marketing and software consultancy.' },
			tech: []
		},
		{
			id: 'witi',
			company: 'WiTI',
			place: 'Santiago, Chile',
			role: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
			period: { en: 'Mar 2020 — Aug 2021', es: 'mar 2020 — ago 2021' },
			length: { en: '1 yr 6 mos', es: '1 año 6 meses' },
			desc: {
				es: 'WiTi es una empresa de desarrollo de soluciones de software para empresas de diversos rubros. Me dedico al análisis y desarrollo de aplicaciones tanto web y mobile en javascript/typescript: Nestjs/Express, React, Angular 6, Ionic. Adicionalmente ofreciendo soluciones como AWS Architect Solutions. Dentro de los proyectos realizados me dediqué a desarrollar el backend de la nueva aplicación de Burger King (Alsea) para adaptarlo al nuevo modelo de delivery y finalmente formé parte del Capacity Center en Cencosud como desarrollador Backend.',
				en: 'WiTi is a company that develops software solutions for businesses across many industries. I worked on the analysis and development of both web and mobile applications in javascript/typescript: Nestjs/Express, React, Angular 6, Ionic. Additionally offering solutions as an AWS Architect. Among the projects delivered, I built the backend of the new Burger King (Alsea) application to adapt it to the new delivery model, and finally joined the Capacity Center at Cencosud as a Backend developer.'
			},
			tech: [
				'Nest.js',
				'Express',
				'Node.js',
				'TypeScript',
				'React',
				'Angular 6',
				'Ionic',
				'Redux',
				'AWS EC2',
				'AWS S3',
				'AWS Lambda',
				'DynamoDB',
				'PostgreSQL',
				'Swagger'
			]
		},
		{
			id: 'klu',
			company: 'Klu! Trends & Novelties',
			place: 'Provincia de Santiago, Chile',
			role: { en: 'Project Development Coordinator', es: 'Coordinador de desarrollo de proyectos' },
			period: { en: 'Feb 2019 — Aug 2019', es: 'feb 2019 — ago 2019' },
			length: { en: '7 mos', es: '7 meses' },
			desc: { es: 'Desarrollo y coordinación de plataformas tecnológicas.', en: 'Development and coordination of technology platforms.' },
			tech: ['WordPress', 'WooCommerce', 'Shopify', 'Sequelize', 'MySQL', 'Photoshop']
		},
		{
			id: 'gop',
			company: 'Gestión Operativa',
			place: 'Huérfanos 1161, Santiago',
			role: { en: 'Software Developer', es: 'Desarrollador de software' },
			period: { en: 'Dec 2016 — Aug 2017', es: 'dic 2016 — ago 2017' },
			length: { en: '9 mos', es: '9 meses' },
			desc: {
				es: 'Desarrollo de aplicaciones tanto backend como front-end para proyecto de Tesorerías Integrales, basado en tecnologías microsoft, MVC 5.0, Razor, MSSQL, Bootstrap, jQuery, Procedimientos almcenados, modelamiento de base de datos relacionales.',
				en: 'Backend and front-end application development for the Tesorerías Integrales project, based on Microsoft technologies: MVC 5.0, Razor, MSSQL, Bootstrap, jQuery, stored procedures and relational database modelling.'
			},
			tech: ['.NET', 'MVC 5.0', 'Razor', 'MSSQL', 'Bootstrap', 'jQuery', 'Visual Studio']
		},
		{
			id: '160k',
			company: '160K SpA',
			place: 'Santiago, Chile',
			role: { en: '.Net Programmer Analyst for IConstruye', es: 'Analista Programador .Net para IConstruye' },
			period: { en: 'Mar 2016 — May 2016', es: 'mar 2016 — may 2016' },
			length: { en: '3 mos', es: '3 meses' },
			desc: {
				es: 'Proyecto a 3 meses para mejoramiento de funcionalidades de procesos, desarrollo en C#, Razor, MSSQL, WCF. Análisis de proyectos.',
				en: 'Three-month project to improve process functionality, developing in C#, Razor, MSSQL, WCF. Project analysis.'
			},
			tech: ['C#', 'Razor', 'MSSQL', 'WCF']
		},
		{
			id: 'neuronet',
			company: 'Neuronet',
			place: 'Santiago, Chile',
			role: { en: '.Net Developer', es: 'Desarrollador .Net' },
			period: { en: 'Dec 2015 — Jan 2016', es: 'dic 2015 — ene 2016' },
			length: { en: '2 mos', es: '2 meses' },
			desc: {
				es: 'Desarrollador backup de tecnologías .Net WCF, VB.Net C# por periodo de Vacaciones para empresa TW Logística.',
				en: 'Backup developer for .Net WCF, VB.Net and C# technologies during the holiday period for TW Logística.'
			},
			tech: ['.NET', 'WCF', 'VB.Net', 'C#']
		},
		{
			id: 'tcs',
			company: 'Tata Consultancy Services',
			place: "Cencosud's Offices, Mall Florida Center",
			role: { en: 'Front End Developer — Responsive Design', es: 'Front End Developer — Responsive Design' },
			period: { en: 'May 2015 — Aug 2015', es: 'may 2015 — ago 2015' },
			length: { en: '4 mos', es: '4 meses' },
			desc: {
				es: "Front End Development for new Easy's Commerce webpage, based in Websphere commerce from IBM (Aurora Store), FEP8. Developed with web technologies like CSS3, Javascript, JSP and HTML5. I mainly use Eclipse as IDE.",
				en: "Front End Development for new Easy's Commerce webpage, based in Websphere commerce from IBM (Aurora Store), FEP8. Developed with web technologies like CSS3, Javascript, JSP and HTML5. I mainly use Eclipse as IDE."
			},
			tech: ['HTML5', 'CSS3', 'JavaScript', 'JSP', 'WebSphere Commerce', 'Eclipse']
		},
		{
			id: 'galleo',
			company: 'GAL&LEO',
			place: 'Santiago, Chile',
			role: { en: 'Front-End Developer', es: 'Desarrollador Front-End' },
			period: { en: 'Feb 2015 — Jun 2015', es: 'feb 2015 — jun 2015' },
			length: { en: '5 mos', es: '5 meses' },
			desc: {
				es: 'Proyecto a 5 meses para desarrollo de herramientas e interfaces web que apoyen la publicación de material didáctico/educativo. Desarrollos basados principalmente en tecnologías como HTML5, CSS3, Javascript y jQuery, entre otras.',
				en: 'Five-month project building web tools and interfaces supporting the publication of educational material. Development based mainly on HTML5, CSS3, Javascript and jQuery, among others.'
			},
			tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery']
		},
		{
			id: 'ipsos',
			company: 'Ipsos Interactive Services',
			place: 'Santiago, Chile',
			role: { en: 'Associate Scriptwriter', es: 'Associate Scriptwriter' },
			period: { en: 'Mar 2014 — Dec 2014', es: 'mar 2014 — dic 2014' },
			length: { en: '10 mos', es: '10 meses' },
			desc: {
				es: 'Profesional enfocado a la creación de formularios web enfocado a estudios de mercado de clientes tanto nacionales como internacionales. Usando tecnologías como HTML, Javascript, mrScriptBasic.',
				en: 'Focused on building web forms for market research studies for both national and international clients. Using technologies such as HTML, Javascript and mrScriptBasic.'
			},
			tech: ['HTML', 'JavaScript', 'mrScriptBasic']
		}
	];

	const EDU = [
		{
			school: 'Universidad San Sebastián',
			dot: '#addb67',
			title: { en: 'Information Technology Engineering', es: 'Ingeniería en Tecnologías de la Información' },
			period: { en: '2025 — 2027 · in progress', es: '2025 — 2027 · en curso' }
		},
		{
			school: 'Instituto Profesional San Sebastián',
			dot: '#82AAFF',
			title: { en: 'Technician in Programming and Systems Analysis', es: 'Técnico en Programación y Análisis de Sistemas' },
			period: { en: '2022 — 2025', es: '2022 — 2025' }
		},
		{
			school: 'Núcleo Escuela',
			dot: '#c792ea',
			title: { en: 'Diploma — Unreal Engine 5 for Extended Realities', es: 'Diploma — Unreal Engine 5 para Realidades Extendidas' },
			period: { en: '2023', es: '2023' }
		},
		{
			school: 'Duoc UC',
			dot: '#7fdbca',
			title: { en: 'Diploma — Talento Digital: Full Stack Java', es: 'Diplomatura — Talento Digital: Full Stack Java' },
			period: { en: '2020 — 2021', es: '2020 — 2021' }
		},
		{
			school: 'Duoc UC',
			dot: '#5f7e97',
			title: { en: 'Computer Engineering (incomplete)', es: 'Ingeniería Informática (incompleto)' },
			period: { en: '2010 — 2014', es: '2010 — 2014' }
		}
	];

	const COPY = {
		en: {
			cv: 'CV',
			role: 'Senior Software Engineer · CTO · CEO',
			availability: 'Santiago, Chile · Open to conversations',
			intro:
				'Software engineer with ' +
				YEARS +
				'+ years building technology solutions, starting with C# in 2012 and evolving into a JavaScript Full-Stack focus. Today I lead the development of MonCap, an end-to-end logistics management system for Santa Isabel, Easy and Jumbo.',
			hNow: 'Where I am now',
			hExp: 'Experience',
			hEdu: 'Education',
			hCerts: 'Certifications',
			hLangs: 'Languages',
			hPersonal: 'Beyond the keyboard',
			hProjects: 'Side projects',
			expHint: 'tap a role',
			stack: 'Stack & tools',
			quote: 'Understand the business above all else.',
			footerNote: 'Night Owl palette · built with SvelteKit + Tailwind CSS',
			stats: [
				{ value: YEARS + '+', label: 'Years in software' },
				{ value: '2', label: 'Ventures founded' },
				{ value: '3', label: 'Projects in development' },
				{ value: 'Active', label: 'Student mode' }
			],
			interests: {
				robotics: {
					title: 'Robotics',
					body: 'A long-standing interest in building things that move — where software stops being abstract and meets the physical world.',
					tags: ['MicroPython', 'Hardware']
				},
				oboe: {
					title: 'Oboe',
					body: 'Played on my School (Orquesta Infantil Nocedal) and OSEM (Orquesta sinfónica estudiantil metropolitana)',
					tags: ['Orchestra', 'Woodwind']
				},
				rugby: { title: 'Rugby', body: "Player at Nocedal's team and Tabancura Rugby", tags: ['Nocedal', 'Tabancura'] },
				games: { title: 'Videogames', body: 'WoW fan, and Overwatch competitor.', tags: ['WoW', 'Overwatch'] }
			},
			certs: ['TOEIC Bridge, 2014', 'Programa Tecnologías Emergentes y su Impacto en el Mundo Moderno'],
			languages: [
				{ name: 'English', level: 'Full Professional' },
				{ name: 'Spanish', level: 'Native / Bilingual' }
			],
			projects: [
				{ name: 'astralis-group.com', url: 'https://astralis-group.com', desc: 'Digital Marketing and Software Solutions.' },
				{ name: 'Brander.gg', url: 'https://brander.gg', desc: 'Marketing tools platform where I lead technology as CTO.' }
			]
		},
		es: {
			cv: 'CV',
			role: 'Senior Software Engineer · CTO · CEO',
			availability: 'Santiago, Chile · Abierto a conversar',
			intro:
				'Ingeniero de Software con más de ' +
				YEARS +
				' años desarrollando soluciones tecnológicas, comenzando con C# en 2012 y evolucionando hacia un enfoque Full-Stack en JavaScript. Hoy lidero el desarrollo de MonCap, un sistema integral de gestión logística para Santa Isabel, Easy y Jumbo.',
			hNow: 'Dónde estoy hoy',
			hExp: 'Experiencia',
			hEdu: 'Educación',
			hCerts: 'Certificaciones',
			hLangs: 'Idiomas',
			hPersonal: 'Más allá del teclado',
			hProjects: 'Proyectos propios',
			expHint: 'toca un cargo',
			stack: 'Stack y herramientas',
			quote: 'Entender el negocio por sobre todas las cosas',
			footerNote: 'Paleta Night Owl · construido con SvelteKit + Tailwind CSS',
			stats: [
				{ value: YEARS + '+', label: 'Años en software' },
				{ value: '2', label: 'Emprendimientos' },
				{ value: '3', label: 'Proyectos en desarrollo' },
				{ value: 'Activo', label: 'Modo estudiante' }
			],
			interests: {
				robotics: {
					title: 'Robótica',
					body: 'Un interés de larga data por construir cosas que se mueven: donde el software deja de ser abstracto y se encuentra con el mundo físico.',
					tags: ['MicroPython', 'Hardware']
				},
				oboe: {
					title: 'Oboe',
					body: 'Toqué en mi colegio (Orquesta Infantil Nocedal) y en la OSEM (Orquesta Sinfónica Estudiantil Metropolitana)',
					tags: ['Orquesta', 'Viento madera']
				},
				rugby: { title: 'Rugby', body: 'Jugador en el equipo de Nocedal y en Tabancura Rugby', tags: ['Nocedal', 'Tabancura'] },
				games: { title: 'Videojuegos', body: 'Fan de WoW y competidor en Overwatch.', tags: ['WoW', 'Overwatch'] }
			},
			certs: ['TOEIC Bridge, 2014', 'Programa Tecnologías Emergentes y su Impacto en el Mundo Moderno'],
			languages: [
				{ name: 'Inglés', level: 'Full Professional' },
				{ name: 'Español', level: 'Nativo / Bilingüe' }
			],
			projects: [
				{ name: 'astralis-group.com', url: 'https://astralis-group.com', desc: 'Soluciones de marketing digital y software.' },
				{
					name: 'Brander.gg',
					url: 'https://brander.gg',
					desc: 'Plataforma de herramientas de marketing donde lidero la tecnología como CTO.'
				}
			]
		}
	};

	let lang = 'en';
	let openId = null;

	const langBase =
		'padding:6px 11px;border:0;cursor:pointer;font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:700;transition:all .2s ease;';

	function setEn() {
		lang = 'en';
	}
	function setEs() {
		lang = 'es';
	}
	function printCv() {
		window.print();
	}
	function openRoleId(id) {
		openId = id;
	}
	function closeRole() {
		openId = null;
	}
	function handleKeydown(e) {
		if (e.key === 'Escape') closeRole();
	}

	onMount(() => window.addEventListener('keydown', handleKeydown));
	onDestroy(() => {
		if (typeof window !== 'undefined') window.removeEventListener('keydown', handleKeydown);
	});

	function pick(o, lang) {
		return o && typeof o === 'object' && (o.en || o.es) ? o[lang] || o.en : o;
	}
	function mapRole(r, lang) {
		return {
			id: r.id,
			company: r.company,
			place: r.place,
			tech: r.tech,
			hasTech: r.tech.length > 0,
			role: pick(r.role, lang),
			period: pick(r.period, lang),
			length: pick(r.length, lang),
			desc: pick(r.desc, lang),
			badge: pick(r.badge || { en: '', es: '' }, lang)
		};
	}

	$: t = COPY[lang];
	$: enStyle = langBase + (lang === 'en' ? 'background:rgba(214,222,235,.14);color:#d6deeb;' : 'background:transparent;color:#8badc1;');
	$: esStyle = langBase + (lang === 'es' ? 'background:rgba(214,222,235,.14);color:#d6deeb;' : 'background:transparent;color:#8badc1;');
	$: currentRoles = ROLES.filter((r) => r.current).map((r) => mapRole(r, lang));
	$: pastRoles = ROLES.filter((r) => !r.current).map((r) => mapRole(r, lang));
	$: education = EDU.map((e) => ({ school: e.school, dot: e.dot, title: pick(e.title, lang), period: pick(e.period, lang) }));
	$: openRole = openId ? mapRole(ROLES.find((r) => r.id === openId), lang) : null;
</script>

<svelte:head>
	<title>Pablo Durán Celis — CV</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div style="position:relative;min-height:100vh;background:#011627;font-family:Manrope, ui-sans-serif, system-ui, sans-serif;color:#d6deeb;overflow-x:hidden">
	<div style="position:fixed;inset:0;pointer-events:none;overflow:hidden">
		<div
			style="position:absolute;top:-14%;left:6%;width:52vw;height:52vw;border-radius:50%;background:radial-gradient(circle at 40% 40%, rgba(173,219,103,.20), transparent 62%);filter:blur(60px);animation:orbA 30s ease-in-out infinite"
		/>
		<div
			style="position:absolute;top:18%;right:-10%;width:48vw;height:48vw;border-radius:50%;background:radial-gradient(circle at 55% 45%, rgba(130,170,255,.22), transparent 62%);filter:blur(60px);animation:orbB 38s ease-in-out infinite"
		/>
		<div
			style="position:absolute;bottom:-16%;left:26%;width:46vw;height:46vw;border-radius:50%;background:radial-gradient(circle at 50% 50%, rgba(199,146,234,.16), transparent 62%);filter:blur(60px);animation:orbC 34s ease-in-out infinite"
		/>
		<div
			style="position:absolute;inset:0;background-image:linear-gradient(rgba(29,59,83,.30) 1px,transparent 1px),linear-gradient(90deg,rgba(29,59,83,.30) 1px,transparent 1px);background-size:72px 72px"
		/>
	</div>

	<header data-header class="no-print" style="position:sticky;top:0;z-index:50;padding:14px 24px 0">
		<div
			data-headerbar
			style="max-width:1280px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:9px 12px 9px 16px;border-radius:999px;background:rgba(11,41,66,.55);backdrop-filter:blur(28px) saturate(180%);-webkit-backdrop-filter:blur(28px) saturate(180%);border:1px solid rgba(127,219,202,.12);box-shadow:0 10px 34px rgba(0,6,14,.44), inset 0 1px 0 rgba(214,222,235,.07)"
		>
			<div style="display:flex;align-items:center;gap:11px;min-width:0">
				<span
					style="width:26px;height:26px;border-radius:8px;background:#addb67;color:#011627;font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0"
					>PD</span
				>
				<span data-name-inline style="font-weight:700;font-size:14px;letter-spacing:-0.015em;white-space:nowrap">Pablo Durán Celis</span>
				<span
					data-role-line
					style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:#5f7e97;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"
					>{t.role}</span
				>
			</div>
			<div style="display:flex;align-items:center;gap:9px;flex-shrink:0">
				<div style="display:flex;border:1px solid rgba(127,219,202,.14);border-radius:999px;overflow:hidden;font-family:'JetBrains Mono',monospace;font-size:11px">
					<button on:click={setEn} style={enStyle}>EN</button>
					<button on:click={setEs} style={esStyle}>ES</button>
				</div>
				<button class="btn-cv" on:click={printCv}>
					<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
						><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M4 21h16" /></svg
					>
					{t.cv}
				</button>
			</div>
		</div>
	</header>

	<main data-main style="position:relative;max-width:1280px;margin:0 auto;padding:22px 24px 40px;display:flex;flex-direction:column;gap:14px">
		<div data-bento style="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:14px">
			<div
				data-wide
				data-identity
				style="grid-column:span 5;grid-row:span 2;display:flex;flex-direction:column;gap:18px;padding:26px;border-radius:24px;background:rgba(29,59,83,.34);backdrop-filter:blur(30px) saturate(175%);-webkit-backdrop-filter:blur(30px) saturate(175%);border:1px solid rgba(214,222,235,.10);box-shadow:0 14px 40px rgba(0,6,14,.42), inset 0 1px 0 rgba(214,222,235,.08);animation:rise .7s cubic-bezier(.2,.7,.2,1) both"
			>
				<div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap">
					<img
						src={profilePicture}
						alt="Pablo Durán Celis"
						style="width:88px;height:88px;border-radius:20px;object-fit:cover;object-position:center 20%;border:1px solid rgba(214,222,235,.14);flex-shrink:0"
					/>
					<div style="min-width:0">
						<h1 data-name style="margin:0;font-size:clamp(24px,2.1vw,30px);line-height:1.06;font-weight:800;letter-spacing:-0.035em;color:#fff">
							Pablo<br />Durán Celis
						</h1>
						<div
							style="display:flex;align-items:center;gap:8px;margin-top:10px;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;color:#7fdbca"
						>
							<span style="width:6px;height:6px;border-radius:50%;background:#addb67;animation:pulseDot 2.6s ease-in-out infinite;flex-shrink:0" />
							<span>{t.availability}</span>
						</div>
					</div>
				</div>
				<p style="margin:0;font-size:14.5px;line-height:1.68;color:#8badc1;text-wrap:pretty">{t.intro}</p>
				<div style="padding:16px 18px;border-radius:15px;background:rgba(1,22,39,.42);border:1px solid rgba(236,196,141,.16)">
					<p style="margin:0;font-size:14.5px;line-height:1.5;font-weight:600;color:#ecc48d;letter-spacing:-0.012em;text-wrap:pretty">
						&ldquo;{t.quote}&rdquo;
					</p>
				</div>
				<div data-contact class="no-print" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:auto">
					<a class="link-mail" href="mailto:duran.pablo.c+website@gmail.com" style="display:flex;align-items:center;gap:8px;padding:10px 15px;border-radius:11px;background:#addb67;color:#011627;font-size:12.5px;font-weight:700;transition:all .25s ease">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
							><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg
						>
						duran.pablo.c@gmail.com
					</a>
					<a
						class="link-linkedin"
						href="https://www.linkedin.com/in/paceduran"
						target="_blank"
						rel="noopener"
						style="display:flex;align-items:center;gap:7px;padding:10px 15px;border-radius:11px;border:1px solid rgba(130,170,255,.24);background:rgba(130,170,255,.09);color:#82AAFF;font-size:12.5px;font-weight:600;transition:all .25s ease"
					>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
							/></svg
						>
						LinkedIn
					</a>
					<a
						class="link-github"
						href="https://github.com/KrakeX"
						target="_blank"
						rel="noopener"
						style="display:flex;align-items:center;gap:7px;padding:10px 15px;border-radius:11px;border:1px solid rgba(199,146,234,.24);background:rgba(199,146,234,.09);color:#c792ea;font-size:12.5px;font-weight:600;transition:all .25s ease"
					>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"
							/></svg
						>
						KrakeX
					</a>
				</div>
			</div>

			<div
				data-wide
				style="grid-column:span 7;padding:22px 24px;border-radius:24px;background:rgba(29,59,83,.30);backdrop-filter:blur(30px) saturate(175%);-webkit-backdrop-filter:blur(30px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 14px 40px rgba(0,6,14,.38), inset 0 1px 0 rgba(214,222,235,.07);animation:rise .7s .06s cubic-bezier(.2,.7,.2,1) both"
			>
				<h2 style="margin:0 0 16px;font-size:11.5px;letter-spacing:.17em;text-transform:uppercase;font-weight:700;color:#7fdbca">{t.hNow}</h2>
				<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:10px">
					{#each currentRoles as r (r.id)}
						<button class="role-current-card" on:click={() => openRoleId(r.id)} style="text-align:left;cursor:pointer;font-family:inherit;display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:16px;border:1px solid rgba(214,222,235,.09);background:rgba(1,22,39,.38);transition:all .3s cubic-bezier(.2,.7,.2,1)">
							<span style="align-self:flex-start;font-family:'JetBrains Mono',monospace;font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:#011627;background:#addb67;padding:3px 7px;border-radius:4px;font-weight:700">{r.badge}</span>
							<span style="font-size:16px;font-weight:700;color:#fff;letter-spacing:-0.02em;line-height:1.2">{r.company}</span>
							<span style="font-size:12px;color:#82AAFF;line-height:1.4;font-weight:500">{r.role}</span>
							<span style="font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#5f7e97;margin-top:auto">{r.period}</span>
						</button>
					{/each}
				</div>
			</div>

			<div data-wide style="grid-column:span 7;display:grid;grid-template-columns:repeat(auto-fit,minmax(118px,1fr));gap:14px">
				{#each t.stats as s}
					<div
						style="padding:18px 16px;border-radius:20px;background:rgba(29,59,83,.30);backdrop-filter:blur(26px) saturate(170%);-webkit-backdrop-filter:blur(26px) saturate(170%);border:1px solid rgba(214,222,235,.09);box-shadow:0 10px 30px rgba(0,6,14,.34), inset 0 1px 0 rgba(214,222,235,.07);animation:rise .7s .1s cubic-bezier(.2,.7,.2,1) both"
					>
						<div style="font-family:'JetBrains Mono',monospace;font-size:26px;font-weight:700;color:#addb67;letter-spacing:-0.035em;line-height:1">{s.value}</div>
						<div style="margin-top:7px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:#8badc1;font-weight:600;line-height:1.35">{s.label}</div>
					</div>
				{/each}
			</div>
		</div>

		<div data-bento style="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:14px">
			<div
				data-wide
				style="grid-column:span 7;padding:22px 24px;border-radius:24px;background:rgba(29,59,83,.30);backdrop-filter:blur(30px) saturate(175%);-webkit-backdrop-filter:blur(30px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 14px 40px rgba(0,6,14,.38), inset 0 1px 0 rgba(214,222,235,.07)"
			>
				<div style="display:flex;align-items:baseline;justify-content:space-between;gap:14px;margin-bottom:12px">
					<h2 style="margin:0;font-size:11.5px;letter-spacing:.17em;text-transform:uppercase;font-weight:700;color:#7fdbca">{t.hExp}</h2>
					<span style="font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#5f7e97">{t.expHint}</span>
				</div>
				<div style="display:flex;flex-direction:column">
					{#each pastRoles as r (r.id)}
						<button data-exp-row on:click={() => openRoleId(r.id)} style="cursor:pointer;font-family:inherit;text-align:left;display:grid;grid-template-columns:112px minmax(0,1fr) 16px;gap:14px;align-items:center;padding:11px 12px;border:0;border-radius:11px;background:transparent;transition:all .24s ease">
							<span data-exp-period style="font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#5f7e97;white-space:nowrap">{r.period}</span>
							<span style="display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 10px;min-width:0">
								<span style="font-size:14.5px;font-weight:700;color:#d6deeb;letter-spacing:-0.015em">{r.company}</span>
								<span style="font-size:12px;color:#8badc1">{r.role}</span>
							</span>
							<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5f7e97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
						</button>
					{/each}
				</div>
			</div>

			<div
				data-wide
				style="grid-column:span 5;padding:22px 24px;border-radius:24px;background:rgba(29,59,83,.30);backdrop-filter:blur(30px) saturate(175%);-webkit-backdrop-filter:blur(30px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 14px 40px rgba(0,6,14,.38), inset 0 1px 0 rgba(214,222,235,.07)"
			>
				<h2 style="margin:0 0 16px;font-size:11.5px;letter-spacing:.17em;text-transform:uppercase;font-weight:700;color:#7fdbca">{t.hEdu}</h2>
				<div style="display:flex;flex-direction:column;gap:14px">
					{#each education as e}
						<div style="display:grid;grid-template-columns:9px 1fr;gap:13px;align-items:start">
							<span style="width:8px;height:8px;border-radius:50%;background:{e.dot};margin-top:6px" />
							<div style="min-width:0">
								<div style="font-size:13.5px;font-weight:700;color:#d6deeb;letter-spacing:-0.012em;line-height:1.35;text-wrap:pretty">{e.title}</div>
								<div style="margin-top:3px;font-size:12px;color:#8badc1">{e.school}</div>
								<div style="margin-top:3px;font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#5f7e97">{e.period}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div data-bento style="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:14px">
			<div class="interest-robotics" style="grid-column:span 3;padding:20px;border-radius:22px;background:rgba(29,59,83,.30);backdrop-filter:blur(28px) saturate(175%);-webkit-backdrop-filter:blur(28px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 12px 34px rgba(0,6,14,.36), inset 0 1px 0 rgba(214,222,235,.07);display:flex;flex-direction:column;gap:11px;transition:all .3s cubic-bezier(.2,.7,.2,1)">
				<div style="display:flex;align-items:center;gap:11px">
					<span style="width:34px;height:34px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:rgba(127,219,202,.13);color:#7fdbca;flex-shrink:0">
						<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
							><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V4M9 2h6" /><circle cx="9" cy="14" r="1.2" /><circle cx="15" cy="14" r="1.2" /><path
								d="M1 13v3M23 13v3"
							/></svg
						>
					</span>
					<h3 style="margin:0;font-size:16px;font-weight:700;color:#fff;letter-spacing:-0.02em">{t.interests.robotics.title}</h3>
				</div>
				<p style="margin:0;font-size:13px;line-height:1.62;color:#8badc1;text-wrap:pretty">{t.interests.robotics.body}</p>
				<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:auto">
					{#each t.interests.robotics.tags as tag}
						<span style="font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 8px;border-radius:5px;background:rgba(1,22,39,.5);color:#8badc1">{tag}</span>
					{/each}
				</div>
			</div>

			<div class="interest-oboe" style="grid-column:span 3;padding:20px;border-radius:22px;background:rgba(29,59,83,.30);backdrop-filter:blur(28px) saturate(175%);-webkit-backdrop-filter:blur(28px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 12px 34px rgba(0,6,14,.36), inset 0 1px 0 rgba(214,222,235,.07);display:flex;flex-direction:column;gap:11px;transition:all .3s cubic-bezier(.2,.7,.2,1)">
				<div style="display:flex;align-items:center;gap:11px">
					<span style="width:34px;height:34px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:rgba(236,196,141,.13);color:#ecc48d;flex-shrink:0">
						<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
							><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg
						>
					</span>
					<h3 style="margin:0;font-size:16px;font-weight:700;color:#fff;letter-spacing:-0.02em">{t.interests.oboe.title}</h3>
				</div>
				<p style="margin:0;font-size:13px;line-height:1.62;color:#8badc1;text-wrap:pretty">{t.interests.oboe.body}</p>
				<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:auto">
					{#each t.interests.oboe.tags as tag}
						<span style="font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 8px;border-radius:5px;background:rgba(1,22,39,.5);color:#8badc1">{tag}</span>
					{/each}
				</div>
			</div>

			<div class="interest-rugby" style="grid-column:span 3;padding:20px;border-radius:22px;background:rgba(29,59,83,.30);backdrop-filter:blur(28px) saturate(175%);-webkit-backdrop-filter:blur(28px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 12px 34px rgba(0,6,14,.36), inset 0 1px 0 rgba(214,222,235,.07);display:flex;flex-direction:column;gap:11px;transition:all .3s cubic-bezier(.2,.7,.2,1)">
				<div style="display:flex;align-items:center;gap:11px">
					<span style="width:34px;height:34px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:rgba(255,88,116,.13);color:#ff5874;flex-shrink:0">
						<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
							><path d="M3 21c0-9 9-18 18-18 0 9-9 18-18 18Z" /><path d="m9 15 6-6M11 11l1.5 1.5M13 9l1.5 1.5" /></svg
						>
					</span>
					<h3 style="margin:0;font-size:16px;font-weight:700;color:#fff;letter-spacing:-0.02em">{t.interests.rugby.title}</h3>
				</div>
				<p style="margin:0;font-size:13px;line-height:1.62;color:#8badc1;text-wrap:pretty">{t.interests.rugby.body}</p>
				<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:auto">
					{#each t.interests.rugby.tags as tag}
						<span style="font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 8px;border-radius:5px;background:rgba(1,22,39,.5);color:#8badc1">{tag}</span>
					{/each}
				</div>
			</div>

			<div class="interest-games" style="grid-column:span 3;padding:20px;border-radius:22px;background:rgba(29,59,83,.30);backdrop-filter:blur(28px) saturate(175%);-webkit-backdrop-filter:blur(28px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 12px 34px rgba(0,6,14,.36), inset 0 1px 0 rgba(214,222,235,.07);display:flex;flex-direction:column;gap:11px;transition:all .3s cubic-bezier(.2,.7,.2,1)">
				<div style="display:flex;align-items:center;gap:11px">
					<span style="width:34px;height:34px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:rgba(199,146,234,.13);color:#c792ea;flex-shrink:0">
						<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
							><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" /><rect x="2" y="6" width="20" height="12" rx="6" /></svg
						>
					</span>
					<h3 style="margin:0;font-size:16px;font-weight:700;color:#fff;letter-spacing:-0.02em">{t.interests.games.title}</h3>
				</div>
				<p style="margin:0;font-size:13px;line-height:1.62;color:#8badc1;text-wrap:pretty">{t.interests.games.body}</p>
				<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:auto">
					{#each t.interests.games.tags as tag}
						<span style="font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 8px;border-radius:5px;background:rgba(1,22,39,.5);color:#8badc1">{tag}</span>
					{/each}
				</div>
			</div>
		</div>

		<div data-bento style="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:14px">
			<div style="grid-column:span 5;padding:22px 24px;border-radius:24px;background:rgba(29,59,83,.30);backdrop-filter:blur(28px) saturate(175%);-webkit-backdrop-filter:blur(28px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 12px 34px rgba(0,6,14,.36), inset 0 1px 0 rgba(214,222,235,.07)">
				<h2 style="margin:0 0 14px;font-size:11.5px;letter-spacing:.17em;text-transform:uppercase;font-weight:700;color:#7fdbca">{t.hProjects}</h2>
				<div style="display:flex;flex-direction:column;gap:9px">
					{#each t.projects as p}
						<a class="project-link" href={p.url} target="_blank" rel="noopener" style="display:flex;flex-direction:column;gap:5px;padding:13px 15px;border-radius:14px;border:1px solid rgba(214,222,235,.08);background:rgba(1,22,39,.4);color:#d6deeb;transition:all .26s cubic-bezier(.2,.7,.2,1)">
							<span style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:700;color:#c792ea">{p.name}</span>
							<span style="font-size:12.5px;line-height:1.55;color:#8badc1">{p.desc}</span>
						</a>
					{/each}
				</div>
			</div>

			<div style="grid-column:span 4;padding:22px 24px;border-radius:24px;background:rgba(29,59,83,.30);backdrop-filter:blur(28px) saturate(175%);-webkit-backdrop-filter:blur(28px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 12px 34px rgba(0,6,14,.36), inset 0 1px 0 rgba(214,222,235,.07)">
				<h2 style="margin:0 0 14px;font-size:11.5px;letter-spacing:.17em;text-transform:uppercase;font-weight:700;color:#7fdbca">{t.hCerts}</h2>
				<div style="display:flex;flex-direction:column;gap:9px">
					{#each t.certs as c}
						<div style="padding:12px 14px;border-radius:13px;border:1px solid rgba(214,222,235,.08);background:rgba(1,22,39,.4);font-size:12.5px;line-height:1.5;color:#d6deeb;text-wrap:pretty">{c}</div>
					{/each}
				</div>
			</div>

			<div data-wide style="grid-column:span 3;padding:22px 24px;border-radius:24px;background:rgba(29,59,83,.30);backdrop-filter:blur(28px) saturate(175%);-webkit-backdrop-filter:blur(28px) saturate(175%);border:1px solid rgba(214,222,235,.09);box-shadow:0 12px 34px rgba(0,6,14,.36), inset 0 1px 0 rgba(214,222,235,.07)">
				<h2 style="margin:0 0 14px;font-size:11.5px;letter-spacing:.17em;text-transform:uppercase;font-weight:700;color:#7fdbca">{t.hLangs}</h2>
				<div style="display:flex;flex-wrap:wrap;gap:11px 44px">
					{#each t.languages as l}
						<div style="display:flex;flex-direction:column;gap:2px">
							<span style="font-size:13.5px;font-weight:700;color:#d6deeb">{l.name}</span>
							<span style="font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#addb67">{l.level}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div style="display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;padding:4px 8px;font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#5f7e97">
			<span>+56 9 7807 9668 · Santiago, Chile</span>
			<span>{t.footerNote}</span>
		</div>
	</main>

	{#if openRole}
		<div data-modal-wrap class="no-print" style="position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:32px">
			<div
				on:click={closeRole}
				on:keydown={(e) => e.key === 'Enter' && closeRole()}
				role="button"
				tabindex="0"
				aria-label="Close"
				style="position:absolute;inset:0;background:rgba(1,12,22,.62);backdrop-filter:blur(16px) saturate(120%);-webkit-backdrop-filter:blur(16px) saturate(120%);animation:fadeIn .28s ease both"
			/>
			<div
				data-modal
				style="position:relative;width:640px;max-width:100%;max-height:100%;overflow-y:auto;padding:34px;border-radius:28px;background:rgba(29,59,83,.52);backdrop-filter:blur(40px) saturate(190%);-webkit-backdrop-filter:blur(40px) saturate(190%);border:1px solid rgba(214,222,235,.16);box-shadow:0 40px 90px rgba(0,4,10,.66), inset 0 1px 0 rgba(214,222,235,.12);animation:comeForward .5s cubic-bezier(.16,.9,.3,1) both"
			>
				<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:20px">
					<div style="min-width:0">
						<span style="font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#7fdbca">{openRole.period}</span>
						<h3 style="margin:9px 0 0;font-size:28px;font-weight:800;letter-spacing:-0.032em;color:#fff;line-height:1.12">{openRole.company}</h3>
						<p style="margin:8px 0 0;font-size:15px;color:#82AAFF;font-weight:600">{openRole.role}</p>
					</div>
					<button class="modal-close" on:click={closeRole} style="width:34px;height:34px;border-radius:11px;border:1px solid rgba(214,222,235,.14);background:rgba(1,22,39,.4);color:#8badc1;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .22s ease;flex-shrink:0">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
					</button>
				</div>
				<div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:16px">
					<span style="font-family:'JetBrains Mono',monospace;font-size:10.5px;padding:5px 10px;border-radius:6px;background:rgba(1,22,39,.5);color:#7fdbca">{openRole.length}</span>
					<span style="font-family:'JetBrains Mono',monospace;font-size:10.5px;padding:5px 10px;border-radius:6px;background:rgba(1,22,39,.5);color:#ecc48d">{openRole.place}</span>
				</div>
				<div style="height:1px;background:rgba(214,222,235,.10);margin:24px 0" />
				<p style="margin:0;font-size:14.5px;line-height:1.78;color:#8badc1;text-wrap:pretty">{openRole.desc}</p>
				{#if openRole.hasTech}
					<div>
						<h4 style="margin:26px 0 12px;font-size:10.5px;letter-spacing:.15em;text-transform:uppercase;color:#5f7e97;font-weight:700">{t.stack}</h4>
						<div style="display:flex;flex-wrap:wrap;gap:6px">
							{#each openRole.tech as tag}
								<span style="font-family:'JetBrains Mono',monospace;font-size:11.5px;padding:6px 11px;border-radius:8px;border:1px solid rgba(173,219,103,.20);background:rgba(173,219,103,.08);color:#addb67">{tag}</span>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	:global(body) {
		margin: 0;
	}
	a {
		color: #addb67;
		text-decoration: none;
	}
	a:hover {
		color: #c9f09a;
	}
	:global(::selection) {
		background: #1d3b53;
		color: #fff;
	}

	.btn-cv {
		display: flex;
		align-items: center;
		gap: 7px;
		padding: 8px 15px;
		border-radius: 999px;
		border: 1px solid rgba(173, 219, 103, 0.28);
		background: rgba(173, 219, 103, 0.1);
		color: #addb67;
		font-family: Manrope, sans-serif;
		font-size: 12.5px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.25s ease;
	}
	.btn-cv:hover {
		background: rgba(173, 219, 103, 0.2) !important;
		border-color: #addb67 !important;
	}
	.link-mail:hover {
		background: #c9f09a !important;
		transform: translateY(-1px) !important;
	}
	.link-linkedin:hover {
		background: rgba(130, 170, 255, 0.2) !important;
	}
	.link-github:hover {
		background: rgba(199, 146, 234, 0.2) !important;
	}
	.role-current-card:hover {
		border-color: rgba(173, 219, 103, 0.55) !important;
		background: rgba(173, 219, 103, 0.09) !important;
		transform: translateY(-2px) !important;
	}
	[data-exp-row]:hover {
		background: rgba(1, 22, 39, 0.5) !important;
		transform: translateX(3px) !important;
	}
	.interest-robotics:hover {
		border-color: rgba(127, 219, 202, 0.5) !important;
		transform: translateY(-3px) !important;
	}
	.interest-oboe:hover {
		border-color: rgba(236, 196, 141, 0.5) !important;
		transform: translateY(-3px) !important;
	}
	.interest-rugby:hover {
		border-color: rgba(255, 88, 116, 0.5) !important;
		transform: translateY(-3px) !important;
	}
	.interest-games:hover {
		border-color: rgba(199, 146, 234, 0.5) !important;
		transform: translateY(-3px) !important;
	}
	.project-link:hover {
		border-color: rgba(199, 146, 234, 0.5) !important;
		transform: translateY(-2px) !important;
	}
	.modal-close:hover {
		border-color: #ff5874 !important;
		color: #ff5874 !important;
	}

	@keyframes orbA {
		0%,
		100% {
			transform: translate3d(0, 0, 0) scale(1);
		}
		50% {
			transform: translate3d(6%, -5%, 0) scale(1.14);
		}
	}
	@keyframes orbB {
		0%,
		100% {
			transform: translate3d(0, 0, 0) scale(1.05);
		}
		50% {
			transform: translate3d(-7%, 6%, 0) scale(0.92);
		}
	}
	@keyframes orbC {
		0%,
		100% {
			transform: translate3d(0, 0, 0) scale(0.95);
		}
		50% {
			transform: translate3d(4%, 7%, 0) scale(1.1);
		}
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(18px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes comeForward {
		0% {
			opacity: 0;
			transform: scale(0.9) translateY(26px);
		}
		60% {
			opacity: 1;
			transform: scale(1.012) translateY(-3px);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}
	@keyframes pulseDot {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.35;
			transform: scale(0.8);
		}
	}

	@media (max-width: 1080px) {
		[data-bento] {
			grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
		}
		[data-bento] > * {
			grid-column: span 1 !important;
			grid-row: auto !important;
		}
		[data-bento] > [data-wide] {
			grid-column: span 2 !important;
		}
	}
	@media (max-width: 720px) {
		[data-bento] {
			grid-template-columns: minmax(0, 1fr) !important;
		}
		[data-bento] > *,
		[data-bento] > [data-wide] {
			grid-column: span 1 !important;
		}
	}
	@media (max-width: 900px) {
		[data-role-line] {
			display: none !important;
		}
	}
	@media (max-width: 720px) {
		[data-header] {
			padding: 10px 12px 0 !important;
		}
		[data-headerbar] {
			gap: 10px !important;
			padding: 8px 8px 8px 12px !important;
		}
		[data-main] {
			padding: 14px 12px 28px !important;
			gap: 12px !important;
		}
		[data-identity] {
			padding: 20px !important;
			gap: 15px !important;
		}
		[data-name] {
			font-size: 26px !important;
		}
		[data-exp-row] {
			grid-template-columns: minmax(0, 1fr) 16px !important;
			row-gap: 1px !important;
			padding: 10px !important;
		}
		[data-exp-period] {
			grid-column: 1 / -1 !important;
		}
		[data-modal-wrap] {
			padding: 12px !important;
		}
		[data-modal] {
			padding: 22px !important;
			border-radius: 22px !important;
		}
	}
	@media (max-width: 440px) {
		[data-name-inline] {
			display: none !important;
		}
		[data-contact] a {
			width: 100% !important;
			justify-content: center !important;
		}
		[data-name] {
			font-size: 24px !important;
		}
	}
	@media print {
		.no-print {
			display: none !important;
		}
	}
</style>
