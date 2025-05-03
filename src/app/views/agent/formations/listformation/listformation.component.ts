import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoursesService, Formation } from '../../../../services/courses.service';

@Component({
  selector: 'app-listformation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listformation.component.html',
  styles: [`
    .rating {
      display: inline-block;
    }
  `]
})
export class ListformationComponent implements OnInit {
  formations: Formation[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.loading = true;
    this.error = null;
    
    this.coursesService.getAllFormations().subscribe({
      next: (data) => {
        this.formations = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des formations', err);
        this.error = 'Impossible de charger les formations. Veuillez réessayer plus tard.';
        this.loading = false;
      }
    });
  }

  deleteFormation(id: number | undefined): void {
    if (id === undefined || id === null) {
      alert('ID de formation invalide');
      return;
    }
    
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.coursesService.deleteFormation(id).subscribe({
        next: () => {
          this.formations = this.formations.filter(f => f.idFormation !== id);
          alert('Formation supprimée avec succès');
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de la formation', err);
          alert('Erreur lors de la suppression de la formation');
        }
      });
    }
  }
}
