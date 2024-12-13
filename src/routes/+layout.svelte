<script lang="ts">
	import '@/app.css';
	import { metadata } from '@/lib/metadata';

	let { children } = $props();
	const { title, description } = metadata;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main class="flex min-h-dvh flex-col items-center overflow-hidden">
	{@render children()}
</main>

<style lang="postcss">
	:global(:root) {
		@apply scroll-smooth;
	}

	:global(p) {
		@apply text-pretty;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		@apply text-balance;
	}
</style>
