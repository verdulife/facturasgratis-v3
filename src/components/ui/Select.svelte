<script>
	let { label, value = $bindable(null), options, placeholder = null } = $props();
</script>

<label class="group flex grow flex-col items-start">
	<span
		class="ml-2 rounded-tl rounded-tr bg-neutral-950 px-2 py-1 font-mono text-xs text-neutral-400 shadow group-focus-within:bg-yellow-300 group-focus-within:text-neutral-900"
	>
		{label}
	</span>

	<select
		bind:value
		required
		class="text-md w-full appearance-none rounded border border-neutral-950 bg-neutral-900 px-4 py-3 outline-none group-focus-within:border-yellow-300"
	>
		{#if placeholder}
			<option {value} disabled>{placeholder}</option>
		{/if}
		{#each options as { value, label }}
			<option {value}>{label}</option>
		{/each}
	</select>
</label>
