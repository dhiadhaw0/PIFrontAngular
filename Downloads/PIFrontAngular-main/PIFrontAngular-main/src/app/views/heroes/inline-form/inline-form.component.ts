import { Component } from '@angular/core'
import { TopnavComponent } from './components/topnav/topnav.component'
import { HeroComponent } from './components/hero/hero.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-inline-form',
  standalone: true,
  imports: [TopnavComponent, HeroComponent, Footer1Component],
  templateUrl: './inline-form.component.html',
  styles: ``,
})
export class InlineFormComponent {}
