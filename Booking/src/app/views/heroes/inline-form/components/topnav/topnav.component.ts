import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { NotificationDropdownComponent } from '@/app/components/top-bar/notification-dropdown/notification-dropdown.component'
import { ProfileDropdownComponent } from '@/app/components/top-bar/profile-dropdown/profile-dropdown.component'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'heroes-topnav',
  standalone: true,
  imports: [
    LogoBoxComponent,
    VerticalMenuButtonComponent,
    AppMenuComponent,
    ProfileDropdownComponent,
    NotificationDropdownComponent,
    StickyHeaderComponent,
    NgbDropdownModule,
    StickyHeaderComponent,
  ],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss',
})
export class TopnavComponent {}
