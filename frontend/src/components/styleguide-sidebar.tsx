import {
  Blocks,
  CalendarDays,
  ChartColumn,
  ChevronRight,
  LayoutPanelLeft,
  type LucideIcon,
  Rows3,
  SlidersHorizontal,
  SquareMousePointer,
  SwatchBook,
  Table2,
  TextCursorInput,
  ToggleLeft,
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { styleguideNav } from "@/pages/styleguide/navigation"

const itemIcons: Record<string, LucideIcon> = {
  "Design Tokens": SwatchBook,
  Slider: SlidersHorizontal,
  Table: Table2,
  Textarea: TextCursorInput,
  Item: Rows3,
  "Data Table": Table2,
  Switch: ToggleLeft,
  Tooltip: SquareMousePointer,
  Calendar: CalendarDays,
  Chart: ChartColumn,
  Sidebar: LayoutPanelLeft,
}

function isActivePath(pathname: string, href: string) {
  return href === "/styleguide"
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`)
}

export function StyleguideSidebar() {
  const { pathname } = useLocation()
  const menuButtonClassName =
    "justify-start rounded-md px-3 transition-none group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:justify-start group-data-[collapsible=icon]:px-3! group-data-[collapsible=icon]:[&>span]:hidden"

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className="relative gap-3 px-4 py-4 group-data-[collapsible=icon]:px-2">
        <SidebarTrigger className="absolute top-[3.5rem] right-[-0.6rem] z-20 translate-x-1/2 rounded-md border border-sidebar-border bg-background text-sidebar-foreground opacity-0 shadow-sm pointer-events-none transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100" />

        <NavLink
          to="/styleguide"
          className="flex w-full items-center gap-5  overflow-hidden rounded-xl group-data-[collapsible=icon]:justify-center"
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground shadow-sm">
            <Blocks className="size-4" />
          </div>

          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-semibold">Design System</p>
            <p className="truncate text-xs text-sidebar-foreground/70">
              Tokens and components
            </p>
          </div>
        </NavLink>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="px-2 py-3">
        {styleguideNav.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const Icon = itemIcons[item.title] ?? ChevronRight

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActivePath(pathname, item.href)}
                        className={menuButtonClassName}
                        tooltip={item.title}
                      >
                        <NavLink to={item.href}>
                          <Icon className="size-4 shrink-0" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
