import { Modality, PersonTypeCode, ResidenceTypeCode } from "@/types/facturae";

export const SellerDefault = {
  TaxIdentification: {
    PersonTypeCode: PersonTypeCode.Individual,
    ResidenceTypeCode: ResidenceTypeCode.Resident,
    TaxIdentificationNumber: null,
  },
  Party: {
    type: PersonTypeCode.Individual,
    
    // Individual
    Name: null,
    FirstSurname: null,
    SecondSurname: null,
    // LegalEntity
    CorporateName: null,
    TradeName: null,

    AddressInSpain: {
      Address: null,
      PostCode: null,
      Town: null,
      Province: null,
      CountryCode: "ESP",
    },
    ContactDetails: {
      Telephone: null,
      WebAddress: null,
      ElectronicMail: null,
      ContactPersons: null
    },
  },
};

export const FileHeaderDefault = {
  SchemaVersion: "3.2.2",
  Modality: Modality.Individual,
  InvoiceIssuerType: null,
  Batch: {
    BatchIdentifier: null,
    InvoicesCount: 1,
    TotalInvoicesAmount: 0,
    TotalOutstandingAmount: 0,
    TotalExecutableAmount: 0,
    InvoiceCurrencyCode: "EUR",
  }
};