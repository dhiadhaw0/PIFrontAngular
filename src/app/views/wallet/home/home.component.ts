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
    { type: 'delete', title: 'Delete', icon: 'bi bi-trash' }
  ];

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
  form: FormGroup;
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
  }

  ngOnInit(): void {
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
    
    this.walletService.getAllWallets().subscribe({
      next: (wallets) => {
        this.wallets = wallets;
        this.isLoading = false;
        
        if (wallets.length > 0) {
          this.selectWallet(wallets[0]);
        }
        
        console.log('Loaded wallets:', wallets);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to load wallets';
        console.error('Error loading wallets:', error);
      }
    });
  }
  
  /**
   * Select a wallet and load its details
   */
  selectWallet(wallet: Portfeuille): void {
    // Make sure we're using the correct wallet ID
    const walletId = wallet.idPortfeuille || wallet.id;
    
    if (!walletId) {
      console.error('Cannot select wallet: No ID found', wallet);
      return;
    }
    
    this.isLoading = true;
    this.walletService.getWalletById(walletId).subscribe({
      next: (walletDetails) => {
        this.selectedWallet = walletDetails;
        this.isLoading = false;
        console.log('Selected wallet details:', walletDetails);
        
        // Update UI with wallet details
        this.updateWalletDisplay(walletDetails);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || `Failed to load wallet details for ID: ${walletId}`;
        console.error('Error loading wallet details:', error);
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
    
    // Make sure we're using the correct wallet ID
    const walletId = this.selectedWallet.idPortfeuille || this.selectedWallet.id;
    
    if (!walletId) {
      console.error('Cannot delete wallet: No ID found', this.selectedWallet);
      alert('Error: Wallet ID not found');
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
        break;
      case 'receive':
        this.showQRCode = true;
        this.showForm = false;
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
    this.form.reset();
  }

  verifyPin() {
    if (this.pinForm.valid) {
      const enteredPin = this.pinForm.get('pin')?.value;
      const storedPin = localStorage.getItem('walletPin');

      if (!storedPin) {
        localStorage.setItem('walletPin', enteredPin);
        this.isAuthenticated = true;
      } else if (enteredPin === storedPin) {
        this.isAuthenticated = true;
      } else {
        alert('Invalid PIN. Please try again.');
        this.pinForm.reset();
      }
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
