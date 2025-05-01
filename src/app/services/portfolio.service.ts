import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = `${environment.apiUrl}/portfolios`;

  constructor(private http: HttpClient) { }

  getAllPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.apiUrl);
  }

  getPortfolioById(id: number): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${this.apiUrl}/${id}`);
  }

  createPortfolio(userId: number, portfolio: Portfolio): Observable<Portfolio> {
    return this.http.post<Portfolio>(`${this.apiUrl}/user/${userId}`, portfolio);
  }

  updatePortfolio(id: number, portfolio: Portfolio): Observable<Portfolio> {
    return this.http.put<Portfolio>(`${this.apiUrl}/${id}`, portfolio);
  }

  deletePortfolio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 