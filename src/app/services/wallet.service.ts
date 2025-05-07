import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Portfeuille } from '../models/wallet/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'http://localhost:8085/portfeuille'; // Keep backend endpoint

  constructor(private http: HttpClient) {}

  /**
   * Get all wallets
   */
  getAllWallets(): Observable<Portfeuille[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieve-all-portfeuilles`).pipe(
      map(wallets =>
        this.normalizeWalletIds(
          wallets.map(wallet => ({
            ...wallet,
            dateCreation: wallet.dateCreation ? new Date(wallet.dateCreation) : null
          }))
        )
      ),
      tap(wallets => console.log('Retrieved wallets:', wallets)),
      catchError(this.handleError('getAllWallets'))
    );
  }
  

  /**
   * Get wallet by ID
   */
  getWalletById(id: number): Observable<Portfeuille> {
    // Ensure ID is a number
    const walletId = Number(id);
    if (isNaN(walletId)) {
      console.error('Invalid wallet ID:', id);
      return throwError(() => new Error('ID de portefeuille invalide'));
    }
    
    return this.http.get<Portfeuille>(`${this.apiUrl}/retrieve-portfeuille/${walletId}`)
      .pipe(
        map(wallet => this.normalizeWalletId(wallet)),
        tap(wallet => console.log('Retrieved wallet:', wallet)),
        catchError(this.handleError(`getWalletById id=${walletId}`))
      );
  }

  /**
   * Create a new wallet
   */
  createWallet(walletData: Portfeuille): Observable<Portfeuille> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    // Create a clean wallet object with just the required fields to avoid any extraneous data
    const cleanWalletData = {
      idUser: Number(walletData.idUser),
      valeurTotale: Number(walletData.valeurTotale),
      montantEpargne: Number(walletData.montantEpargne),
      montantInvestie: Number(walletData.montantInvestie),
      soldeDisponible: Number(walletData.soldeDisponible),
      montantCredit: Number(walletData.montantCredit),
      rendementPrevisionnel: Number(walletData.rendementPrevisionnel),
      dateCreation: walletData.dateCreation,
      scoreFinancier: walletData.scoreFinancier,
      codePin: walletData.codePin,
      qrCode: walletData.qrCode || 'placeholder-qr-code',
      statutPortfeuille: walletData.statutPortfeuille
    };
    
    console.log('Creating wallet with data:', cleanWalletData);
    
    return this.http.post<Portfeuille>(`${this.apiUrl}/ajouter`, cleanWalletData, { headers })
      .pipe(
        tap(response => console.log('Backend response for wallet creation:', response)),
        map(wallet => this.normalizeWalletId(wallet)),
        tap(wallet => console.log('Normalized created wallet:', wallet)),
        catchError((error) => {
          console.error('Wallet creation error details:', error);
          return this.handleError('createWallet')(error);
        })
      );
  }

  /**
   * Update an existing wallet
   */
  updateWallet(walletData: Portfeuille): Observable<Portfeuille> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    // Ensure wallet ID is included properly
    if (!walletData.idPortfeuille && walletData['id']) {
      walletData.idPortfeuille = Number(walletData['id']);
    } else if (walletData.idPortfeuille) {
      walletData.idPortfeuille = Number(walletData.idPortfeuille);
    }
    
    console.log('Updating wallet with data:', walletData);
    
    return this.http.put<Portfeuille>(`${this.apiUrl}/modify-portfeuille`, walletData, { headers })
      .pipe(
        map(wallet => this.normalizeWalletId(wallet)),
        tap(wallet => console.log('Updated wallet:', wallet)),
        catchError(this.handleError('updateWallet'))
      );
  }

  /**
   * Delete a wallet by ID
   */
  deleteWallet(id: number): Observable<any> {
    // Ensure ID is a number
    const walletId = Number(id);
    if (isNaN(walletId)) {
      console.error('Invalid wallet ID for deletion:', id);
      return throwError(() => new Error('ID de portefeuille invalide pour la suppression'));
    }
    
    console.log('Deleting wallet with ID:', walletId);
    
    return this.http.delete(`${this.apiUrl}/remove-portfeuille/${walletId}`)
      .pipe(
        tap(() => console.log(`Deleted wallet with ID: ${walletId}`)),
        catchError(this.handleError(`deleteWallet id=${walletId}`))
      );
  }

  /**
   * Normalize wallet ID (handle idPortfeuille vs id mismatch)
   */
  private normalizeWalletId(wallet: any): Portfeuille {
    if (!wallet) return wallet;
    
    // Handle ID mismatch by ensuring idPortfeuille is set
    if (!wallet.idPortfeuille && wallet.id) {
      wallet.idPortfeuille = Number(wallet.id);
      console.log('Normalized wallet ID from id to idPortfeuille:', wallet);
    }
    
    return wallet;
  }

  /**
   * Normalize wallet IDs in an array of wallets
   */
  private normalizeWalletIds(wallets: any[]): Portfeuille[] {
    if (!wallets) return [];
    return wallets.map(wallet => this.normalizeWalletId(wallet));
  }

  /**
   * Generic error handler for HTTP operations
   */
  private handleError(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<never> => {
      // Log error details
      console.error(`${operation} failed:`, error);
      
      let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
      
      // Customize error based on status
      if (error.status === 404) {
        errorMessage = 'Ressource non trouvée.';
      } else if (error.status === 400) {
        errorMessage = 'Requête invalide. Vérifiez vos données.';
      } else if (error.status === 401 || error.status === 403) {
        errorMessage = 'Non autorisé. Veuillez vous reconnecter.';
      } else if (error.status === 0) {
        errorMessage = 'Serveur inaccessible. Vérifiez votre connexion.';
      }
      
      // Return a user-friendly error message
      return throwError(() => new Error(`${errorMessage} (${operation})`));
    };
  }

  // Calculate yield
  calculateYield(walletId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${walletId}/calculer-rendement`);
  }

  // Get dashboard stats
  getDashboardStats(walletId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${walletId}/dashboard-stats`);
  }

  // Generate PDF
  generatePdf(walletId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${walletId}/export/pdf`, {
      responseType: 'blob'
    });
  }

 // Invest
