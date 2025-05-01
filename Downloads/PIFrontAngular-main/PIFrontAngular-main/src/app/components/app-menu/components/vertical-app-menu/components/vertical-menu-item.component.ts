import { Component, Input } from '@angular/core'
import type { MenuItemType } from 'src/app/core/models'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'vertical-menu-item',
  standalone: true,
  imports: [RouterLink],
  styles: `
    :host(vertical-menu-item) {
      display: contents;
    }
  `,
  template: `
    <li [class]="itemClassName">
      <a
        [routerLink]="item.url ?? ''"
        [target]="item.target ?? '_self'"
        [class]="linkClassName"
      >
        {{ item.label }}
      </a>
    </li>
  `,
})
export class MenuItemComponent {
  @Input() item!: MenuItemType
  @Input() linkClassName?: string
  @Input() itemClassName?: string
}
