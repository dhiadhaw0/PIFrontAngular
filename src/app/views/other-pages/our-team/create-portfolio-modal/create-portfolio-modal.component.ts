import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-portfolio-modal',
  templateUrl: './create-portfolio-modal.component.html',
  styleUrls: ['./create-portfolio-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class CreatePortfolioModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() portfolioCreated = new EventEmitter<any>();

  portfolioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.portfolioForm = this.fb.group({
      titreProjet: ['', [Validators.required, Validators.minLength(5)]],
      descriptionProjet: ['', [Validators.required, Validators.minLength(20)]],
      montantRecherche: ['', [Validators.required, Validators.min(1000)]],
      rendementPrevisionnel: ['', [Validators.required, Validators.min(1), Validators.max(30)]],
      statutProjet: ['active', Validators.required]
    });
  }

  onSubmit() {
    if (this.portfolioForm.valid) {
      const newPortfolio = {
        ...this.portfolioForm.value,
        idPortfolio: Date.now(), // Temporary ID
        montantCollecte: 0,
        dateCreation: new Date()
      };
      this.portfolioCreated.emit(newPortfolio);
      this.closeModal.emit();
    }
  }

  onClose() {
    this.closeModal.emit();
  }
} 