import { Component, OnInit } from '@angular/core';
import { Formation, FormationService, StatutFormation, TypeFormation } from '../../../core/services/formation.service';

@Component({
  selector: 'app-formationfront',
  standalone: false,
  templateUrl: './formationfront.component.html',
  styleUrls: ['./formationfront.component.scss']
})
export class FormationfrontComponent implements OnInit {
  formations: Formation[] = [];
  filteredFormations: Formation[] = [];
  selectedType: TypeFormation | 'ALL' | 'TOP_RATED' = 'ALL';
  searchTerm: string = '';
  selectedFormation: Formation | null = null;
  userRating: number = 0;
  ratingSubmitted: boolean = false;
  ratingError: string = '';
  topRatedFormation: Formation | null = null;

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.loadFormations();
    this.loadTopRatedFormation();
  }

  loadFormations(): void {
    this.formationService.getAllFormations().subscribe({
      next: (data) => {
        this.formations = data;
        this.filteredFormations = [...this.formations];
      },
      error: (error) => {
        console.error('Erreur lors du chargement des formations:', error);
        // Utiliser des données statiques en cas d'erreur
        this.loadStaticData();
      }
    });
  }

  loadTopRatedFormation(): void {
    this.formationService.getFormationAvecMeilleureNote().subscribe({
      next: (formation) => {
        this.topRatedFormation = formation;
      },
      error: (error) => {
        console.error('Erreur lors du chargement de la formation la mieux notée:', error);
      }
    });
  }

  private loadStaticData(): void {
    // Données statiques de secours
    this.formations = [
      {
        titre: 'Introduction to Angular',
        description: 'Learn the basics of Angular framework',
        duree: 20,
        prix: 99.99,
        certificat: true,
        noteMoyenne: 4.5,
        notesUsers: [4, 5, 4, 5, 4],
        typeFormation: TypeFormation.WEBINAIR,
        statutFormation: StatutFormation.En_Cours
      },
      {
        titre: 'Advanced TypeScript',
        description: 'Master TypeScript programming',
        duree: 15,
        prix: 149.99,
        certificat: true,
        noteMoyenne: 4.8,
        notesUsers: [5, 5, 4, 5, 5],
        typeFormation: TypeFormation.VIDEO,
        statutFormation: StatutFormation.Complète
      }
    ];
    this.filteredFormations = [...this.formations];
  }

  filterByType(type: TypeFormation | 'ALL' | 'TOP_RATED' | string): void {
    // Handle string type coming from template
    this.selectedType = type as (TypeFormation | 'ALL' | 'TOP_RATED');
    this.applyFilters();
  }

  searchFormations(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm = inputElement.value;
    this.applyFilters();
  }

  private applyFilters(): void {
    if (this.selectedType === 'TOP_RATED' && this.topRatedFormation) {
      // Si filtre "meilleures notes" est sélectionné, n'afficher que la formation avec la meilleure note
      this.filteredFormations = [this.topRatedFormation];
    } else {
      // Sinon appliquer les filtres habituels
      this.filteredFormations = this.formations.filter(formation => {
        const matchesType = this.selectedType === 'ALL' || formation.typeFormation === this.selectedType;
        const matchesSearch = formation.titre?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            formation.description?.toLowerCase().includes(this.searchTerm.toLowerCase());
        return matchesType && matchesSearch;
      });
    }
  }

  // Méthode pour ouvrir le modal de détails
  openFormationDetails(formation: Formation): void {
    this.selectedFormation = formation;
    this.userRating = 0;
    this.ratingSubmitted = false;
    this.ratingError = '';
    // Utiliser Bootstrap JavaScript pour ouvrir le modal
    // Cette partie nécessite que bootstrap.js soit chargé
  }

  // Méthode pour définir la note de l'utilisateur
  setUserRating(rating: number): void {
    this.userRating = rating;
  }

  // Méthode pour soumettre une note
  soumettreNote(): void {
    if (!this.selectedFormation || !this.selectedFormation.idFormation) {
      this.ratingError = 'Formation non valide';
      return;
    }

    if (this.userRating < 1 || this.userRating > 5) {
      this.ratingError = 'La note doit être comprise entre 1 et 5';
      return;
    }

    this.formationService.soumettreNote(this.selectedFormation.idFormation, this.userRating).subscribe({
      next: (response) => {
        this.ratingSubmitted = true;
        this.ratingError = '';
        
        // Mettre à jour les formations pour afficher la nouvelle note moyenne
        this.loadFormations();
        this.loadTopRatedFormation(); // Aussi recharger la formation la mieux notée
      },
      error: (error) => {
        console.error('Erreur lors de la soumission de la note:', error);
        this.ratingError = error.message || 'Erreur lors de la soumission de la note';
      }
    });
  }
}