import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreatePortfolioModalComponent } from './create-portfolio-modal/create-portfolio-modal.component';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    CreatePortfolioModalComponent
  ]
})
export class OurTeamComponent {
  searchTerm: string = '';
  showModal: boolean = false;
  portfolios = [
    {
      idPortfolio: 1,
      titreProjet: "Eco-Friendly Housing Project",
      descriptionProjet: "A sustainable housing development project focusing on green energy and eco-friendly materials.",
      montantRecherche: 500000,
      montantCollecte: 250000,
      dateCreation: new Date('2024-01-15'),
      rendementPrevisionnel: 8.5,
      statutProjet: "active"
    },
    {
      idPortfolio: 2,
      titreProjet: "Tech Startup Innovation",
      descriptionProjet: "Funding for a revolutionary AI-powered business solution platform.",
      montantRecherche: 300000,
      montantCollecte: 180000,
      dateCreation: new Date('2024-02-01'),
      rendementPrevisionnel: 12.0,
      statutProjet: "active"
    },
    {
      idPortfolio: 3,
      titreProjet: "Renewable Energy Farm",
      descriptionProjet: "Development of a solar and wind energy farm in rural areas.",
      montantRecherche: 1000000,
      montantCollecte: 750000,
      dateCreation: new Date('2024-01-20'),
      rendementPrevisionnel: 9.2,
      statutProjet: "completed"
    },
    {
      idPortfolio: 4,
      titreProjet: "Urban Farming Initiative",
      descriptionProjet: "Vertical farming project to provide fresh produce in urban areas.",
      montantRecherche: 250000,
      montantCollecte: 125000,
      dateCreation: new Date('2024-02-10'),
      rendementPrevisionnel: 7.8,
      statutProjet: "pending"
    }
  ];

  get filteredPortfolios() {
    if (!this.searchTerm) {
      return this.portfolios;
    }
    return this.portfolios.filter(portfolio =>
      portfolio.titreProjet.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      portfolio.descriptionProjet.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  calculateProgress(portfolio: any): number {
    if (!portfolio.montantRecherche || portfolio.montantRecherche === 0) return 0;
    return (portfolio.montantCollecte / portfolio.montantRecherche) * 100;
  }

  openCreatePortfolioModal() {
    this.showModal = true;
  }

  closeCreatePortfolioModal() {
    this.showModal = false;
  }

  handlePortfolioCreated(newPortfolio: any) {
    this.portfolios = [newPortfolio, ...this.portfolios];
    this.closeCreatePortfolioModal();
  }
} 