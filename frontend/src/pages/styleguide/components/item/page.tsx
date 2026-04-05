import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Item,
  ItemIcon,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemAction,
} from "@/components/ui/item"
import {
  Calendar,
  FileText,
  MoreVertical,
  Stethoscope,
  User,
  Clock,
  ChevronRight,
  Mail,
  Phone,
  Star,
} from "lucide-react"

export default function ItemShowcase() {
  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Item</h1>
        <p className="text-muted-foreground mt-1">
          A composable list item component for displaying structured records.
        </p>
        <Badge variant="secondary" className="mt-2">Custom Component</Badge>
      </div>

      <hr className="border-border" />

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <pre className="bg-card border border-border rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import {
  Item, ItemIcon, ItemContent,
  ItemTitle, ItemDescription, ItemAction,
} from "@/components/ui/item"`}
        </pre>
      </div>

      <hr className="border-border" />

      {/* Basic */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Basic Usage</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Simple Item</CardTitle>
            <CardDescription>Title and description with an icon.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Item>
              <ItemIcon>
                <User className="size-5" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Anna Brown</ItemTitle>
                <ItemDescription>annabrown40@gmail.com</ItemDescription>
              </ItemContent>
            </Item>
            <pre className="bg-muted rounded-md p-3 text-sm font-mono mt-4">
{`<Item>
  <ItemIcon><User className="size-5" /></ItemIcon>
  <ItemContent>
    <ItemTitle>Anna Brown</ItemTitle>
    <ItemDescription>annabrown40@gmail.com</ItemDescription>
  </ItemContent>
