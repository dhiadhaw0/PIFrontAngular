import { getMenuItems } from '@/app/helpers/menu'
import { Component, inject, Input, type OnInit } from '@angular/core'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { VerticalAppMenuComponent } from './vertical-app-menu/vertical-app-menu.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'vertical-menu-button',
  standalone: true,
  imports: [VerticalAppMenuComponent, CommonModule],
  template: `
    <ng-template #offcanvasContent let-offcanvas>
      <div
        class="offcanvas-body sidebar-offcanvas-wrapper d-flex flex-column pt-4"
      >
        <vertical-app-menu [menuItems]="menuItems"></vertical-app-menu>
      </div>
    </ng-template>
    <button
      class="navbar-toggler p-0 p-sm-2"
      [ngClass]="className"
      data-bs-toggle="collapse"
      type="button"
      (click)="offcanvasService.open(offcanvasContent)"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      [attr.aria-expanded]="isOffcanvasOpen"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-animation">
        <span></span>
        <span></span>
        <span></span>
      </span>
      @if (showText) {
        <span class="d-none ms-1 d-sm-inline-block small">Menu</span>
      }
    </button>
  `,
  styles: `
    :host(vertical-menu-button) {
      display: contents;
    }
  `,
})
export class VerticalMenuButtonComponent implements OnInit {
  @Input() showText: boolean = true
  @Input() className: string = 'true'

  offcanvasService = inject(NgbOffcanvas)
  isOffcanvasOpen: boolean = false

  ngOnInit(): void {
    this.offcanvasService.activeInstance.subscribe((e) => {
      this.isOffcanvasOpen = Boolean(e)
    })
  }

  menuItems = getMenuItems()
}
