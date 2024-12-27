<script lang="ts">
	import { SellersStore, currentSellerStore } from '@/lib/stores';
	import { InvoiceDefault } from '@/lib/defaults';

	import Button from '@/components/Button.svelte';
	import Fieldset from '@/components/ui/Fieldset.svelte';
	import Row from '@/components/ui/Row.svelte';
	import Select from '@/components/ui/Select.svelte';
	import Input from '@/components/ui/Input.svelte';

	const seller = $state($SellersStore[$currentSellerStore]);
	const buyers = $state([]);
	const invoice = $state(InvoiceDefault);

	function handleSubmit(ev: Event) {
		ev.preventDefault();
	}

	function createBuyer() {}
</script>

<section class="flex w-full max-w-3xl flex-col items-center gap-8 p-8 pt-48">
	<h1 class="text-4xl font-medium">Crear factura</h1>
	<p>⚠️ Trabajo en progreso</p>

	{#if !seller}
		<p>Cargando...</p>
	{:else}
		<p>Factura desde</p>

		<p>{seller.TaxIdentification.TaxIdentificationNumber}</p>

		<form class="flex w-full flex-col gap-4" onsubmit={handleSubmit}>
			<Fieldset legend="Datos del cliente">
				<Row>
					<Select
						label="Cliente"
						bind:value={invoice.Parties.BuyerParty}
						options={buyers}
						placeholder="Selecciona un cliente"
					/>
				</Row>

				<p>
					<small
						>Necesitas crear un nuevo cliente? Dirigete a la página de <a
							href="/factura/crear-cliente"
							class="underline hover:no-underline">creación de clientes</a
						>
					</small>
				</p>
			</Fieldset>

			<Fieldset legend="Datos del cliente">
				<Row>
					<Input
						label="Série"
						type="text"
						placeholder="2025-"
						size={4}
						disabled
						bind:value={invoice.Invoices[0].InvoiceHeader.InvoiceSeriesCode}
					/>
					<Input
						label="Número"
						type="number"
						placeholder="1"
						disabled
						bind:value={invoice.Invoices[0].InvoiceHeader.InvoiceNumber}
						className="grow"
					/>
				</Row>
			</Fieldset>

			<div class="mt-8 flex w-full justify-center">
				<Button type="submit">Crear factura</Button>
			</div>
		</form>
	{/if}
</section>
