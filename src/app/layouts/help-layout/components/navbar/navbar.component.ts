import { HELP_MENU_ITEMS } from '@/assets/data'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'help-navbar',
  standalone: true,
  imports: [RouterModule, NgbDropdownModule],
  template: `
    <div class="navbar-collapse collapse" id="navbarCollapse">
      <ul class="navbar-nav navbar-nav-scroll ms-auto">
        @for (item of helpMenuItems; track $index) {
          @if (item.children) {
            <li ngbDropdown class="nav-item dropdown">
              <a
                ngbDropdownToggle
                class="nav-link dropdown-toggle"
                href="javascript:void(0);"
                id="helpMenu"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >{{ item.label }}</a
              >
              <ul
                ngbDropdownMenu
                class="dropdown-menu"
                aria-labelledby="helpMenu"
              >
                @for (subitem of item.children; track $index) {
                  <li>
                    <a class="dropdown-item" [routerLink]="subitem.url">{{
                      subitem.label
                    }}</a>
                  </li>
                }
              </ul>
            </li>
          } @else {
            <li class="nav-item">
              <a class="nav-link" [routerLink]="item.url">{{ item.label }}</a>
            </li>
          }
        }
      </ul>
    </div>
  `,
  styles: `
    :host(help-navbar) {
      display: contents;
    }
  `,
})
export class NavbarComponent {
  helpMenuItems = HELP_MENU_ITEMS
}
