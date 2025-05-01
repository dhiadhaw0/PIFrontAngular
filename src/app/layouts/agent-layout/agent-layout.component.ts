import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { NotificationDropdownComponent } from '@/app/components/top-bar/notification-dropdown/notification-dropdown.component'
import { ProfileDropdownComponent } from '@/app/components/top-bar/profile-dropdown/profile-dropdown.component'
import { bookingHomeMenuItems } from '@/assets/data'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap'
import { FooterComponent } from './components/footer/footer.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AgentVerticalMenuButtonComponent } from './components/agent-vertical-menu-button.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'

@Component({
  selector: 'layout-agent',
  standalone: true,
  imports: [
    RouterModule,
    NgbDropdownModule,
    AppMenuComponent,
    NgbCollapseModule,
    VerticalMenuButtonComponent,
    NotificationDropdownComponent,
    ProfileDropdownComponent,
    LogoBoxComponent,
    NavbarComponent,
    FooterComponent,
    AgentVerticalMenuButtonComponent,
    StickyHeaderComponent,
  ],
  templateUrl: './agent-layout.component.html',
})
export class AgentLayoutComponent {
  bookingHomeMenuItems = bookingHomeMenuItems

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
