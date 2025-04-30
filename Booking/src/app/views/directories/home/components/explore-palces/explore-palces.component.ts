import { Component } from '@angular/core'
import { greatPlaces } from '../../data'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { currency } from '@/app/store'

@Component({
  selector: 'directories-explore-palces',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './explore-palces.component.html',
  styles: ``,
})
export class ExplorePalcesComponent {
  greatPlaces = greatPlaces
  isLikeToggle: boolean = false
  currencyType = currency

  likeButton(id: any) {
    this.greatPlaces[id].isLike = !this.greatPlaces[id].isLike
  }
}
