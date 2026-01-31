
export interface DropdownItem {
  name: string
  id: string
}

export interface SimpleNavItem {
  type: 'link'
  label: string
  href: string
}

export interface DropdownNavItem {
  type: 'dropdown'
  label: string
  basePath: string
  items: DropdownItem[]
  itemType?: 'pages' | 'anchors'
}

export type NavItem = SimpleNavItem | DropdownNavItem

export interface HeaderNavConfig {
  items: NavItem[]
}

// Header navigation configuration

export const headerNavConfig: HeaderNavConfig = {
  items: [
    {
      type: 'link',
      label: 'Home',
      href: '/'
    },
    {
      type: 'link',
      label: 'About',
      href: '/about'
    },
    {
      type: 'link',
      label: 'Buying',
      href: '/buying'
    },
    {
      type: 'link',
      label: 'Selling',
      href: '/selling'
    },
    {
      type: 'link',
      label: 'Listings',
      href: '/listings'
    },
    {
      type: 'link',
      label: 'How-To Guides',
      href: '/how-to'
    },
    {
      type: 'link',
      label: 'VIP Investor List',
      href: '/vip-investor-list'
    }
  ]
}

/**
 * Converts a label to a consistent expand menu key
 * E.g., "About Us" -> "about-us"
 */
export const getExpandMenuKey = (label: string): string =>
  label.toLowerCase().replace(/\s+/g, '-')
