import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
import { RouterModule } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';
import { Portfeuille, StatutPortfeuille } from 'src/app/models/wallet/wallet.model';

// Keeping this interface for compatibility with existing code
interface WalletBalance {
  totalBalance: number;
  availableBalance: number;
  pendingTransactions: number;
  lastUpdated: string;
  currency: string;
  pin: string;
  investedAmount: number;
  savingsAmount: number;
  creditAmount: number;
  expectedReturn: number;
}

interface Transaction {
  id: number;
  type: 'credit' | 'debit' | 'investment' | 'transfer';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending';
  recipient?: string;
}

interface Action {
  type: string;
  title: string;
  icon: string;
}

interface DashboardStats {
  totalValue: number;
  savingsAmount: number;
  investedAmount: number;
  availableBalance: number;
  expectedReturn: number;
  totalReturn: number;
  totalBalance: number;
}

@Component({
  selector: 'app-wallet-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, QRCodeComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  walletData: WalletBalance = {
    totalBalance: 25000,
    availableBalance: 15000,
    pendingTransactions: 500,
    lastUpdated: new Date().toISOString(),
    currency: 'USD',
    pin: '1234',
    investedAmount: 5000,
    savingsAmount: 3000,
    creditAmount: 2000,
    expectedReturn: 0
  };

  dashboardStats: DashboardStats = {
    totalValue: 0,
    savingsAmount: 0,
    investedAmount: 0,
    availableBalance: 0,
    expectedReturn: 0,
    totalReturn: 0,
    totalBalance: 0
  };

  // Wallet data from the backend
  wallets: Portfeuille[] = [];
  selectedWallet: Portfeuille | null = null;
  isLoading: boolean = false;
  errorMessage: string = '';

  actions: Action[] = [
    { type: 'send', title: 'Send', icon: 'bi bi-send' },
    { type: 'receive', title: 'Receive', icon: 'bi bi-download' },
    { type: 'exchange', title: 'Exchange', icon: 'bi bi-arrow-left-right' },
    { type: 'history', title: 'History', icon: 'bi bi-clock-history' },
    { type: 'invest', title: 'Invest', icon: 'bi bi-graph-up' },
    { type: 'transfer', title: 'Transfer', icon: 'bi bi-arrow-left-right' },
    { type: 'update', title: 'Update', icon: 'bi bi-pencil' },
    { type: 'details', title: 'Details', icon: 'bi bi-info-circle' },
    { type: 'delete', title: 'Delete', icon: 'bi bi-trash' }
  ];
  
  // All actions are shown in the same grid now

  transactions: Transaction[] = [
    {
      id: 1,
      type: 'credit',
      amount: 1500,
      description: 'Payment received',
      date: new Date().toISOString(),
      status: 'completed'
    },
    {
      id: 2,
      type: 'debit',
      amount: 800,
      description: 'Online purchase',
      date: new Date().toISOString(),
      status: 'completed'
    },
    {
      id: 3,
      type: 'investment',
      amount: 2000,
      description: 'Investment in stocks',
      date: new Date().toISOString(),
      status: 'completed'
    }
  ];

  private allTransactions: Transaction[] = [];

  showForm = false;
  showQRCode = false;
  selectedType = '';
  showDetails = false;
  form: FormGroup;
  updateForm: FormGroup;
  pinForm: FormGroup;
  isAuthenticated = false;
  isDarkTheme = false;
  qrValue = '';

  constructor(
    private fb: FormBuilder,
    private walletService: WalletService
  ) {
    this.pinForm = this.fb.group({
      pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
    this.form = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      recipient: [''],
      investmentType: ['']
    });
    
    this.updateForm = this.fb.group({
      valeurTotale: [0, [Validators.required, Validators.min(0)]],
      montantEpargne: [0, [Validators.required, Validators.min(0)]],
      montantInvestie: [0, [Validators.required, Validators.min(0)]],
      soldeDisponible: [0, [Validators.required, Validators.min(0)]],
      codePin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  ngOnInit(): void {
    // Charge les portefeuilles immédiatement, même avant l'authentification
    this.loadWallets();
    
    // Initialize transactions for demo purposes
    this.transactions = [
      {
        id: 1,
        type: 'credit',
        amount: 1000,
        description: 'Salary Deposit',
        date: new Date().toISOString(),
        status: 'completed'
      },
      {
        id: 2,
        type: 'debit',
        amount: 500,
        description: 'Grocery Shopping',
        date: new Date().toISOString(),
        status: 'completed'
      },
      {
        id: 3,
        type: 'investment',
        amount: 2000,
        description: 'Stock Investment',
        date: new Date().toISOString(),
        status: 'pending'
      }
    ];
    this.allTransactions = [...this.transactions];
  }
  
  /**
   * Load all wallets from the backend
   */
  loadWallets(): void {
    this.isLoading = true;
    this.errorMessage = '';
    console.log('Début du chargement des portefeuilles...');
    
    this.walletService.getAllWallets().subscribe({
      next: (wallets) => {
        console.log('Portefeuilles reçus du service:', wallets);
        this.wallets = wallets;
        this.isLoading = false;
        
        if (wallets && wallets.length > 0) {
          console.log('Sélection automatique du premier portefeuille:', wallets[0]);
          // Petite temporisation pour s'assurer que l'UI a le temps de se mettre à jour
          setTimeout(() => {
            this.selectWallet(wallets[0]);
          }, 100);
        } else {
          console.log('Aucun portefeuille disponible');
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load wallets';
        console.error('Erreur lors du chargement des portefeuilles:', error);
      }
    });
  }
  
  // Gère l'événement de changement du sélecteur de portefeuille
  onWalletSelect = (event: Event): void => {
    const selectElement = event.target as HTMLSelectElement;
    const selectedIndex = Number(selectElement.value);
    console.log('Wallet selected:', selectedIndex);
    
    if (this.wallets && this.wallets.length > selectedIndex) {
      this.selectWallet(this.wallets[selectedIndex]);
    }
  }
  
  /**
   * Select a wallet and load its details
   */
  selectWallet(wallet: Portfeuille): void {
    // Débogage - Voir la structure complète du portefeuille
    console.log('Structure complète du portefeuille:', JSON.stringify(wallet));
    
    // Recherche de différentes propriétés possibles qui pourraient contenir l'ID
    // Les noms possibles selon divers formats backend
    const possibleIdFields = [
      'id',
      'idPortfeuille',
      'portfeuilleId',
      'wallet_id',
      'walletId',
      'ID',
      '_id'
    ];
    
    // Recherche de l'ID dans toutes les propriétés du portefeuille
    let walletId: any = null;
    
    // D'abord essayer les champs connus
    for (const field of possibleIdFields) {
      if (wallet[field as keyof Portfeuille] !== undefined && wallet[field as keyof Portfeuille] !== null) {
        walletId = wallet[field as keyof Portfeuille];
        console.log(`ID trouvé dans le champ '${field}': ${walletId}`);
        break;
      }
    }
    
    // Si aucun ID n'est trouvé, rechercher dans toutes les propriétés qui contiennent 'id'
    if (!walletId) {
      for (const key in wallet) {
        if (key.toLowerCase().includes('id') && wallet[key as keyof Portfeuille] !== undefined && wallet[key as keyof Portfeuille] !== null) {
          walletId = wallet[key as keyof Portfeuille];
          console.log(`ID trouvé dans un champ alternatif '${key}': ${walletId}`);
          break;
        }
      }
    }
    
    // Comme solution de dernier recours, prendre la première propriété numérique du portefeuille
    if (!walletId) {
      for (const key in wallet) {
        if (typeof wallet[key as keyof Portfeuille] === 'number' && key !== 'valeurTotale' && key !== 'montantEpargne') {
          walletId = wallet[key as keyof Portfeuille];
          console.log(`Utilisation d'une propriété numérique comme ID de secours '${key}': ${walletId}`);
          break;
        }
      }
    }
    
    // Si aucun ID n'a été trouvé, créer un portefeuille fallback
    if (!walletId) {
      console.error('Cannot select wallet: No ID found', wallet);
      
      // Créer un portefeuille de secours pour l'authentification
      this.selectedWallet = wallet;
      this.selectedWallet.codePin = '1234'; // PIN par défaut
      console.log('Portefeuille de secours créé avec PIN par défaut:', this.selectedWallet);
      this.isLoading = false;
      this.updateWalletDisplay(wallet);
      return;
    }
    
    this.isLoading = true;
    this.walletService.getWalletById(walletId).subscribe({
      next: (walletDetails) => {
        this.selectedWallet = walletDetails;
        this.isLoading = false;
        console.log('Détails du portefeuille sélectionné:', walletDetails);
        
        // Correction au cas où le portefeuille n'aurait pas de PIN
        if (!this.selectedWallet.codePin) {
          console.log('Pas de PIN dans le portefeuille, utilisation du PIN par défaut');
          this.selectedWallet.codePin = '1234'; // PIN par défaut
        }
        
        // Update UI with wallet details
        this.updateWalletDisplay(walletDetails);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || `Failed to load wallet details for ID: ${walletId}`;
        console.error('Erreur lors du chargement des détails du portefeuille:', error);
        
        // Même en cas d'erreur, on utilise le portefeuille de sélection directe
        this.selectedWallet = wallet;
        if (!this.selectedWallet.codePin) {
          this.selectedWallet.codePin = '1234'; // PIN par défaut
        }
        this.updateWalletDisplay(wallet);
      }
    });
  }
  
  /**
   * Update wallet display based on selected wallet
   */
  updateWalletDisplay(wallet: Portfeuille): void {
    if (!wallet) return;
    
    // Update the wallet data display
    this.walletData = {
      totalBalance: wallet.valeurTotale || 0,
      availableBalance: wallet.soldeDisponible || 0,
      pendingTransactions: 0, // Not provided by backend
      lastUpdated: new Date().toISOString(),
      currency: 'USD', // Default currency
      pin: wallet.codePin || '0000',
      investedAmount: wallet.montantInvestie || 0,
      savingsAmount: wallet.montantEpargne || 0,
      creditAmount: wallet.montantCredit || 0,
      expectedReturn: wallet.rendementPrevisionnel || 0
    };
    
    this.updateDashboardStats();
  }
  
  /**
   * Delete the selected wallet
   */
  deleteWallet(): void {
    if (!this.selectedWallet) {
      alert('Please select a wallet to delete');
      return;
    }
    
    // Search for the wallet ID using the same robust approach as in selectWallet
    // The possible ID field names according to various backend formats
    const possibleIdFields = [
      'id',
      'idPortfeuille',
      'portfeuilleId',
      'wallet_id',
      'walletId',
      'ID',
      '_id'
    ];
    
    // Search for the ID in all wallet properties
    let walletId: any = null;
    
    // First try known fields
    for (const field of possibleIdFields) {
      if (this.selectedWallet[field as keyof Portfeuille] !== undefined && 
          this.selectedWallet[field as keyof Portfeuille] !== null) {
        walletId = this.selectedWallet[field as keyof Portfeuille];
        console.log(`Deletion - ID found in field '${field}': ${walletId}`);
        break;
      }
    }
    
    // If no ID is found, search in all properties containing 'id'
    if (!walletId) {
      for (const key in this.selectedWallet) {
        if (key.toLowerCase().includes('id') && 
            this.selectedWallet[key as keyof Portfeuille] !== undefined && 
            this.selectedWallet[key as keyof Portfeuille] !== null) {
          walletId = this.selectedWallet[key as keyof Portfeuille];
          console.log(`Deletion - ID found in alternative field '${key}': ${walletId}`);
          break;
        }
      }
    }
    
    // As a last resort, take the first numeric property of the wallet
    if (!walletId) {
      for (const key in this.selectedWallet) {
        if (typeof this.selectedWallet[key as keyof Portfeuille] === 'number' && 
            key !== 'valeurTotale' && key !== 'montantEpargne') {
          walletId = this.selectedWallet[key as keyof Portfeuille];
          console.log(`Deletion - Using numeric property as fallback ID '${key}': ${walletId}`);
          break;
        }
      }
    }
    
    if (!walletId) {
      console.error('Cannot delete wallet: No ID found', this.selectedWallet);
      alert('Cannot delete wallet: No ID found');
      return;
    }
    
    if (!confirm(`Are you sure you want to delete this wallet? This cannot be undone.`)) {
      return;
    }
    
    this.isLoading = true;
    
    this.walletService.deleteWallet(Number(walletId)).subscribe({
      next: () => {
        console.log(`Wallet with ID ${walletId} deleted successfully`);
        // Remove from the local array
        this.wallets = this.wallets.filter(w => 
          (w.idPortfeuille !== walletId && w.id !== walletId)
        );
        
        this.selectedWallet = null;
        this.isLoading = false;
        
        alert('Wallet deleted successfully');
        
        // Select another wallet if available
        if (this.wallets.length > 0) {
          this.selectWallet(this.wallets[0]);
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error(`Error deleting wallet with ID ${walletId}:`, error);
        alert(`Failed to delete wallet: ${error.message || 'Server error'}`); 
      }
    });
  }

  calculateExpectedReturn(): number {
    // Simple calculation based on investment amount and duration
    const amount = this.form.get('amount')?.value || 0;
    const duration = this.form.get('duration')?.value;
    
    let multiplier = 1;
    switch (duration) {
      case 'short':
        multiplier = 1.05; // 5% return for short term
        break;
      case 'medium':
        multiplier = 1.1; // 10% return for medium term
        break;
      case 'long':
        multiplier = 1.15; // 15% return for long term
        break;
    }
    
    return amount * multiplier;
  }

  updateDashboardStats() {
    this.dashboardStats = {
      totalValue: this.walletData.totalBalance,
      savingsAmount: this.walletData.savingsAmount,
      investedAmount: this.walletData.investedAmount,
      availableBalance: this.walletData.availableBalance,
      expectedReturn: this.walletData.expectedReturn,
      totalReturn: this.walletData.totalBalance - this.walletData.investedAmount,
      totalBalance: this.walletData.savingsAmount + this.walletData.investedAmount + this.walletData.availableBalance
    };
  }

  handleAction(type: string) {
    this.selectedType = type;
    switch (type) {
      case 'send':
      case 'invest':
      case 'transfer':
        this.showForm = true;
        this.showQRCode = false;
        this.showDetails = false;
        break;
      case 'receive':
        this.showQRCode = true;
        this.showForm = false;
        this.showDetails = false;
        break;
      case 'update':
        if (!this.selectedWallet) {
          alert('Please select a wallet to update');
          return;
        }
        this.initUpdateForm();
        this.showForm = true;
        this.showQRCode = false;
        this.showDetails = false;
        break;
      case 'details':
        if (!this.selectedWallet) {
          alert('Please select a wallet to view details');
          return;
        }
        this.showDetails = true;
        this.showForm = false;
        this.showQRCode = false;
        break;
      case 'history':
        // Navigate to transaction history
        console.log('View history');
        break;
      case 'delete':
        this.deleteWallet();
        break;
      default:
        break;
    }
  }

  closeForm() {
    this.showForm = false;
    this.showDetails = false;
    this.form.reset();
    this.updateForm.reset();
  }

  verifyPin() {
    if (this.pinForm.valid) {
      const enteredPin = this.pinForm.get('pin')?.value;
      console.log('PIN entré:', enteredPin);
      
      // Si nous avons un portefeuille sélectionné, utiliser son code PIN
      if (this.selectedWallet && this.selectedWallet.codePin) {
        console.log('Portefeuille sélectionné:', this.selectedWallet);
        console.log('Code PIN du portefeuille:', this.selectedWallet.codePin);
        console.log('Comparaison: ', enteredPin === this.selectedWallet.codePin ? 'identique' : 'différent');
        
        // Forcer la conversion en string pour s'assurer que la comparaison est correcte
        if (String(enteredPin) === String(this.selectedWallet.codePin)) {
          console.log('PIN correct - Authentification réussie!');
          this.isAuthenticated = true;
        } else {
          console.log('PIN incorrect');
          alert('Code PIN invalide. Veuillez réessayer.');
          this.pinForm.reset();
        }
      } 
      // Sinon, utiliser le comportement par défaut avec localStorage
      else {
        console.log('Aucun portefeuille sélectionné, utilisation du localStorage');
        const storedPin = localStorage.getItem('walletPin');
        console.log('PIN stocké:', storedPin);

        if (!storedPin) {
          localStorage.setItem('walletPin', enteredPin);
          this.isAuthenticated = true;
          console.log('Nouveau PIN enregistré, authentification réussie!');
        } else if (enteredPin === storedPin) {
          this.isAuthenticated = true;
          console.log('PIN correct (localStorage) - Authentification réussie!');
        } else {
          console.log('PIN incorrect (localStorage)');
          alert('Code PIN invalide. Veuillez réessayer.');
          this.pinForm.reset();
        }
      }
      
      // Vérifier l'état d'authentification après traitement
      console.log('Statut d\'authentification après vérification:', this.isAuthenticated ? 'Connecté' : 'Non connecté');
    }
  }

  submit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const amount = parseFloat(formValue.amount);

      switch (this.selectedType) {
        case 'send':
          if (amount <= this.walletData.availableBalance) {
            this.walletData.availableBalance -= amount;
            this.transactions.unshift({
              id: this.transactions.length + 1,
              type: 'debit',
              amount: amount,
              description: formValue.description || 'Send money',
              date: new Date().toISOString(),
              status: 'completed',
              recipient: formValue.recipient
            });
          }
          break;
        case 'invest':
          if (amount <= this.walletData.availableBalance) {
            this.walletData.availableBalance -= amount;
            this.walletData.investedAmount += amount;
          this.transactions.unshift({
            id: this.transactions.length + 1,
              type: 'investment',
            amount: amount,
              description: formValue.description || 'Investment',
            date: new Date().toISOString(),
            status: 'completed'
          });
            this.calculateExpectedReturn();
          }
          break;
        case 'transfer':
          if (amount <= this.walletData.availableBalance) {
            this.walletData.availableBalance -= amount;
            this.transactions.unshift({
              id: this.transactions.length + 1,
              type: 'transfer',
              amount: amount,
              description: formValue.description || 'Transfer',
              date: new Date().toISOString(),
              status: 'completed',
              recipient: formValue.recipient
            });
          }
          break;
      }

      this.updateDashboardStats();
      this.closeForm();
    }
  }

  /**
   * Initialize the update form with the selected wallet's values
   */
  initUpdateForm(): void {
    if (!this.selectedWallet) return;
    
    this.updateForm.patchValue({
      valeurTotale: this.selectedWallet.valeurTotale || 0,
      montantEpargne: this.selectedWallet.montantEpargne || 0,
      montantInvestie: this.selectedWallet.montantInvestie || 0,
      soldeDisponible: this.selectedWallet.soldeDisponible || 0,
      codePin: this.selectedWallet.codePin || ''
    });
  }

  /**
   * Submit the update form to update the wallet
   */
  submitUpdateForm(): void {
    if (!this.updateForm.valid || !this.selectedWallet) {
      alert('Please fill in all required fields');
      return;
    }

    const formValues = this.updateForm.value;
    
    // Create updated wallet object
    const updatedWallet: Portfeuille = {
      ...this.selectedWallet,
      valeurTotale: Number(formValues.valeurTotale),
      montantEpargne: Number(formValues.montantEpargne),
      montantInvestie: Number(formValues.montantInvestie),
      soldeDisponible: Number(formValues.soldeDisponible),
      codePin: formValues.codePin
    };
    
    // Ensure we have a valid ID to update
    if (!updatedWallet.idPortfeuille && updatedWallet.id) {
      updatedWallet.idPortfeuille = Number(updatedWallet.id);
    }
    
    this.isLoading = true;
    
    this.walletService.updateWallet(updatedWallet).subscribe({
      next: (response) => {
        console.log('Wallet updated successfully:', response);
        this.isLoading = false;
        
        // Update wallet in the list
        const index = this.wallets.findIndex(w => 
          (w.idPortfeuille === updatedWallet.idPortfeuille || w.id === updatedWallet.idPortfeuille));
        
        if (index !== -1) {
          this.wallets[index] = response;
        }
        
        // Update the selected wallet
        this.selectedWallet = response;
        
        // Update the wallet display
        this.updateWalletDisplay(response);
        
        alert('Wallet updated successfully');
        this.closeForm();
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error updating wallet:', error);
        alert(`Failed to update wallet: ${error.message || 'Server error'}`);
      }
    });
  }

  trackById(index: number, item: Transaction): number {
    return item.id;
  }

  getTransactionIcon(type: string): string {
    switch (type) {
      case 'credit':
        return 'bi-arrow-down';
      case 'debit':
        return 'bi-arrow-up';
      case 'investment':
        return 'bi-graph-up';
      case 'transfer':
        return 'bi-arrow-left-right';
      default:
        return 'bi-circle';
    }
  }

  filterTransactions(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const filter = select.value;
    
    if (filter === 'all') {
      this.transactions = [...this.allTransactions];
    } else {
      this.transactions = this.allTransactions.filter((tx: Transaction) => tx.type === filter);
    }
  }
}
