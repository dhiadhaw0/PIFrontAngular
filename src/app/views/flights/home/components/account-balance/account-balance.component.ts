import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-balance.component.html',
  styles: [`
    .card {
      border-radius: 10px;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
  `]
})
export class AccountBalanceComponent {
  @Input() balance: number = 0;
  @Input() accountId: string = '';
}
