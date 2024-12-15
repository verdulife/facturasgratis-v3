<script>
	let { label, value = $bindable(), options } = $props();
</script>

<label class="flex flex-col items-start">
	<span
		class="ml-2 rounded-tl rounded-tr bg-neutral-950 px-3 py-1 font-mono text-xs uppercase text-neutral-400"
	>
		{label}
	</span>

	<select
		bind:value
		required
		class="w-full appearance-none rounded border border-neutral-950 bg-neutral-800 px-4 py-2 text-lg shadow-inner shadow-black/50 outline-none"
	>
		{#each options as { value, label }}
			<option {value}>{label}</option>
		{/each}
	</select>
</label>
