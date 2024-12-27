<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-col gap-4 lg:flex-row items-end">
	{@render children()}
</div>
