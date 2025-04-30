import { Component } from '@angular/core'
import { ListingStepperComponent } from '@views/listings/add/components/listing-stepper/listing-stepper.component'
import { TopbarComponent } from './components/topbar/topbar.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'listings-add',
  standalone: true,
  imports: [
    ListingStepperComponent,
    TopbarComponent,
    FooterComponent,
  ],
  templateUrl: './add.component.html',
  styles: ``,
})
export class AddComponent {}
