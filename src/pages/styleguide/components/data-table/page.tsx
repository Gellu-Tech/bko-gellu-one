import { type ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"

/* ─── Types ───────────────────────────────────────────── */

type Patient = {
  id: string
  name: string
  age: number
  email: string
  condition: string
  doctor: string
  status: "Active" | "Discharged" | "Scheduled" | "Critical"
  lastVisit: string
}

type Medication = {
  id: string
  name: string
  dosage: string
  frequency: string
  prescribedBy: string
  startDate: string
  status: "Active" | "Completed" | "Paused"
}

/* ─── Sample data ─────────────────────────────────────── */

const patients: Patient[] = [
  { id: "PAT-001", name: "Anna Brown", age: 34, email: "anna.brown@email.com", condition: "Hypertension", doctor: "Dr. Emily Boranda", status: "Active", lastVisit: "2024-01-15" },
  { id: "PAT-002", name: "Lola Mariar", age: 28, email: "lola.mariar@email.com", condition: "Diabetes Type 2", doctor: "Dr. Jane Amine", status: "Active", lastVisit: "2024-01-12" },
  { id: "PAT-003", name: "Mark Chen", age: 45, email: "mark.chen@email.com", condition: "Post-surgery", doctor: "Dr. Emily Boranda", status: "Discharged", lastVisit: "2024-01-10" },
  { id: "PAT-004", name: "Sara Wilson", age: 52, email: "sara.wilson@email.com", condition: "Cardiac Arrhythmia", doctor: "Dr. Jane Amine", status: "Critical", lastVisit: "2024-01-18" },
  { id: "PAT-005", name: "James Lee", age: 67, email: "james.lee@email.com", condition: "COPD", doctor: "Dr. Emily Boranda", status: "Active", lastVisit: "2024-01-14" },
  { id: "PAT-006", name: "Maria Garcia", age: 41, email: "maria.garcia@email.com", condition: "Migraine", doctor: "Dr. Jane Amine", status: "Scheduled", lastVisit: "2024-01-08" },
  { id: "PAT-007", name: "Robert Kim", age: 55, email: "robert.kim@email.com", condition: "Back Pain", doctor: "Dr. Emily Boranda", status: "Active", lastVisit: "2024-01-16" },
  { id: "PAT-008", name: "Emily Davis", age: 30, email: "emily.davis@email.com", condition: "Anxiety", doctor: "Dr. Jane Amine", status: "Active", lastVisit: "2024-01-17" },
  { id: "PAT-009", name: "David Park", age: 62, email: "david.park@email.com", condition: "Knee Replacement", doctor: "Dr. Emily Boranda", status: "Discharged", lastVisit: "2024-01-05" },
  { id: "PAT-010", name: "Lisa Thompson", age: 38, email: "lisa.thompson@email.com", condition: "Asthma", doctor: "Dr. Jane Amine", status: "Scheduled", lastVisit: "2024-01-11" },
  { id: "PAT-011", name: "Kevin Patel", age: 49, email: "kevin.patel@email.com", condition: "Cholesterol", doctor: "Dr. Emily Boranda", status: "Active", lastVisit: "2024-01-13" },
  { id: "PAT-012", name: "Rachel Adams", age: 26, email: "rachel.adams@email.com", condition: "Dermatitis", doctor: "Dr. Jane Amine", status: "Discharged", lastVisit: "2024-01-09" },
]

const medications: Medication[] = [
  { id: "MED-001", name: "Lisinopril", dosage: "10mg", frequency: "Once daily", prescribedBy: "Dr. Emily Boranda", startDate: "2023-06-15", status: "Active" },
  { id: "MED-002", name: "Metformin", dosage: "500mg", frequency: "Twice daily", prescribedBy: "Dr. Jane Amine", startDate: "2023-08-20", status: "Active" },
  { id: "MED-003", name: "Amoxicillin", dosage: "250mg", frequency: "3x daily", prescribedBy: "Dr. Emily Boranda", startDate: "2024-01-05", status: "Completed" },
  { id: "MED-004", name: "Atorvastatin", dosage: "20mg", frequency: "Once daily", prescribedBy: "Dr. Jane Amine", startDate: "2023-03-10", status: "Active" },
  { id: "MED-005", name: "Albuterol", dosage: "90mcg", frequency: "As needed", prescribedBy: "Dr. Emily Boranda", startDate: "2023-11-01", status: "Paused" },
]

/* ─── Status badges ───────────────────────────────────── */

function PatientStatusBadge({ status }: { status: Patient["status"] }) {
  switch (status) {
    case "Active":
      return <Badge className="bg-success text-success-foreground hover:bg-success/80">{status}</Badge>
    case "Critical":
      return <Badge variant="destructive">{status}</Badge>
    case "Discharged":
      return <Badge variant="secondary">{status}</Badge>
    case "Scheduled":
      return <Badge className="bg-info text-info-foreground hover:bg-info/80">{status}</Badge>
  }
}

function MedStatusBadge({ status }: { status: Medication["status"] }) {
  switch (status) {
    case "Active":
      return <Badge className="bg-success text-success-foreground hover:bg-success/80">{status}</Badge>
    case "Completed":
      return <Badge variant="secondary">{status}</Badge>
    case "Paused":
      return <Badge className="bg-warning text-warning-foreground hover:bg-warning/80">{status}</Badge>
  }
}

/* ─── Column definitions ──────────────────────────────── */

const patientColumns: ColumnDef<Patient>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <span className="font-mono text-muted-foreground">{row.getValue("id")}</span>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 h-8"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Patient
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 h-8"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Age
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
  {
    accessorKey: "doctor",
    header: "Doctor",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <PatientStatusBadge status={row.getValue("status")} />,
  },
  {
    accessorKey: "lastVisit",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 h-8"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Last Visit
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    cell: () => (
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    ),
  },
]

