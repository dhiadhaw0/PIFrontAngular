import { Component } from '@angular/core'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'admin-agent-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.component.html',
  styles: ``,
})
export class PaginationComponent {
  page = 2
}
