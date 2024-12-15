<script lang="ts">
	import Input from '@/components/ui/Input.svelte';
	import Select from '@/components/ui/Select.svelte';
	import { PERSON_TYPE_CODES } from '@/lib/consts';
	import { individualExample as ex } from '@/lib/mock';
</script>

<section class="flex w-full max-w-3xl flex-col items-center gap-8 p-8 pt-48">
	<h1 class="text-4xl font-medium">Facturasgratis v3</h1>
	<p>⚠️ Trabajo en progreso</p>

	<h2>Datos del emisor</h2>
	<form class="flex w-full flex-col gap-4">
		<Select
			label="Tipo de persona"
			bind:value={ex.Parties.SellerParty.TaxIdentification.PersonTypeCode}
			options={PERSON_TYPE_CODES}
		/>
		
		<Input
			label="Número de identificación fiscal"
			type="text"
			bind:value={ex.Parties.SellerParty.TaxIdentification.TaxIdentificationNumber}
		/>
	</form>
</section>
