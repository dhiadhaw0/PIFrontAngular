import { Component } from '@angular/core'
import { FlightInformationComponent } from '../flight-information/flight-information.component'
import { ImportantInformationComponent } from '../important-information/important-information.component'
import { CancellationChargesComponent } from '../cancellation-charges/cancellation-charges.component'
import { FareSummaryComponent } from '../fare-summary/fare-summary.component'
import { TravellerDetailComponent } from '../traveller-detail/traveller-detail.component'
import { StickyDirective } from '@/app/directives/sticky.directive'

@Component({
  selector: 'detail-flight-details',
  standalone: true,
  imports: [
    FlightInformationComponent,
    ImportantInformationComponent,
    CancellationChargesComponent,
    FareSummaryComponent,
    TravellerDetailComponent,
    StickyDirective,
  ],
  templateUrl: './flight-details.component.html',
  styles: ``,
})
export class FlightDetailsComponent {}
