import type { PersonTypeCode, ResidenceTypeCode } from "./facturae";

interface TaxIndentification {
  PersonTypeCode: PersonTypeCode;
  ResidenceTypeCode: ResidenceTypeCode;
  TaxIdentificationNumber: string;
};

export interface PartyDefault {
  TaxIdentification: TaxIndentification;
  Party: {
    // Individual
    Name: string | null,
    FirstSurname: string | null,
    SecondSurname: string | null,

    // LegalEntity
    CorporateName: string | null,
    TradeName: string | null,

    AddressInSpain: {
      Address: string | null,
      PostCode: string | null,
      Town: string | null,
      Province: string | null,
      CountryCode: string,
    },
    ContactDetails: {
      Telephone: string | null,
      WebAddress: string | null,
      ElectronicMail: string | null,
      ContactPersons: string | null,
    }
  };
}