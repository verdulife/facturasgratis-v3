<script lang="ts">
	let { legend, children } = $props();
</script>

<div class="flex flex-col rounded border border-neutral-800 bg-neutral-900 shadow">
	<fieldset class="flex flex-col gap-4 px-6 py-8">
		<legend class="rounded-bl rounded-br bg-yellow-300 text-neutral-900 px-4 py-2 font-mono text-xs shadow">
			{legend}
		</legend>

		{@render children()}
	</fieldset>
</div>
