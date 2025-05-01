import { Component, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

enum StatutReclam {
  EN_ATTENTE = 'EN_ATTENTE',
  EN_COURS = 'EN_COURS',
  RESOLUE = 'RESOLUE',
  REJETEE = 'REJETEE'
}

enum CategorieReclamation {
  PROBLEME_TRANSACTION = 'PROBLEME_TRANSACTION',
  COMPTE_BLOQUE = 'COMPTE_BLOQUE',
  ERREUR_SOLDE = 'ERREUR_SOLDE',
  AUTRES = 'AUTRES'
}

enum NiveauUrgence {
  HAUTE = 'HAUTE',
  MOYENNE = 'MOYENNE',
  BASSE = 'BASSE'
}

interface ReclamationHistorique {
  id: number;
  dateChangement: Date;
  ancienStatut: StatutReclam;
  nouveauStatut: StatutReclam;
  commentaire: string;
}

interface Reclamation {
  id: number;
  description: string;
  statutReclam: StatutReclam;
  reclamationFile?: string;
  sujet: string;
  createdDate: Date;
  categorie: CategorieReclamation;
  niveauUrgence: NiveauUrgence;
  historiqueStatut: ReclamationHistorique[];
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbToastModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  private modalService = inject(NgbModal);
  private fb = inject(FormBuilder);

  // Expose enums to template
  protected StatutReclam = StatutReclam;
  protected CategorieReclamation = CategorieReclamation;
  protected NiveauUrgence = NiveauUrgence;

  reclamationForm: FormGroup;
  activeTab = 'reclamations';

  // Sample data - replace with actual API calls
  reclamations: Reclamation[] = [
    {
      id: 1,
      sujet: 'Transaction Failed but Amount Debited',
      description: 'I tried to make a transfer but it failed, however the amount was debited from my account.',
      statutReclam: StatutReclam.EN_COURS,
      createdDate: new Date('2024-03-10'),
      categorie: CategorieReclamation.PROBLEME_TRANSACTION,
      niveauUrgence: NiveauUrgence.HAUTE,
      historiqueStatut: [
        {
          id: 1,
          dateChangement: new Date('2024-03-10'),
          ancienStatut: StatutReclam.EN_ATTENTE,
          nouveauStatut: StatutReclam.EN_COURS,
          commentaire: 'Complaint assigned to financial department'
        }
      ]
    }
  ];

  // Toast notification
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'danger' = 'success';

  // Loading spinner
  isLoading = false;

  // Filtering/search
  filterStatus: StatutReclam | '' = '';
  filterUrgency: NiveauUrgence | '' = '';
  searchTerm = '';

  constructor() {
    this.reclamationForm = this.fb.group({
      sujet: ['', Validators.required],
      description: ['', Validators.required],
      categorie: [CategorieReclamation.PROBLEME_TRANSACTION, Validators.required],
      niveauUrgence: [NiveauUrgence.MOYENNE, Validators.required],
      reclamationFile: ['']
    });
  }

  getStatusLabel(status: StatutReclam): string {
    switch (status) {
      case StatutReclam.EN_ATTENTE:
        return 'Pending';
      case StatutReclam.EN_COURS:
        return 'In Progress';
      case StatutReclam.RESOLUE:
        return 'Resolved';
      case StatutReclam.REJETEE:
        return 'Rejected';
      default:
        return 'Unknown';
    }
  }

  getCategoryLabel(category: CategorieReclamation): string {
    switch (category) {
      case CategorieReclamation.PROBLEME_TRANSACTION:
        return 'Transaction Issue';
      case CategorieReclamation.COMPTE_BLOQUE:
        return 'Account Blocked';
      case CategorieReclamation.ERREUR_SOLDE:
        return 'Balance Error';
      case CategorieReclamation.AUTRES:
        return 'Other';
      default:
        return 'Unknown';
    }
  }

  getUrgencyLabel(urgency: NiveauUrgence): string {
    switch (urgency) {
      case NiveauUrgence.HAUTE:
        return 'High';
      case NiveauUrgence.MOYENNE:
        return 'Medium';
      case NiveauUrgence.BASSE:
        return 'Low';
      default:
        return 'Unknown';
    }
  }

  getStatusClass(status: StatutReclam): string {
    switch (status) {
      case StatutReclam.EN_ATTENTE:
        return 'bg-warning-subtle text-warning';
      case StatutReclam.EN_COURS:
        return 'bg-info-subtle text-info';
      case StatutReclam.RESOLUE:
        return 'bg-success-subtle text-success';
      case StatutReclam.REJETEE:
        return 'bg-danger-subtle text-danger';
      default:
        return 'bg-secondary-subtle text-secondary';
    }
  }

  getUrgencyClass(urgency: NiveauUrgence): string {
    switch (urgency) {
      case NiveauUrgence.HAUTE:
        return 'bg-danger-subtle text-danger';
      case NiveauUrgence.MOYENNE:
        return 'bg-warning-subtle text-warning';
      case NiveauUrgence.BASSE:
        return 'bg-success-subtle text-success';
      default:
        return 'bg-secondary-subtle text-secondary';
    }
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg' });
  }

  submitReclamation() {
    if (this.reclamationForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        // Simulate API call
        const newReclam: Reclamation = {
          id: Date.now(),
          ...this.reclamationForm.value,
          statutReclam: StatutReclam.EN_ATTENTE,
          createdDate: new Date(),
          historiqueStatut: []
        };
        this.reclamations.unshift(newReclam);
        this.isLoading = false;
        this.showToastMessage('Complaint submitted successfully!', 'success');
        this.reclamationForm.reset({
          categorie: CategorieReclamation.PROBLEME_TRANSACTION,
          niveauUrgence: NiveauUrgence.MOYENNE
        });
      }, 1200);
    }
  }

  showToastMessage(message: string, type: 'success' | 'danger') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }

  deleteReclamation(reclamation: Reclamation) {
    if (reclamation.statutReclam === StatutReclam.EN_ATTENTE) {
      this.reclamations = this.reclamations.filter(r => r.id !== reclamation.id);
      this.showToastMessage('Complaint deleted.', 'success');
    }
  }

  getStatusProgress(status: StatutReclam): number {
    switch (status) {
      case StatutReclam.EN_ATTENTE:
        return 25;
      case StatutReclam.EN_COURS:
        return 60;
      case StatutReclam.RESOLUE:
        return 100;
      case StatutReclam.REJETEE:
        return 100;
      default:
        return 0;
    }
  }

  viewReclamationDetails(reclamation: Reclamation, content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg' });
  }

  // For empty state
  get filteredReclamations(): Reclamation[] {
    return this.reclamations.filter(r =>
      (!this.filterStatus || r.statutReclam === this.filterStatus) &&
      (!this.filterUrgency || r.niveauUrgence === this.filterUrgency) &&
      (!this.searchTerm || r.sujet.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }
}
