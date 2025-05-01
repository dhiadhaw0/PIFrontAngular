import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Investissement, Portfolio, ModePaiement } from '../../../../models/investment.model';
import { InvestmentService } from '../../../../services/investment.service';

@Component({
  selector: 'app-investment-confirmation',
  templateUrl: './investment-confirmation.component.html',
  styleUrls: ['./investment-confirmation.component.scss'],
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DecimalPipe, DatePipe]
})
export class InvestmentConfirmationComponent implements OnInit {
  investment: Investissement | null = null;
  portfolio: Portfolio | null = null;
  quotes = [
    "Thank you for believing in our vision and joining us on this journey to success!",
    "Your investment is not just a transaction, it's the beginning of a partnership!",
    "Together, we're building a brighter future, one investment at a time!",
    "Your trust in our project means the world to us. Thank you for your support!",
    "Great things happen when visionaries like you invest in innovation!"
  ];
  selectedQuote: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private investmentService: InvestmentService
  ) {
    this.selectedQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  ngOnInit() {
    const investmentId = this.route.snapshot.params['id'];
    this.investmentService.getInvestmentById(investmentId).subscribe({
      next: (investment) => {
        this.investment = investment;
        this.portfolio = investment.portfolio;
      },
      error: (err) => {
        console.error('Error fetching investment:', err);
        // Handle error appropriately
      }
    });
  }

  getPaymentMethodIcon(method: ModePaiement): string {
    switch (method) {
      case ModePaiement.CREDIT_CARD:
        return 'fa-credit-card';
      case ModePaiement.BANK_TRANSFER:
        return 'fa-university';
      case ModePaiement.PAYPAL:
        return 'fa-paypal';
      case ModePaiement.CRYPTO:
        return 'fa-bitcoin';
      default:
        return 'fa-money-bill-wave';
    }
  }

  goToHome() {
    this.router.navigate(['/hotels/home']);
  }
} 