import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './service.component.html',
  styles: ``,
})
export class ServiceComponent {}
