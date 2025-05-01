import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'

@Component({
  selector: 'add-minimal-owner-detail',
  standalone: true,
  imports: [SelectFormInputDirective],
  templateUrl: './owner-detail.component.html',
  styles: ``,
})
export class OwnerDetailComponent {}
