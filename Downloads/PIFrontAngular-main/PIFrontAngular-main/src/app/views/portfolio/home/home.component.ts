import { Component, OnInit } from '@angular/core';
import { Portfolio, StatutProjet } from '../../../models/portfolio.model';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {
  portfolios: Portfolio[] = [];
  filteredPortfolios: Portfolio[] = [];
  selectedStatus: StatutProjet | 'ALL' = 'ALL';
  searchTerm: string = '';

  constructor() {
    // Sample data - replace with actual API call
    this.portfolios = [
      {
        titreProjet: 'Green Energy Initiative',
        descriptionProjet: 'Sustainable energy project focusing on solar power',
        montantRecherche: 500000,
        montantCollecte: 350000,
        dateCreation: new Date('2024-01-15'),
        rendementPrevisionnel: 12.5,
        statutProjet: StatutProjet.EN_COURS,
        userId: 1
      },
      {
        titreProjet: 'Tech Startup Expansion',
        descriptionProjet: 'Funding for AI-driven startup expansion',
        montantRecherche: 1000000,
        montantCollecte: 750000,
        dateCreation: new Date('2024-02-01'),
        rendementPrevisionnel: 15.0,
        statutProjet: StatutProjet.EN_COURS,
        userId: 2
      }
    ];
    this.filteredPortfolios = [...this.portfolios];
  }

  ngOnInit(): void {
  }

  filterByStatus(status: StatutProjet | 'ALL'): void {
    this.selectedStatus = status;
    this.applyFilters();
  }

  searchPortfolios(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }

  getProgressPercentage(portfolio: Portfolio): number {
    return (portfolio.montantCollecte / portfolio.montantRecherche) * 100;
  }

  private applyFilters(): void {
    this.filteredPortfolios = this.portfolios.filter(portfolio => {
      const matchesStatus = this.selectedStatus === 'ALL' || portfolio.statutProjet === this.selectedStatus;
      const matchesSearch = portfolio.titreProjet.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          portfolio.descriptionProjet.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }
} 