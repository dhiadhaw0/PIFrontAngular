import { VerticalAppMenuComponent } from '@/app/components/app-menu/components/vertical-app-menu/vertical-app-menu.component'
import { ADMIN_MENU_ITEMS } from '@/assets/data'
import { Component } from '@angular/core'
import { RouterLink, RouterModule } from '@angular/router'
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { AdminVerticalMenuButtonComponent } from './components/vertical-menu-button.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { NotificationDropdownComponent } from '@/app/components/top-bar/notification-dropdown/notification-dropdown.component'
import { ProfileDropdownComponent } from '@/app/components/top-bar/profile-dropdown/profile-dropdown.component'
import { ThemeSwitcherComponent } from '@/app/components/top-bar/theme-switcher/them-switcher.component'

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    RouterModule,
    NgbCollapseModule,
    VerticalAppMenuComponent,
    AdminVerticalMenuButtonComponent,
    LogoBoxComponent,
    NotificationDropdownComponent,
    ProfileDropdownComponent,
    ThemeSwitcherComponent,
    RouterLink,
    NgbTooltipModule,
  ],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
  adminmenuItems = ADMIN_MENU_ITEMS
  isCollapsed = true
}
