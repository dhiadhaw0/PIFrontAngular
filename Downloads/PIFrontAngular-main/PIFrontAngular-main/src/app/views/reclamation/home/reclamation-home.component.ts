import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-reclamation-home',
  templateUrl: './reclamation-home.component.html',
  styleUrls: ['./reclamation-home.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ReclamationHomeComponent implements OnInit {
  claimForm: FormGroup;
  selectedFile: File | null = null;
  private modal: Modal | null = null;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService
  ) {
    this.claimForm = this.fb.group({
      sujet: ['', Validators.required],
      categorie: ['', Validators.required],
      niveauUrgence: ['MOYENNE', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  ngOnInit() {
    // Initialize the modal
    const modalElement = document.getElementById('claimModal');
    if (modalElement) {
      this.modal = new Modal(modalElement);
    }
  }

  applyForClaim(type: string) {
    // Set the initial category based on the type
    this.claimForm.patchValue({
      categorie: this.mapTypeToCategory(type)
    });
    
    // Show the modal
    this.modal?.show();
  }

  private mapTypeToCategory(type: string): string {
    switch (type) {
      case 'TECHNICAL':
        return 'AUTRES';
      case 'FINANCIAL':
        return 'PROBLEME_TRANSACTION';
      case 'ACCOUNT':
        return 'COMPTE_BLOQUE';
      default:
        return 'AUTRES';
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      // Check file size (5MB limit)
      if (file.size <= 5 * 1024 * 1024) {
        this.selectedFile = file;
      } else {
        alert('File size must be less than 5MB');
        input.value = '';
      }
    }
  }

  submitClaim() {
    if (this.claimForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const formData = new FormData();
      const claimData = this.claimForm.value;
      
      // Add form data
      formData.append('reclamationData', JSON.stringify(claimData));
      
      // Add file if selected
      if (this.selectedFile) {
        formData.append('file', this.selectedFile);
      }

      // Assuming user ID 1 for now - should be retrieved from auth service
      formData.append('idUser', '1');

      this.reclamationService.createReclamation(formData).subscribe({
        next: (response) => {
          console.log('Claim submitted successfully:', response);
          this.modal?.hide();
          this.claimForm.reset();
          this.selectedFile = null;
          // TODO: Show success message
        },
        error: (error) => {
          console.error('Error submitting claim:', error);
          // TODO: Show error message
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}
