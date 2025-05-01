import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investissement, Portfolio } from '../models/investment.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private apiUrl = `${environment.apiUrl}/investissements`;

  constructor(private http: HttpClient) { }

  createInvestment(userId: number, portfolioId: number, investment: Partial<Investissement>): Observable<Investissement> {
    return this.http.post<Investissement>(`${this.apiUrl}/user/${userId}/portfolio/${portfolioId}`, investment);
  }

  getInvestmentById(id: number): Observable<Investissement> {
    return this.http.get<Investissement>(`${this.apiUrl}/${id}`);
  }

  updateInvestment(id: number, investment: Partial<Investissement>): Observable<Investissement> {
    return this.http.put<Investissement>(`${this.apiUrl}/${id}`, investment);
  }

  deleteInvestment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  approveInvestment(id: number): Observable<Investissement> {
    return this.http.put<Investissement>(`${this.apiUrl}/${id}/approve`, {});
  }

  rejectInvestment(id: number): Observable<Investissement> {
    return this.http.put<Investissement>(`${this.apiUrl}/${id}/reject`, {});
  }

  getPortfolioInvestments(portfolioId: number): Observable<Investissement[]> {
    return this.http.get<Investissement[]>(`${this.apiUrl}/portfolio/${portfolioId}`);
  }

  getUserInvestments(userId: number): Observable<Investissement[]> {
    return this.http.get<Investissement[]>(`${this.apiUrl}/user/${userId}`);
  }
} 