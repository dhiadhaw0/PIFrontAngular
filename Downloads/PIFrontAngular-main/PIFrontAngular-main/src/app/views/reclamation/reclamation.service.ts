import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Reclamation {
  sujet: string;
  description: string;
  categorie: 'PROBLEME_TRANSACTION' | 'COMPTE_BLOQUE' | 'ERREUR_SOLDE' | 'AUTRES';
  niveauUrgence: 'BASSE' | 'MOYENNE' | 'HAUTE';
  statutReclam?: 'OUVERTE' | 'EN_COURS' | 'RESOLU';
  reclamationFile?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:8080/api/reclamations';

  constructor(private http: HttpClient) { }

  createReclamation(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  getReclamations(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  getReclamationById(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/${id}`);
  }

  getReclamationStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`);
  }
}
