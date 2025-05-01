import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CreditApplication {
  basicInfo?: {
    montantDemande: number;
    creditDuration: number;
    description: string;
  };
  userType?: 'CLIENT' | 'ENTREPRENEUR';
  packInfo?: {
    id: number;
    name: string;
    description: string;
    minAmount: number;
    maxAmount: number;
    interestRate: number;
    duration: number;
  };
  financialInfo?: {
    salaire: number;
    profession: string;
    employmentYears: number;
    bankAccounts: number;
    monthlyExpenses: number;
    otherLoans: number;
  };
  guarantorInfo?: {
    typeGarant: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    salaire: number;
    profession: string;
    relation: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CreditApplicationService {
  private applicationState = new BehaviorSubject<CreditApplication>({});
  currentApplication = this.applicationState.asObservable();


  private apiUrl = 'http://localhost:8086/api/credits'; // Keep backend endpoint
  
  constructor(private http: HttpClient) {}
  
  createCredit(creditData: any): Observable<any> { 
      return this.http.post(this.apiUrl, creditData);
  }
  



  updateBasicInfo(info: CreditApplication['basicInfo']) {
    const current = this.applicationState.value;
    this.applicationState.next({ ...current, basicInfo: info });
  }

  updateUserType(type: CreditApplication['userType']) {
    const current = this.applicationState.value;
    this.applicationState.next({ ...current, userType: type });
  }

  updatePackInfo(info: CreditApplication['packInfo']) {
    const current = this.applicationState.value;
    this.applicationState.next({ ...current, packInfo: info });
  }

  updateFinancialInfo(info: CreditApplication['financialInfo']) {
    const current = this.applicationState.value;
    this.applicationState.next({ ...current, financialInfo: info });
  }

  updateGuarantorInfo(info: CreditApplication['guarantorInfo']) {
    const current = this.applicationState.value;
    this.applicationState.next({ ...current, guarantorInfo: info });
  }

  getCurrentApplication(): CreditApplication {
    return this.applicationState.value;
  }

  resetApplication() {
    this.applicationState.next({});
  }
} 