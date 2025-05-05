import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './application.component.html',
  styles: [`
    .container {
      padding: 2rem 0;
    }

    .card {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 8px;
    }

    .card-header {
      background-color: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
      padding: 1.5rem;
    }

    .card-body {
      padding: 2rem;
    }

    h3 {
      margin: 0;
      color: #333;
      font-weight: 600;
    }
  `]
})
export class ApplicationComponent {} 