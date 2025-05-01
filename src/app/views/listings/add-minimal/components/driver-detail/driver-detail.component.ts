import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'

@Component({
  selector: 'add-minimal-driver-detail',
  standalone: true,
  imports: [SelectFormInputDirective],
  templateUrl: './driver-detail.component.html',
  styles: ``,
})
export class DriverDetailComponent {}
