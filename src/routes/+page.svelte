<script lang="ts">
	import { PersonTypeCode } from '@/types/facturae';
	import { CP_LENGHT, NIF_LENGHT, PERSON_TYPE_CODES } from '@/lib/consts';
	import { PartyDefault } from '@/lib/defaults';

	import Input from '@/components/ui/Input.svelte';
	import Select from '@/components/ui/Select.svelte';
	import Fieldset from '@/components/ui/Fieldset.svelte';
	import Row from '@/components/ui/Row.svelte';
	import Button from '@/components/Button.svelte';
	import { SellersStore, currentSellerStore } from '@/lib/stores';
	import { formatParty } from '@/lib/format';

	const seller = $state(PartyDefault);

	function handleSubmit(ev: Event) {
		ev.preventDefault();
		$SellersStore[$currentSellerStore] = formatParty(seller);
	}
</script>

<section class="flex w-full max-w-3xl flex-col items-center gap-8 p-8 pt-48">
	<h1 class="text-4xl font-medium">Facturasgratis v3</h1>
	<p>⚠️ Trabajo en progreso</p>

	<form class="flex w-full flex-col gap-4" onsubmit={handleSubmit}>
		<Fieldset legend="Datos del emisor">
			<Row>
				<Select
					label="Tipo de persona"
					bind:value={seller.TaxIdentification.PersonTypeCode}
					options={PERSON_TYPE_CODES}
				/>

				<Input
					label="NIF"
					type="text"
					size={NIF_LENGHT}
					placeholder="Ej. A82735122"
					bind:value={seller.TaxIdentification.TaxIdentificationNumber}
				/>
			</Row>
		</Fieldset>

		{#if seller.TaxIdentification.PersonTypeCode === PersonTypeCode.Individual}
			<Fieldset legend="Datos personales">
				<Input label="Nombre" type="text" placeholder="Ej. Juana" bind:value={seller.Party.Name} />

				<Row>
					<Input
						label="Primer apellido"
						type="text"
						placeholder="Ej. Garcia"
						optional
						bind:value={seller.Party.FirstSurname}
						className="grow"
					/>
					<Input
						label="Segundo apellido"
						type="text"
						placeholder="Ej. Muñoz"
						optional
						bind:value={seller.Party.SecondSurname}
						className="grow"
					/>
				</Row>
			</Fieldset>
		{:else}
			<Fieldset legend="Datos jurídicos">
				<Input
					label="Razón social"
					type="text"
					placeholder="Ej. Empresa S.L."
					bind:value={seller.Party.CorporateName}
				/>
				<Input
					label="Nombre comercial"
					type="text"
					placeholder="Ej. Empresa"
					optional
					bind:value={seller.Party.TradeName}
				/>
			</Fieldset>
		{/if}

		<Fieldset legend="Dirección fiscal">
			<Row>
				<Input
					label="Dirección"
					type="text"
					placeholder="Ej. Calle Mayor, 16"
					bind:value={seller.Party.AddressInSpain.Address}
					className="grow"
				/>
				<Input
					label="CP"
					type="text"
					placeholder="Ej. 08818"
					size={CP_LENGHT}
					bind:value={seller.Party.AddressInSpain.PostCode}
				/>
			</Row>

			<Row>
				<Input
					label="Ciudad"
					type="text"
					placeholder="Ej. Olivella"
					bind:value={seller.Party.AddressInSpain.Town}
					className="grow"
				/>
				<Input
					label="Provincia"
					type="text"
					placeholder="Ej. Barcelona"
					bind:value={seller.Party.AddressInSpain.Province}
					className="grow"
				/>
			</Row>
		</Fieldset>

		<Fieldset legend="Datos de contacto">
			<Row>
				<Input
					label="Teléfono"
					type="tel"
					placeholder="Ej. 600 600 600"
					bind:value={seller.Party.ContactDetails.Telephone}
					className="grow"
				/>
				<Input
					label="Correo electrónico"
					type="email"
					placeholder="Ej. contabilidad@gmail.com"
					bind:value={seller.Party.ContactDetails.ElectronicMail}
					className="grow"
				/>
			</Row>

			<Row>
				<Input
					label="Página web"
					type="text"
					placeholder="Ej. www.ejemplo.com"
					optional
					bind:value={seller.Party.ContactDetails.WebAddress}
					className="grow"
				/>
				<Input
					label="Contacto"
					type="text"
					placeholder="Ej. Juana"
					optional
					bind:value={seller.Party.ContactDetails.ContactPersons}
					className="grow"
				/>
			</Row>
		</Fieldset>

		<div class="mt-8 flex w-full justify-center">
			<Button type="submit">Crear emisor</Button>
		</div>
	</form>
</section>
