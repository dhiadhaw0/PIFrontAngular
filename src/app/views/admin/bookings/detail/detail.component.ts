import { Component } from '@angular/core'
import { DetailTableComponent } from './components/detail-table/detail-table.component'
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [DetailTableComponent, HotelDetailComponent, DetailTableComponent],
  templateUrl: './detail.component.html',
  styles: ``,
})
export class DetailComponent {}
