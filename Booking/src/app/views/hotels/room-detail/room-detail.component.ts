import { Component, OnInit } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { RoomselectionComponent } from './components/roomselection/roomselection.component'
import { RoomgalleryComponent } from './components/roomgallery/roomgallery.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [
    TopbarComponent,
    RoomgalleryComponent,
    RoomselectionComponent,
    Footer1Component,
  ],
  templateUrl: './room-detail.component.html',
})
export class RoomDetailComponent {

}
