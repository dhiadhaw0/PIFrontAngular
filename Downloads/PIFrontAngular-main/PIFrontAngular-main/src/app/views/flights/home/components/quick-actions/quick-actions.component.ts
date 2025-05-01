import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardManagementComponent } from '../card-management/card-management.component';

interface QuickAction {
  id: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule, CardManagementComponent],
  template: `
    <div class="container">
      <!-- Quick Actions Grid -->
      <div class="row g-4 mb-4">
        <div class="col-md-4" *ngFor="let action of actions">
          <div class="card shadow-sm h-100" (click)="onActionClick(action)">
            <div class="card-body text-center py-4">
              <i [class]="action.icon + ' display-6 mb-3'"></i>
              <h5 class="card-title">{{action.title}}</h5>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Management Section -->
      <app-card-management *ngIf="showCardManagement"></app-card-management>
    </div>
  `,
  styles: [`
    .card {
      border-radius: 10px;
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
    .display-6 {
      font-size: 2rem;
    }
  `]
})
export class QuickActionsComponent {
  @Input() actions: QuickAction[] = [];
  showCardManagement = false;

  onActionClick(action: QuickAction) {
    if (action.id === 'cards') {
      this.showCardManagement = !this.showCardManagement;
    }
  }
}
