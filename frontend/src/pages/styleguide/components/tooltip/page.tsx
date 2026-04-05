import { Plus, Trash2, Pencil, Info, Settings, HelpCircle, Copy, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

/* ─── Main page ───────────────────────────────────────── */

export default function TooltipShowcase() {
  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Tooltip</h1>
        <p className="text-muted-foreground mt-1">
          A popup that displays contextual information on hover or focus.
        </p>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Basic */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Basic</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Default Tooltip</CardTitle>
            <CardDescription>Hover over the button to see the tooltip.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Placement */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Placement</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Side Variants</CardTitle>
            <CardDescription>Tooltips can appear on any side of the trigger.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Icon Buttons */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Icon Buttons</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">With Icon Buttons</CardTitle>
            <CardDescription>Tooltips are essential for icon-only buttons to communicate their purpose.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add new record</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy to clipboard</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* With Offset */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">With Offset</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Side Offset</CardTitle>
            <CardDescription>
              Control spacing between the trigger and tooltip with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">sideOffset</code>.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Default (0px)</Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={0}>
                <p>No offset</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">8px offset</Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                <p>8px offset</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">16px offset</Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={16}>
                <p>16px offset</p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Inline Text */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Inline Text</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Tooltip on Inline Elements</CardTitle>
            <CardDescription>Attach tooltips to inline text or icons for contextual help.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-foreground">
              The patient's{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="underline decoration-dashed decoration-muted-foreground underline-offset-4 cursor-help font-medium">
                    BMI
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Body Mass Index — calculated from height and weight</p>
                </TooltipContent>
              </Tooltip>
              {" "}was recorded during the last checkup.
            </p>

            <p className="text-sm text-foreground">
              Please review the{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1 underline decoration-dashed decoration-muted-foreground underline-offset-4 cursor-help font-medium">
                    lab results <Info className="h-3 w-3 text-muted-foreground" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Complete blood count, metabolic panel, and lipid profile</p>
                </TooltipContent>
              </Tooltip>
              {" "}before the next appointment.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Dosage</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Recommended daily dosage for adults</p>
                </TooltipContent>
              </Tooltip>
            </div>
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
{`// Wrap your app with TooltipProvider (in main.tsx)
<TooltipProvider>
  <App />
</TooltipProvider>

// Then use Tooltip anywhere
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent side="top" sideOffset={4}>
    <p>Tooltip text</p>
  </TooltipContent>
</Tooltip>`}
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
                    <td className="py-2 pr-4 font-mono text-foreground">TooltipProvider</td>
                    <td className="py-2">Wraps the app to enable tooltips globally. Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">delayDuration</code> here.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">Tooltip</td>
                    <td className="py-2">Root wrapper for a single tooltip instance.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">TooltipTrigger</td>
                    <td className="py-2">The element that triggers the tooltip. Use <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">asChild</code> to merge props onto your element.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">TooltipContent</td>
                    <td className="py-2">The tooltip popup. Supports <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">side</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">sideOffset</code>, and <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">align</code> props.</td>
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
                    <td className="py-2 pr-4 font-mono text-foreground">side</td>
                    <td className="py-2 pr-4 font-mono">"top" | "bottom" | "left" | "right"</td>
                    <td className="py-2 pr-4">"top"</td>
                    <td className="py-2">Preferred side of the trigger to render.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">sideOffset</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4">0</td>
                    <td className="py-2">Distance in pixels from the trigger.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">align</td>
                    <td className="py-2 pr-4 font-mono">"start" | "center" | "end"</td>
                    <td className="py-2 pr-4">"center"</td>
                    <td className="py-2">Alignment along the side.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">delayDuration</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4">0</td>
                    <td className="py-2">Delay in ms before showing (set on TooltipProvider).</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">asChild</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4">false</td>
                    <td className="py-2">Merge trigger props onto child element instead of wrapping.</td>
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
              <li>Built on Radix UI Tooltip primitive with full ARIA support</li>
              <li>Opens on hover and focus, closes on <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">Escape</code></li>
              <li>Uses <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">role="tooltip"</code> with proper <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">aria-describedby</code> linking</li>
              <li>Keyboard accessible — focus the trigger with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">Tab</code> to show the tooltip</li>
              <li>Portaled to <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">document.body</code> to avoid clipping by overflow containers</li>
              <li>Use <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">asChild</code> on TooltipTrigger to preserve the original element's semantics</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
