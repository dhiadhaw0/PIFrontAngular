import { User } from './user.model';

export enum TypeFormation {
  WEBINAIR = 'WEBINAIR',
  PDF = 'PDF',
  VIDEO = 'VIDEO'
}

export enum StatutFormation {
  En_Cours = 'En_Cours',
  Complète = 'Complète'
}

export interface Formation {
  idFormation?: number;
  titre: string;
  description: string;
  duree: number;
  prix: number;
  certificat: boolean;
  noteMoyenne: number;
  notesUsers: number[];
  typeFormation: TypeFormation;
  statutFormation: StatutFormation;
  users?: User[];
  formationFileUrl?: string;
}