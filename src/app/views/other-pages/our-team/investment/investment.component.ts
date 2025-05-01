import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio, Investissement, ModePaiement, StatutInvestissement } from '../../../../models/investment.model';
import { InvestmentService } from '../../../../services/investment.service';
//import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CurrencyPipe, DecimalPipe]
})
export class InvestmentComponent implements OnInit {
  portfolio: Portfolio | null = null;
  investmentForm: FormGroup;
  paymentMethods = [
    { value: ModePaiement.CREDIT_CARD, label: 'Credit Card', icon: 'fa-credit-card' },
    { value: ModePaiement.BANK_TRANSFER, label: 'Bank Transfer', icon: 'fa-university' },
    { value: ModePaiement.PAYPAL, label: 'PayPal', icon: 'fa-paypal' },
    { value: ModePaiement.CRYPTO, label: 'Cryptocurrency', icon: 'fa-bitcoin' }
  ];
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private investmentService: InvestmentService,
    //private authService: AuthService
  ) {
    this.investmentForm = this.fb.group({
      montantInvestissement: ['', [Validators.required, Validators.min(100)]],
      dureeEngagement: ['', [Validators.required, Validators.min(1), Validators.max(60)]],
      modePaiement: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const portfolioId = params['id'];
      // Here you would typically fetch the portfolio details from your service
      // For now, we'll use mock data
      this.portfolio = {
        idPortfolio: portfolioId,
        titreProjet: "Eco-Friendly Housing Project",
        descriptionProjet: "A sustainable housing development project focusing on green energy and eco-friendly materials.",
        montantRecherche: 500000,
        montantCollecte: 250000,
        dateCreation: new Date('2024-01-15'),
        rendementPrevisionnel: 8.5,
        statutProjet: "active",
        user: {
          idUser: 1,
          nom: "Doe",
          prenom: "John",
          email: "john.doe@example.com"
        },
        investissements: []
      };
    });
  }

  get pourcentageParticipation() {
    if (!this.portfolio || !this.investmentForm.get('montantInvestissement')?.value) return 0;
    return (this.investmentForm.get('montantInvestissement')?.value / this.portfolio.montantRecherche) * 100;
  }

  get rendementEstime() {
    if (!this.portfolio || !this.investmentForm.get('montantInvestissement')?.value) return 0;
    return (this.investmentForm.get('montantInvestissement')?.value * this.portfolio.rendementPrevisionnel) / 100;
  }

  onSubmit() {
    if (this.investmentForm.valid && this.portfolio) {
      console.log('Form is valid, submitting investment...');
      this.isLoading = true;
      this.error = null;

      //const currentUser = this.authService.getCurrentUser();
      //if (!currentUser) {
      //  console.error('No current user found');
      //  this.error = 'You must be logged in to make an investment';
      //  this.isLoading = false;
      //  return;
      //}

      const newInvestment: Partial<Investissement> = {
        montantInvestissement: this.investmentForm.get('montantInvestissement')?.value,
        dureeEngagement: this.investmentForm.get('dureeEngagement')?.value,
        modePaiement: this.investmentForm.get('modePaiement')?.value,
        pourcentageParticipation: this.pourcentageParticipation,
        rendementEstime: this.rendementEstime,
        dateInvestissement: new Date(),
        statutInvestissement: StatutInvestissement.PENDING,
        portfolio: this.portfolio
      };

      console.log('Creating investment with data:', newInvestment);

      //this.investmentService.createInvestment(
        //currentUser.idUser,
        //this.portfolio.idPortfolio,
        //newInvestment
      //).subscribe({
        //next: (investment) => {
          //console.log('Investment created successfully:', investment);
          //this.isLoading = false;
          // Navigate to confirmation page
          //this.router.navigate(['/our-team/investment-confirmation', investment.idInvestissement]);
        //},
        //error: (err) => {
          //console.error('Error creating investment:', err);
          //this.isLoading = false;
          //this.error = err.error?.message || 'An error occurred while creating the investment';
        //}
      //});
    } else {
      console.log('Form is invalid:', this.investmentForm.errors);
      this.error = 'Please fill in all required fields correctly';
    }
  }

  onCancel() {
    this.router.navigate(['/pages/our-team']);
  }
} 