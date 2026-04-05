import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/* ─── Main page ───────────────────────────────────────── */

export default function SwitchShowcase() {
  const [notifications, setNotifications] = useState(true)
  const [emailAlerts, setEmailAlerts] = useState(false)
  const [smsAlerts, setSmsAlerts] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Switch</h1>
        <p className="text-muted-foreground mt-1">
          A toggle control for switching between two states — on and off.
        </p>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Basic */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Basic</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Default Switch</CardTitle>
            <CardDescription>A standalone switch without a label.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-8">
            <Switch />
            <Switch defaultChecked />
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* With Label */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">With Label</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Labeled Switch</CardTitle>
            <CardDescription>Pair with Label component for accessible toggle controls.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="wifi" defaultChecked />
              <Label htmlFor="wifi">Wi-Fi</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="bluetooth" />
              <Label htmlFor="bluetooth">Bluetooth</Label>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Sizes */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Sizes</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Size Variants</CardTitle>
            <CardDescription>Available in small and default sizes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Switch size="sm" id="size-sm" defaultChecked />
              <Label htmlFor="size-sm" className="text-sm">Small</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch size="default" id="size-default" defaultChecked />
              <Label htmlFor="size-default" className="text-sm">Default</Label>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* States */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">States</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Switch States</CardTitle>
            <CardDescription>Unchecked, checked, and disabled states.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Switch id="state-unchecked" />
              <Label htmlFor="state-unchecked" className="text-sm">Unchecked</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="state-checked" defaultChecked />
              <Label htmlFor="state-checked" className="text-sm">Checked</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="state-disabled-off" disabled />
              <Label htmlFor="state-disabled-off" className="text-sm text-muted-foreground">Disabled (off)</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="state-disabled-on" disabled defaultChecked />
              <Label htmlFor="state-disabled-on" className="text-sm text-muted-foreground">Disabled (on)</Label>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Controlled */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Controlled</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Controlled Switches</CardTitle>
            <CardDescription>
              State managed externally with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">checked</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">onCheckedChange</code>.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
              <div>
                <p className="text-sm font-medium">Dark Mode</p>
                <p className="text-xs text-muted-foreground">Toggle dark appearance</p>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
            <p className="text-sm text-muted-foreground">
              Current value: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">{darkMode ? "true" : "false"}</code>
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Settings Form */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Settings Form</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Notification Preferences</CardTitle>
            <CardDescription>Manage how you receive alerts and updates.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
              <div>
                <p className="text-sm font-medium">Push Notifications</p>
                <p className="text-xs text-muted-foreground">Receive alerts on your device</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
              <div>
                <p className="text-sm font-medium">Email Alerts</p>
                <p className="text-xs text-muted-foreground">Get notified via email for important updates</p>
              </div>
              <Switch checked={emailAlerts} onCheckedChange={setEmailAlerts} />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
              <div>
                <p className="text-sm font-medium">SMS Alerts</p>
                <p className="text-xs text-muted-foreground">Receive text messages for urgent matters</p>
              </div>
              <Switch checked={smsAlerts} onCheckedChange={setSmsAlerts} />
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
                    <td className="py-2 pr-4 font-mono text-foreground">checked</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2">Controlled checked state.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">defaultChecked</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4">false</td>
                    <td className="py-2">Initial checked state (uncontrolled).</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">onCheckedChange</td>
                    <td className="py-2 pr-4 font-mono">(checked: boolean) =&gt; void</td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2">Callback when checked state changes.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">size</td>
                    <td className="py-2 pr-4 font-mono">"sm" | "default"</td>
                    <td className="py-2 pr-4">"default"</td>
                    <td className="py-2">Size of the switch.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">disabled</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4">false</td>
                    <td className="py-2">Prevents interaction when true.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">className</td>
                    <td className="py-2 pr-4 font-mono">string</td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2">Additional CSS classes for the root.</td>
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
              <li>Built on Radix UI Switch primitive with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">role="switch"</code></li>
              <li>Supports <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">aria-checked</code> automatically via <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">data-state</code></li>
              <li>Toggle with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">Space</code> key when focused</li>
              <li>Pair with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;Label htmlFor="..."&gt;</code> for accessible labeling</li>
              <li>Focus ring visible on keyboard navigation via <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">focus-visible</code></li>
              <li>Disabled state reduces opacity and prevents interaction</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
