import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { getMenuItems } from 'src/app/helpers/menu'
import { HorizontalAppMenuComponent } from './components/horizontal-app-menu/horizontal-app-menu.component'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, HorizontalAppMenuComponent],
  template: `<horizontal-app-menu
    [menuItems]="menuItems"
    [showExtraPages]="showExtraPages"
    [showContactPages]="showContactPages"
    [startBookingMenu]="startBookingMenu"
    [menuClassName]="menuClassName"
  ></horizontal-app-menu>`,
  styles: `
    :host(app-menu) {
      display: contents;
    }
  `,
})
export class AppMenuComponent {
  @Input() showExtraPages?: boolean
  @Input() showContactPages?: boolean
  @Input() startBookingMenu?: boolean
  @Input() menuClassName?: string

  menuItems = getMenuItems()
}
