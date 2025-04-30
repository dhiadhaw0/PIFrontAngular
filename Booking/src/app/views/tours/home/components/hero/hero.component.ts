import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { currency } from '@/app/store'
import { Component } from '@angular/core'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

interface Alert {
  name: string
}

@Component({
  selector: 'tours-hero',
  standalone: true,
  imports: [SelectFormInputDirective, DateFormInputDirective, NgbAlertModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  currencyType = currency
  alertData: string[] = [
    'Taman Sari',
    'The Grand Palace',
    'Glacier National Park',
    'Machu Picchu',
    'Prambanan Temple',
    'Batu Gong',
    'Barobadur Temple',
    'Great Barrier Reef',
    'Argentine Patagonia',
  ]

  close(index: number) {
    this.alertData.splice(index, 1)
  }
}
