import { Component, OnInit } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { DatePipe, CurrencyPipe } from '@angular/common'

enum TypeFormation {
  FINANCE = 'FINANCE',
  BUSINESS = 'BUSINESS',
  TECHNOLOGY = 'TECHNOLOGY',
  PERSONAL_DEVELOPMENT = 'PERSONAL_DEVELOPMENT'
}

enum StatutFormation {
  AVAILABLE = 'AVAILABLE',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

interface Formation {
  idFormation: number;
  titre: string;
  description: string;
  duree: number;
  prix: number;
  certificat: boolean;
  noteMoyenne: number;
  notesUsers: number[];
  typeFormation: TypeFormation;
  statutFormation: StatutFormation;
  formationFileUrl: string;
}

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [
    NgbNavModule, 
    RouterModule, 
    CommonModule
  ],
  providers: [
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  formations: Formation[] = [];
  activeTab: 'available' | 'in_progress' | 'completed' = 'available';

  constructor() {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.formations = [
      {
        idFormation: 1,
        titre: 'Personal Finance Mastery',
        description: 'Control Your Finances With Professional Guidance. Learn essential personal finance skills and strategies for financial success.',
        duree: 30,
        prix: 299.99,
        certificat: true,
        noteMoyenne: 4.8,
        notesUsers: [4.5, 5, 4.8, 5],
        typeFormation: TypeFormation.FINANCE,
        statutFormation: StatutFormation.AVAILABLE,
        formationFileUrl: 'assets/images/about/Personal-Finance-Mastery.jpg'
      },
      {
        idFormation: 2,
        titre: 'Investment Strategies',
        description: 'Master investment fundamentals including risk management, profit optimization, and portfolio diversification strategies.',
        duree: 25,
        prix: 349.99,
        certificat: true,
        noteMoyenne: 4.9,
        notesUsers: [5, 4.8, 5, 4.8],
        typeFormation: TypeFormation.FINANCE,
        statutFormation: StatutFormation.IN_PROGRESS,
        formationFileUrl: 'assets/images/about/Investment-Strategies.jpg'
      },
      {
        idFormation: 3,
        titre: 'Business Analytics',
        description: 'Learn advanced business analytics techniques and data-driven decision making for business growth and optimization.',
        duree: 40,
        prix: 399.99,
        certificat: true,
        noteMoyenne: 4.7,
        notesUsers: [4.5, 4.8, 4.7, 4.8],
        typeFormation: TypeFormation.BUSINESS,
        statutFormation: StatutFormation.COMPLETED,
        formationFileUrl: 'assets/images/about/Business-Analytics.jpg'
      }
    ];
  }

  setActiveTab(tab: 'available' | 'in_progress' | 'completed'): void {
    this.activeTab = tab;
  }

  getFilteredFormations(): Formation[] {
    const statusMap = {
      'available': StatutFormation.AVAILABLE,
      'in_progress': StatutFormation.IN_PROGRESS,
      'completed': StatutFormation.COMPLETED
    };
    return this.formations.filter(formation => 
      formation.statutFormation === statusMap[this.activeTab]
    );
  }

  enrollInCourse(formationId: number): void {
    // TODO: Implement enrollment logic with API call
    this.formations = this.formations.map(formation => {
      if (formation.idFormation === formationId) {
        return { ...formation, statutFormation: StatutFormation.IN_PROGRESS };
      }
      return formation;
    });
  }

  getAverageRating(notes: number[]): number {
    return notes.reduce((acc, curr) => acc + curr, 0) / notes.length;
  }
}
