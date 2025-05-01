import { Component, OnInit } from '@angular/core';
import { Formation, TypeFormation, StatutFormation } from '../../../models/formation.model';

@Component({
  selector: 'app-formations-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class FormationsHomeComponent implements OnInit {
  formations: Formation[] = [];
  filteredFormations: Formation[] = [];
  selectedType: TypeFormation | 'ALL' = 'ALL';
  searchTerm: string = '';

  constructor() {
    // Sample data - replace with actual API call
    this.formations = [
      {
        titre: 'Introduction to Angular',
        description: 'Learn the basics of Angular framework',
        duree: 20,
        prix: 99.99,
        certificat: true,
        noteMoyenne: 4.5,
        notesUsers: [4, 5, 4, 5, 4],
        typeFormation: TypeFormation.ONLINE,
        statutFormation: StatutFormation.PUBLISHED
      },
      {
        titre: 'Advanced TypeScript',
        description: 'Master TypeScript programming',
        duree: 15,
        prix: 149.99,
        certificat: true,
        noteMoyenne: 4.8,
        notesUsers: [5, 5, 4, 5, 5],
        typeFormation: TypeFormation.HYBRID,
        statutFormation: StatutFormation.PUBLISHED
      }
    ];
    this.filteredFormations = [...this.formations];
  }

  ngOnInit(): void {
  }

  filterByType(type: TypeFormation | 'ALL'): void {
    this.selectedType = type;
    this.applyFilters();
  }

  searchFormations(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredFormations = this.formations.filter(formation => {
      const matchesType = this.selectedType === 'ALL' || formation.typeFormation === this.selectedType;
      const matchesSearch = formation.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          formation.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }
} 