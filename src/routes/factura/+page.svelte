<script lang="ts">
	import { SellersStore, currentSellerStore } from '@/lib/stores';
	import { InvoiceDefault } from '@/lib/defaults';

	import Button from '@/components/Button.svelte';
	import Fieldset from '@/components/ui/Fieldset.svelte';
	import Row from '@/components/ui/Row.svelte';
	import Select from '@/components/ui/Select.svelte';
	import Input from '@/components/ui/Input.svelte';
	import { IRPF, IVA } from '@/types/enums';
	import { TaxTypeCode } from '@/types/facturae';
	import Textarea from '@/components/ui/Textarea.svelte';

	const seller = $state($SellersStore[$currentSellerStore]);
	const buyers = $state([]);
	const invoice = $state(InvoiceDefault);

	function handleSubmit(ev: Event) {
		ev.preventDefault();
	}

	const iva = [
		{ label: `General (${IVA.General}%)`, value: IVA.General },
		{ label: `Reducido (${IVA.Reduced}%)`, value: IVA.Reduced },
		{ label: `Super Reducido (${IVA.SuperReduced}%)`, value: IVA.SuperReduced },
		{ label: `Exento (${IVA.Exempt}%)`, value: IVA.Exempt }
	];

	const irpf = [
		{ label: '7%', value: IRPF.Seven },
		{ label: '15%', value: IRPF.Fiveteen },
		{ label: '19%', value: IRPF.Nineteen }
	];

	console.log(invoice.Invoices[0].TaxesOutputs[1].TaxRate);

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

			<Fieldset legend="Datos de la factura">
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

				<Row>
					<Input
						label="Fecha de emisión"
						type="date"
						bind:value={invoice.Invoices[0].InvoiceIssueData.IssueDate}
						className="grow"
					/>
					<Input
						label="Fecha de operación"
						type="date"
						bind:value={invoice.Invoices[0].InvoiceIssueData.IssueDate}
						className="grow"
					/>
				</Row>
			</Fieldset>

			<Fieldset legend="Impuestos">
				<Row>
					{#each invoice.Invoices[0].TaxesOutputs as tax}
						<Select
							label="Tipo de {tax.TaxTypeCode === TaxTypeCode.IVA ? 'IVA' : 'IRPF'}"
							bind:value={tax.TaxRate}
							options={tax.TaxTypeCode === TaxTypeCode.IVA ? iva : irpf}
							placeholder="Selecciona un tipo de IVA"
						/>
					{/each}
				</Row>
			</Fieldset>

			<Fieldset legend="Conceptos">
				<details name={invoice.Invoices[0].Items[0].SequenceNumber} >
					<summary>
						<Textarea
							label="Descripción"
							type="text"
							placeholder="Descripción del concepto"
							bind:value={invoice.Invoices[0].Items[0].ItemDescription}
						/>
					</summary>

					<Row>
						<Input
							label="Cantidad"
							type="number"
							placeholder="Cantidad"
							bind:value={invoice.Invoices[0].Items[0].Quantity}
						/>
						<Input
							label="Unidad de medida"
							type="text"
							placeholder="Unidad de medida"
							bind:value={invoice.Invoices[0].Items[0].UnitOfMeasure}
						/>
						<Input
							label="Descuento"
							type="number"
							placeholder="10"
							bind:value={invoice.Invoices[0].Items[0].DiscountsAndRebates[0].DiscountAmount}
						/>
					</Row>

					<Row>
						<Input
							label="Precio sin IVA"
							type="number"
							placeholder="Precio sin IVA"
							bind:value={invoice.Invoices[0].Items[0].UnitPriceWithoutTax}
						/>
						<Input
							label="Total"
							type="number"
							placeholder="Total"
							bind:value={invoice.Invoices[0].Items[0].TotalCost}
						/>
					</Row>
				</details>
				
				<details name={invoice.Invoices[0].Items[1].SequenceNumber}>
					<summary>
						<Textarea
							label="Descripción"
							type="text"
							placeholder="Descripción del concepto"
							bind:value={invoice.Invoices[0].Items[0].ItemDescription}
						/>
					</summary>

					<Row>
						<Input
							label="Cantidad"
							type="number"
							placeholder="Cantidad"
							bind:value={invoice.Invoices[0].Items[0].Quantity}
						/>
						<Input
							label="Unidad de medida"
							type="text"
							placeholder="Unidad de medida"
							bind:value={invoice.Invoices[0].Items[0].UnitOfMeasure}
						/>
						<Input
							label="Descuento"
							type="number"
							placeholder="10"
							bind:value={invoice.Invoices[0].Items[0].DiscountsAndRebates[0].DiscountAmount}
						/>
					</Row>

					<Row>
						<Input
							label="Precio sin IVA"
							type="number"
							placeholder="Precio sin IVA"
							bind:value={invoice.Invoices[0].Items[0].UnitPriceWithoutTax}
						/>
						<Input
							label="Total"
							type="number"
							placeholder="Total"
							bind:value={invoice.Invoices[0].Items[0].TotalCost}
						/>
					</Row>
				</details>
			</Fieldset>

			<div class="mt-8 flex w-full justify-center">
				<Button type="submit">Crear factura</Button>
			</div>
		</form>
	{/if}
</section>

<style>
	details summary::-webskit-details-marker {
		display: none;
	}
</style>
