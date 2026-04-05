import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SliderShowcase() {
  const [singleValue, setSingleValue] = useState([50])
  const [rangeValue, setRangeValue] = useState([25, 75])
  const [stepValue, setStepValue] = useState([40])

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Slider</h1>
        <p className="text-muted-foreground mt-1">
          An input for selecting a value from a range.
        </p>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import { Slider } from "@/components/ui/slider"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Basic Usage</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Default Slider</CardTitle>
            <CardDescription>A simple slider with a single thumb.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Slider defaultValue={[50]} max={100} step={1} />
            <pre className="bg-muted rounded-md p-3 text-sm font-mono">
{`<Slider defaultValue={[50]} max={100} step={1} />`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Controlled */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Controlled</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Controlled Value</CardTitle>
            <CardDescription>
              Slider with controlled state showing the current value.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Value</span>
              <span className="font-mono font-medium">{singleValue[0]}</span>
            </div>
            <Slider
              value={singleValue}
              onValueChange={setSingleValue}
              max={100}
              step={1}
            />
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Range Slider */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Range</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Range Slider</CardTitle>
            <CardDescription>
              Slider with two thumbs for selecting a range.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Range</span>
              <span className="font-mono font-medium">
                {rangeValue[0]} &ndash; {rangeValue[1]}
              </span>
            </div>
            <Slider
              value={rangeValue}
              onValueChange={setRangeValue}
              max={100}
              step={1}
            />
            <pre className="bg-muted rounded-md p-3 text-sm font-mono">
{`<Slider defaultValue={[25, 75]} max={100} step={1} />`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Step */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Step</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Custom Step</CardTitle>
            <CardDescription>
              Slider snapping to increments of 20.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Value (step: 20)</span>
              <span className="font-mono font-medium">{stepValue[0]}</span>
            </div>
            <Slider
              value={stepValue}
              onValueChange={setStepValue}
              max={100}
              step={20}
            />
            <div className="flex justify-between text-xs text-muted-foreground font-mono">
              <span>0</span>
              <span>20</span>
              <span>40</span>
              <span>60</span>
              <span>80</span>
              <span>100</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Disabled */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">States</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Disabled</CardTitle>
            <CardDescription>A disabled slider cannot be interacted with.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Slider defaultValue={[50]} max={100} step={1} disabled />
            <pre className="bg-muted rounded-md p-3 text-sm font-mono">
{`<Slider defaultValue={[50]} max={100} disabled />`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Props Reference */}
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
                    <td className="py-2 pr-4 font-mono text-foreground">defaultValue</td>
                    <td className="py-2 pr-4 font-mono">number[]</td>
                    <td className="py-2 pr-4 font-mono">[min, max]</td>
                    <td className="py-2">Initial value(s) for the slider.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">value</td>
                    <td className="py-2 pr-4 font-mono">number[]</td>
                    <td className="py-2 pr-4 font-mono">-</td>
                    <td className="py-2">Controlled value(s).</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">onValueChange</td>
                    <td className="py-2 pr-4 font-mono">(value: number[]) =&gt; void</td>
                    <td className="py-2 pr-4 font-mono">-</td>
                    <td className="py-2">Callback when value changes.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">min</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4 font-mono">0</td>
                    <td className="py-2">Minimum value.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">max</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4 font-mono">100</td>
                    <td className="py-2">Maximum value.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">step</td>
                    <td className="py-2 pr-4 font-mono">number</td>
                    <td className="py-2 pr-4 font-mono">1</td>
                    <td className="py-2">Step increment.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">disabled</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4 font-mono">false</td>
                    <td className="py-2">Disables the slider.</td>
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
            <p>Built on Radix UI Slider primitive with full accessibility support:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Keyboard navigation: Arrow keys to adjust, Home/End for min/max</li>
              <li>ARIA: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">role="slider"</code> with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">aria-valuemin</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">aria-valuemax</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">aria-valuenow</code></li>
              <li>Focus ring visible on keyboard navigation</li>
              <li>Touch-friendly thumb size (16px)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
