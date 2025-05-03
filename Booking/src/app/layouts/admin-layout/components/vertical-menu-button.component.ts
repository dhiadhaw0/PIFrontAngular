import { VerticalAppMenuComponent } from '@/app/components/app-menu/components/vertical-app-menu/vertical-app-menu.component'
import { getAdminMenuItems } from '@/app/helpers/menu'
import { Component, Input, OnInit, inject } from '@angular/core'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'admin-vertical-menu-button',
  standalone: true,
  imports: [VerticalAppMenuComponent],
  template: `
    <ng-template #offcanvasContent let-offcanvas class="offcanvas">
      <div
        class="offcanvas-body sidebar-offcanvas-wrapper d-flex flex-column pt-4"
      >
        <vertical-app-menu [menuItems]="menuItems"></vertical-app-menu>
      </div>
    </ng-template>

    <div class="navbar-expand-xl sidebar-offcanvas-menu">
      <button
        class="navbar-toggler me-auto p-2 + {{ className }}"
        type="button"
        (click)="offcanvasService.open(offcanvasContent)"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
        [attr.aria-expanded]="isOffcanvasOpen"
        aria-label="Toggle navigation"
        data-bs-auto-close="outside"
      >
        <i
          class="bi bi-list text-primary fa-fw"
          data-bs-target="#offcanvasMenu"
        ></i>
      </button>
    </div>
  `,
})
export class AdminVerticalMenuButtonComponent implements OnInit {
  @Input() className!: string
  offcanvasService = inject(NgbOffcanvas)
  isOffcanvasOpen: boolean = false

  ngOnInit(): void {
    this.offcanvasService.activeInstance.subscribe((e) => {
      this.isOffcanvasOpen = Boolean(e)
    })
  }

  menuItems = getAdminMenuItems()
}
