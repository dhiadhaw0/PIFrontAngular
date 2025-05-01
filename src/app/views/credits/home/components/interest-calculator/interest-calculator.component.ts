import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'credits-interest-calculator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './interest-calculator.component.html',
  styles: ``
})
export class InterestCalculatorComponent {
  calculatorForm: FormGroup
  interestRate: number | null = null
  ageFactor: number = 1
  incomeFactor: number = 1
  loanTermFactor: number = 1
  loanAmountFactor: number = 1

  constructor(private fb: FormBuilder) {
    this.calculatorForm = this.fb.group({
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      income: ['', [Validators.required, Validators.min(0)]],
      loanAmount: ['', [Validators.required, Validators.min(0)]],
      loanTerm: ['', [Validators.required]]
    })
  }

  calculateInterest() {
    if (this.calculatorForm.valid) {
      const { age, income, loanAmount, loanTerm } = this.calculatorForm.value
      
      // Base interest rate for microfinance
      let tauxInteret = 0.2

      // Age factor calculation
      this.ageFactor = 1.0
      if (age < 25) {
        this.ageFactor = 0.9 // Increase interest rate by 10% for young borrowers
      } else if (age >= 65) {
        this.ageFactor = 1.2 // Decrease interest rate by 20% for older borrowers
      }
      tauxInteret *= this.ageFactor

      // Income factor calculation
      this.incomeFactor = 1.0
      if (income < 1000) {
        this.incomeFactor = 0.9 // Increase interest rate by 20% for low-income borrowers
      } else if (income >= 1000) {
        this.incomeFactor = 1.2 // Decrease interest rate by 20% for high-income borrowers
      }
      tauxInteret *= this.incomeFactor

      // Loan term factor calculation
      this.loanTermFactor = 1.0
      if (loanTerm < 12) {
        this.loanTermFactor = 1.2 // Increase interest rate by 20% for short-term loans
      } else if (loanTerm > 24) {
        this.loanTermFactor = 1.3 // Decrease interest rate by 10% for long-term loans
      }
      tauxInteret *= this.loanTermFactor

      // Loan amount factor calculation
      this.loanAmountFactor = 1.0
      if (loanAmount > 3000) {
        this.loanAmountFactor = 1.2 // Increase interest rate by 20% for high loan amounts
      }
      tauxInteret *= this.loanAmountFactor

      this.interestRate = tauxInteret
    }
  }
} 