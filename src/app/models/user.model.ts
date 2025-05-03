import { Formation } from './formation.model';
import { CompteBancaire } from './compte-bancaire.model';
import { Portfolio } from './portfolio.model';
import { Reclamation } from './reclamation.model';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: Date;
  cin: string;
  photoUrl?: string;
  formations?: Formation[];
  compteBancaires?: CompteBancaire[];
  portfolios?: Portfolio[];
  reclamations?: Reclamation[];
} 