import { ADMIN_MENU_ITEMS, APP_MENU_ITEMS } from 'src/assets/data'
import type { MenuItemType } from '../core/models'

export const getMenuItems = (): MenuItemType[] => {
  return APP_MENU_ITEMS
}

export const getAdminMenuItems = (): MenuItemType[] => {
  return ADMIN_MENU_ITEMS
}

export const getMenuItemFromURL = (
  items: MenuItemType | MenuItemType[],
  url: string
): MenuItemType | undefined => {
  if (items instanceof Array) {
    for (const item of items) {
      const foundItem = getMenuItemFromURL(item, url)
      if (foundItem) {
        return foundItem
      }
    }
    return undefined
  } else {
    if (items.url == url) return items
    if (items.children != null) {
      return getMenuItemFromURL(items.children, url)
    }
    return undefined
  }
}

export const findAllParent = (
  menuItems: MenuItemType[],
  menuItem: MenuItemType
): string[] => {
  let parents: string[] = []
  const parent = findMenuItem(menuItems, menuItem.parentKey)
  if (parent) {
    parents.push(parent.key)
    if (parent.parentKey) {
      parents = [...parents, ...findAllParent(menuItems, parent)]
    }
  }
  parents.push(menuItem.key)
  return parents
}

export const findMenuItem = (
  menuItems: MenuItemType[] | undefined,
  menuItemKey: MenuItemType['key'] | undefined
): MenuItemType | null => {
  if (menuItems && menuItemKey) {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i]
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey)
      if (found) return found
    }
  }
  return null
}
