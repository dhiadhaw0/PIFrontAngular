import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WalletService } from 'src/app/services/wallet.service';
import { Router } from '@angular/router';
import { Portfeuille, StatutPortfeuille } from 'src/app/models/wallet/wallet.model';

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
      idUser: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      valeurTotale: [0, [Validators.required, Validators.min(0)]],
      montantEpargne: [0, [Validators.required, Validators.min(0)]],
      montantInvestie: [0, [Validators.required, Validators.min(0)]],
      soldeDisponible: [0, [Validators.required, Validators.min(0)]],
      montantCredit: [0, [Validators.required, Validators.min(0)]],
      rendementPrevisionnel: [0, [Validators.required, Validators.min(0)]],
      dateCreation: [new Date().toISOString().split('T')[0], Validators.required],
      scoreFinancier: ['A', Validators.required],
      codePin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      qrCode: ['placeholder-qr-code'],
      statutPortfeuille: [StatutPortfeuille.Actif, Validators.required]
    });
  }

  onSubmit() {
    if (this.walletForm.valid) {
      this.isLoading = true;
      
      // Create wallet object from form
      const wallet: Portfeuille = this.walletForm.value;
      
      // Ensure idUser is a number
      wallet.idUser = Number(wallet.idUser);
      
      this.walletService.createWallet(wallet).subscribe({
        next: (response) => {
          console.log('Wallet created successfully:', response);
          this.isLoading = false;
          this.router.navigate(['/success']);
        },
        error: (err) => {
          console.error('Full error:', err);
          console.error('Error response:', err.error);
          this.isLoading = false;
          alert(err.message || 'Error creating wallet. See details in console.');
        }
      });
    } else {
      // Mark all form controls as touched to show validation errors
      Object.keys(this.walletForm.controls).forEach(key => {
        this.walletForm.get(key)?.markAsTouched();
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
      return controls['idUser'].valid &&
             controls['valeurTotale'].valid &&
             controls['montantEpargne'].valid &&
             controls['montantInvestie'].valid &&
             controls['soldeDisponible'].valid &&
             controls['montantCredit'].valid;
    } else {
      return controls['rendementPrevisionnel'].valid &&
             controls['dateCreation'].valid &&
             controls['scoreFinancier'].valid &&
             controls['codePin'].valid &&
             controls['statutPortfeuille'].valid;
    }
  }
}