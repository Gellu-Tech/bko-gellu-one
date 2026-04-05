import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Sun, Moon, AlertCircle, CheckCircle, Info, ArrowRight, Heart, Star } from "lucide-react"

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark")
}

/* ─── Color swatch helper ──────────────────────────────── */

function Swatch({ color, label, border }: { color: string; label: string; border?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-16 h-16 rounded-lg shadow-sm ${border ? "border border-border" : ""}`}
        style={{ backgroundColor: color }}
      />
      <span className="text-xs text-muted-foreground font-mono">{label}</span>
    </div>
  )
}

function TokenSwatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-md border border-border shrink-0"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">{cssVar}</p>
      </div>
    </div>
  )
}

/* ─── Sections ─────────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold mb-4 mt-12 first:mt-0">{children}</h2>
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      {children}
    </div>
  )
}

/* ─── Main page ────────────────────────────────────────── */

export default function StyleguideHome() {
  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Design Tokens</h1>
          <p className="text-muted-foreground mt-1">
            Visual foundation for the design system
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={toggleDarkMode}>
          <Sun className="size-4 dark:hidden" />
          <Moon className="size-4 hidden dark:block" />
          <span className="ml-1">Toggle theme</span>
        </Button>
      </div>

      <hr className="border-border" />

      {/* ─── COLOR PALETTE ──────────────────────────────── */}
      <SectionTitle>Color Palette</SectionTitle>

      <SubSection title="Brand Colors">
        <div className="flex flex-wrap gap-6">
          <Swatch color="#5A81FA" label="#5A81FA" />
          <Swatch color="#2B318A" label="#2B318A" />
          <Swatch color="#FBB03B" label="#FBB03B" />
        </div>
      </SubSection>

      <SubSection title="Neutral Scale">
        <div className="flex flex-wrap gap-6">
          <Swatch color="#1F1F1F" label="#1F1F1F" />
          <Swatch color="#6A6E83" label="#6A6E83" />
          <Swatch color="#A8B1CE" label="#A8B1CE" />
          <Swatch color="#E2E4ED" label="#E2E4ED" />
          <Swatch color="#F2F5FF" label="#F2F5FF" />
          <Swatch color="#F7F8FC" label="#F7F8FC" border />
          <Swatch color="#FFFFFF" label="#FFFFFF" border />
        </div>
      </SubSection>

      <SubSection title="Semantic Colors">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <TokenSwatch name="Primary" cssVar="--primary" />
          <TokenSwatch name="Destructive" cssVar="--destructive" />
          <TokenSwatch name="Success" cssVar="--success" />
          <TokenSwatch name="Warning" cssVar="--warning" />
          <TokenSwatch name="Info" cssVar="--info" />
          <TokenSwatch name="Muted" cssVar="--muted" />
          <TokenSwatch name="Accent" cssVar="--accent" />
          <TokenSwatch name="Secondary" cssVar="--secondary" />
        </div>
      </SubSection>

      <SubSection title="Surface & Border Colors">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <TokenSwatch name="Background" cssVar="--background" />
          <TokenSwatch name="Card" cssVar="--card" />
          <TokenSwatch name="Popover" cssVar="--popover" />
          <TokenSwatch name="Border" cssVar="--border" />
          <TokenSwatch name="Input" cssVar="--input" />
          <TokenSwatch name="Ring" cssVar="--ring" />
        </div>
      </SubSection>

      <SubSection title="Chart Colors">
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <TokenSwatch key={i} name={`Chart ${i}`} cssVar={`--chart-${i}`} />
          ))}
        </div>
      </SubSection>

      <hr className="border-border" />

      {/* ─── TYPOGRAPHY ─────────────────────────────────── */}
      <SectionTitle>Typography</SectionTitle>

      <SubSection title="Headings (Montserrat)">
        <div className="space-y-4 bg-card rounded-lg p-6 border border-border">
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">h1 - 36px / font-bold</span>
            <h1 className="text-4xl font-bold">The quick brown fox</h1>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">h2 - 30px / font-semibold</span>
            <h2 className="text-3xl font-semibold">The quick brown fox</h2>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">h3 - 24px / font-semibold</span>
            <h3 className="text-2xl font-semibold">The quick brown fox</h3>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">h4 - 20px / font-medium</span>
            <h4 className="text-xl font-medium">The quick brown fox</h4>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">h5 - 18px / font-medium</span>
            <h5 className="text-lg font-medium">The quick brown fox</h5>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">h6 - 16px / font-medium</span>
            <h6 className="text-base font-medium">The quick brown fox</h6>
          </div>
        </div>
      </SubSection>

      <SubSection title="Body Text (Karla)">
        <div className="space-y-4 bg-card rounded-lg p-6 border border-border">
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">body-lg - 18px</span>
            <p className="text-lg">
              Visual style is an essential part of a project as it helps create a standardized system of colours, fonts, buttons, text input, and many other components.
            </p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">body - 16px (default)</span>
            <p className="text-base">
              Visual style is an essential part of a project as it helps create a standardized system of colours, fonts, buttons, text input, and many other components.
            </p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">body-sm - 14px</span>
            <p className="text-sm">
              Visual style is an essential part of a project as it helps create a standardized system of colours, fonts, buttons, text input, and many other components.
            </p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-mono mb-1 block">caption - 12px</span>
            <p className="text-xs text-muted-foreground">
              Visual style is an essential part of a project as it helps create a standardized system of colours, fonts, buttons, text input, and many other components.
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection title="Font Weights">
        <div className="space-y-2 bg-card rounded-lg p-6 border border-border">
          <p className="font-normal">Regular (400) - The quick brown fox jumps over the lazy dog</p>
          <p className="font-medium">Medium (500) - The quick brown fox jumps over the lazy dog</p>
          <p className="font-semibold">Semibold (600) - The quick brown fox jumps over the lazy dog</p>
          <p className="font-bold">Bold (700) - The quick brown fox jumps over the lazy dog</p>
        </div>
      </SubSection>

      <hr className="border-border" />

      {/* ─── BORDER RADIUS ──────────────────────────────── */}
      <SectionTitle>Border Radius</SectionTitle>

      <div className="flex flex-wrap gap-6">
        {[
          { name: "sm", value: "6px", cls: "rounded-sm" },
          { name: "md", value: "8px", cls: "rounded-md" },
          { name: "lg", value: "12px", cls: "rounded-lg" },
          { name: "xl", value: "16px", cls: "rounded-xl" },
          { name: "full", value: "9999px", cls: "rounded-full" },
        ].map((r) => (
          <div key={r.name} className="flex flex-col items-center gap-2">
            <div className={`w-20 h-20 bg-primary ${r.cls}`} />
            <span className="text-sm font-medium">{r.name}</span>
            <span className="text-xs text-muted-foreground font-mono">{r.value}</span>
          </div>
        ))}
      </div>

      <hr className="border-border" />

      {/* ─── SHADOWS ────────────────────────────────────── */}
      <SectionTitle>Shadows</SectionTitle>

      <div className="flex flex-wrap gap-6">
        {[
          { name: "shadow-sm", cls: "shadow-sm" },
          { name: "shadow", cls: "shadow" },
          { name: "shadow-md", cls: "shadow-md" },
          { name: "shadow-lg", cls: "shadow-lg" },
          { name: "shadow-xl", cls: "shadow-xl" },
        ].map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-2">
            <div className={`w-24 h-24 bg-card rounded-lg ${s.cls}`} />
            <span className="text-xs text-muted-foreground font-mono">{s.name}</span>
          </div>
        ))}
      </div>

      <hr className="border-border" />

      {/* ─── BUTTON COMPONENT ───────────────────────────── */}
      <SectionTitle>Button</SectionTitle>

      <SubSection title="Variants">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </SubSection>

      <SubSection title="Sizes">
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Star className="size-5" /></Button>
        </div>
      </SubSection>

      <SubSection title="With Icons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            Continue
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline">
            <Heart className="size-4" />
            Add to Favourite
          </Button>
          <Button variant="destructive">
            Delete
          </Button>
        </div>
      </SubSection>

      <SubSection title="States">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </div>
      </SubSection>

      <hr className="border-border" />

      {/* ─── CARD COMPONENT ─────────────────────────────── */}
      <SectionTitle>Card</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Patient Overview</CardTitle>
            <CardDescription>View patient details and medical history</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card demonstrates the default card styling with header, content, and footer sections.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Schedule Event</CardTitle>
            <CardDescription>Create a new appointment or reminder</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Date</span>
              <span>Thursday, 16 Apr 2023</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Time</span>
              <span>11:00 - 11:40</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Schedule</Button>
          </CardFooter>
        </Card>
      </div>

      <hr className="border-border" />

      {/* ─── BADGE COMPONENT ────────────────────────────── */}
      <SectionTitle>Badge</SectionTitle>

      <div className="flex flex-wrap items-center gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge className="bg-success text-success-foreground hover:bg-success/80">Confirmed</Badge>
        <Badge className="bg-warning text-warning-foreground hover:bg-warning/80">Pending</Badge>
      </div>

      <hr className="border-border" />

      {/* ─── ALERT COMPONENT ────────────────────────────── */}
      <SectionTitle>Alert</SectionTitle>

      <div className="space-y-4">
        <Alert>
          <Info className="size-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is a default informational alert message.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertCircle className="size-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again.
          </AlertDescription>
        </Alert>

        <Alert className="border-success/50 text-success [&>svg]:text-success">
          <CheckCircle className="size-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your appointment has been confirmed successfully.
          </AlertDescription>
        </Alert>
      </div>

      <hr className="border-border" />

      {/* ─── RADIO GROUP ────────────────────────────────── */}
      <SectionTitle>Radio Group</SectionTitle>

      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="text-base">Event Type</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="appointment">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="appointment" id="r1" />
              <label htmlFor="r1" className="text-sm cursor-pointer">Appointment</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="meeting" id="r2" />
              <label htmlFor="r2" className="text-sm cursor-pointer">Meeting</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reminder" id="r3" />
              <label htmlFor="r3" className="text-sm cursor-pointer">Reminder</label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
