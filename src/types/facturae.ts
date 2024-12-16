// TODO:
// - comprobar que campos dentro de ContactDetails son opcionales.
// - comprobar que AdministrativeCentre pueda tener dirección fuera de España.
// - revisar los campos de BankAccount.

import type { IRPF, IVA } from "@/types/enums";

export interface Facturae {
  FileHeader: {
    SchemaVersion: "3.2.2"; // Versión del esquema.
    Modality: Modality; // Modalidad (Individual o Lote).
    InvoiceIssuerType: InvoiceIssuerType; // Tipo de emisor (Empresa, Tercero).
    Batch: Batch; // Información del lote.
    ThirdParty?: Party; // Información de un tercero relacionado (opcional).
    FactoringAssignmentData?: FactoringAssignmentData; // Información de factoring (opcional).
  };
  Parties: {
    SellerParty: Party;
    BuyerParty: Party;
  };
  Invoices: Invoice[];
  ElectronicSignature?: ElectronicSignature; // Firma electrónica en formato XAdES-BES (opcional).
}

export enum Modality {
  Individual = "I", // Factura individual
  Batch = "L" // Lote de facturas
}

export enum InvoiceIssuerType {
  Seller = "EM", // Proveedor (Emisor).
  Buyer = "RE", // Cliente (Receptor).
  ThirdParty = "TE" // Tercero.
}

interface Batch {
  BatchIdentifier: string; // Identificador único del lote.
  InvoicesCount: number; // Número total de facturas en el lote.
  TotalInvoicesAmount: number; // Importe total de las facturas.
  TotalOutstandingAmount: number; // Importe total pendiente.
  TotalExecutableAmount: number; // Importe total ejecutable.
  InvoiceCurrencyCode: string; // Código de la divisa (e.g., EUR).
}

interface PartyBase {
  TaxIdentification: {
    PersonTypeCode: PersonTypeCode;
    ResidenceTypeCode: ResidenceTypeCode;
    TaxIdentificationNumber: string;
  };
  AdministrativeCentres?: AdministrativeCentre[];
}

interface PartyAsIndividual extends PartyBase {
  TaxIdentification: {
    PersonTypeCode: PersonTypeCode.Individual;
    ResidenceTypeCode: ResidenceTypeCode;
    TaxIdentificationNumber: string;
  };
  Individual: Individual;
  LegalEntity?: never;
}

interface PartyAsLegalEntity extends PartyBase {
  TaxIdentification: {
    PersonTypeCode: PersonTypeCode.LegalEntity;
    ResidenceTypeCode: ResidenceTypeCode;
    TaxIdentificationNumber: string;
  };
  LegalEntity: LegalEntity;
  Individual?: never;
}

export type Party = PartyAsIndividual | PartyAsLegalEntity;

export enum PersonTypeCode {
  Individual = "F", // Persona física (autonomo).
  LegalEntity = "J" // Persona jurídica (empresa).
}

export enum ResidenceTypeCode {
  NonResident = "E", // Extranjero.
  Resident = "R", // Residente.
  EurepeResident = "U" // Residente en la Unión Europea.
}

interface LegalEntity {
  CorporateName: string;
  TradeName?: string;
  RegistrationData?: RegistrationData;
  AddressInSpain?: AddressInSpain;
  OverseasAddress?: OverseasAddress;
  ContactDetails?: ContactDetails;
}

interface Individual {
  Name: string;
  FirstSurname?: string;
  SecondSurname?: string;
  AddressInSpain?: AddressInSpain;
  OverseasAddress?: OverseasAddress;
  ContactDetails?: ContactDetails;
}

interface RegistrationData {
  Book: string;
  RegisterOfCompaniesLocation: string;
  Sheet: string;
  Folio: string;
  Section: string;
  Volume: string;
  AdditionalRegistrationData?: string;
}

interface ContactDetails {
  Telephone?: string;
  TeleFax?: string;
  WebAddress?: string;
  ElectronicMail?: string;
  ContactPersons?: string;
  CnoCnae?: string;
  INETownCode?: string;
  AdditionalContactDetails?: string;
}

interface Invoice {
  InvoiceHeader: {
    InvoiceNumber: string;
    InvoiceSeriesCode?: string;
    InvoiceDocumentType: InvoiceDocumentType;
    InvoiceClass: InvoiceClass;
    Corrective?: CorrectiveInvoiceData;
  };
  InvoiceIssueData: {
    IssueDate: string; // Fecha de emisión.
    OperationDate?: string; // Fecha de operación (siempre la misma que la de emisión).
    PlaceOfIssue?: PlaceOfIssue;
    InvoicingPeriod?: { // Solo cuando es recapitulativa (OC y CC).
      StartDate: string;
      EndDate: string;
    };
    InvoiceCurrencyCode: string;
    TaxCurrencyCode?: string;
    ExchangeRateDetails?: ExchangeRateDetails;
    LanguageName?: string; // Siempre sera "es".
  };
  TaxesOutputs: Tax[];
  TaxesWithheld?: Tax[];
  InvoiceTotals: InvoiceTotals;
  Items: InvoiceLine[];
  PaymentDetails?: PaymentDetail[];
}

export enum InvoiceDocumentType {
  CompleteInvoice = "FC", // Factura Completa.
  Abbreviated = "FA", // Factura Abreviada.
  SelfInvoice = "AF" // AutoFactura.
}

