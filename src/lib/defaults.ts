import { IVA } from "@/types/enums";
import { InvoiceClass, InvoiceDocumentType, Modality, PersonTypeCode, ResidenceTypeCode, TaxTypeCode } from "@/types/facturae";

const serial = `FAC${new Date().getFullYear().toString().slice(2, 4)}-`;
const lastNumeration = 1;

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

export const InvoiceDefault = {
  FileHeader: {
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
        Corrective: null,
      },
      InvoiceIssueData: {
        IssueDate: "2023-01-01",
        OperationDate: null,
        PlaceOfIssue: null,
        InvoicingPeriod: null,
        InvoiceCurrencyCode: "EUR",
        TaxCurrencyCode: null,
        ExchangeRateDetails: null,
        LanguageName: null,
      },
      TaxesOutputs: [
        {
          TaxTypeCode: TaxTypeCode.IVA,
          TaxRate: IVA.General,
          TaxableBase: 1000,
          TaxAmount: 212,
          EquivalenceSurcharge: null,
          EquivalenceSurchargeAmount: null,
        }
      ],
      InvoiceTotals: {
        TotalGrossAmount: 1000,
        TotalGeneralDiscounts: null,
        TotalGeneralSurcharges: null,
        TotalGrossAmountBeforeTaxes: 1000,
        TotalTaxOutputs: 212,
        TotalTaxesWithheld: null,
        InvoiceTotal: 1212,
        TotalOutstandingAmount: 0,
        TotalExecutableAmount: 0,
        Subsidies: null,
        PaymentsInKind: null,
      },
      Items: [
        {
          SequenceNumber: "1",
          ItemDescription: "Producto 1",
          Quantity: 1,
          UnitOfMeasure: null,
          UnitPriceWithoutTax: 1000,
          TotalCost: 1000,
          GrossAmount: 1000,
          DiscountsAndRebates: null,
          Charges: null,
          TaxesOutputs: null,
          AdditionalLineItemInformation: null,
          SpecialTaxableEvent: null,
          ArticleCode: null,
        }
      ],
      PaymentDetails: [
        {
          InstallmentDueDate: "2023-01-01",
          InstallmentAmount: 1000,
          PaymentMeans: null,
          AccountToBeCredited: {
            IBAN: null,
            BankCode: null,
            BranchCode: null,
            OverseasBranchAddress: null,
          }
        }
      ]
    }
  ]
};