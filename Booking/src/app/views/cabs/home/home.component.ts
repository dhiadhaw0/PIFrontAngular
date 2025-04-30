import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { VehiclesComponent } from './components/vehicles/vehicles.component'
import { WhychooseComponent } from './components/whychoose/whychoose.component'
import { FaqsComponent } from './components/faqs/faqs.component'
import { ClientComponent } from './components/client/client.component'
import { ActionBoxComponent } from './components/action-box/action-box.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'cab-home',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    VehiclesComponent,
    WhychooseComponent,
    FaqsComponent,
    ClientComponent,
    ActionBoxComponent,
    Footer1Component,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
