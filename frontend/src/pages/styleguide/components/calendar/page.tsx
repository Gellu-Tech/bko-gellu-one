import * as React from "react"
import type { DateRange } from "react-day-picker"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

/* ─── Main page ───────────────────────────────────────── */

export default function CalendarShowcase() {
  const [singleDate, setSingleDate] = React.useState<Date | undefined>(
    new Date()
  )
  const [multiDates, setMultiDates] = React.useState<Date[] | undefined>([
    new Date(),
  ])
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
  })

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Calendar</h1>
        <p className="text-muted-foreground mt-1">
          A date picker calendar component built on top of{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">
            react-day-picker
          </code>
          .
        </p>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import { Calendar } from "@/components/ui/calendar"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Single Date */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Single Date</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Default</CardTitle>
            <CardDescription>
              Select a single date. Currently selected:{" "}
              <strong>{singleDate?.toLocaleDateString() ?? "none"}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
            />
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Multiple Dates */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Multiple Dates</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Multi-select</CardTitle>
            <CardDescription>
              Click multiple dates to select them.{" "}
              <strong>{multiDates?.length ?? 0}</strong> selected.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="multiple"
              selected={multiDates}
              onSelect={setMultiDates}
            />
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Range */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Date Range</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Range Selection</CardTitle>
            <CardDescription>
              Select a start and end date.{" "}
              {range?.from && range?.to ? (
                <strong>
                  {range.from.toLocaleDateString()} &ndash;{" "}
                  {range.to.toLocaleDateString()}
                </strong>
              ) : (
                "Pick a range."
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
              numberOfMonths={2}
            />
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Disabled dates */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Disabled Dates</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Past Dates Disabled</CardTitle>
            <CardDescription>
              Dates before today are disabled and cannot be selected.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              disabled={{ before: new Date() }}
            />
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* With week numbers */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Week Numbers</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Show Week Numbers</CardTitle>
            <CardDescription>
              Display ISO week numbers alongside the calendar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              showWeekNumber
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
{`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

function MyComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
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
                    <td className="py-2 pr-4 font-mono text-foreground">mode</td>
                    <td className="py-2 pr-4 font-mono">"single" | "multiple" | "range"</td>
                    <td className="py-2 pr-4">"single"</td>
                    <td className="py-2">Selection mode.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">selected</td>
                    <td className="py-2 pr-4 font-mono">Date | Date[] | DateRange</td>
                    <td className="py-2 pr-4">--</td>
                    <td className="py-2">The currently selected date(s).</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">onSelect</td>
                    <td className="py-2 pr-4 font-mono">(date) =&gt; void</td>
                    <td className="py-2 pr-4">--</td>
                    <td className="py-2">Callback when a date is selected.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">disabled</td>
                    <td className="py-2 pr-4 font-mono">Matcher | Matcher[]</td>
                    <td className="py-2 pr-4">--</td>
                    <td className="py-2">Dates to disable (e.g. before/after a date, specific days).</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">numberOfMonths</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4">1</td>
                    <td className="py-2">Number of months to display side by side.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">showOutsideDays</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4">true</td>
                    <td className="py-2">Show days from adjacent months.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">showWeekNumber</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4">false</td>
                    <td className="py-2">Display ISO week numbers.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">buttonVariant</td>
                    <td className="py-2 pr-4 font-mono">"ghost" | "outline" | ...</td>
                    <td className="py-2 pr-4">"ghost"</td>
                    <td className="py-2">Button variant for navigation arrows.</td>
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
              <li>Full keyboard navigation with arrow keys to move between days</li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">Enter</code> / <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">Space</code> to select a date</li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">Home</code> / <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">End</code> to jump to start/end of week</li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">PageUp</code> / <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">PageDown</code> to navigate months</li>
              <li>Disabled dates are marked with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">aria-disabled</code></li>
              <li>Selected dates are announced via <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">aria-selected</code></li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
