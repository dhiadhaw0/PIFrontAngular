import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
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
import { MenuItemWithChildrenComponent } from './components/horizontal-menu-item-with-children.component'
import { MenuItemComponent } from './components/horizontal-menu-item.component'
import { basePath, credits } from '@/app/store'

@Component({
  selector: 'horizontal-app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    NgbDropdownModule,
    MenuItemWithChildrenComponent,
    MenuItemComponent,
  ],
  templateUrl: './horizontal-app-menu.component.html',
  styles: `
    :host(horizontal-app-menu) {
      display: contents;
    }
  `,
})
export class HorizontalAppMenuComponent implements OnInit {
  @Input() showExtraPages?: boolean
  @Input() showContactPages?: boolean
  @Input() startBookingMenu?: boolean
  @Input() menuClassName?: string
  @Input() menuItems!: MenuItemType[]

  constructor(private router: Router) {}
  credits = credits
  activeMenuItems?: string[]
  bookingHomeMenuItems = bookingHomeMenuItems
  trimmedURL = this.router.url?.replaceAll(
    basePath !== '' ? basePath + '/' : '',
    '/'
  )
  matchingMenuItem: MenuItemType | undefined

  ngOnInit(): void {
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
