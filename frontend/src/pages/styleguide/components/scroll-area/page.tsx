import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

/* ─── Sample data ─────────────────────────────────────── */

const notifications = [
  { id: 1, title: "New appointment scheduled", description: "Anna Brown — Cardiology, tomorrow at 10:00 AM", time: "2 min ago" },
  { id: 2, title: "Lab results available", description: "Blood work for Mark Chen is ready for review", time: "15 min ago" },
  { id: 3, title: "Prescription renewal", description: "James Lee requested renewal for Lisinopril 10mg", time: "30 min ago" },
  { id: 4, title: "Patient check-in", description: "Sara Wilson checked in for her 2:00 PM appointment", time: "45 min ago" },
  { id: 5, title: "Referral received", description: "Dr. Jane Amine referred David Park for orthopedic consultation", time: "1 hr ago" },
  { id: 6, title: "Insurance verification", description: "Pre-authorization approved for Emily Davis — MRI Scan", time: "1 hr ago" },
  { id: 7, title: "Message from patient", description: "Lola Mariar sent a message about medication side effects", time: "2 hr ago" },
  { id: 8, title: "Billing update", description: "Invoice INV-004 payment received — $800.00", time: "2 hr ago" },
  { id: 9, title: "Schedule change", description: "Dr. Emily Boranda rescheduled Friday afternoon appointments", time: "3 hr ago" },
  { id: 10, title: "System maintenance", description: "EHR system maintenance scheduled for Sunday 2:00–4:00 AM", time: "4 hr ago" },
  { id: 11, title: "New patient registered", description: "Kevin Patel completed online registration form", time: "5 hr ago" },
  { id: 12, title: "Vaccination reminder", description: "Flu vaccination campaign starts next Monday", time: "6 hr ago" },
]

const medications = [
  "Lisinopril 10mg", "Metformin 500mg", "Atorvastatin 20mg", "Amoxicillin 250mg",
  "Omeprazole 20mg", "Amlodipine 5mg", "Losartan 50mg", "Metoprolol 25mg",
  "Sertraline 50mg", "Gabapentin 300mg", "Albuterol 90mcg", "Prednisone 10mg",
  "Levothyroxine 50mcg", "Ciprofloxacin 500mg", "Fluticasone 50mcg",
  "Ibuprofen 400mg", "Acetaminophen 500mg", "Hydrochlorothiazide 25mg",
]

const departments = [
  { name: "Cardiology", patients: 142, color: "bg-chart-1" },
  { name: "Neurology", patients: 98, color: "bg-chart-2" },
  { name: "Orthopedics", patients: 87, color: "bg-chart-3" },
  { name: "Pediatrics", patients: 115, color: "bg-chart-4" },
  { name: "Oncology", patients: 64, color: "bg-chart-5" },
  { name: "Dermatology", patients: 73, color: "bg-primary" },
  { name: "Gastroenterology", patients: 56, color: "bg-warning" },
  { name: "Pulmonology", patients: 48, color: "bg-success" },
]

const images = [
  { id: 1, label: "X-Ray — Chest PA", color: "bg-muted" },
  { id: 2, label: "MRI — Lumbar Spine", color: "bg-muted/70" },
  { id: 3, label: "CT Scan — Abdomen", color: "bg-muted" },
  { id: 4, label: "Ultrasound — Thyroid", color: "bg-muted/70" },
  { id: 5, label: "ECG — 12 Lead", color: "bg-muted" },
  { id: 6, label: "X-Ray — Left Knee", color: "bg-muted/70" },
  { id: 7, label: "MRI — Brain", color: "bg-muted" },
  { id: 8, label: "CT Scan — Chest", color: "bg-muted/70" },
]

/* ─── Main page ───────────────────────────────────────── */

