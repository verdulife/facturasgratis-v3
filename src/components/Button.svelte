<script lang="ts">
	let { type = null, click = $bindable(), children } = $props();
</script>

<button class="bg-yellow-300 min-w-60 text-sm hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded" on:click={click}>
	{@render children()}
</button>
