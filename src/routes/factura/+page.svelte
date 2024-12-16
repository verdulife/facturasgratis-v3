<script lang="ts">
	import { SellersStore } from '@/lib/stores';

	import Button from '@/components/Button.svelte';
	import Fieldset from '@/components/ui/Fieldset.svelte';
	import Row from '@/components/ui/Row.svelte';

	function handleSubmit(ev: Event) {
		ev.preventDefault();
	}
</script>

<section class="flex w-full max-w-3xl flex-col items-center gap-8 p-8 pt-48">
	<h1 class="text-4xl font-medium">Crear factura</h1>
	<p>⚠️ Trabajo en progreso</p>

	<p>Factura desde</p>
	<p>{$SellersStore[0].TaxIdentification.TaxIdentificationNumber}</p>

	<form class="flex w-full flex-col gap-4" onsubmit={handleSubmit}>
		<Fieldset legend="Datos del emisor">
			<Row>Working...</Row>
		</Fieldset>

		<div class="mt-8 flex w-full justify-center">
			<Button type="submit">Crear emisor</Button>
		</div>
	</form>
</section>
