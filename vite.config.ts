import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {},
	optimizeDeps: {
		exclude: ['@bewinxed/wallet-adapter-svelte']
	}
});
