import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import type { MenuItemType } from 'src/app/core/models'
import { MenuItemComponent } from './horizontal-menu-item.component'

@Component({
  selector: 'horizontal-menu-item-with-children',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, NgbDropdownModule],
  styles: `
    :host(horizontal-menu-item-with-children) {
      display: contents;
    }
  `,
  template: `
    <li ngbDropdown class="{{ itemClassName }}">
      <a
        ngbDropdownToggle
        class="{{ linkClassName }}"
        href="javascript:void(0)"
        [id]="item.key + '-menu-link'"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ item.label }}
        <i
          class="fa-solid fa-angle-down"
          style="font-size: small;"
          *ngIf="this.level === 1; else elseTemplate"
        ></i>
        <ng-template #elseTemplate>
          <i class="fa-solid fa-ellipsis"></i>
        </ng-template>
      </a>
      <ul
        ngbDropdownMenu
        [attr.aria-labelledby]="item.key + '-menu-link'"
        data-bs-popper="none"
        [class]="'dropdown-menu' + (level > 1 && ' top-0')"
      >
        @for (child of item.children; track $index) {
          @if (child.children) {
            <horizontal-menu-item-with-children
              [item]="child"
              [level]="level + 1"
              [activeMenuItems]="activeMenuItems"
              [itemClassName]="'dropdown-submenu dropend'"
              [linkClassName]="
                ' dropdown-item dropdown-toggle arrow-none d-flex align-items-center justify-content-between' +
                getActiveClass(child)
              "
            />
          } @else {
            <horizontal-menu-item
              [item]="child"
              [level]="level + 1"
              [linkClassName]="'dropdown-item' + getActiveClass(child)"
            />
          }
        }
      </ul>
    </li>
  `,
})
export class MenuItemWithChildrenComponent {
  @Input() item!: MenuItemType
  @Input() activeMenuItems?: string[]
  @Input() itemClassName?: string
  @Input() linkClassName?: string
  @Input() level!: number

  getActiveClass(item: MenuItemType) {
    return this.activeMenuItems && this.activeMenuItems.includes(item.key)
      ? ' active'
      : ''
  }
}
