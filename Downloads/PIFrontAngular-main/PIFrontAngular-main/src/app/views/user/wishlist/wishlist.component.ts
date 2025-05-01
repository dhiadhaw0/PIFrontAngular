import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export enum StatutProjet {
  EN_COURS = 'EN_COURS',
  FINANCE = 'FINANCE',
  TERMINE = 'TERMINE',
  ANNULE = 'ANNULE'
}

interface Portfolio {
  idPortfolio: number;
  titreProjet: string;
  descriptionProjet: string;
  montantRecherche: number;
  montantCollecte: number;
  dateCreation: Date;
  rendementPrevisionnel: number;
  statutProjet: StatutProjet;
  user: {
    id: number;
    nom: string;
    prenom: string;
  };
  investissements: Investissement[];
}

interface Investissement {
  idInvestissement: number;
  montantInvesti: number;
  dateInvestissement: Date;
  portfolio: Portfolio;
}

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule
  ],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  private modalService = inject(NgbModal);
  
  // Sample data - replace with actual API calls
  myPortfolios: Portfolio[] = [
    {
      idPortfolio: 1,
      titreProjet: 'Green Energy Initiative',
      descriptionProjet: 'Solar panel installation project for sustainable energy',
      montantRecherche: 50000,
      montantCollecte: 35000,
      dateCreation: new Date('2024-01-15'),
      rendementPrevisionnel: 12.5,
      statutProjet: StatutProjet.EN_COURS,
      user: {
        id: 1,
        nom: 'Smith',
        prenom: 'John'
      },
      investissements: []
    }
  ];

  investedPortfolios: Portfolio[] = [
    {
      idPortfolio: 2,
      titreProjet: 'Tech Startup Fund',
      descriptionProjet: 'Investment in emerging tech startups',
      montantRecherche: 100000,
      montantCollecte: 75000,
      dateCreation: new Date('2024-02-01'),
      rendementPrevisionnel: 15.0,
      statutProjet: StatutProjet.EN_COURS,
      user: {
        id: 2,
        nom: 'Doe',
        prenom: 'Jane'
      },
      investissements: []
    }
  ];

  getStatusLabel(status: StatutProjet): string {
    switch (status) {
      case StatutProjet.EN_COURS:
        return 'In Progress';
      case StatutProjet.FINANCE:
        return 'Funded';
      case StatutProjet.TERMINE:
        return 'Completed';
      case StatutProjet.ANNULE:
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  }

  getStatusClass(status: StatutProjet): string {
    switch (status) {
      case StatutProjet.EN_COURS:
        return 'bg-info-subtle text-info';
      case StatutProjet.FINANCE:
        return 'bg-success-subtle text-success';
      case StatutProjet.TERMINE:
        return 'bg-primary-subtle text-primary';
      case StatutProjet.ANNULE:
        return 'bg-danger-subtle text-danger';
      default:
        return 'bg-secondary-subtle text-secondary';
    }
  }

  calculateProgress(montantCollecte: number, montantRecherche: number): number {
    return (montantCollecte / montantRecherche) * 100;
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg' });
  }
}
