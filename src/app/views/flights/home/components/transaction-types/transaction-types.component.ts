import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TransactionType {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-transaction-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-types.component.html',
  styles: [`
    .transaction-card {
      border-radius: 10px;
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }
    .transaction-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
  `]
})
export class TransactionTypesComponent {
  @Input() types: TransactionType[] = [];
  @Output() typeSelected = new EventEmitter<string>();

  onSelect(typeId: string) {
    this.typeSelected.emit(typeId);
  }
}
