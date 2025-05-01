import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WalletQrComponent } from './wallet-qr.component';
import { WalletPinComponent } from './wallet-pin.component';

interface Transaction {
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  status: 'completed' | 'pending';
}

@Component({
  selector: 'wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  balance = 1250.75;
  availableBalance = 1250.75;
  pendingBalance = 0;
  currency = 'USD';
  
  // Categories for navigation
  categories = ['Dashboard', 'Transactions', 'Cards', 'Analytics', 'Settings'];
  selectedCategory = 'Dashboard';

  transactions: Transaction[] = [
    { 
      date: '2024-06-01', 
      description: 'Cab Ride', 
      amount: -25.5,
      type: 'debit',
      status: 'completed'
    },
    { 
      date: '2024-05-30', 
      description: 'Funds Added', 
      amount: 100,
      type: 'credit',
      status: 'completed'
    },
    { 
      date: '2024-05-28', 
      description: 'Cab Ride', 
      amount: -15,
      type: 'debit',
      status: 'completed'
    },
    { 
      date: '2024-05-25', 
      description: 'Funds Added', 
      amount: 200,
      type: 'credit',
      status: 'completed'
    }
  ];

  constructor(private modalService: NgbModal) {}

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Dashboard': 'bi-grid',
      'Transactions': 'bi-clock-history',
      'Cards': 'bi-credit-card',
      'Analytics': 'bi-graph-up',
      'Settings': 'bi-gear'
    };
    return icons[category] || 'bi-circle';
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  addFunds() {
    // Logic to add funds
    alert('Add Funds clicked!');
  }

  withdraw() {
    // Logic to withdraw funds
    alert('Withdraw clicked!');
  }

  openQrModal() {
    this.modalService.open(WalletQrComponent, { centered: true });
  }

  openPinModal() {
    this.modalService.open(WalletPinComponent, { centered: true });
  }

  trackById(index: number): number {
    return index;
  }
} 