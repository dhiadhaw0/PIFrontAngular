import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transaction-modal.component.html',
  styles: [`
    .modal {
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
      border-radius: 15px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }
    .modal-header {
      border-bottom: 2px solid #f0f0f0;
      padding: 1.5rem;
    }
    .modal-body {
      padding: 2rem;
    }
    .form-control {
      border-radius: 10px;
      padding: 0.8rem 1rem;
      border: 2px solid #e0e0e0;
      transition: all 0.3s;
    }
    .form-control:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.15);
    }
    .btn {
      padding: 0.8rem 1.5rem;
      border-radius: 10px;
      font-weight: 500;
      transition: all 0.3s;
    }
    .btn-primary {
      background: linear-gradient(45deg, #007bff, #0056b3);
      border: none;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
    }
    .transaction-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #007bff;
    }
  `]
})
export class TransactionModalComponent {
  @Input() showForm = false;
  @Input() selectedType = '';
  @Input() form!: FormGroup;
  @Input() accountDetails: any;

  @Output() formClosed = new EventEmitter<void>();
  @Output() formSubmitted = new EventEmitter<void>();

  getTransactionTitle(): string {
    const titles: { [key: string]: string } = {
      send: 'Send Money',
      receive: 'Receive Money',
      transfer: 'Transfer Money',
      payment: 'Make Payment',
      default: 'Transaction'
    };
    return titles[this.selectedType] || titles['default'];
  }

  getTransactionIcon(): string {
    const icons: { [key: string]: string } = {
      send: 'bi-send',
      receive: 'bi-download',
      transfer: 'bi-arrow-left-right',
      payment: 'bi-credit-card',
      default: 'bi-cash'
    };
    return icons[this.selectedType] || icons['default'];
  }

  closeForm(): void {
    this.formClosed.emit();
  }

  submit(): void {
    this.formSubmitted.emit();
  }
}
