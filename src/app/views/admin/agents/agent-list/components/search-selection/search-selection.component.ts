import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'

@Component({
  selector: 'admin-agent-search-selection',
  standalone: true,
  imports: [SelectFormInputDirective],
  templateUrl: './search-selection.component.html',
  styles: ``,
})
export class SearchSelectionComponent {}
