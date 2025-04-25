import { Component } from '@angular/core'
import { roomDetailList } from './data'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styles: ``,
})
export class DetailsComponent {
  roomDetailList = roomDetailList
}
