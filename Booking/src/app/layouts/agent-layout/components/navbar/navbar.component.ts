import { AGENT_MENU_ITEMS } from '@/assets/data'
import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { filter } from 'rxjs'

@Component({
  selector: 'agent-navbar',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule],
  template: `
    <div class="offcanvas-body p-3 p-xl-0">
      <div class="navbar navbar-expand-xl">
        <ul class="navbar-nav navbar-offcanvas-menu">
          @for (item of agentMenuItems; track $index) {
            <li class="nav-item">
              <a
                class="nav-link"
                [class.active]="
                  currentPath == item.url ||
                  ($index === 0 && currentPath === null)
                "
                [routerLink]="item.url"
                ><i class="{{ item.icon }} fa-fw me-1"></i>{{ item.label }}</a
              >
            </li>
          }

          <li ngbDropdown class="nav-item dropdown">
            <a
              ngbDropdownToggle
              class="nav-link dropdown-toggle"
              id="dropdoanMenu"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="bi bi-list-ul fa-fw me-1"></i>Dropdown
            </a>
            <ul
              ngbDropdownMenu
              class="dropdown-menu"
              aria-labelledby="dropdoanMenu"
            >
              <li>
                <a class="dropdown-item" href="javascript:void(0);">Item 1</a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:void(0);">Item 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class NavbarComponent implements OnInit {
  agentMenuItems = AGENT_MENU_ITEMS
  currentPath = window.location.pathname

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects
      })
  }
}
