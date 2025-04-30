export interface CompteBancaire {
  id?: number;
  codeBanque?: string;
  rib: string;
  solde: number;
  dateCreation?: Date;
  userId?: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
}
