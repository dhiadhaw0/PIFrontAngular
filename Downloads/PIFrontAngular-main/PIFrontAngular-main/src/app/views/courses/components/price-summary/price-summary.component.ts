import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-summary',
  templateUrl: './price-summary.component.html',
  styleUrls: ['price-summary.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class PriceSummaryComponent {
  @Input() coursePrice: number = 0;
  @Input() discountPercentage: number = 0;
  @Input() taxesAndFees: number = 0;

  get discountAmount(): number {
    return (this.coursePrice * this.discountPercentage) / 100;
  }

  get totalPayable(): number {
    return this.coursePrice - this.discountAmount + this.taxesAndFees;
  }
}
