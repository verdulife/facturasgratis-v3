import { PersonTypeCode, ResidenceTypeCode } from "@/types/facturae";

export const SellerDefault = {
  TaxIdentification: {
    PersonTypeCode: PersonTypeCode.Individual,
    ResidenceTypeCode: ResidenceTypeCode.Resident,
    TaxIdentificationNumber: "",
  },
  Individual: {
    Name: "",
    FirstSurname: "",
    SecondSurname: "",
    AddressInSpain: {
      Address: "",
      PostCode: "",
      Town: "",
      Province: "",
      CountryCode: "ESP",
    },
    ContactDetails: {
      Telephone: "",
      ElectronicMail: "",
    }
  },
  LegalEntity: {
    CorporateName: "",
    TradeName: "",
    AddressInSpain: {
      Address: "",
      PostCode: "",
      Town: "",
      Province: "",
      CountryCode: "ESP",
    },
    ContactDetails: {
      Telephone: "",
      WebAddress: "",
      ElectronicMail: "",
      ContactPersons: "string"
    }
  }
};