import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Subject } from 'rxjs'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { ThemeSwitcherComponent } from '@/app/components/top-bar/theme-switcher/them-switcher.component'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'credits-top-nav',
  standalone: true,
  imports: [
    RouterLink,
    StickyHeaderComponent,
    VerticalMenuButtonComponent,
    AppMenuComponent,
    LogoBoxComponent,
    ThemeSwitcherComponent,
    NgbDropdownModule
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