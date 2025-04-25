import { Component } from '@angular/core'

@Component({
  selector: 'home-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styles: ``,
})
export class ClientsComponent {
  clientList = [
    {
      id: 1,
      image: 'assets/images/client/01.svg',
    },
    {
      id: 2,
      image: 'assets/images/client/02.svg',
    },
    {
      id: 3,
      image: 'assets/images/client/03.svg',
    },
    {
      id: 4,
      image: 'assets/images/client/04.svg',
    },
    {
      id: 5,
      image: 'assets/images/client/05.svg',
    },
    {
      id: 6,
      image: 'assets/images/client/06.svg',
    },
  ]
}
