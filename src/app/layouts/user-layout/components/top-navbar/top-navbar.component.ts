import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { NotificationDropdownComponent } from '@/app/components/top-bar/notification-dropdown/notification-dropdown.component'
import { ProfileDropdownComponent } from '@/app/components/top-bar/profile-dropdown/profile-dropdown.component'
import { Component } from '@angular/core'
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'user-top-navbar',
  standalone: true,
  imports: [
    AppMenuComponent,
    NgbDropdownModule,
    LogoBoxComponent,
    NgbCollapseModule,
    VerticalMenuButtonComponent,
    NotificationDropdownComponent,
    ProfileDropdownComponent,
    StickyHeaderComponent,
  ],
  template: `
    <sticky-header-component class="navbar-light header-sticky">
      <nav class="navbar navbar-expand-xl">
        <div class="container">
          <app-logo-box />

          <vertical-menu-button className="ms-auto mx-3 me-md-0" [showText]="false" />
          <app-menu [showContactPages]="true" />

          <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
            <app-notification-dropdown />

            <app-profile-dropdown className="ms-3" />

            <li class="nav-item ms-3 d-none d-sm-block">
              <a
                class="btn btn-sm btn-primary-soft mb-0"
                href="javascript:void(0);"
                ><i class="bi bi-lightning-charge"></i> Upgrade now</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </sticky-header-component>
  `,
  styles: ``,
})
export class TopNavbarComponent {
  isMenuOpen: boolean = true

  toggleMobille(event: any) {
    let ariaExpand = event.target.closest('button.navbar-toggler')

    this.isMenuOpen = !this.isMenuOpen
    if (this.isMenuOpen) {
      ariaExpand.setAttribute('aria-expanded', 'false')
    } else {
      ariaExpand.setAttribute('aria-expanded', 'true')
    }
  }
}
