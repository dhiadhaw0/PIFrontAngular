import { Component, OnInit, inject } from '@angular/core'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { NavbarComponent } from './navbar/navbar.component'

@Component({
  selector: 'agent-vertical-menu-button',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <ng-template #offcanvasContent let-offcanvas>
      <div class="offcanvas-header border-bottom p-3">
        <h5 class="offcanvas-title">Menu</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#dashboardMenu"
          aria-label="Close"
          (click)="offcanvasService.dismiss()"
        ></button>
      </div>
      <agent-navbar />
    </ng-template>

    <button
      class="btn btn-primary w-100 d-block d-xl-none mt-2"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#dashboardMenu"
      (click)="offcanvasService.open(offcanvasContent, { position: 'end' })"
      aria-controls="dashboardMenu"
    >
      <i class="bi bi-list"></i> Dashboard Menu
    </button>
  `,
  styles: ``,
})
export class AgentVerticalMenuButtonComponent implements OnInit {
  offcanvasService = inject(NgbOffcanvas)
  isMenuOpen: boolean = false

  ngOnInit(): void {
    this.offcanvasService.activeInstance.subscribe((e) => {
      this.isMenuOpen = Boolean(e)
    })
  }
}
