export enum StatutReclam {
  OUVERTE = 'OUVERTE',
  EN_COURS = 'EN_COURS',
  RESOLUE = 'RESOLUE',
  FERMEE = 'FERMEE'
}

export enum CategorieReclamation {
  TECHNIQUE = 'TECHNIQUE',
  FINANCIER = 'FINANCIER',
  SERVICE = 'SERVICE',
  AUTRE = 'AUTRE'
}

export enum NiveauUrgence {
  FAIBLE = 'FAIBLE',
  MOYEN = 'MOYEN',
  ELEVE = 'ELEVE',
  CRITIQUE = 'CRITIQUE'
}

export interface ReclamationHistorique {
  id?: number;
  statut: StatutReclam;
  dateChangement: Date;
  commentaire?: string;
  reclamationId: number;
}

export interface Reclamation {
  id?: number;
  description: string;
  statutReclam: StatutReclam;
  reclamationFile?: string;
  sujet: string;
  createdDate: Date;
  userId: number;
  historiqueStatut?: ReclamationHistorique[];
  categorie: CategorieReclamation;
  niveauUrgence: NiveauUrgence;
} 