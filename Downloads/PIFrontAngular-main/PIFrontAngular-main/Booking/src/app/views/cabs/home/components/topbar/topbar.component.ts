import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { NotificationDropdownComponent } from '@/app/components/top-bar/notification-dropdown/notification-dropdown.component'
import { ProfileDropdownComponent } from '@/app/components/top-bar/profile-dropdown/profile-dropdown.component'
import { bookingHomeMenuItems } from '@/assets/data'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'home-topbar',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    LogoBoxComponent,
    AppMenuComponent,
    NotificationDropdownComponent,
    ProfileDropdownComponent,
    VerticalMenuButtonComponent,
    NgbCollapseModule,
    RouterModule,
  ],
  templateUrl: './topbar.component.html',
  styles: ``,
})
export class TopbarComponent {
  bookingHomeMenuItems = bookingHomeMenuItems
  isCollapsed = true
}
