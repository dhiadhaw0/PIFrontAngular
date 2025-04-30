import { Component } from '@angular/core'

const avatar1 = 'assets/images/avatar/01.jpg'
const avatar2 = 'assets/images/avatar/02.jpg'
const avatar3 = 'assets/images/avatar/03.jpg'
const avatar4 = 'assets/images/avatar/04.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'

@Component({
  selector: 'our-team-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  clientList = [avatar1, avatar2, avatar3, avatar4, avatar5]
}
