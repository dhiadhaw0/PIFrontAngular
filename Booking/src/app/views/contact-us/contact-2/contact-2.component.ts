import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { LocationComponent } from './components/location/location.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-contact-2',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    LocationComponent,
    Footer1Component,
  ],
  templateUrl: './contact-2.component.html',
  styles: ``,
})
export class Contact2Component {}
