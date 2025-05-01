import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'http://localhost:8085/api/portfeuille'; // Keep backend endpoint

  constructor(private http: HttpClient) {}

  createWallet(walletData: any): Observable<any> { 
    return this.http.post(this.apiUrl, walletData);
  }
}