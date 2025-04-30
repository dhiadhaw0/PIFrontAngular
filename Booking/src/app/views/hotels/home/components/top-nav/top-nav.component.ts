import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { NotificationDropdownComponent } from '@/app/components/top-bar/notification-dropdown/notification-dropdown.component'
import { ProfileDropdownComponent } from '@/app/components/top-bar/profile-dropdown/profile-dropdown.component'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap'
import { AppMenuComponent } from 'src/app/components/app-menu/app-menu.component'
import { LogoBoxComponent } from 'src/app/components/logo-box/logo-box.component'
import { bookingHomeMenuItems } from 'src/assets/data'

@Component({
  selector: 'home-top-nav',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    AppMenuComponent,
    NgbDropdownModule,
    LogoBoxComponent,
    RouterLink,
    NgbCollapseModule,
    VerticalMenuButtonComponent,
    NotificationDropdownComponent,
    ProfileDropdownComponent,
  ],
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent {
  bookingHomeMenuItems = bookingHomeMenuItems
  isCollapsed = true
}
