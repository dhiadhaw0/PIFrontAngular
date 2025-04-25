import { Component, inject, type TemplateRef } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { AvailabilityFilterComponent } from './components/availability-filter/availability-filter.component'
import { HotelGalleryComponent } from './components/hotel-gallery/hotel-gallery.component'
import { RoomComponent } from './components/room/room.component'
import { CustomerReviewComponent } from './components/customer-review/customer-review.component'
import { PoliciesComponent } from './components/policies/policies.component'
import { AboutComponent } from './components/about/about.component'
import { AmenitiesComponent } from './components/amenities/amenities.component'
import { PriceOverviewComponent } from './components/price-overview/price-overview.component'
import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    TopbarComponent,
    AvailabilityFilterComponent,
    HotelGalleryComponent,
    RoomComponent,
    CustomerReviewComponent,
    PoliciesComponent,
    AboutComponent,
    AmenitiesComponent,
    PriceOverviewComponent,
    NgbOffcanvasModule,
    Footer1Component,
  ],
  templateUrl: './detail.component.html',
  styles: `
    :host(app-detail) {
      display: contents !important;
    }
  `,
})
export class DetailComponent {
  private offcanvasService = inject(NgbOffcanvas)

  openSearchFilter(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'top' })
  }
}
