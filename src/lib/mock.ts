import { type Facturae, Modality, InvoiceIssuerType, PersonTypeCode, ResidenceTypeCode, InvoiceDocumentType, InvoiceClass, TaxTypeCode, PaymentMeans } from "@/types/facturae";
import { IRPF, IVA } from "@/types/enums";

export const individualExample: Facturae = {
  FileHeader: {
    SchemaVersion: "3.2.2",
    Modality: Modality.Individual,
    InvoiceIssuerType: InvoiceIssuerType.Seller,
    Batch: {
      BatchIdentifier: "A99887723392009-1",
      InvoicesCount: 1,
      TotalInvoicesAmount: {
        TotalAmount: 468.10,
      },
      TotalOutstandingAmount: {
        TotalAmount: 468.10,
      },
      TotalExecutableAmount: {
        TotalAmount: 489.74,
      },
      InvoiceCurrencyCode: "EUR",
    }
  },
  Parties: {
    SellerParty: {
      TaxIdentification: {
        PersonTypeCode: PersonTypeCode.Individual,
        ResidenceTypeCode: ResidenceTypeCode.Resident,
        TaxIdentificationNumber: "A82735122",
      },
      Individual: {
        Name: "Juana",
        FirstSurname: "Mauriño",
        AddressInSpain: {
          Address: "Juncal 1315",
          PostCode: "00000",
          Town: "Argamasilla de Alba",
          Province: "Ciudad Real",
          CountryCode: "ESP",
        },
        ContactDetails: {
          Telephone: "00547775554",
          ElectronicMail: "facturae@mityc.es",
        }
      }
    },
    BuyerParty: {
      TaxIdentification: {
        PersonTypeCode: PersonTypeCode.Individual,
        ResidenceTypeCode: ResidenceTypeCode.NonResident,
        TaxIdentificationNumber: "0000000000B",
      },
      Individual: {
        Name: "Juana",
        FirstSurname: "Mauriño",
        AddressInSpain: {
          Address: "Juncal 1315",
          PostCode: "00000",
          Town: "Argamasilla de Alba",
          Province: "Ciudad Real",
          CountryCode: "ESP",
        },
        ContactDetails: {
          Telephone: "00547775554",
          ElectronicMail: "facturae@mityc.es",
        }
      }
    },
  },
  Invoices: [
    {
      InvoiceHeader: {
        InvoiceNumber: "0001",
        InvoiceSeriesCode: "2025",
        InvoiceDocumentType: InvoiceDocumentType.CompleteInvoice,
        InvoiceClass: InvoiceClass.Original,
      },
      InvoiceIssueData: {
        IssueDate: "2025-01-20",
        OperationDate: "2025-01-20",
        PlaceOfIssue: {
          PostCode: "00000",
          PlaceOfIssueDescription: "Argamasilla de Alba",
        },
        InvoiceCurrencyCode: "EUR",
        TaxCurrencyCode: "EUR",
        LanguageName: "es",
      },
      TaxesOutputs: [
        {
          TaxTypeCode: TaxTypeCode.IVA,
          TaxRate: IVA.General,
          TaxableBase: 468.10,
          TaxAmount: 468.10
        },
        {
          TaxTypeCode: TaxTypeCode.IRPF,
          TaxRate: IRPF.Fiveteen,
          TaxableBase: 468.10,
          TaxAmount: 468.10
        },
      ],
      InvoiceTotals: {
        TotalGrossAmount: 468.10,
        TotalGeneralDiscounts: 0,
        TotalGrossAmountBeforeTaxes: 468.10,
        TotalTaxOutputs: 468.10,
        TotalTaxesWithheld: 0,
        InvoiceTotal: 468.10,
        TotalOutstandingAmount: 468.10,
        TotalExecutableAmount: 489.74
      },
      Items: [
        {
          SequenceNumber: "1",
          ItemDescription: "Producto 1",
          Quantity: 1,
          UnitOfMeasure: "Unidades",
          UnitPriceWithoutTax: 468.10,
          TotalCost: 468.10,
          GrossAmount: 468.10,
          DiscountsAndRebates: [
            {
              DiscountReason: "Descuento general",
              DiscountRate: 10,
              DiscountAmount: 468.10,
            },
          ]
        }
      ],
      PaymentDetails: [
        {
          InstallmentDueDate: "2025-01-20",
          InstallmentAmount: 468.10,
          PaymentMeans: PaymentMeans.CreditTransfer,
          AccountToBeCredited: {
            IBAN: "ES01 0000 0000 0000 0000 00 01",
            BankCode: "123",
            BranchCode: "123456789"
          }
        }
      ]
    },
  ],
};

