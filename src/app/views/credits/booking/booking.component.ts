import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'credits-booking',
  standalone: true,
  imports: [
    TopbarComponent,
    FooterComponent
  ],
  templateUrl: './booking.component.html',
  styles: ``
})
export class BookingComponent {} 