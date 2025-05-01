import { Component } from '@angular/core'
import { TitleComponent } from './components/title/title.component'
import { SearchSelectionComponent } from './components/search-selection/search-selection.component'
import { ListComponent } from './components/list/list.component'
import { PaginationComponent } from './components/pagination/pagination.component'

@Component({
  selector: 'app-agent-list',
  standalone: true,
  imports: [
    TitleComponent,
    SearchSelectionComponent,
    ListComponent,
    PaginationComponent,
  ],
  templateUrl: './agent-list.component.html',
  styles: ``,
})
export class AgentListComponent {}
