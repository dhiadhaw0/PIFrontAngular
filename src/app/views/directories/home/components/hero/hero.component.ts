import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'directories-hero',
  standalone: true,
  imports: [SelectFormInputDirective, NgbDropdownModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
