import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { ThemeSwitcherComponent } from '@/app/components/top-bar/theme-switcher/them-switcher.component'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'contact2-topbar',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    LogoBoxComponent,
    AppMenuComponent,
    VerticalMenuButtonComponent,
    NgbDropdownModule,
    ThemeSwitcherComponent,
  ],
  templateUrl: './topbar.component.html',
  styles: ``,
})
export class TopbarComponent {}
