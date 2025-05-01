// transaction.model.ts
export interface Transaction {
  idTransaction?: number;
  date:  Date | string; // ISO format date string
  montant: number;
  typeTransaction: 'DEPOT' | 'PAIEMENT' | 'RETRAIT' | 'VIREMENT';
  recipient: string;
  paymentReference: string;
  toCompteId?: number;
  userId?: number;
}