export default function ScrollAreaShowcase() {
  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Scroll Area</h1>
        <p className="text-muted-foreground mt-1">
          A custom scrollable container with styled scrollbars that augments native scroll functionality.
        </p>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Basic Vertical */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Vertical Scroll</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Notifications</CardTitle>
            <CardDescription>A scrollable list of recent notifications.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72 rounded-lg border border-border">
              <div className="p-4 space-y-3">
                {notifications.map((n) => (
                  <div key={n.id} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                    <div className="size-2 mt-2 rounded-full bg-primary shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">{n.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{n.description}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Horizontal Scroll */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Horizontal Scroll</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Medical Images</CardTitle>
            <CardDescription>Scroll horizontally through diagnostic images.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full whitespace-nowrap rounded-lg border border-border">
              <div className="flex gap-4 p-4">
                {images.map((img) => (
                  <div key={img.id} className="shrink-0">
                    <div className={`${img.color} rounded-lg w-40 h-28 flex items-center justify-center`}>
                      <span className="text-xs text-muted-foreground font-mono">IMG-{String(img.id).padStart(3, "0")}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">{img.label}</p>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Tag/Pill List */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Scrollable Tags</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Medication List</CardTitle>
            <CardDescription>Horizontally scrollable list of medication badges.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-2 pb-2">
                {medications.map((med) => (
                  <Badge key={med} variant="secondary" className="shrink-0">
                    {med}
                  </Badge>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Fixed Height List */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Department Overview</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Active Departments</CardTitle>
            <CardDescription>Compact scrollable list with data.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48 rounded-lg border border-border">
              <div className="p-3 space-y-2">
                {departments.map((dept) => (
                  <div key={dept.name} className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`size-3 rounded-full ${dept.color}`} />
                      <span className="text-sm font-medium">{dept.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground tabular-nums">{dept.patients} patients</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Both Directions */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Both Directions</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Scrollable Grid</CardTitle>
            <CardDescription>Content that overflows both vertically and horizontally.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48 w-full rounded-lg border border-border">
              <div className="p-4" style={{ width: "800px" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-6 font-medium whitespace-nowrap">Department</th>
                      <th className="text-left py-2 pr-6 font-medium whitespace-nowrap">Head Doctor</th>
                      <th className="text-left py-2 pr-6 font-medium whitespace-nowrap">Patients</th>
                      <th className="text-left py-2 pr-6 font-medium whitespace-nowrap">Avg Wait Time</th>
                      <th className="text-left py-2 pr-6 font-medium whitespace-nowrap">Satisfaction</th>
                      <th className="text-left py-2 font-medium whitespace-nowrap">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {departments.map((dept, i) => (
                      <tr key={dept.name} className="border-b border-border last:border-0">
                        <td className="py-2 pr-6 font-medium text-foreground whitespace-nowrap">{dept.name}</td>
                        <td className="py-2 pr-6 whitespace-nowrap">Dr. {["Boranda", "Amine", "Chen", "Wilson", "Lee", "Garcia", "Kim", "Davis"][i]}</td>
                        <td className="py-2 pr-6 tabular-nums">{dept.patients}</td>
                        <td className="py-2 pr-6 whitespace-nowrap">{12 + i * 3} min</td>
                        <td className="py-2 pr-6">{(92 - i * 2)}%</td>
                        <td className="py-2">
                          <Badge variant="secondary" className="text-xs">{i < 5 ? "Active" : "Limited"}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Usage */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Usage</h2>
        <Card>
          <CardContent className="pt-6">
            <pre className="bg-muted/50 rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`// Vertical scroll (default)
<ScrollArea className="h-72">
  <div className="p-4">
    {items.map(item => <div key={item.id}>...</div>)}
  </div>
</ScrollArea>

// Horizontal scroll
<ScrollArea className="w-full whitespace-nowrap">
  <div className="flex gap-4 p-4">
    {items.map(item => <div key={item.id} className="shrink-0">...</div>)}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>

// Both directions
<ScrollArea className="h-72 w-full">
  <div style={{ width: "150%" }}>
    {/* wide + tall content */}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Sub-components */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Sub-components</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium">Component</th>
                    <th className="text-left py-2 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">ScrollArea</td>
                    <td className="py-2">Root container. Set a fixed height or width to enable scrolling. Includes a vertical ScrollBar by default.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">ScrollBar</td>
                    <td className="py-2">Custom scrollbar track + thumb. Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">orientation="horizontal"</code> for horizontal scrolling. Add explicitly when horizontal scroll is needed.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Props */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Props</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium">Prop</th>
                    <th className="text-left py-2 pr-4 font-medium">Type</th>
                    <th className="text-left py-2 pr-4 font-medium">Default</th>
                    <th className="text-left py-2 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">className</td>
                    <td className="py-2 pr-4 font-mono">string</td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2">CSS classes for the root. Set height/width here to constrain the scroll area.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">type</td>
                    <td className="py-2 pr-4 font-mono">"auto" | "always" | "scroll" | "hover"</td>
                    <td className="py-2 pr-4">"hover"</td>
                    <td className="py-2">When scrollbars are visible.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">orientation</td>
                    <td className="py-2 pr-4 font-mono">"vertical" | "horizontal"</td>
                    <td className="py-2 pr-4">"vertical"</td>
                    <td className="py-2">ScrollBar direction.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">scrollHideDelay</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4">600</td>
                    <td className="py-2">Delay in ms before hiding scrollbar after scrolling stops.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Accessibility */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Accessibility</h2>
        <Card>
          <CardContent className="pt-6 space-y-2 text-sm text-muted-foreground">
            <ul className="list-disc list-inside space-y-1">
              <li>Built on Radix UI ScrollArea — augments native scroll, doesn't replace it</li>
              <li>Keyboard scrolling works naturally (arrow keys, Page Up/Down, Home/End)</li>
              <li>Touch scrolling fully supported on mobile devices</li>
              <li>Viewport has <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">focus-visible</code> ring for keyboard navigation</li>
              <li>Custom scrollbar thumb has sufficient contrast against the track</li>
              <li>Content within the scroll area remains accessible to screen readers</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