export enum InvoiceClass {
  Original = "OO", // Original.
  Corrective = "OR", // Original rectificativa.
  Summary = "OC", // Original recapitulativa.
  Copy = "CO", // Copia original.
  CopyOfCorrective = "CR", // Copia rectificativa.
  CopyOfSummary = "CC" // Copia recapitulativa.
}

interface InvoiceTotals {
  TotalGrossAmount: number;
  TotalGeneralDiscounts?: number;
  TotalGeneralSurcharges?: number;
  TotalGrossAmountBeforeTaxes: number;
  TotalTaxOutputs: number;
  TotalTaxesWithheld?: number;
  InvoiceTotal: number;
  TotalOutstandingAmount: number;
  TotalExecutableAmount: number;
  Subsidies?: Subsidy[]; // Subvenciones (opcional).
  PaymentsInKind?: number; // Pagos en especie (opcional).
}

interface InvoiceLine {
  SequenceNumber: string;
  ItemDescription: string;
  Quantity: number;
  UnitOfMeasure?: string;
  UnitPriceWithoutTax: number;
  TotalCost: number;
  GrossAmount: number;
  DiscountsAndRebates?: Discount[];
  Charges?: Charge[];
  TaxesOutputs?: Tax[];
  AdditionalLineItemInformation?: string;
  SpecialTaxableEvent?: SpecialTaxableEvent;
  ArticleCode?: string;
}

export enum SpecialTaxableEvent {
  Exemption = "01", // Exento por el motivo aquí definido.
  ExemptionFromTax = "02" // No aplica impuesto.
}

interface Discount {
  DiscountReason: string;
  DiscountRate?: number;
  DiscountAmount: number;
}

interface Charge {
  ChargeReason: string;
  ChargeAmount: number;
}

interface Tax {
  TaxTypeCode: TaxTypeCode;
  TaxRate: IVA | IRPF;
  TaxableBase: number;
  TaxAmount: number;
  EquivalenceSurcharge?: number;
  EquivalenceSurchargeAmount?: number;
}

export enum TaxTypeCode {
  IVA = "01", // IVA: Impuesto sobre el valor añadido.
  IPSI = "02", // IPSI: Impuesto sobre la producción, los servicios y la importación.
  IGIC = "03", // IGIC: Impuesto general indirecto de Canarias.
  IRPF = "04", // IRPF: Impuesto sobre la Renta de las personas físicas.
  Other = "05", // Otro (Se definir mas adelante).
}

interface PaymentDetail {
  InstallmentDueDate: string;
  InstallmentAmount: number;
  PaymentMeans: PaymentMeans;
  AccountToBeCredited?: BankAccount;
  AccountToBeDebited?: BankAccount;
}

export enum PaymentMeans {
  Cash = "01", // Al contado.
  DirectDebit = "02", // Recibo domiciliado.
  Receipt = "03", // Recibo.
  CreditTransfer = "04", // Transferencia.
  AuthorizedBillOfExchange = "05", // Letra Aceptada.
  DocumentationCredit = "06", // Crédito documentario.
  ContractAward = "07", // Contrato adjudicación.
  BillOfExchange = "08", // Letra de cambio.
  TransferablePromissoryNote = "09", // Pagaré a la Orden.
  NonTransferablePromissoryNote = "10", // Pagaré No a la Orden.
  Cheque = "11", // Cheque.
  OpenAccountReimbursement = "12", // Reposición.
  SpecialPayment = "13", // Especiales.
  SetOffByRecipient = "14", // Compensación.
  PaymentByPost = "15", // Giro postal.
  CertifiedCheque = "16", // Cheque conformado.
  BankerDraft = "17", // Cheque bancario.
  CashOnDelivery = "18", // Pago contra reembolso.
  PaymentByCard = "19", // Pago mediante tarjeta.
}

interface BankAccount {
  IBAN?: string;
  BankCode?: string;
  BranchCode?: string;
  OverseasBranchAddress?: OverseasAddress;
}

interface AddressInSpain {
  Address: string;
  PostCode: string;
  Town: string;
  Province: string;
  CountryCode: string; // Siempre será "ESP" para el SellerParty.
}

interface OverseasAddress {
  Address: string;
  PostCodeAndTown: string;
  Province: string;
  CountryCode: string;
}

interface PlaceOfIssue {
  PostCode: string; // Código postal asignado por Correos.
  PlaceOfIssueDescription: string; // Texto del nombre del lugar.
}

interface AdministrativeCentre {
  CentreCode: string;
  RoleTypeCode: string;
  AddressInSpain?: AddressInSpain;
  CentreDescription?: string;
}

interface Subsidy {
  SubsidyReason: string;
  SubsidyAmount: number;
}

interface CorrectiveInvoiceData {
  ReasonCode: string; // Código del motivo de rectificación.
  ReasonDescription: string; // Descripción del motivo.
  InvoiceSeriesCode?: string;
  InvoiceNumber?: string;
}

interface ExchangeRateDetails {
  ExchangeRate: number;
  ExchangeRateDate: string;
}

interface FactoringAssignmentData {
  Assignee: Party;
  AssignmentAmount: number;
  AssignmentDate: string;
}

interface ElectronicSignature {
  SignaturePolicyIdentifier: string; // Identificador de la política de firma.
  SignatureValue: string; // Valor de la firma en Base64.
  SigningCertificate: {
    Certificate: string; // Certificado utilizado para la firma en Base64.
  };
  Timestamp?: string; // Marca temporal de la firma (opcional).
}