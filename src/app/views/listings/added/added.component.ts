import {
  Component,
  inject,
  Renderer2,
  type OnDestroy,
  type OnInit,
} from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-added',
  standalone: true,
  imports: [TopbarComponent, HeroComponent, FooterComponent],
  templateUrl: './added.component.html',
  styles: ``,
})
export class AddedComponent implements OnInit, OnDestroy {
  private renderer = inject(Renderer2)
  ngOnInit(): void {
    this.renderer.addClass(document.body, 'dashboard')
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'dashboard')
  }
}
