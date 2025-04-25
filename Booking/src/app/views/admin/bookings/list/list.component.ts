import { Component } from '@angular/core'
import { ListWidgetComponent } from './components/list-widget/list-widget.component'
import { ListCardComponent } from './components/list-card/list-card.component'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListWidgetComponent, ListCardComponent],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {}
