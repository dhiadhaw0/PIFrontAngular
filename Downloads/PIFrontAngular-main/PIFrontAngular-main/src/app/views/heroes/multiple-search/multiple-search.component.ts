import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { MultipleTabsComponent } from './components/multiple-tabs/multiple-tabs.component'
import { CategoryComponent } from './components/category/category.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-multiple-search',
  standalone: true,
  imports: [
    TopbarComponent,
    MultipleTabsComponent,
    CategoryComponent,
    Footer1Component,
  ],
  templateUrl: './multiple-search.component.html',
  styles: ``,
})
export class MultipleSearchComponent {}
