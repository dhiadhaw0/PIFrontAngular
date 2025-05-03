type IconType = `fa-solid fa-${string}` | `bi bi-${string}`

export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  isSection?: boolean
  isCollapsed?: boolean
  url?: string
  target?: any
  children?: MenuItemType[]
  parentKey?: string
  icon?: IconType
}
