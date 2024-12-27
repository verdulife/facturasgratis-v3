<script>
	let {
		label,
		type,
		size = null,
		placeholder = null,
		disabled = false,
		value = $bindable(null),
		optional = false,
		className = null
	} = $props();
</script>

<label
	class="group flex flex-col items-start {className}"
	title={disabled ? 'Este campo está deshabilitado.' : null}
>
	<span
		class="ml-2 rounded-tl rounded-tr bg-neutral-950 px-2 py-1 font-mono text-xs text-neutral-400 shadow transition group-focus-within:bg-yellow-300 group-focus-within:text-neutral-900"
	>
		{label}
		{#if optional}
			<small>(Opcional)</small>
		{/if}
	</span>

	<input
		{type}
		{size}
		{placeholder}
		{disabled}
		bind:value
		required={!optional}
		class="text-md w-full rounded border border-neutral-950 bg-neutral-900 px-4 py-3 outline-none transition placeholder:text-neutral-600 disabled:cursor-not-allowed group-focus-within:border-yellow-300 group-focus-within:shadow-black"
	/>
</label>
