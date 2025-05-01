import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WalletService } from 'src/app/services/wallet.service';
import { Router } from '@angular/router';

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
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private walletService: WalletService,
    private router: Router
  ) {
    this.walletForm = this.fb.group({
      userId: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      totalValue: [0, [Validators.required, Validators.min(0)]],
      savingsAmount: [0, [Validators.required, Validators.min(0)]],
      investedAmount: [0, [Validators.required, Validators.min(0)]],
      availableBalance: [0, [Validators.required, Validators.min(0)]],
      creditAmount: [0, [Validators.required, Validators.min(0)]],
      expectedYield: [0, [Validators.required, Validators.min(0)]],
      creationDate: [new Date().toISOString().split('T')[0], Validators.required],
      financialScore: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      pinCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      qrCode: [''],
      walletStatus: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.walletForm.valid) {
      this.isLoading = true;
      this.walletService.createWallet(this.walletForm.value).subscribe({
        next: (response) => {
          this.router.navigate(['/success']);
        },
        error: (err) => {
          console.error('Full error:', err);
          console.error('Error response:', err.error);
          alert(err.error?.message || 'Error details in console');
        }
      });
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

  isCurrentPageValid(): boolean {
    const controls = this.walletForm.controls;
    if (this.currentPage === 1) {
      return controls['userId'].valid &&
             controls['totalValue'].valid &&
             controls['savingsAmount'].valid &&
             controls['investedAmount'].valid &&
             controls['availableBalance'].valid &&
             controls['creditAmount'].valid;
    } else {
      return controls['expectedYield'].valid &&
             controls['creationDate'].valid &&
             controls['financialScore'].valid &&
             controls['pinCode'].valid &&
             controls['walletStatus'].valid;
    }
  }
}