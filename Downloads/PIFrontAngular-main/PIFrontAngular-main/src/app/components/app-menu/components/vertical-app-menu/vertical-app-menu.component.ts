import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap'
import type { MenuItemType } from 'src/app/core/models'
import {
  findAllParent,
  findMenuItem,
  getMenuItemFromURL,
} from 'src/app/helpers/menu'
import { bookingHomeMenuItems } from 'src/assets/data'
import { MenuItemWithChildrenComponent } from './components/vertical-menu-item-with-children.component'
import { MenuItemComponent } from './components/vertical-menu-item.component'
import { filter } from 'rxjs'
import { basePath } from '@/app/store'

@Component({
  selector: 'vertical-app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    NgbDropdownModule,
    MenuItemWithChildrenComponent,
    MenuItemComponent,
  ],
  templateUrl: './vertical-app-menu.component.html',
  styles: `
    :host(vertical-app-menu) {
      display: contents;
    }
  `,
})
export class VerticalAppMenuComponent implements OnInit {
  @Input() menuItems!: MenuItemType[]

  constructor(private router: Router) {}

  activeMenuItems?: string[]
  bookingHomeMenuItems = bookingHomeMenuItems
  trimmedURL = this.router.url?.replaceAll(
    basePath !== '' ? basePath + '/' : '',
    '/'
  )
  matchingMenuItem: MenuItemType | undefined

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.trimmedURL = this.router.url
        this.initActiveMenu()
      })
    this.initActiveMenu()
  }

  initActiveMenu() {
    if (this.menuItems)
      this.matchingMenuItem = getMenuItemFromURL(
        this.menuItems,
        this.trimmedURL
      )
    if (this.matchingMenuItem) {
      const activeMt = findMenuItem(this.menuItems, this.matchingMenuItem.key)
      if (activeMt) {
        this.activeMenuItems = [
          activeMt.key,
          ...findAllParent(this.menuItems, activeMt),
        ]
      }
    }
  }

  getActiveClass(item: MenuItemType) {
    return this.activeMenuItems && this.activeMenuItems.includes(item.key)
      ? ' active'
      : ''
  }
}