invest(walletId: number, amount: number): Observable<any> {
  // Add validation before making the request
  if (!walletId || walletId <= 0) {
    return throwError(() => new Error('Invalid wallet ID'));
  }

  if (!amount || amount <= 0) {
    return throwError(() => new Error('Investment amount must be positive'));
  }

  console.log('Investment attempt with wallet ID:', walletId, 'and amount:', amount);

  // Direct approach based on the error messages
  // The API expects 'idPortfeuille' (with 't') as URL parameter
  return this.http.post(`${this.apiUrl}/investir`, null, {
    params: {
      idPortfeuille: walletId.toString(), // Backend expects Long type
      montant: amount.toString()          // Backend expects Float type
    },
    responseType: 'text' // Backend returns French text responses
  }).pipe(
    tap(response => {
      console.log('Investment successful, response:', response);
    }),
    catchError(error => {
      console.error('Investment API error:', error);
      
      // Extract the real error message from the response
      let errorMessage = 'An error occurred during investment';
      
      if (error.error && typeof error.error === 'string') {
        // This is a French message from the backend
        errorMessage = error.error;
        console.log('Received French error:', errorMessage);
        
        // Translate exact French error messages based on backend implementation
        if (errorMessage.includes("Fonds insuffisants")) {
          errorMessage = 'Insufficient funds for this investment';
        } else if (errorMessage.includes("Portefeuille introuvable")) {
          errorMessage = 'Wallet not found';
        }
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      // Log the extracted message for debugging
      console.error('Extracted error message:', errorMessage);
      
      return throwError(() => new Error(errorMessage));
    })
  );
}

  // Transfer
  transfer(sourceId: number, destinationId: number, amount: number): Observable<any> {
    // Add validation before making the request
    if (!sourceId || sourceId <= 0) {
      return throwError(() => new Error('Invalid source wallet ID'));
    }

    if (!destinationId || destinationId <= 0) {
      return throwError(() => new Error('Invalid destination wallet ID'));
    }
    
    if (!amount || amount <= 0) {
      return throwError(() => new Error('Transfer amount must be positive'));
    }

    if (sourceId === destinationId) {
      return throwError(() => new Error('Source and destination wallets cannot be the same'));
    }
    
    console.log('Transfer attempt from wallet ID:', sourceId, 'to wallet ID:', destinationId, 'amount:', amount);
  
    // Direct approach based on the backend's expectations
    // The API expects 'idSource', 'idDest', and 'montant' as URL parameters
    return this.http.post(`${this.apiUrl}/transferer`, null, {
      params: {
        idSource: sourceId.toString(),     // Backend expects Long type
        idDest: destinationId.toString(),  // Backend expects Long type
        montant: amount.toString()         // Backend expects Float type
      },
      responseType: 'text' // Backend returns French text responses
    }).pipe(
      tap(response => {
        console.log('Transfer successful, response:', response);
      }),
      catchError(error => {
        console.error('Transfer API error:', error);
        
        // Extract the real error message from the response
        let errorMessage = 'An error occurred during transfer';
        
        if (error.error && typeof error.error === 'string') {
          // This is a French message from the backend
          errorMessage = error.error;
          console.log('Received French error:', errorMessage);
          
          // Translate exact French error messages based on backend implementation
          if (errorMessage.includes("Fonds insuffisants")) {
            errorMessage = 'Insufficient funds for this transfer';
          } else if (errorMessage.includes("portefeuilles n'existe pas")) {
            errorMessage = 'One of the wallets does not exist';
          } else if (errorMessage.includes("n'est pas actif")) {
            errorMessage = 'One of the wallets is not active';
          }
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        // Log the extracted message for debugging
        console.error('Extracted error message:', errorMessage);
        
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}