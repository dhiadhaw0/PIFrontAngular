import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceSummaryComponent } from '../components/price-summary/price-summary.component';
import { CoursesService, Formation } from '../../../services/courses.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-courses-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, PriceSummaryComponent],
  standalone: true
})
export class HomeComponent implements OnInit, AfterViewInit {
  formations: Formation[] = [];
  loading: boolean = false;
  error: string | null = null;
  selectedFormation: Formation | null = null;
  private formationModal: Modal | null = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.loadFormations();
  }

  ngAfterViewInit(): void {
    // Initialize the modal
    const modalElement = document.getElementById('formationModal');
    if (modalElement) {
      this.formationModal = new Modal(modalElement);
    }
  }

  loadFormations() {
    this.loading = true;
    this.error = null;
    
    this.coursesService.getAllFormations().subscribe({
      next: (data) => {
        this.formations = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des formations', error);
        this.error = 'Impossible de charger les formations. Veuillez réessayer plus tard.';
        this.loading = false;
      }
    });
  }

  openFormationDetails(formation: Formation) {
    this.selectedFormation = formation;
    if (this.formationModal) {
      this.formationModal.show();
    }
  }
}
