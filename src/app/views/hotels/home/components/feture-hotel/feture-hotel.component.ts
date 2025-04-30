import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { currency } from '@/app/store'

@Component({
  selector: 'home-feture-hotel',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './feture-hotel.component.html',
  styles: ``,
})
export class FetureHotelComponent {
  products = [
    {
      type: 'Micro Loan',
      image: 'assets/images/about/flous.jpg',
      name: 'Small Business Loan',
      amount: 200,
      ratings: 4.9,
    },
    {
      type: 'Savings',
      image: 'assets/images/about/wallet.jpg',
      name: 'Smart Savings Plan',
      amount: 50,
      ratings: 4.8,
    },
    {
      type: 'Community Fund',
      image: 'assets/images/about/women.jpg',
      name: 'Women Empowerment Fund',
      amount: 100,
      ratings: 4.7,
    },
    {
      type: 'Education Loan',
      image: 'assets/images/about/student.webp',
      name: 'Student Micro Loan',
      amount: 150,
      ratings: 4.8,
    },
  ]
  currencyType = currency
}
