import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

export interface Transaction {
  idTransaction?: number;
  date: Date | string;
  montant: number;
  typeTransaction: 'DEPOT' | 'PAIEMENT' | 'RETRAIT' | 'VIREMENT';
  recipient: string;
  paymentReference: string;
  toCompteId?: number;
  userId?: number;
}

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transaction-form.component.html',
  styles: [`
    .form-control, .form-select {
      border-radius: 0.5rem;
      padding: 1rem;
      font-size: 1rem;
    }
    .btn {
      border-radius: 0.5rem;
      padding: 1rem;
    }
  `]
})
export class TransactionFormComponent implements OnInit {
  transactionForm!: FormGroup;
  isSubmitting = false;

  transactionTypes = [
    { value: 'DEPOT', label: 'Deposit' },
    { value: 'RETRAIT', label: 'Withdrawal' },
    { value: 'PAIEMENT', label: 'Payment' },
    { value: 'VIREMENT', label: 'Transfer' }
  ];

  today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

  transaction: Transaction | null = null; // Optional input binding can be added if needed

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      date: [this.today, [Validators.required]],
      montant: ['', [Validators.required, Validators.min(0.01)]],
      typeTransaction: ['', [Validators.required]],
      recipient: [''],
      paymentReference: [''],
      toCompteId: ['']
    });

    // If editing, patch values
    if (this.transaction) {
      this.transactionForm.patchValue(this.transaction);
    }

    // Conditional validation logic (optional)
    this.transactionForm.get('typeTransaction')?.valueChanges.subscribe(value => {
      const recipientControl = this.transactionForm.get('recipient');
      const paymentRefControl = this.transactionForm.get('paymentReference');
      const compteIdControl = this.transactionForm.get('toCompteId');

      if (['PAIEMENT', 'VIREMENT'].includes(value)) {
        recipientControl?.setValidators([Validators.required]);
      } else {
        recipientControl?.clearValidators();
      }

      if (value === 'PAIEMENT') {
        paymentRefControl?.setValidators([Validators.required]);
      } else {
        paymentRefControl?.clearValidators();
      }

      if (value === 'VIREMENT') {
        compteIdControl?.setValidators([Validators.required, Validators.min(1)]);
      } else {
        compteIdControl?.clearValidators();
      }

      recipientControl?.updateValueAndValidity();
      paymentRefControl?.updateValueAndValidity();
      compteIdControl?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Transaction saved:', this.transactionForm.value);
        this.isSubmitting = false;
        alert('Transaction saved successfully!');
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.transactionForm.controls).forEach(key => {
        const control = this.transactionForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  onCancel(): void {
    if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      this.transactionForm.reset();
    }
  }
}