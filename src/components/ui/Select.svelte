<script>
	let { label, value = $bindable(), options } = $props();
</script>

<label class="flex flex-col items-start group grow">
	<span
		class="ml-2 rounded-tl rounded-tr bg-neutral-800 px-2 py-1 font-mono text-xs shadow text-neutral-400 group-focus-within:bg-yellow-300 group-focus-within:text-neutral-900"
	>
		{label}
	</span>

	<select
		bind:value
		required
		class="text-md w-full appearance-none rounded border border-neutral-800 bg-neutral-950 px-4 py-3 shadow-inner shadow-black outline-none group-focus-within:border-yellow-300"
	>
		{#each options as { value, label }}
			<option {value}>{label}</option>
		{/each}
	</select>
</label>