import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function TextareaShowcase() {
  const [charCount, setCharCount] = useState("")
  const maxLength = 200

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Textarea</h1>
        <p className="text-muted-foreground mt-1">
          A multi-line text input for longer form content.
        </p>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Basic */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Basic Usage</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Default Textarea</CardTitle>
            <CardDescription>A simple textarea with placeholder text.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea placeholder="Type your message here..." />
            <pre className="bg-muted rounded-md p-3 text-sm font-mono">
{`<Textarea placeholder="Type your message here..." />`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* With Label */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">With Label</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Labeled Textarea</CardTitle>
            <CardDescription>Pair with the Label component for accessible forms.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Add clinical notes..." />
              <p className="text-xs text-muted-foreground">
                Enter any relevant observations or follow-up instructions.
              </p>
            </div>
            <pre className="bg-muted rounded-md p-3 text-sm font-mono">
{`<div className="grid w-full gap-1.5">
  <Label htmlFor="notes">Notes</Label>
  <Textarea id="notes" placeholder="Add clinical notes..." />
  <p className="text-xs text-muted-foreground">
    Enter any relevant observations.
  </p>
</div>`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Character Count */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">With Character Count</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Character Limit</CardTitle>
            <CardDescription>Track character usage with a live counter.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the symptoms..."
                maxLength={maxLength}
                value={charCount}
                onChange={(e) => setCharCount(e.target.value)}
              />
              <div className="flex justify-end">
                <span className={`text-xs ${charCount.length >= maxLength ? "text-destructive" : "text-muted-foreground"}`}>
                  {charCount.length}/{maxLength}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* States */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Disabled</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="This textarea is disabled..."
                disabled
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Read-only</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value="Patient reported improvement in symptoms after treatment. Follow-up scheduled in 2 weeks."
                readOnly
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Error / Invalid</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5">
              <Label htmlFor="error-textarea">Required Field</Label>
              <Textarea
                id="error-textarea"
                placeholder="This field is required..."
                aria-invalid="true"
              />
              <p className="text-xs text-destructive">
                This field is required.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">With Default Value</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea defaultValue="Pre-filled content that can be edited by the user." />
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="border-border" />

      {/* Fixed Height */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Custom Sizing</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Fixed Height with Rows</CardTitle>
            <CardDescription>Control height using the native rows attribute or Tailwind classes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid w-full gap-1.5">
              <Label>Small (3 rows)</Label>
              <Textarea placeholder="Compact textarea..." rows={3} className="!field-sizing-fixed" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label>Large (8 rows)</Label>
              <Textarea placeholder="Spacious textarea..." rows={8} className="!field-sizing-fixed" />
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Form Example */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Form Example</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Schedule Event</CardTitle>
            <CardDescription>A practical form layout with textarea.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="event-title">Event Title</Label>
                <input
                  id="event-title"
                  type="text"
                  placeholder="e.g. Follow-up Appointment"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="event-notes">Details</Label>
                <Textarea
                  id="event-notes"
                  placeholder="Add event details, instructions, or notes..."
                  rows={4}
                  className="!field-sizing-fixed"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" type="button">Cancel</Button>
                <Button type="submit">Schedule</Button>
              </div>
            </form>
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
                    <td className="py-2 pr-4 font-mono text-foreground">placeholder</td>
                    <td className="py-2 pr-4 font-mono">string</td>
                    <td className="py-2 pr-4 font-mono">-</td>
                    <td className="py-2">Placeholder text shown when empty.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">value</td>
                    <td className="py-2 pr-4 font-mono">string</td>
                    <td className="py-2 pr-4 font-mono">-</td>
                    <td className="py-2">Controlled value.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">defaultValue</td>
                    <td className="py-2 pr-4 font-mono">string</td>
                    <td className="py-2 pr-4 font-mono">-</td>
                    <td className="py-2">Uncontrolled default value.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">rows</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4 font-mono">-</td>
                    <td className="py-2">Number of visible text lines (use with fixed sizing).</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">maxLength</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4 font-mono">-</td>
                    <td className="py-2">Maximum character count.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">disabled</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4 font-mono">false</td>
                    <td className="py-2">Disables the textarea.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">readOnly</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4 font-mono">false</td>
                    <td className="py-2">Makes the textarea read-only.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">aria-invalid</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4 font-mono">false</td>
                    <td className="py-2">Shows error styling (red border + ring).</td>
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
            <p>Native HTML textarea with accessibility enhancements:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Always pair with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;Label&gt;</code> using matching <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">htmlFor</code> / <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">id</code></li>
              <li>Error state via <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">aria-invalid="true"</code> announces errors to screen readers</li>
              <li>Focus ring visible on keyboard navigation</li>
              <li>Supports <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">field-sizing-content</code> for auto-sizing by default</li>
              <li>Disabled state prevents interaction and reduces opacity</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
