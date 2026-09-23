// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://skybridgeit.com',
	output: 'static',
	compressHTML: true,
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sitemap({
			filter: (page) =>
				!page.includes('/coming-soon') &&
				!page.includes('/blog/') &&
				!page.includes('/portfolio/'),
		}),
	],
});