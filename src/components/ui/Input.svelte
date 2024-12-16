<script>
	let { label, type, size = null, value = $bindable(), className = null } = $props();
</script>

<label class="group flex flex-col items-start {className}">
	<span
		class="ml-2 rounded-tl rounded-tr bg-neutral-800 px-2 py-1 font-mono text-xs text-neutral-400 shadow transition group-focus-within:bg-yellow-300 group-focus-within:text-neutral-900"
	>
		{label}
	</span>

	<input
		{type}
		{size}
		bind:value
		required
		class="text-md w-full rounded border border-neutral-800 bg-neutral-950 px-4 py-3 shadow-inner shadow-black/50 outline-none transition group-focus-within:border-yellow-300 group-focus-within:shadow-black"
	/>
</label>
