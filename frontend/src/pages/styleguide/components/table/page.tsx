import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/* ─── Sample data ──────────────────────────────────────── */

const appointments = [
  { id: "APT-001", patient: "Anna Brown", date: "13 July 2023", symptom: "Back pain", doctor: "Dr. Emily Boranda", status: "Confirmed" },
  { id: "APT-002", patient: "Lola Mariar", date: "16 Apr 2023", symptom: "Headache", doctor: "Dr. Jane Amine", status: "Confirmed" },
  { id: "APT-003", patient: "Mark Chen", date: "20 Apr 2023", symptom: "Follow-up", doctor: "Dr. Emily Boranda", status: "Pending" },
  { id: "APT-004", patient: "Sara Wilson", date: "22 Apr 2023", symptom: "Consultation", doctor: "Dr. Jane Amine", status: "Cancelled" },
  { id: "APT-005", patient: "James Lee", date: "25 Apr 2023", symptom: "Back pain", doctor: "Dr. Emily Boranda", status: "Confirmed" },
]

const invoices = [
  { id: "INV-001", description: "Consultation", amount: 100, status: "Paid" },
  { id: "INV-002", description: "X-Ray Scan", amount: 250, status: "Paid" },
  { id: "INV-003", description: "Blood Work", amount: 150, status: "Pending" },
  { id: "INV-004", description: "MRI Scan", amount: 800, status: "Overdue" },
  { id: "INV-005", description: "Follow-up", amount: 75, status: "Paid" },
]

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "Confirmed":
    case "Paid":
      return <Badge className="bg-success text-success-foreground hover:bg-success/80">{status}</Badge>
    case "Pending":
      return <Badge className="bg-warning text-warning-foreground hover:bg-warning/80">{status}</Badge>
    case "Cancelled":
    case "Overdue":
      return <Badge variant="destructive">{status}</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

/* ─── Main page ────────────────────────────────────────── */

export default function TableShowcase() {
  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0)

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Table</h1>
        <p className="text-muted-foreground mt-1">
          A responsive table component for displaying tabular data.
        </p>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import {
  Table, TableBody, TableCaption, TableCell,
  TableFooter, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Basic Table */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Basic Table</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Upcoming Appointments</CardTitle>
            <CardDescription>Patient appointment schedule overview.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Symptom</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((apt) => (
                  <TableRow key={apt.id}>
                    <TableCell className="font-mono text-muted-foreground">{apt.id}</TableCell>
                    <TableCell className="font-medium">{apt.patient}</TableCell>
                    <TableCell>{apt.date}</TableCell>
                    <TableCell>{apt.symptom}</TableCell>
                    <TableCell>{apt.doctor}</TableCell>
                    <TableCell className="text-right">
                      <StatusBadge status={apt.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Table with Footer & Caption */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">With Footer & Caption</h2>
        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableCaption>A list of recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-mono text-muted-foreground">{inv.id}</TableCell>
                    <TableCell className="font-medium">{inv.description}</TableCell>
                    <TableCell>
                      <StatusBadge status={inv.status} />
                    </TableCell>
                    <TableCell className="text-right font-mono">${inv.amount.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3} className="font-medium">Total</TableCell>
                  <TableCell className="text-right font-mono font-semibold">${totalAmount.toFixed(2)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Striped Variant */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Striped Rows</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Striped Table</CardTitle>
            <CardDescription>Alternating row backgrounds for easier scanning.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((apt, i) => (
                  <TableRow key={apt.id} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                    <TableCell className="font-medium">{apt.patient}</TableCell>
                    <TableCell>{apt.date}</TableCell>
                    <TableCell>{apt.doctor}</TableCell>
                    <TableCell className="text-right">
                      <StatusBadge status={apt.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
                    <th className="text-left py-2 pr-4 font-medium">Element</th>
                    <th className="text-left py-2 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">Table</td>
                    <td className="py-2 pr-4 font-mono">&lt;table&gt;</td>
                    <td className="py-2">Root wrapper with overflow scroll container.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">TableHeader</td>
                    <td className="py-2 pr-4 font-mono">&lt;thead&gt;</td>
                    <td className="py-2">Header section with bottom border on rows.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">TableBody</td>
                    <td className="py-2 pr-4 font-mono">&lt;tbody&gt;</td>
                    <td className="py-2">Body section, last row has no border.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">TableFooter</td>
                    <td className="py-2 pr-4 font-mono">&lt;tfoot&gt;</td>
                    <td className="py-2">Footer with muted background for totals.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">TableRow</td>
                    <td className="py-2 pr-4 font-mono">&lt;tr&gt;</td>
                    <td className="py-2">Row with hover highlight and border.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">TableHead</td>
                    <td className="py-2 pr-4 font-mono">&lt;th&gt;</td>
                    <td className="py-2">Header cell with medium font weight.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">TableCell</td>
                    <td className="py-2 pr-4 font-mono">&lt;td&gt;</td>
                    <td className="py-2">Standard data cell with padding.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">TableCaption</td>
                    <td className="py-2 pr-4 font-mono">&lt;caption&gt;</td>
                    <td className="py-2">Caption rendered below the table.</td>
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
            <p>Uses native HTML table elements for built-in accessibility:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Semantic <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;table&gt;</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;thead&gt;</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;tbody&gt;</code> elements</li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;th&gt;</code> headers are associated with data cells by screen readers</li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;caption&gt;</code> provides a table description for assistive technology</li>
              <li>Overflow container allows horizontal scrolling on narrow viewports</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
