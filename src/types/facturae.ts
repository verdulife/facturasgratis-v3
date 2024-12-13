// TODO:
// 1. verificar campos como direccion fiscal. Revisar en documentación oficial.
// 2. verificar retenciones.
// 3. verificar formato fir ma electrónica.
// 4. verificar posibles campos faltantes.

export interface Facturae {
  FacturaeVersion: "3.2.2"; // Versión del esquema (obligatorio).
  Parties: {
    SellerParty: Party; // Información del emisor (obligatorio).
    BuyerParty: Party; // Información del receptor (obligatorio).
  };
  InvoiceHeader: InvoiceHeader; // Información del encabezado (obligatorio).
  InvoiceIssueData: {
    IssueDate: string; // Fecha de emisión (formato ISO-8601, obligatorio).
  };
  TaxesOutputs: Tax[]; // Lista de impuestos (obligatorio).
  InvoiceTotals: {
    TotalGrossAmount: number; // Importe bruto total (obligatorio).
    TotalInvoiceAmount: number; // Importe total con impuestos (obligatorio).
  };
  Items: InvoiceItem[]; // Detalle de productos o servicios (obligatorio).
  PaymentDetails?: PaymentDetail[]; // Información del pago (opcional).
  AdministrativeCentres?: AdministrativeCentre[]; // Centros administrativos (solo B2G).
  LegalLiterals?: string[]; // Información legal adicional (opcional).
  AdditionalData?: string; // Información adicional (opcional).
  ElectronicSignature?: string; // Firma electrónica en formato XAdES-BES (opcional, pero recomendado).
}

interface Party {
  TaxIdentification: string; // NIF o CIF (obligatorio).
  LegalEntity?: {
    CorporateName: string; // Razón social (opcional).
  };
  Individual?: {
    Name: string; // Nombre (opcional).
    FirstSurname?: string; // Primer apellido (opcional).
    SecondSurname?: string; // Segundo apellido (opcional).
  };
}

interface InvoiceHeader {
  InvoiceNumber: string; // Número de factura (obligatorio).
  InvoiceSeriesCode?: string; // Serie de la factura (opcional).
  InvoiceDocumentType: InvoiceDocumentType; // Tipo de documento (obligatorio).
  OperationType: OperationType; // Tipo de operación (obligatorio, ahora enum).
}

interface Tax {
  TaxRate: number; // Porcentaje de impuesto (obligatorio).
  TaxableBase: number; // Base imponible (obligatorio).
  TaxAmount: number; // Importe del impuesto (obligatorio).
}

interface InvoiceItem {
  Description: string; // Descripción del producto/servicio (obligatorio).
  UnitPriceWithoutTax: number; // Precio unitario antes de impuestos (obligatorio).
  Quantity: number; // Cantidad facturada (obligatorio).
  TotalCost: number; // Coste total de la línea (obligatorio).
}

interface PaymentDetail {
  PaymentDueDate: string; // Fecha de vencimiento (ISO-8601, opcional).
  PaymentMeans: string; // Medio de pago (opcional).
  AccountNumber?: string; // Cuenta bancaria (opcional).
}

interface AdministrativeCentre {
  CentreCode: string; // Código del centro (obligatorio para B2G).
  CentreName?: string; // Nombre del centro (opcional).
}

export enum InvoiceDocumentType {
  Invoice = "FC", // Factura completa
  SimplifiedInvoice = "FR", // Factura simplificada
  CreditNote = "NC", // Nota de crédito
  DebitNote = "ND" // Nota de débito
}

export enum OperationType {
  Normal = "O", // Operación normal.
  Corrective = "R", // Factura rectificativa.
  SpecialAgriculture = "A", // Régimen especial de agricultura, ganadería y pesca.
  SpecialUsedGoods = "E" // Régimen especial de bienes usados y otros.
}

