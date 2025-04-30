import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { TransactionTypesComponent } from './components/transaction-types/transaction-types.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { TransactionModalComponent } from './components/transaction-modal/transaction-modal.component';

import { Transaction } from './components/recent-transactions/recent-transactions.component';

@Component({
  selector: 'flights-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountBalanceComponent,
    TransactionTypesComponent,
    QuickActionsComponent,
    RecentTransactionsComponent,
    TransactionModalComponent
  ],
  templateUrl: './home.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomeComponent {
  accountBalance = 25000;
  recentTransactions: Transaction[] = [
    { id: 1, type: 'credit', amount: 1500, description: 'Salary Deposit', date: '2025-04-28', status: 'completed' },
    { id: 2, type: 'debit', amount: 500, description: 'Rent Payment', date: '2025-04-27', status: 'completed' },
    { id: 3, type: 'debit', amount: 100, description: 'Grocery Shopping', date: '2025-04-26', status: 'pending' }
  ];

  accountDetails = {
    accountId: 'ACC123456',
    accountName: 'John Doe',
    bankName: 'Digital Bank'
  };

  quickActions = [
    { id: 'bills', title: 'Pay Bills', icon: 'bi bi-receipt' },
    { id: 'savings', title: 'Savings Goals', icon: 'bi bi-piggy-bank' },
    { id: 'cards', title: 'Manage Cards', icon: 'bi bi-credit-card' }
  ];

  transactionTypes = [
    {
      id: 'send',
      title: 'Send Money',
      description: 'Transfer money to others',
      icon: 'bi bi-send',
      color: 'primary'
    },
    {
      id: 'receive',
      title: 'Receive Money',
      description: 'Get paid by others',
      icon: 'bi bi-download',
      color: 'success'
    },
    {
      id: 'transfer',
      title: 'Bank Transfer',
      description: 'Transfer between accounts',
      icon: 'bi bi-arrow-left-right',
      color: 'info'
    },
    {
      id: 'payment',
      title: 'Make Payment',
      description: 'Pay for services',
      icon: 'bi bi-credit-card',
      color: 'warning'
    }
  ];

  showTransactionForm = false;
  selectedTransactionType = '';
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      recipientAccount: [''],
      paymentMethod: ['wallet'],
      currency: ['USD']
    });
  }

  startTransaction(type: string) {
    this.selectedTransactionType = type;
    this.showTransactionForm = true;
    this.updateFormValidators();
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      // Handle form submission
      console.log('Form submitted:', this.transactionForm.value);
      this.showTransactionForm = false;
      this.transactionForm.reset({
        paymentMethod: 'wallet',
        currency: 'USD'
      });
    }
  }

  updateFormValidators() {
    const showRecipientField = this.selectedTransactionType === 'transfer';

    if (showRecipientField) {
      this.transactionForm.get('recipientAccount')?.setValidators([Validators.required]);
    } else {
      this.transactionForm.get('recipientAccount')?.clearValidators();
    }

    this.transactionForm.get('recipientAccount')?.updateValueAndValidity();
  }


}
