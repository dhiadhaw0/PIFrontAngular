import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { Transaction } from '../../../models/transaction.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type ActionType = 'send' | 'receive' | 'transfer' | 'payment' | 'bills' | 'savings';
type TransactionType = Transaction['typeTransaction'];

interface TransactionFilter {
  type: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-transactions-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() transaction: Transaction | null = null;
  @Output() transactionSaved = new EventEmitter<Transaction>();
  @Output() cancelled = new EventEmitter<void>();

  // UI State
  isDarkTheme = false;
  isAuthenticated = true;
  balance = 25000;
  activeModal: ActionType | null = null;
  showTransactionForm = false;
  selectedTransaction: Transaction | null = null;
  currentFilter = 'all';
  isSubmitting = false;

  // Data
  recentTransactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];

  // Forms
  actionForm: FormGroup;
  
  transactionFilters: TransactionFilter[] = [
    { type: 'all', label: 'All Transactions', icon: 'bi bi-grid' },
    { type: 'DEPOT', label: 'Deposits', icon: 'bi bi-arrow-down-circle' },
    { type: 'RETRAIT', label: 'Withdrawals', icon: 'bi bi-arrow-up-circle' },
    { type: 'VIREMENT', label: 'Transfers', icon: 'bi bi-arrow-left-right' },
    { type: 'PAIEMENT', label: 'Payments', icon: 'bi bi-credit-card' }
  ];

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService
  ) {
    this.actionForm = this.initializeForm();
  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      montant: ['', [Validators.required, Validators.min(0.01)]],
      description: [''],
      recipient: [''],
      paymentMethod: ['wallet'],
      bankAccount: [''],
      billType: [''],
      paymentFor: [''],
      goalName: [''],
      targetAmount: [''],
      monthlyContribution: ['']
    });
  }

  loadTransactions(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (transactions) => {
        this.recentTransactions = transactions;
        this.filterTransactions(this.currentFilter);
      },
      error: (error) => {
        console.error('Error loading transactions:', error);
      }
    });
  }

  filterTransactions(type: string): void {
    this.currentFilter = type;
    this.filteredTransactions = type === 'all' 
      ? [...this.recentTransactions] 
      : this.recentTransactions.filter(tx => tx.typeTransaction === type);
  }

  // Modal Handling
  openActionModal(type: ActionType): void {
    this.activeModal = type;
    this.actionForm.reset({ paymentMethod: 'wallet' });
    this.setupFormValidators(type);
  }

  private setupFormValidators(type: ActionType): void {
    Object.keys(this.actionForm.controls).forEach(key => {
      this.actionForm.get(key)?.clearValidators();
    });

    // Common validators
    this.actionForm.get('montant')?.setValidators([Validators.required, Validators.min(0.01)]);

    // Type-specific validators
    switch (type) {
      case 'send':
        this.actionForm.get('recipient')?.setValidators([Validators.required]);
        this.actionForm.get('description')?.setValidators([Validators.required]);
        break;
      case 'transfer':
        this.actionForm.get('bankAccount')?.setValidators([Validators.required]);
        break;
      case 'payment':
        this.actionForm.get('paymentFor')?.setValidators([Validators.required]);
        this.actionForm.get('paymentMethod')?.setValidators([Validators.required]);
        break;
      case 'bills':
        this.actionForm.get('billType')?.setValidators([Validators.required]);
        break;
      case 'savings':
        this.actionForm.get('goalName')?.setValidators([Validators.required]);
        this.actionForm.get('targetAmount')?.setValidators([Validators.required, Validators.min(0.01)]);
        this.actionForm.get('monthlyContribution')?.setValidators([Validators.required, Validators.min(0.01)]);
        break;
    }

    Object.keys(this.actionForm.controls).forEach(key => {
      this.actionForm.get(key)?.updateValueAndValidity();
    });
  }

  closeModal(): void {
    this.activeModal = null;
  }

  // Transaction Form Handling
  openTransactionForm(transaction?: Transaction): void {
    this.selectedTransaction = transaction || null;
    this.showTransactionForm = true;
  }

  closeTransactionForm(): void {
    this.showTransactionForm = false;
    this.selectedTransaction = null;
  }

  handleTransactionSaved(transaction: Transaction): void {
    const index = this.recentTransactions.findIndex(t => t.idTransaction === transaction.idTransaction);
    if (index >= 0) {
      this.recentTransactions[index] = transaction;
    } else {
      this.recentTransactions.unshift(transaction);
    }
    this.filterTransactions(this.currentFilter);
    this.updateBalance(transaction);
    this.closeTransactionForm();
  }

  // Transaction Actions
  submitAction(): void {
    if (this.actionForm.invalid || !this.activeModal || this.isSubmitting) return;

    this.isSubmitting = true;
    const formData = this.actionForm.value;
    const transaction: Partial<Transaction> = {
      montant: formData.montant,
      paymentReference: formData.description || this.getDefaultDescription(this.activeModal, formData),
      typeTransaction: this.mapActionTypeToTransactionType(this.activeModal),
      date: new Date()
    };

    if (this.activeModal === 'send' || this.activeModal === 'transfer') {
      transaction.recipient = formData.recipient;
    }

    this.transactionService.createTransaction(transaction).subscribe({
      next: (newTransaction) => {
        this.recentTransactions.unshift(newTransaction);
        this.filterTransactions(this.currentFilter);
        this.updateBalance(newTransaction);
        this.closeModal();
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Error creating transaction:', error);
        this.isSubmitting = false;
      }
    });
  }

  private mapActionTypeToTransactionType(actionType: ActionType): TransactionType {
    const mapping: Record<ActionType, TransactionType> = {
      'send': 'VIREMENT',
      'receive': 'DEPOT',
      'transfer': 'VIREMENT',
      'payment': 'PAIEMENT',
      'bills': 'PAIEMENT',
      'savings': 'DEPOT'
    };
    return mapping[actionType];
  }

  // Helpers
  private getDefaultDescription(type: ActionType, formData: any): string {
    const descriptions: Record<ActionType, string> = {
      'send': `Sent to ${formData.recipient}`,
      'receive': 'Money received',
      'transfer': `Transfer to ${formData.bankAccount}`,
      'payment': `Payment for ${formData.paymentFor}`,
      'bills': `${formData.billType} bill`,
      'savings': `Savings: ${formData.goalName}`
    };
    return descriptions[type];
  }

  updateBalance(transaction: Transaction): void {
    if (transaction.typeTransaction === 'DEPOT') {
      this.balance += transaction.montant;
    } else if (['RETRAIT', 'PAIEMENT', 'VIREMENT'].includes(transaction.typeTransaction)) {
      this.balance -= transaction.montant;
    }
  }

  getModalIcon(): string {
    const icons: Record<ActionType, string> = {
      'send': 'bi bi-send',
      'receive': 'bi bi-download',
      'transfer': 'bi bi-arrow-left-right',
      'payment': 'bi bi-credit-card',
      'bills': 'bi bi-receipt',
      'savings': 'bi bi-piggy-bank'
    };
    return this.activeModal ? icons[this.activeModal] : 'bi bi-question-circle';
  }

  getModalTitle(): string {
    const titles: Record<ActionType, string> = {
      'send': 'Send Money',
      'receive': 'Receive Money',
      'transfer': 'Bank Transfer',
      'payment': 'Make Payment',
      'bills': 'Pay Bills',
      'savings': 'Savings Goals'
    };
    return this.activeModal ? titles[this.activeModal] : '';
  }

  getTransactionIcon(type: TransactionType): string {
    const icons: Record<TransactionType, string> = {
      'DEPOT': 'bi bi-arrow-down-circle-fill',
      'RETRAIT': 'bi bi-arrow-up-circle-fill',
      'VIREMENT': 'bi bi-arrow-left-right',
      'PAIEMENT': 'bi bi-credit-card-fill'
    };
    return icons[type] || 'bi bi-question-circle-fill';
  }

  isCreditTransaction(type: TransactionType): boolean {
    return type === 'DEPOT';
  }
}