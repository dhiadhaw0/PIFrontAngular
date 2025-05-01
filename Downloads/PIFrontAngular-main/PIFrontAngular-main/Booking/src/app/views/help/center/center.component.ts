import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { FaqComponent } from './components/faq/faq.component'
import { PopularArticlesComponent } from './components/popular-articles/popular-articles.component'
import { ActionboxComponent } from './components/actionbox/actionbox.component'

@Component({
  selector: 'help-center',
  standalone: true,
  imports: [
    HeroComponent,
    FaqComponent,
    PopularArticlesComponent,
    ActionboxComponent,
  ],
  templateUrl: './center.component.html',
  styles: ``,
})
export class CenterComponent {}
