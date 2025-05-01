import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from '../credit-card/credit-card.component';

@Component({
  selector: 'app-card-management',
  standalone: true,
  imports: [CommonModule, CreditCardComponent],
  template: `
    <!-- Card List -->
    <div class="d-flex flex-wrap gap-3 mb-4">
      <div *ngFor="let card of cards" class="card-preview" (click)="showCard(card)">
        <div class="card shadow-sm p-3">
          <div class="d-flex align-items-center">
            <i [class]="'bi ' + getCardIcon(card.type) + ' me-2'"></i>
            <span>•••• {{ card.number.slice(-4) }}</span>
          </div>
        </div>
      </div>
      <div class="card-preview">
        <div class="card shadow-sm p-3 add-card">
          <div class="d-flex align-items-center">
            <i class="bi bi-plus-circle me-2"></i>
            <span>Add New Card</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Card Modal -->
    <div class="card-modal" [class.show]="selectedCard" (click)="hideCard()">
      <div class="card-modal-dialog" (click)="$event.stopPropagation()">
        <app-credit-card 
          *ngIf="selectedCard"
          [card]="selectedCard"
          class="enlarged-card"
        ></app-credit-card>
        <div class="text-center mt-4">
          <button class="btn btn-light me-2" (click)="hideCard()">
            <i class="bi bi-x-lg me-2"></i>Close
          </button>
          <button class="btn btn-primary">
            <i class="bi bi-pencil me-2"></i>Edit Card
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card-preview {
      cursor: pointer;
      transition: transform 0.2s;
    }

    .card-preview:hover {
      transform: translateY(-3px);
    }

    .add-card {
      border: 2px dashed #dee2e6;
      color: #6c757d;
    }

    .add-card:hover {
      border-color: #0d6efd;
      color: #0d6efd;
    }

    .card-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
      z-index: 1050;
    }

    .card-modal.show {
      opacity: 1;
      visibility: visible;
    }

    .card-modal-dialog {
      transform: scale(0.8);
      transition: transform 0.3s;
      padding: 2rem;
    }

    .card-modal.show .card-modal-dialog {
      transform: scale(1);
    }

    .enlarged-card {
      transform: scale(1.2);
    }
  `]
})
export class CardManagementComponent {
  cards = [
    {
      number: '4532123456789012',
      holderName: 'JOHN DOE',
      expiryDate: '12/25',
      type: 'VISA'
    },
    {
      number: '5412345678901234',
      holderName: 'JOHN DOE',
      expiryDate: '09/24',
      type: 'MASTERCARD'
    }
  ];

  selectedCard: any = null;

  showCard(card: any) {
    this.selectedCard = card;
  }

  hideCard() {
    this.selectedCard = null;
  }

  getCardIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'VISA': 'bi-credit-card',
      'MASTERCARD': 'bi-credit-card-2-front',
      'AMEX': 'bi-credit-card-2-back'
    };
    return icons[type.toUpperCase()] || 'bi-credit-card';
  }
}
