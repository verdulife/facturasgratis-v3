<script lang="ts">
	import { PERSON_TYPE_CODES } from '@/lib/consts';
	import { individualExample as mock } from '@/lib/mock';

	import Input from '@/components/ui/Input.svelte';
	import Select from '@/components/ui/Select.svelte';
	import Fieldset from '@/components/ui/Fieldset.svelte';
	import Row from '@/components/ui/Row.svelte';
</script>

<section class="flex w-full max-w-3xl flex-col items-center gap-8 p-8 pt-48">
	<h1 class="text-4xl font-medium">Facturasgratis v3</h1>
	<p>⚠️ Trabajo en progreso</p>

	<form class="flex w-full flex-col gap-4">
		<Fieldset legend="Datos del emisor">
			<Row>
				<Select
					label="Tipo de persona"
					bind:value={mock.Parties.SellerParty.TaxIdentification.PersonTypeCode}
					options={PERSON_TYPE_CODES}
				/>

				<Input
					label="NIF"
					type="text"
					size={mock.Parties.SellerParty.TaxIdentification.TaxIdentificationNumber.length}
					bind:value={mock.Parties.SellerParty.TaxIdentification.TaxIdentificationNumber}
				/>
			</Row>
		</Fieldset>

		{#if mock.Parties.SellerParty.Individual}
			<Fieldset legend="Datos personales">
				<Input label="Nombre" type="text" bind:value={mock.Parties.SellerParty.Individual.Name} />
				<Row>
					<Input
						label="Primer apellido"
						type="text"
						bind:value={mock.Parties.SellerParty.Individual.FirstSurname}
						className="grow"
					/>
					<Input
						label="Segundo apellido"
						type="text"
						bind:value={mock.Parties.SellerParty.Individual.SecondSurname}
						className="grow"
					/>
				</Row>
			</Fieldset>

			<Fieldset legend="Dirección fiscal">
				<Row>
					<Input
						label="Dirección"
						type="text"
						bind:value={mock.Parties.SellerParty.Individual.AddressInSpain.Address}
						className="grow"
					/>
					<Input
						label="CP"
						type="text"
						size={mock.Parties.SellerParty.Individual.AddressInSpain.PostCode.length}
						bind:value={mock.Parties.SellerParty.Individual.AddressInSpain.PostCode}
					/>
				</Row>

				<Row>
					<Input
						label="Ciudad"
						type="text"
						bind:value={mock.Parties.SellerParty.Individual.AddressInSpain.Town}
						className="grow"
					/>
					<Input
						label="Provincia"
						type="text"
						bind:value={mock.Parties.SellerParty.Individual.AddressInSpain.Province}
						className="grow"
					/>
				</Row>
			</Fieldset>

			<Fieldset legend="Datos de contacto">
				<Row>
					<Input
						label="Teléfono"
						type="text"
						bind:value={mock.Parties.SellerParty.Individual.ContactDetails.Telephone}
						className="grow"
					/>
					<Input
						label="Correo electrónico"
						type="text"
						bind:value={mock.Parties.SellerParty.Individual.ContactDetails.ElectronicMail}
						className="grow"
					/>
				</Row>
			</Fieldset>
		{:else if mock.Parties.SellerParty.LegalEntity}
			<Fieldset legend="Datos jurídicos">
				<p>⚠️ No implementado</p>
			</Fieldset>
		{/if}
	</form>
</section>
