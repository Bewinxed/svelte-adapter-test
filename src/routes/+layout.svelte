<script lang="ts">
	import { ConnectionProvider, WalletProvider } from '@bewinxed/wallet-adapter-svelte';

	import { Toaster, toast } from 'svelte-sonner';

	import '../app.css';
	// import '../lib/app.css';
	import type { Snippet } from 'svelte';
	import { WalletModalProvider } from '@bewinxed/wallet-adapter-svelte-ui';

	let {
		children
	}: {
		children: Snippet;
	} = $props();

	const wallets = [
		// new UnsafeBurnerWalletAdapter(),
		// new PhantomWalletAdapter(),
		// new SolflareWalletAdapter(),
		// new MathWalletAdapter()
	];
</script>

<ConnectionProvider config={{}} endpoint="https://api.devnet.solana.com">
	<WalletProvider
		{wallets}
		onconnect={(address) => {
			toast.message('Connected to ' + address);
		}}
		ondisconnect={() => {
			toast.message('Disconnected');
		}}
		onerror={(error) => {
			toast.error(error.message);
		}}
	>
		<WalletModalProvider>
			{@render children()}
		</WalletModalProvider>
	</WalletProvider>
</ConnectionProvider>
<Toaster />

<style>
</style>
