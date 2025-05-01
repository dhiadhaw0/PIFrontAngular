export enum StatutProjet {
  EN_COURS = 'EN_COURS',
  TERMINE = 'TERMINE',
  ANNULE = 'ANNULE'
}

export interface Investissement {
  id?: number;
  montant: number;
  dateInvestissement: Date;
  portfolioId: number;
  userId: number;
}

export interface Portfolio {
  idPortfolio?: number;
  titreProjet: string;
  descriptionProjet: string;
  montantRecherche: number;
  montantCollecte: number;
  dateCreation: Date;
  rendementPrevisionnel: number;
  statutProjet: StatutProjet;
  userId: number;
  investissements?: Investissement[];
} 