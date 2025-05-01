import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { bookingHomeMenuItems } from '@/assets/data'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { UserVerticalMenuButtonComponent } from './components/user-vertical-menu-button/vertical-menu-button.component'
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'layout-user',
  standalone: true,
  imports: [
    RouterModule,
    TopNavbarComponent,
    NgbCollapseModule,
    SidebarComponent,
    UserVerticalMenuButtonComponent,
    FooterComponent,
    NgbTooltipModule,
  ],
  templateUrl: './user-layout.component.html',
})
export class UserLayoutComponent {
  bookingHomeMenuItems = bookingHomeMenuItems

  isMenuOpen: boolean = true

  ngAfterViewInit(): void {
    document.body.classList.add('dashboard')
  }

  ngOnDestroy(): void {
    document.body.classList.remove('dashboard')
  }
}
