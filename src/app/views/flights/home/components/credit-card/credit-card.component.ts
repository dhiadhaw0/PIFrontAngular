import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CreditCard {
  number: string;
  holderName: string;
  expiryDate: string;
  type: string;
}

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="credit-card" [class]="'credit-card-' + card.type.toLowerCase()">
      <div class="credit-card-inner">
        <div class="credit-card-front">
          <div class="credit-card-chip">
            <i class="bi bi-cpu-fill"></i>
          </div>
          <div class="credit-card-logo">
            <i [class]="'bi ' + getCardIcon(card.type)"></i>
          </div>
          <div class="credit-card-number">
            {{ formatCardNumber(card.number) }}
          </div>
          <div class="credit-card-details">
            <div class="credit-card-holder">
              <small>Card Holder</small>
              <div>{{ card.holderName }}</div>
            </div>
            <div class="credit-card-expiry">
              <small>Expires</small>
              <div>{{ card.expiryDate }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      perspective: 1000px;
    }

    .credit-card {
      width: 450px;
      height: 270px;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.6s;
    }

    .credit-card-inner {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.6s;
    }

    .credit-card-front {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
      background-position: center;
      background-size: cover;
      overflow: hidden;
    }

    .credit-card-front::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
      backdrop-filter: blur(10px);
      z-index: 1;
    }

    .credit-card-front > * {
      position: relative;
      z-index: 2;
    }

    .credit-card-visa .credit-card-front {
      background: linear-gradient(135deg,rgb(2, 4, 40) 0%, #2639c0 100%);
    }

    .credit-card-mastercard .credit-card-front {
      background: linear-gradient(135deg,rgb(48, 43, 40) 0%,rgb(10, 5, 69) 100%);
    }

    .credit-card-amex .credit-card-front {
      background: linear-gradient(135deg, #006fcf 0%, #10509e 100%);
    }

    .credit-card-chip {
      width: 50px;
      height: 40px;
      background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .credit-card-chip i {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.5);
    }

    .credit-card-logo {
      position: absolute;
      top: 30px;
      right: 30px;
      font-size: 30px;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .credit-card-number {
      font-size: 28px;
      letter-spacing: 2px;
      margin-bottom: 30px;
      font-family: 'Courier New', monospace;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .credit-card-details {
      display: flex;
      justify-content: space-between;
      color: white;
    }

    .credit-card-holder, .credit-card-expiry {
      small {
        text-transform: uppercase;
        opacity: 0.8;
        font-size: 12px;
        display: block;
        margin-bottom: 5px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      }
      div {
        font-size: 18px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    .credit-card:hover {
      animation: float 3s ease-in-out infinite;
    }
  `]
})
export class CreditCardComponent {
  @Input() card!: CreditCard;

  formatCardNumber(number: string): string {
    return number.replace(/(\d{4})/g, '$1 ').trim();
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
