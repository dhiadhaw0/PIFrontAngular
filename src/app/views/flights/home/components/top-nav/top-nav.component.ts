import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { ThemeSwitcherComponent } from '@/app/components/top-bar/theme-switcher/them-switcher.component'
import { Component } from '@angular/core'
import {
  NgbAlertModule,
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap'
import { Subject } from 'rxjs'
import { AppMenuComponent } from 'src/app/components/app-menu/app-menu.component'
import { LogoBoxComponent } from 'src/app/components/logo-box/logo-box.component'

@Component({
  selector: 'flights-top-nav',
  standalone: true,
  imports: [
    AppMenuComponent,
    LogoBoxComponent,
    VerticalMenuButtonComponent,
    StickyHeaderComponent,
    NgbAlertModule,
    ThemeSwitcherComponent,
    NgbDropdownModule,
  ],
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent {
  isOpen: boolean = false
  staticAlert = true
  private _message$ = new Subject<string>()

  staticAlertClosed = false
  successMessage = ''

  toggleMobileMenu() {
    this.isOpen = !this.isOpen
  }
}
