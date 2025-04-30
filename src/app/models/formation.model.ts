import { User } from './user.model';

export enum TypeFormation {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  HYBRID = 'HYBRID'
}

export enum StatutFormation {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
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