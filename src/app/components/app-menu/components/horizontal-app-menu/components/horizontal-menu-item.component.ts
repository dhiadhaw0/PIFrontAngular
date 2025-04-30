import { Component, Input } from '@angular/core'
import type { MenuItemType } from 'src/app/core/models'
import { MenuItemLinkComponent } from './horizontal-menu-item-link.component'

@Component({
  selector: 'horizontal-menu-item',
  standalone: true,
  imports: [MenuItemLinkComponent],
  styles: `
    :host(horizontal-menu-item) {
      display: contents;
    }
  `,
  template: `
    <li>
      <horizontal-menu-item-link
        [item]="item"
        [linkClassName]="linkClassName ?? ''"
      ></horizontal-menu-item-link>
    </li>
  `,
})
export class MenuItemComponent {
  @Input() item!: MenuItemType
  @Input() linkClassName?: string
  @Input() level!: number
}
