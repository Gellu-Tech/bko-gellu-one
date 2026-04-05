import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Area,
  AreaChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/* ─── Sample data ─────────────────────────────────────── */

const patientVisits = [
  { month: "Jan", visits: 186, newPatients: 80 },
  { month: "Feb", visits: 205, newPatients: 72 },
  { month: "Mar", visits: 237, newPatients: 95 },
  { month: "Apr", visits: 273, newPatients: 110 },
  { month: "May", visits: 209, newPatients: 68 },
  { month: "Jun", visits: 314, newPatients: 130 },
]

const vitalTrends = [
  { day: "Mon", heartRate: 72, bloodPressure: 120 },
  { day: "Tue", heartRate: 75, bloodPressure: 118 },
  { day: "Wed", heartRate: 68, bloodPressure: 122 },
  { day: "Thu", heartRate: 74, bloodPressure: 115 },
  { day: "Fri", heartRate: 71, bloodPressure: 119 },
  { day: "Sat", heartRate: 69, bloodPressure: 121 },
  { day: "Sun", heartRate: 73, bloodPressure: 117 },
]

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 67000 },
]

const departmentData = [
  { name: "Cardiology", value: 35, fill: "var(--color-cardiology)" },
  { name: "Neurology", value: 25, fill: "var(--color-neurology)" },
  { name: "Orthopedics", value: 20, fill: "var(--color-orthopedics)" },
  { name: "Pediatrics", value: 15, fill: "var(--color-pediatrics)" },
  { name: "Other", value: 5, fill: "var(--color-other)" },
]

/* ─── Chart configs ───────────────────────────────────── */

const barChartConfig = {
  visits: {
    label: "Total Visits",
    color: "var(--chart-1)",
  },
  newPatients: {
    label: "New Patients",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

const lineChartConfig = {
  heartRate: {
    label: "Heart Rate (bpm)",
    color: "var(--chart-1)",
  },
  bloodPressure: {
    label: "Systolic BP (mmHg)",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const areaChartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const pieChartConfig = {
  cardiology: {
    label: "Cardiology",
    color: "var(--chart-1)",
  },
  neurology: {
    label: "Neurology",
    color: "var(--chart-2)",
  },
  orthopedics: {
    label: "Orthopedics",
    color: "var(--chart-3)",
  },
  pediatrics: {
    label: "Pediatrics",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

/* ─── Main page ───────────────────────────────────────── */

export default function ChartShowcase() {
  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Chart</h1>
        <p className="text-muted-foreground mt-1">
          Data visualization components built on Recharts with design system integration.
        </p>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Bar Chart */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Bar Chart</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Patient Visits</CardTitle>
            <CardDescription>Monthly visit count with new patient breakdown.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={barChartConfig} className="h-[300px] w-full">
              <BarChart data={patientVisits} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="visits" fill="var(--color-visits)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="newPatients" fill="var(--color-newPatients)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Line Chart */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Line Chart</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Vital Signs Trend</CardTitle>
            <CardDescription>Weekly heart rate and blood pressure monitoring.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={lineChartConfig} className="h-[300px] w-full">
              <LineChart data={vitalTrends} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="heartRate"
                  stroke="var(--color-heartRate)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="bloodPressure"
                  stroke="var(--color-bloodPressure)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Area Chart */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Area Chart</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Monthly Revenue</CardTitle>
            <CardDescription>Clinic revenue over the past 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={areaChartConfig} className="h-[300px] w-full">
              <AreaChart data={revenueData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) => `$${Number(value).toLocaleString()}`}
                    />
                  }
                />
                <defs>
                  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-revenue)"
                  strokeWidth={2}
                  fill="url(#fillRevenue)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Pie Chart */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Pie Chart</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Department Distribution</CardTitle>
            <CardDescription>Patient distribution across hospital departments.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={pieChartConfig} className="h-[300px] w-full">
              <PieChart accessibilityLayer>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Pie
                  data={departmentData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  strokeWidth={2}
                />
              </PieChart>
            </ChartContainer>
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
{`// 1. Define your chart config (maps data keys to labels & colors)
const chartConfig = {
  visits: {
    label: "Total Visits",
    color: "var(--chart-1)",   // uses design system CSS variables
  },
  newPatients: {
    label: "New Patients",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

// 2. Wrap Recharts components with ChartContainer
<ChartContainer config={chartConfig} className="h-[300px] w-full">
  <BarChart data={data}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
    <Bar dataKey="newPatients" fill="var(--color-newPatients)" radius={4} />
  </BarChart>
</ChartContainer>`}
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
                    <td className="py-2 pr-4 font-mono text-foreground">ChartContainer</td>
                    <td className="py-2">Wraps Recharts with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">ResponsiveContainer</code>, injects CSS variables from config, and applies design system styles.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">ChartTooltip</td>
                    <td className="py-2">Re-export of Recharts <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">Tooltip</code>. Use with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">ChartTooltipContent</code>.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">ChartTooltipContent</td>
                    <td className="py-2">Styled tooltip body. Supports <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">indicator</code> ("dot", "line", "dashed"), <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">hideLabel</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">formatter</code>.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">ChartLegend</td>
                    <td className="py-2">Re-export of Recharts <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">Legend</code>. Use with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">ChartLegendContent</code>.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">ChartLegendContent</td>
                    <td className="py-2">Styled legend with color indicators. Reads labels from <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">ChartConfig</code>.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* ChartConfig */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">ChartConfig</h2>
        <Card>
          <CardContent className="pt-6 space-y-3">
            <p className="text-sm text-muted-foreground">
              The <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">ChartConfig</code> object maps data keys to display labels and colors.
              Colors are injected as CSS variables (e.g., <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">--color-visits</code>) making them available to Recharts via <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">var(--color-&lt;key&gt;)</code>.
            </p>
            <pre className="bg-muted/50 rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`type ChartConfig = Record<string, {
  label?: React.ReactNode
  icon?: React.ComponentType
  color?: string            // single color for both themes
  theme?: {                  // or per-theme colors
    light: string
    dark: string
  }
}>`}
            </pre>
            <p className="text-sm text-muted-foreground">
              Available chart color variables: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">--chart-1</code> through <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">--chart-5</code>, defined in your design tokens.
            </p>
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
              <li>Add <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">accessibilityLayer</code> to chart components for keyboard navigation</li>
              <li>Tooltips provide hover/focus details for data points</li>
              <li>Legends label each data series with color indicators</li>
              <li>Colors are derived from CSS variables, respecting light/dark mode automatically</li>
              <li>Chart containers are responsive via <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">ResponsiveContainer</code></li>
              <li>Use descriptive <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">label</code> values in ChartConfig for screen reader context</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
