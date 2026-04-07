import { useState } from "react"
import {
  Bell,
  BookOpen,
  CalendarDays,
  CreditCard,
  LayoutPanelLeft,
  Moon,
  Settings2,
  Sparkles,
  Sun,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark")
}

type SidebarVariant = "sidebar" | "floating" | "inset"
type SidebarCollapsible = "offcanvas" | "icon" | "none"

const demoItems = [
  { name: "Overview", icon: LayoutPanelLeft, active: true, badge: "3" },
  { name: "Patients", icon: Users },
  { name: "Schedule", icon: CalendarDays },
  { name: "Billing", icon: CreditCard },
  { name: "Insights", icon: Sparkles, badge: "New" },
  { name: "Resources", icon: BookOpen },
  { name: "Alerts", icon: Bell, badge: "12" },
  { name: "Settings", icon: Settings2 },
]

function SidebarPreview({
  variant,
  collapsible,
  open,
  onOpenChange,
}: {
  variant: SidebarVariant
  collapsible: SidebarCollapsible
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <div className="sidebar-preview relative overflow-hidden rounded-xl border border-border bg-card">
      <SidebarProvider
        open={open}
        onOpenChange={onOpenChange}
        className="min-h-[30rem]"
      >
        <Sidebar variant={variant} collapsible={collapsible}>
          <SidebarHeader className="gap-3 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
                <LayoutPanelLeft className="size-4" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Clinic Ops</p>
                <p className="truncate text-xs text-sidebar-foreground/70">
                  Care team workspace
                </p>
              </div>
            </div>
            <SidebarInput placeholder="Search records" />
          </SidebarHeader>

          <SidebarSeparator />

          <SidebarContent className="px-2 py-3">
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {demoItems.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        isActive={item.active}
                        tooltip={item.name}
                      >
                        <item.icon className="size-4" />
                        <span>{item.name}</span>
                      </SidebarMenuButton>
                      {item.badge ? (
                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                      ) : null}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarSeparator />

          <SidebarFooter className="px-4 py-4">
            <div className="rounded-xl border border-sidebar-border bg-sidebar-accent/70 px-3 py-3 group-data-[collapsible=icon]:hidden">
              <p className="text-sm font-medium text-sidebar-foreground">
                Sidebar notes
              </p>
              <p className="mt-1 text-xs text-sidebar-foreground/70">
                Use icon collapse for dense dashboards and off-canvas on mobile.
              </p>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="min-h-[30rem]">
          <div className="flex h-14 items-center gap-3 border-b border-border px-4">
            <SidebarTrigger />
            <div>
              <p className="text-sm font-semibold">Patient Overview</p>
              <p className="text-xs text-muted-foreground">
                Previewing the sidebar inside the styleguide
              </p>
            </div>
          </div>

          <div className="grid flex-1 gap-4 p-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Current configuration</CardTitle>
                <CardDescription>
                  This preview is controlled by the buttons above.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Variant</span>
                  <Badge variant="secondary">{variant}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Collapsible</span>
                  <Badge variant="secondary">{collapsible}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>State</span>
                  <Badge variant={open ? "default" : "outline"}>
                    {open ? "expanded" : "collapsed"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recommended usage</CardTitle>
                <CardDescription>
                  Best fit for navigational side rails and app-level shell layouts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Use `variant=&quot;inset&quot;` when the content area should feel elevated.</p>
                <p>Use `collapsible=&quot;icon&quot;` when users need a compact desktop mode.</p>
                <p>Keep the most important destinations at the top of the first group.</p>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

function PropsTable() {
  const rows = [
    {
      name: "variant",
      type: `"sidebar" | "floating" | "inset"`,
      defaultValue: `"sidebar"`,
      description: "Controls the desktop presentation style.",
    },
    {
      name: "collapsible",
      type: `"offcanvas" | "icon" | "none"`,
      defaultValue: `"offcanvas"`,
      description: "Defines how the sidebar behaves when collapsed.",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      defaultValue: "true",
      description: "Initial uncontrolled open state for the provider.",
    },
    {
      name: "open",
      type: "boolean",
      defaultValue: "undefined",
      description: "Controlled open state when you manage it externally.",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      defaultValue: "undefined",
      description: "Callback fired when the sidebar is toggled.",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2 pr-4 text-left font-medium">Prop</th>
            <th className="py-2 pr-4 text-left font-medium">Type</th>
            <th className="py-2 pr-4 text-left font-medium">Default</th>
            <th className="py-2 text-left font-medium">Description</th>
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-border last:border-b-0">
              <td className="py-2 pr-4 font-mono text-foreground">{row.name}</td>
              <td className="py-2 pr-4 font-mono">{row.type}</td>
              <td className="py-2 pr-4 font-mono">{row.defaultValue}</td>
              <td className="py-2">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SidebarShowcase() {
  const [variant, setVariant] = useState<SidebarVariant>("inset")
  const [collapsible, setCollapsible] = useState<SidebarCollapsible>("icon")
  const [open, setOpen] = useState(true)

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Sidebar</h1>
          <p className="mt-1 text-muted-foreground">
            App-shell navigation built with the official shadcn/ui sidebar primitive.
          </p>
        </div>

        <Button variant="outline" size="sm" onClick={toggleDarkMode}>
          <Sun className="size-4 dark:hidden" />
          <Moon className="hidden size-4 dark:block" />
          <span className="ml-1">Toggle theme</span>
        </Button>
      </div>

      <hr className="border-border" />

      <div>
        <h2 className="mb-3 text-2xl font-semibold">Import</h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-card p-4 text-sm font-mono">
{`import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"`}
        </pre>
      </div>

      <hr className="border-border" />

      <div className="space-y-4">
        <div>
          <h2 className="mb-3 text-2xl font-semibold">Interactive demo</h2>
          <p className="text-sm text-muted-foreground">
            Try the supported variants and collapse modes used by the generated component.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className="flex flex-wrap gap-2">
              {(["sidebar", "floating", "inset"] as SidebarVariant[]).map((value) => (
                <Button
                  key={value}
                  variant={variant === value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setVariant(value)}
                >
                  {value}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {(["offcanvas", "icon", "none"] as SidebarCollapsible[]).map((value) => (
                <Button
                  key={value}
                  variant={collapsible === value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCollapsible(value)}
                >
                  {value}
                </Button>
              ))}

              <Button variant="secondary" size="sm" onClick={() => setOpen((current) => !current)}>
                {open ? "Collapse" : "Expand"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <SidebarPreview
          variant={variant}
          collapsible={collapsible}
          open={open}
          onOpenChange={setOpen}
        />
      </div>

      <hr className="border-border" />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Basic usage</CardTitle>
            <CardDescription>
              Minimal shell for page-level navigation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-lg bg-muted/50 p-4 text-sm font-mono">
{`<SidebarProvider>
  <Sidebar variant="inset" collapsible="icon">
    <SidebarHeader />
    <SidebarContent />
    <SidebarFooter />
  </Sidebar>

  <SidebarInset>
    <header className="flex h-14 items-center border-b px-4">
      <SidebarTrigger />
    </header>
    <main>{children}</main>
  </SidebarInset>
</SidebarProvider>`}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available parts</CardTitle>
            <CardDescription>
              Most projects compose these pieces rather than wrapping the whole API.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p><code className="rounded bg-muted px-1.5 py-0.5 text-xs">SidebarProvider</code> manages open state and keyboard shortcut support.</p>
            <p><code className="rounded bg-muted px-1.5 py-0.5 text-xs">Sidebar</code> renders the navigation rail and mobile sheet.</p>
            <p><code className="rounded bg-muted px-1.5 py-0.5 text-xs">SidebarInset</code> wraps the main content area.</p>
            <p><code className="rounded bg-muted px-1.5 py-0.5 text-xs">SidebarMenuButton</code> gives you active, hover, and collapsed states out of the box.</p>
            <p><code className="rounded bg-muted px-1.5 py-0.5 text-xs">SidebarTrigger</code> toggles the state on desktop and mobile.</p>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      <div>
        <h2 className="mb-3 text-2xl font-semibold">Props</h2>
        <Card>
          <CardContent className="pt-6">
            <PropsTable />
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Variant examples</CardTitle>
            <CardDescription>
              Guidance for choosing the right shell.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p><span className="font-medium text-foreground">sidebar:</span> Best for classic dashboards with a flush left rail.</p>
            <p><span className="font-medium text-foreground">floating:</span> Adds padding and rounded edges for a softer panel look.</p>
            <p><span className="font-medium text-foreground">inset:</span> Keeps the sidebar separated while the content card sits inside the app canvas.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accessibility</CardTitle>
            <CardDescription>
              Important behavior inherited from the generated component.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>The provider adds keyboard toggle support with <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Ctrl/Cmd + B</code>.</p>
            <p>On mobile, the sidebar renders in a sheet with hidden descriptive title and description for assistive tech.</p>
            <p>Collapsed icon mode should always include icons plus tooltips so destinations remain understandable.</p>
            <p>Use semantic links or buttons inside <code className="rounded bg-muted px-1.5 py-0.5 text-xs">SidebarMenuButton</code> via <code className="rounded bg-muted px-1.5 py-0.5 text-xs">asChild</code>.</p>
          </CardContent>
        </Card>
      </div>

      <div className="h-16" />
    </div>
  )
}
