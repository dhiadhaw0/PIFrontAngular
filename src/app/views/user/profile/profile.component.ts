import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface BankAccount {
  type: string;
  iban: string;
  balance: number;
  bankCode: string;
  rib: string;
}

interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cin: string;
  address: string;
  phone: string;
  dateOfBirth: Date;
  taxId: string;
  profession: string;
  photoUrl: string;
  salary: number;
  portfolioValue: number;
  availableBalance: number;
  savings: number;
  investments: number;
  financialScore: number;
  bankAccounts: BankAccount[];
  stats: {
    credits: number;
    formations: number;
    transactions: number;
  };
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ProfileComponent implements OnInit {
  user: UserProfile = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    cin: 'AB123456',
    address: '123 Banking Street, Financial District',
    phone: '+1 234 567 890',
    dateOfBirth: new Date('1990-01-01'),
    taxId: 'TAX123456789',
    profession: 'Financial Analyst',
    photoUrl: 'assets/images/profile-photo.jpg',
    salary: 75000,
    portfolioValue: 250000,
    availableBalance: 15000,
    savings: 50000,
    investments: 185000,
    financialScore: 850,
    bankAccounts: [
      {
        type: 'Checking',
        iban: 'US12 BANK 1234 5678 9012',
        balance: 15000,
        bankCode: 'BANKUS12',
        rib: '123456789012345'
      },
      {
        type: 'Savings',
        iban: 'US12 BANK 9876 5432 1098',
        balance: 50000,
        bankCode: 'BANKUS12',
        rib: '987654321098765'
      }
    ],
    stats: {
      credits: 3,
      formations: 12,
      transactions: 156
    }
  };

  constructor() {}

  ngOnInit(): void {
    // Initialize any necessary data or fetch user profile
  }

  onEditProfile(): void {
    // Implement edit profile logic
    console.log('Edit profile clicked');
  }

  onEditPhoto(): void {
    // Implement photo upload logic
    console.log('Edit photo clicked');
  }

  onOpenSettings(): void {
    // Implement settings navigation
    console.log('Settings clicked');
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  getFinancialScoreColor(score: number): string {
    if (score >= 800) return '#00b894';
    if (score >= 700) return '#00cec9';
    if (score >= 600) return '#fdcb6e';
    return '#ff7675';
  }
}
