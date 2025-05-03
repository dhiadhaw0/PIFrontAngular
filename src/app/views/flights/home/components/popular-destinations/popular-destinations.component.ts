import { Component } from '@angular/core'
import { popularDestinations } from '../../data'
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'flights-home-popular-destinations',
  standalone: true,
  imports: [NgbPopoverModule, RouterLink],
  templateUrl: './popular-destinations.component.html',
  styleUrl: './popular-destinations.component.scss',
})
export class PopularDestinationsComponent {
  flightPopularDestinations = popularDestinations
}
