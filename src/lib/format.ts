import { PersonTypeCode } from "@/types/facturae";
import type { PartyDefault } from "@/types/Interfaces";

export function formatParty(RawParty: PartyDefault) {
  const { TaxIdentification, Party } = RawParty;

  let Individual, LegalEntity, finalSeller;
  if (TaxIdentification.PersonTypeCode === PersonTypeCode.Individual) {
    const { CorporateName, TradeName, ...party } = Party;

    Individual = party;
    finalSeller = { TaxIdentification, Individual };

    console.log("Delted:", { CorporateName, TradeName });
  } else {
    const { Name, FirstSurname, SecondSurname, ...party } = Party;

    LegalEntity = party;
    finalSeller = { TaxIdentification, LegalEntity };

    console.log("Delted:", { Name, FirstSurname, SecondSurname });
  }

  return finalSeller;
}