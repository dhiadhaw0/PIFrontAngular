import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Transaction {
  id: number;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending';
}

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.scss']
})
export class RecentTransactionsComponent {
  @Input() transactions: Transaction[] = [
    {
      id: 1,
      type: 'credit',
      amount: 500,
      description: 'Initial deposit',
      date: '2025-04-28',
      status: 'completed'
    }
  ];

  trackById(index: number, transaction: Transaction): number {
    return transaction.id;
  }
}
