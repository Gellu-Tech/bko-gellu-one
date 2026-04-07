import type { CSSProperties } from "react"
import { Outlet } from "react-router-dom"

import { StyleguideSidebar } from "@/components/styleguide-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export function StyleguideLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width-icon": "4rem",
        } as CSSProperties
      }
    >
      <StyleguideSidebar />

      <SidebarInset>
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">Styleguide</p>
            <p className="truncate text-xs text-muted-foreground">
              shadcn/ui components aligned with the project design system
            </p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
