export interface NavItem {
  title: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const styleguideNav: NavSection[] = [
  {
    title: "Foundation",
    items: [
      { title: "Design Tokens", href: "/styleguide" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Slider", href: "/styleguide/components/slider" },
      { title: "Sidebar", href: "/styleguide/components/sidebar" },
      { title: "Table", href: "/styleguide/components/table" },
      { title: "Textarea", href: "/styleguide/components/textarea" },
      { title: "Item", href: "/styleguide/components/item" },
      { title: "Data Table", href: "/styleguide/components/data-table" },
      { title: "Switch", href: "/styleguide/components/switch" },
      { title: "Tooltip", href: "/styleguide/components/tooltip" },
      { title: "Calendar", href: "/styleguide/components/calendar" },
      { title: "Chart", href: "/styleguide/components/chart" },
    ],
  },
]
