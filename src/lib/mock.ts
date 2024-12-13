import { type Facturae, InvoiceDocumentType, OperationType } from '@/types/facturae';

export const facturaeExample: Facturae = {
  FacturaeVersion: "3.2.2",
  Parties: {
    SellerParty: {
      TaxIdentification: "46356977V",
      LegalEntity: {
        CorporateName: "VERDU S.L.",
      },
      Individual: {
        Name: "Albert",
        FirstSurname: "Verdú",
        SecondSurname: "Llinares",
      },
    },
    BuyerParty: {
      TaxIdentification: "46356977V",
      LegalEntity: {
        CorporateName: "VERDU S.L.",
      },
      Individual: {
        Name: "Albert",
        FirstSurname: "Verdú",
        SecondSurname: "Llinares",
      },
    },
  },
  InvoiceHeader: {
    InvoiceNumber: "0001",
    InvoiceSeriesCode: "25",
    InvoiceDocumentType: InvoiceDocumentType.Invoice,
    OperationType: OperationType.Normal,
  },
  InvoiceIssueData: {
    IssueDate: "2024-01-20",
  },
  TaxesOutputs: [
    {
      TaxRate: 21,
      TaxableBase: 20,
      TaxAmount: 4.20,
    }
  ],
  InvoiceTotals: {
    TotalGrossAmount: 20,
    TotalInvoiceAmount: 21.20,
  },
  Items: [
    {
      Description: "Masaje sexy",
      UnitPriceWithoutTax: 20,
      Quantity: 1,
      TotalCost: 20,
    }
  ],
  PaymentDetails: [
    {
      PaymentDueDate: "2024-02-20",
      PaymentMeans: "Transferencia bancaria",
      AccountNumber: "ES12-34567890-12-34",
    }
  ],
  AdministrativeCentres: [
    {
      CentreCode: "UP2000",
      CentreName: "Unidad de Producción 2000",
    }
  ],
  LegalLiterals: [
    "N-P"
  ],
  AdditionalData: "Fecha de pago ampliable hasta el 2024-03-20",
  ElectronicSignature: "UTPSZoyMnEi0jKM1K13q9lWSuGNOyMiM6xAl8XR1SE9KNmf3/HSSlUniuLormjoiInWqhVbHLOI+wEz4C+QC/g=="
}