import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wallet-pin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wallet-pin.component.html',
  styleUrls: ['./wallet-pin.component.scss']
})
export class WalletPinComponent {
  pin: string = '';
  message: string = '';
  correctPin = '1234'; // For demo only

  submitPin() {
    if (this.pin === this.correctPin) {
      this.message = 'PIN verified!';
    } else {
      this.message = 'Incorrect PIN. Try again.';
    }
  }
} 