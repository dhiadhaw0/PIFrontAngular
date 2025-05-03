import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { ProfileDropdownComponent } from '@/app/components/top-bar/profile-dropdown/profile-dropdown.component'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HelpVerticalMenuButtonComponent } from './components/help-vertical-menu-button/help-vertical-menu-button.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { footerLinks, topLinks } from '@/assets/data/footer-items'
import { credits, currentYear } from '@/app/store'

@Component({
  selector: 'layout-help',
  standalone: true,
  imports: [
    RouterModule,
    LogoBoxComponent,
    ProfileDropdownComponent,
    NavbarComponent,
    HelpVerticalMenuButtonComponent,
    StickyHeaderComponent,
  ],
  templateUrl: './help-layout.component.html',
})
export class HelpLayoutComponent {
  topLinks = topLinks
  currentYear = currentYear
  footerLinks = footerLinks
  creditsBy = credits
}
