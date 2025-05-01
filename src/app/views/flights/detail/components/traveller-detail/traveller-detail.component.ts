import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'detail-traveller-detail',
  standalone: true,
  imports: [
    NgbAccordionModule,
    FormsModule,
    SelectFormInputDirective,
    RouterModule,
  ],
  templateUrl: './traveller-detail.component.html',
  styles: ``,
})
export class TravellerDetailComponent {
  days: number[] = Array.from({ length: 31 }, (_, i) => i++)
}
