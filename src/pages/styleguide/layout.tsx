import { NavLink, Outlet } from "react-router-dom"
import { styleguideNav } from "./navigation"
import { cn } from "@/lib/utils"

export function StyleguideLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card p-6 overflow-y-auto sticky top-0 h-screen shrink-0">
        <NavLink to="/styleguide" className="block mb-6">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Design System
          </h2>
        </NavLink>

        <nav className="space-y-6">
          {styleguideNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                {section.title}
              </h3>
              {section.items.length > 0 && (
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        to={item.href}
                        end={item.href === "/styleguide"}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-md px-3 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
