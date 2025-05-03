import { Component } from '@angular/core'
import { TopbarComponent } from './component/topbar/topbar.component'
import { BannerComponent } from './component/banner/banner.component'
import { AboutComponent } from './component/about/about.component'
import { ExperienceComponent } from './component/experience/experience.component'
import { RoomsComponent } from './component/rooms/rooms.component'
import { OffersComponent } from './component/offers/offers.component'
import { GalleryComponent } from './component/gallery/gallery.component'
import { ActionComponent } from './component/action/action.component'
import { Footer2Component } from './component/footer2/footer2.component'

@Component({
  selector: 'app-resort',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    RoomsComponent,
    OffersComponent,
    GalleryComponent,
    ActionComponent,
    Footer2Component,
  ],
  templateUrl: './resort.component.html',
  styles: ``,
})
export class ResortComponent {}
