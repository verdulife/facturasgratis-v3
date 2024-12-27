<script lang="ts">
	let { type = null, click = $bindable(), children } = $props();
</script>

<button
	{type}
	onclick={click}
	class="min-w-60 rounded bg-yellow-300 px-6 py-3 text-sm font-bold text-black hover:bg-yellow-400"
>
	{@render children()}
</button>
