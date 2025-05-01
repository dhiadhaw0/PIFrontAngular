import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'wallet-qr',
  standalone: true,
  imports: [CommonModule, QRCodeComponent],
  templateUrl: './wallet-qr.component.html',
  styleUrls: ['./wallet-qr.component.scss']
})
export class WalletQrComponent {
  walletAddress = 'user-wallet-1234567890';
} 