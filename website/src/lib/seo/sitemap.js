import { jobs } from '../../utils/json/jobs.js';
import { CONTENT_LAST_MODIFIED } from './config.js';

export const jobPaths = () => jobs.map((j) => `/job/${j.id}`);

export const sitemapEntries = () =>
	['/', ...jobPaths()].map((path) => ({ path, lastmod: CONTENT_LAST_MODIFIED }));
