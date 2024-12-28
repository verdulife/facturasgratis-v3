import { IRPF, IVA } from "@/types/enums";
import { InvoiceClass, InvoiceDocumentType, Modality, PaymentMeans, PersonTypeCode, ResidenceTypeCode, TaxTypeCode } from "@/types/facturae";

const serial = `FAC${new Date().getFullYear().toString().slice(2, 4)}-`;
const lastNumeration = 1;
const bathID = "12345678";
const today = new Date().toISOString().split("T")[0];

const TaxIndentificationDefault = {
  PersonTypeCode: PersonTypeCode.Individual,
  ResidenceTypeCode: ResidenceTypeCode.Resident,
  TaxIdentificationNumber: "46356977V",
};

export const PartyDefault = {
  TaxIdentification: TaxIndentificationDefault,
  Party: {
    // Individual
    Name: "Albert",
    FirstSurname: "Verdu",
    SecondSurname: "Llinares",

    // LegalEntity
    CorporateName: null,
    TradeName: null,

    AddressInSpain: {
      Address: "Calle Mayor, 16",
      PostCode: "08818",
      Town: "Olivella",
      Province: "Barcelona",
      CountryCode: "ESP",
    },
    ContactDetails: {
      Telephone: "600 600 600",
      WebAddress: "www.ejemplo.com",
      ElectronicMail: "contabilidad@gmail.com",
      ContactPersons: "Albert Verdu",
    },
  },
};

export const itemDefault = {
  SequenceNumber: "1",
  ItemDescription: null,
  Quantity: 1,
  UnitOfMeasure: "Unidades",
  UnitPriceWithoutTax: null,
  TotalCost: null,
  GrossAmount: null,
  DiscountsAndRebates: [
    {
      DiscountReason: "Descuento general",
      DiscountRate: null,
      DiscountAmount: null,
    },
  ]
}

export const InvoiceDefault = {
  FileHeader: {
    SchemaVersion: "3.2.2",
    Modality: Modality.Individual,
    InvoiceIssuerType: null,
    Batch: {
      BatchIdentifier: bathID,
      InvoicesCount: 1,
      TotalInvoicesAmount: null,
      TotalOutstandingAmount: null,
      TotalExecutableAmount: null,
      InvoiceCurrencyCode: "EUR",
    }
  },
  Parties: {
    SellerParty: PartyDefault,
    BuyerParty: PartyDefault,
  },
  Invoices: [
    {
      InvoiceHeader: {
        InvoiceNumber: lastNumeration,
        InvoiceSeriesCode: serial,
        InvoiceDocumentType: InvoiceDocumentType.CompleteInvoice,
        InvoiceClass: InvoiceClass.Original,
      },
      InvoiceIssueData: {
        IssueDate: today,
        OperationDate: today,
        PlaceOfIssue: {
          PostCode: null,
          PlafeOfIssueDescription: null,
        },
        InvoiceCurrencyCode: "EUR",
        TaxCurrencyCode: "EUR",
        LanguageName: "es",
      },
      TaxesOutputs: [
        {
          TaxTypeCode: TaxTypeCode.IVA,
          TaxRate: IVA.General,
          TaxableBase: null,
          TaxAmount: null,
        },
        {
          TaxTypeCode: TaxTypeCode.IRPF,
          TaxRate: IRPF.Fiveteen,
          TaxableBase: null,
          TaxAmount: null,
        }
      ],
      InvoiceTotals: {
        TotalGrossAmount: null,
        TotalGeneralDiscounts: null,
        TotalGrossAmountBeforeTaxes: null,
        TotalTaxOutputs: null,
        TotalTaxesWithheld: null,
        InvoiceTotal: null,
        TotalOutstandingAmount: null,
        TotalExecutableAmount: null
      },
      Items: [
        itemDefault,
        itemDefault,
      ],
      PaymentDetails: [
        {
          InstallmentDueDate: today,
          InstallmentAmount: null,
          PaymentMeans: PaymentMeans.CreditTransfer,
          AccountToBeCredited: {
            IBAN: null,
            BankCode: null,
            BranchCode: null,
          }
        }
      ]
    }
  ]
};