</Item>`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* With Action */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">With Action</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Item with Right Action</CardTitle>
            <CardDescription>Use ItemAction for badges, buttons, or any trailing content.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Item>
              <ItemIcon>
                <Calendar className="size-5" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Consultation</ItemTitle>
                <ItemDescription>08:00 AM - 08:30 AM</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Badge className="bg-success text-success-foreground">Confirmed</Badge>
              </ItemAction>
            </Item>

            <Item>
              <ItemIcon>
                <Calendar className="size-5" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Follow-up Visit</ItemTitle>
                <ItemDescription>10:00 AM - 10:30 AM</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Badge className="bg-warning text-warning-foreground">Pending</Badge>
              </ItemAction>
            </Item>

            <Item>
              <ItemIcon>
                <Calendar className="size-5" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>X-Ray Review</ItemTitle>
                <ItemDescription>02:00 PM - 02:30 PM</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Badge variant="destructive">Cancelled</Badge>
              </ItemAction>
            </Item>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Variants */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Default</CardTitle>
            </CardHeader>
            <CardContent>
              <Item variant="default">
                <ItemIcon><Stethoscope className="size-5" /></ItemIcon>
                <ItemContent>
                  <ItemTitle>Dr. Jane Amine</ItemTitle>
                  <ItemDescription>Neurologist</ItemDescription>
                </ItemContent>
              </Item>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Muted</CardTitle>
            </CardHeader>
            <CardContent>
              <Item variant="muted">
                <ItemIcon><Stethoscope className="size-5" /></ItemIcon>
                <ItemContent>
                  <ItemTitle>Dr. Emily Boranda</ItemTitle>
                  <ItemDescription>General Practitioner</ItemDescription>
                </ItemContent>
              </Item>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Outline</CardTitle>
            </CardHeader>
            <CardContent>
              <Item variant="outline">
                <ItemIcon><Stethoscope className="size-5" /></ItemIcon>
                <ItemContent>
                  <ItemTitle>Dr. Mark Chen</ItemTitle>
                  <ItemDescription>Cardiologist</ItemDescription>
                </ItemContent>
              </Item>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Ghost</CardTitle>
            </CardHeader>
            <CardContent>
              <Item variant="ghost">
                <ItemIcon><Stethoscope className="size-5" /></ItemIcon>
                <ItemContent>
                  <ItemTitle>Dr. Sara Wilson</ItemTitle>
                  <ItemDescription>Dermatologist</ItemDescription>
                </ItemContent>
              </Item>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="border-border" />

      {/* Interactive */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Interactive</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Clickable Items</CardTitle>
            <CardDescription>Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">interactive</code> for hover/active states.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Item interactive>
              <ItemIcon><Mail className="size-5" /></ItemIcon>
              <ItemContent>
                <ItemTitle>Messages</ItemTitle>
                <ItemDescription>3 unread messages</ItemDescription>
              </ItemContent>
              <ItemAction>
                <ChevronRight className="size-4 text-muted-foreground" />
              </ItemAction>
            </Item>

            <Item interactive>
              <ItemIcon><Calendar className="size-5" /></ItemIcon>
              <ItemContent>
                <ItemTitle>Calendar</ItemTitle>
                <ItemDescription>View your schedule</ItemDescription>
              </ItemContent>
              <ItemAction>
                <ChevronRight className="size-4 text-muted-foreground" />
              </ItemAction>
            </Item>

            <Item interactive>
              <ItemIcon><FileText className="size-5" /></ItemIcon>
              <ItemContent>
                <ItemTitle>Documents</ItemTitle>
                <ItemDescription>Medical prescriptions</ItemDescription>
              </ItemContent>
              <ItemAction>
                <ChevronRight className="size-4 text-muted-foreground" />
              </ItemAction>
            </Item>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Patient List */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Patient List Example</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">60 Patients Total</CardTitle>
            <CardDescription>All registered patients</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { name: "Anna Brown", email: "annabrown40@gmail.com", phone: "+1 555-0123" },
              { name: "Lola Mariar", email: "lola.mariar@gmail.com", phone: "+1 555-0456" },
              { name: "Mark Chen", email: "mark.chen@outlook.com", phone: "+1 555-0789" },
              { name: "James Lee", email: "james.lee@mail.com", phone: "+1 555-0321" },
            ].map((patient) => (
              <Item key={patient.name} interactive variant="ghost">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                  {patient.name.split(" ").map(n => n[0]).join("")}
                </div>
                <ItemContent>
                  <ItemTitle>{patient.name}</ItemTitle>
                  <ItemDescription>{patient.email}</ItemDescription>
                </ItemContent>
                <ItemAction className="hidden sm:flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Phone className="size-3" />
                    {patient.phone}
                  </span>
                  <Button variant="ghost" size="icon-sm">
                    <MoreVertical className="size-4" />
                  </Button>
                </ItemAction>
              </Item>
            ))}
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Without Icon */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Without Icon</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Minimal Items</CardTitle>
            <CardDescription>ItemIcon is optional - content can stand alone.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Item>
              <ItemContent>
                <ItemTitle>Medical Prescription.pdf</ItemTitle>
                <ItemDescription>Uploaded 2 days ago &middot; 1.2 MB</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button variant="outline" size="sm">Download</Button>
              </ItemAction>
            </Item>

            <Item>
              <ItemContent>
                <ItemTitle>Lab Results - Blood Work.pdf</ItemTitle>
                <ItemDescription>Uploaded 5 days ago &middot; 845 KB</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button variant="outline" size="sm">Download</Button>
              </ItemAction>
            </Item>

            <Item>
              <ItemContent>
                <ItemTitle>X-Ray Report.pdf</ItemTitle>
                <ItemDescription>Uploaded 1 week ago &middot; 3.4 MB</ItemDescription>
              </ItemContent>
              <ItemAction>
                <Button variant="outline" size="sm">Download</Button>
              </ItemAction>
            </Item>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border" />

      {/* Custom Icon Colors */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Custom Icon Styling</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Color Overrides</CardTitle>
            <CardDescription>Override ItemIcon colors via className.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Item>
              <ItemIcon className="bg-success/10 text-success">
                <Clock className="size-5" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Appointment Confirmed</ItemTitle>
                <ItemDescription>Your visit on Thursday has been confirmed.</ItemDescription>
              </ItemContent>
            </Item>

            <Item>
              <ItemIcon className="bg-warning/10 text-warning">
                <Star className="size-5" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Review Pending</ItemTitle>
                <ItemDescription>Please rate your last appointment.</ItemDescription>
              </ItemContent>
            </Item>

            <Item>
              <ItemIcon className="bg-destructive/10 text-destructive">
                <Calendar className="size-5" />
              </ItemIcon>
              <ItemContent>
                <ItemTitle>Appointment Cancelled</ItemTitle>
                <ItemDescription>Your visit on Monday was cancelled.</ItemDescription>
              </ItemContent>
            </Item>
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
                    <th className="text-left py-2 pr-4 font-medium">Required</th>
                    <th className="text-left py-2 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">Item</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2">Root container. Accepts <code className="bg-muted px-1 rounded text-xs font-mono">variant</code> and <code className="bg-muted px-1 rounded text-xs font-mono">interactive</code> props.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">ItemIcon</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2">Leading icon container (40x40, rounded, primary tint).</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">ItemContent</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2">Flexible content area, takes remaining space.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">ItemTitle</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2">Primary text, truncated on overflow.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">ItemDescription</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2">Secondary text in muted color, truncated.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">ItemAction</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2">Trailing slot for badges, buttons, or icons.</td>
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
        <h2 className="text-2xl font-semibold mb-3">Item Props</h2>
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
                    <td className="py-2 pr-4 font-mono text-foreground">variant</td>
                    <td className="py-2 pr-4 font-mono">"default" | "muted" | "outline" | "ghost"</td>
                    <td className="py-2 pr-4 font-mono">"default"</td>
                    <td className="py-2">Visual style of the item.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-mono text-foreground">interactive</td>
                    <td className="py-2 pr-4 font-mono">boolean</td>
                    <td className="py-2 pr-4 font-mono">false</td>
                    <td className="py-2">Adds hover/active states and pointer cursor.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-foreground">className</td>
                    <td className="py-2 pr-4 font-mono">string</td>
                    <td className="py-2 pr-4 font-mono">-</td>
                    <td className="py-2">Additional CSS classes.</td>
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
            <p>Accessibility guidelines for the Item component:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>When interactive, consider wrapping in a <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;button&gt;</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;a&gt;</code> for proper keyboard focus</li>
              <li>Text truncation via <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">truncate</code> uses CSS - full text is accessible to screen readers</li>
              <li>Use semantic list markup (<code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;ul&gt;</code>/<code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">&lt;li&gt;</code>) when rendering multiple items in a list context</li>
              <li>ItemIcon is decorative; ensure meaningful content has text labels</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  )
}
