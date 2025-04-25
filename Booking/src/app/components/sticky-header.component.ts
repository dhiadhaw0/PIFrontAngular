import { CommonModule } from '@angular/common'
import { Component, type OnDestroy, Input } from '@angular/core'

@Component({
  selector: 'sticky-header-component',
  standalone: true,
  imports: [CommonModule],
  template: `<header
    class="header-sticky"
    [class.header-sticky-on]="scrollY > 400"
    [ngClass]="transparentHeader ? 'header-transparent' : 'navbar-light'"
  >
    <ng-content></ng-content>
  </header>`,
})
export class StickyHeaderComponent implements OnDestroy {
  @Input() transparentHeader: boolean = false

  scrollY = 0
  constructor() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.handleScroll()
  }

  handleScroll = () => {
    this.scrollY = window.scrollY
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
