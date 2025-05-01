export interface User {
  idUser: number;
  nom: string;
  prenom: string;
  email: string;
}

export interface Portfolio {
  idPortfolio: number;
  titreProjet: string;
  descriptionProjet: string;
  montantRecherche: number;
  montantCollecte: number;
  dateCreation: Date;
  rendementPrevisionnel: number;
  statutProjet: string;
  user: User;
  investissements: Investissement[];
}

export enum ModePaiement {
  CREDIT_CARD = 'CREDIT_CARD',
  BANK_TRANSFER = 'BANK_TRANSFER',
  PAYPAL = 'PAYPAL',
  CRYPTO = 'CRYPTO'
}

export enum StatutInvestissement {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export interface Investissement {
  idInvestissement: number;
  montantInvestissement: number;
  dateInvestissement: Date;
  pourcentageParticipation: number;
  rendementEstime: number;
  dureeEngagement: number;
  modePaiement: ModePaiement;
  statutInvestissement: StatutInvestissement;
  portfolio: Portfolio;
  user: User;
} 