import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-transaction-qr-code',
  standalone: true,
  imports: [CommonModule, QRCodeComponent],
  template: `
    <div class="qr-code-container">
      <h3>{{ isReceiving ? 'Receive Money' : 'Pay Money' }}</h3>
      <div class="qr-wrapper">
        <qrcode 
          [qrdata]="qrData"
          [width]="200"
          [errorCorrectionLevel]="'M'"
        ></qrcode>
      </div>
      <div class="transaction-details">
        <p class="amount">Amount: {{ amount | currency }}</p>
        <p class="account">Account: {{ accountId }}</p>
      </div>
    </div>
  `,
  styles: [`
    .qr-code-container {
      text-align: center;
      padding: 20px;
    }
    
    .qr-wrapper {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
    
    .transaction-details {
      margin-top: 20px;
    }
    
    .amount {
      font-size: 1.2em;
      font-weight: bold;
      color: #2c3e50;
    }
    
    .account {
      color: #7f8c8d;
    }
  `]
})
export class TransactionQRCodeComponent {
  @Input() amount: number = 0;
  @Input() accountId: string = '';
  @Input() isReceiving: boolean = false;

  get qrData(): string {
    return JSON.stringify({
      type: this.isReceiving ? 'receive' : 'pay',
      amount: this.amount,
      accountId: this.accountId,
      timestamp: new Date().toISOString()
    });
  }
}
