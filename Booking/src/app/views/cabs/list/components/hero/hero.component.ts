import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'

@Component({
  selector: 'list-hero',
  standalone: true,
  imports: [SelectFormInputDirective, DateFormInputDirective],
  templateUrl: './hero.component.html',
  styles: `
    :host(list-hero) {
      display: contents !important;
    }
  `,
})
export class HeroComponent {
  activeTab = 'one-way'

  changeTab(tab: string) {
    this.activeTab = tab
  }
}
