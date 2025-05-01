import { Formation } from './formation.model';
import { CompteBancaire } from './compte-bancaire.model';
import { Portfolio } from './portfolio.model';
import { Reclamation } from './reclamation.model';

export interface User {
  idUser: number; 
    nom: string;
    prenom: string;
    email: string;
    password: string;
    telephone: string;
    photo?: string;
    dateNaissance: string; 
    role: string;
    cin: number;
    adresse: string;
    profession: string;
    salaire: number;
    numTel: number;
    matriculeFiscale: string;
  formations?: Formation[];
  compteBancaires?: CompteBancaire[];
  portfolios?: Portfolio[];
  reclamations?: Reclamation[];
} 