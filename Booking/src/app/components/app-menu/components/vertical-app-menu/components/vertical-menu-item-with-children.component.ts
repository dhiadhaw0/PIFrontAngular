import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'
import type { MenuItemType } from 'src/app/core/models'
import { MenuItemComponent } from './vertical-menu-item.component'

@Component({
  selector: 'vertical-menu-item-with-children',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, NgbCollapseModule],
  styles: `
    :host(vertical-menu-item-with-children) {
      display: contents;
    }
  `,
  template: `
    <li class="{{ itemClassName }}">
      <a
        class="{{ linkClassName }}"
        data-bs-toggle="collapse"
        role="button"
        href="javascript:void(0)"
        [id]="item.key + '-menu-link'"
        aria-haspopup="true"
        [attr.aria-expanded]="!isCollapsed"
        (click)="isCollapsed = !isCollapsed"
      >
        {{ item.label }}
      </a>

      <ul [(ngbCollapse)]="isCollapsed" class="nav flex-column">
        @for (child of item.children; track $index) {
          @if (child.children) {
            <vertical-menu-item-with-children
              [item]="child"
              [activeMenuItems]="activeMenuItems"
              [itemClassName]="itemClassName"
              [linkClassName]="'nav-link' + getActiveClass(child)"
            />
          } @else {
            <vertical-menu-item
              [item]="child"
              [itemClassName]="'nav-item'"
              [linkClassName]="'nav-link' + getActiveClass(child)"
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

  isCollapsed = true

  getActiveClass(item: MenuItemType) {
    return this.activeMenuItems && this.activeMenuItems.includes(item.key)
      ? ' active'
      : ''
  }
}
