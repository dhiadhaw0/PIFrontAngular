import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-wallet',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddWalletComponent {
  walletForm: FormGroup;
  currentPage = 1;
  totalPages = 2;

  constructor(private fb: FormBuilder) {
    this.walletForm = this.fb.group({
      userId: ['', Validators.required],
      totalValue: [0, [Validators.required, Validators.min(0)]],
      savingsAmount: [0, [Validators.required, Validators.min(0)]],
      investedAmount: [0, [Validators.required, Validators.min(0)]],
      availableBalance: [0, [Validators.required, Validators.min(0)]],
      creditAmount: [0, [Validators.required, Validators.min(0)]],
      expectedYield: [0, [Validators.required, Validators.min(0)]],
      creationDate: ['', Validators.required],
      financialScore: [0, [Validators.required, Validators.min(0)]],
      pinCode: ['', [Validators.required, Validators.minLength(4)]],
      qrCode: [''],
      walletStatus: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.walletForm.valid) {
      console.log('Form submitted:', this.walletForm.value);
      // Add your form submission logic here
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
