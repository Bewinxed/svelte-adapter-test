import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@bewinxed/wallet-adapter-svelte-ui/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {}
	}
} as Config;
