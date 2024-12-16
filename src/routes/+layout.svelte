<script lang="ts">
	import '@/app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/martian-mono';

	import { metadata } from '@/lib/metadata';

	let { children } = $props();
	const { title, description } = metadata;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main
	class="flex min-h-dvh flex-col items-center overflow-hidden bg-neutral-200 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-200"
>
	{@render children()}
</main>

<style lang="postcss">
	:global(p) {
		@apply text-pretty;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		@apply text-balance;
	}
</style>
