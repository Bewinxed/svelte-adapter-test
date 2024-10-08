<script lang="ts">
	import { useSolana } from '@bewinxed/wallet-adapter-svelte';
	import { WalletMultiButton } from '@bewinxed/wallet-adapter-svelte-ui';
</script>

<div
	class="from-purple container m-auto grid h-screen w-screen flex-col place-content-center place-items-center gap-2 bg-gradient-to-br to-green-400 p-4"
>
	<!-- <button onclick={() => solana.context.wallet?.connect()}>Connect</button>
	<button onclick={() => solana.context.wallet?.disconnect()}>Disconnect</button> -->

	<img src="/banner.png" alt="banner" class="w-96" />
	<ul class="flex flex-col gap-2 place-self-center">
		<span class="place-self-start text-start font-bold">Solana On Svelte</span>
		<li>* Auto Detected Wallets ;</li>
		<li>* Revamped UI ;</li>
		<li>* Feature parity with react version</li>
	</ul>
	<WalletMultiButton class="scale-100 place-self-center bg-white" />
	<!-- <WalletConnectButton /> -->
	<!-- <WalletDisconnectButton /> -->
	<!-- <h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
</div>
