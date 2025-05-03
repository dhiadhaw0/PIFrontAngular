import { currency } from '@/app/store'
import { Component } from '@angular/core'
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'booking-fare-summary',
  standalone: true,
  imports: [NgbPopoverModule],
  templateUrl: './fare-summary.component.html',
  styles: ``,
})
export class FareSummaryComponent {
  currencyType = currency
  baseFare = 38660
  discount = 2560
  otherServices = 20
  interestRate = 12 // Annual interest rate in percentage
  loanTerm = 12 // Loan term in months

  get totalFare() {
    return this.baseFare - this.discount + this.otherServices
  }

  get monthlyPayment() {
    const monthlyRate = this.interestRate / 12 / 100
    const numerator = this.totalFare * monthlyRate * Math.pow(1 + monthlyRate, this.loanTerm)
    const denominator = Math.pow(1 + monthlyRate, this.loanTerm) - 1
    return Math.ceil(numerator / denominator)
  }

  get totalInterest() {
    return (this.monthlyPayment * this.loanTerm) - this.totalFare
  }

  get totalPayment() {
    return this.monthlyPayment * this.loanTerm
  }
}
