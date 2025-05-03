import { Component, OnInit } from '@angular/core'
import { hotel } from '../../data'
import GLightbox from 'glightbox';
import { CommonModule } from '@angular/common'
import { currency } from '@/app/store'

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-detail.component.html',
})
export class HotelDetailComponent implements OnInit{
  hotelData = hotel
  currencyType = currency

  ngOnInit() {
      GLightbox({
        selector: '[data-glightbox]',
        openEffect: 'fade',
        closeEffect: 'fade'
      })
  }

}