const searchableColumns: ColumnDef<Patient>[] = [
  {
    accessorKey: "name",
    header: "Patient",
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("email")}</span>
    ),
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
  {
    accessorKey: "doctor",
    header: "Doctor",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <PatientStatusBadge status={row.getValue("status")} />,
  },
]

const medicationColumns: ColumnDef<Medication>[] = [
  {
    accessorKey: "name",
    header: "Medication",
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "dosage",
    header: "Dosage",
    cell: ({ row }) => (
      <span className="font-mono">{row.getValue("dosage")}</span>
    ),
  },
  {
    accessorKey: "frequency",
    header: "Frequency",
  },
  {
    accessorKey: "prescribedBy",
    header: "Prescribed By",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <MedStatusBadge status={row.getValue("status")} />,
  },
]

/* ─── Main page ───────────────────────────────────────── */

export default function DataTableShowcase() {
  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Data Table</h1>
        <p className="text-muted-foreground mt-1">
          A powerful data table with sorting, filtering, pagination, and row selection — built on TanStack Table.
        </p>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import { DataTable } from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Basic with Sorting */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Sortable Table</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Patient Records</CardTitle>
            <CardDescription>
              Click column headers to sort. Supports ascending and descending order.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={patientColumns} data={patients} pageSize={5} />
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* With Search */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">With Search</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Searchable Patient List</CardTitle>
            <CardDescription>
              Filter rows by typing in the search field. Searches the "name" column.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={searchableColumns}
              data={patients}
              searchKey="name"
              searchPlaceholder="Search patients..."
              pageSize={5}
            />
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Compact Table */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Medication Tracking</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Active Medications</CardTitle>
            <CardDescription>
              Smaller dataset without pagination needed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={medicationColumns}
              data={medications}
              pageSize={10}
            />
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
{`// 1. Define your columns
const columns: ColumnDef<YourType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Badge>{row.getValue("status")}</Badge>,
  },
]

// 2. Use the DataTable component
<DataTable
  columns={columns}
  data={yourData}
  searchKey="name"              // optional: enable search
  searchPlaceholder="Search..."  // optional: custom placeholder
  pageSize={10}                  // optional: rows per page (default: 10)
/>`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Column Features */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Column Features</h2>
        <Card>
          <CardContent className="pt-6">
            <pre className="bg-muted/50 rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`// Sortable column header
{
  accessorKey: "name",
  header: ({ column }) => (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Name
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  ),
}

// Custom cell renderer
{
  accessorKey: "status",
  header: "Status",
  cell: ({ row }) => (
    <Badge variant={row.getValue("status") === "Active" ? "default" : "secondary"}>
      {row.getValue("status")}
    </Badge>
  ),
}

// Action column (no accessorKey)
{
  id: "actions",
  cell: ({ row }) => (
    <DropdownMenu>...</DropdownMenu>
  ),
}`}
            </pre>
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
                    <td className="py-2 pr-4 font-mono text-foreground">columns</td>
                    <td className="py-2 pr-4 font-mono">ColumnDef[]</td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2">TanStack Table column definitions.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">data</td>
                    <td className="py-2 pr-4 font-mono">TData[]</td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2">Array of data to display.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">searchKey</td>
                    <td className="py-2 pr-4 font-mono">string</td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2">Column key to filter on. Enables the search input.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">searchPlaceholder</td>
                    <td className="py-2 pr-4 font-mono">string</td>
                    <td className="py-2 pr-4">"Search..."</td>
                    <td className="py-2">Placeholder text for the search input.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">pageSize</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4">10</td>
                    <td className="py-2">Number of rows per page.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">className</td>
                    <td className="py-2 pr-4 font-mono">string</td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2">Additional CSS classes for the wrapper.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Built-in Features */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Built-in Features</h2>
        <Card>
          <CardContent className="pt-6 space-y-2 text-sm text-muted-foreground">
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Sorting</strong> — Click column headers with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">ArrowUpDown</code> icons to sort ascending/descending</li>
              <li><strong className="text-foreground">Filtering</strong> — Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">searchKey</code> to enable per-column text search</li>
              <li><strong className="text-foreground">Pagination</strong> — Automatic pagination with Previous/Next controls and page indicator</li>
              <li><strong className="text-foreground">Row Selection</strong> — Built-in row selection state (add a checkbox column to expose it)</li>
              <li><strong className="text-foreground">Column Visibility</strong> — Programmatic column show/hide support</li>
              <li><strong className="text-foreground">Custom Cells</strong> — Render any React component inside cells via the <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">cell</code> property</li>
            </ul>
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
              <li>Built on native HTML <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;table&gt;</code> elements for semantic structure</li>
              <li>Sort buttons are keyboard-accessible with clear focus indicators</li>
              <li>Pagination buttons include <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">disabled</code> state when at first/last page</li>
              <li>Search input is focusable and provides immediate filtering feedback</li>
              <li>Selected rows use <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">data-state="selected"</code> for styling hooks</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
