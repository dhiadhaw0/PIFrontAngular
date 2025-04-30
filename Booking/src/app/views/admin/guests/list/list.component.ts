import { Component } from '@angular/core'
import { guestsList } from './data'
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgbNavModule,
    SelectFormInputDirective,
    CommonModule,
    NgbPaginationModule,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListsComponent {
  page = 2
  guestsListData = guestsList
}
