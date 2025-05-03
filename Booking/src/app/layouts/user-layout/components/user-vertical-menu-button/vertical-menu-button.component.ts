import { Component, OnInit, inject } from '@angular/core'
import { SidebarComponent } from '../sidebar/sidebar.component'
import { NgbOffcanvas, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'user-vertical-menu-button',
  standalone: true,
  imports: [SidebarComponent, NgbTooltipModule],
  template: `
    <ng-template #offcanvasContent let-offcanvas>
      <div class="offcanvas-header justify-content-end pb-2">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-label="Close"
          (click)="offcanvasService.dismiss()"
        ></button>
      </div>

      <div class="offcanvas-body p-3 p-lg-0">
        <div class="card bg-light w-100">
          <div class="position-absolute top-0 end-0 p-3">
            <a
              href="javascript:void(0);"
              class="text-primary-hover"
              ngbTooltip="Edit profile"
            >
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>

          <user-sidebar />
        </div>
      </div>
    </ng-template>

    <div class="d-grid mb-0 d-lg-none w-100">
      <button
        class="btn btn-primary mb-4"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        (click)="offcanvasService.open(offcanvasContent, { position: 'end' })"
        aria-controls="offcanvasSidebar"
      >
        <i class="fas fa-sliders-h"></i> Menu
      </button>
    </div>
  `,
})
export class UserVerticalMenuButtonComponent implements OnInit {
  offcanvasService = inject(NgbOffcanvas)
  offcanvasOpen: boolean = false

  ngOnInit(): void {
    this.offcanvasService.activeInstance.subscribe((e) => {
      this.offcanvasOpen = Boolean(e)
    })
  }
}
