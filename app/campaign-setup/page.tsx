import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PlusCircle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function CampaignSetup() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campaign Setup</h1>
          <p className="text-muted-foreground">Define your campaign objectives and key messages</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> New Campaign
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-5">
          <CardHeader>
            <CardTitle>Campaign Details</CardTitle>
            <CardDescription>Provide information about your campaign to generate optimized creatives</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="details" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="messages">Key Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign-name">Campaign Name</Label>
                    <Input id="campaign-name" placeholder="Summer Sale 2023" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="campaign-objective">Campaign Objective</Label>
                    <Select>
                      <SelectTrigger id="campaign-objective">
                        <SelectValue placeholder="Select objective" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="awareness">Brand Awareness</SelectItem>
                        <SelectItem value="consideration">Consideration</SelectItem>
                        <SelectItem value="conversion">Conversion</SelectItem>
                        <SelectItem value="traffic">Traffic</SelectItem>
                        <SelectItem value="engagement">Engagement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="landing-page-url">Landing Page URL</Label>
                  <Input id="landing-page-url" placeholder="https://example.com/landing-page" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaign-description">Campaign Description</Label>
                  <Textarea
                    id="campaign-description"
                    placeholder="Describe your campaign goals and target audience"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Target Audience (Optional)</Label>
                    <span className="text-xs text-muted-foreground">Select multiple</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border rounded-md p-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="audience-all" />
                      <Label htmlFor="audience-all" className="text-sm font-normal">
                        All Personas
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="audience-young-professional" />
                      <Label htmlFor="audience-young-professional" className="text-sm font-normal">
                        Young Professional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="audience-parent" />
                      <Label htmlFor="audience-parent" className="text-sm font-normal">
                        Parent
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="audience-custom" />
                      <Label htmlFor="audience-custom" className="text-sm font-normal">
                        Custom Audience
                      </Label>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="messages" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-message">Primary Message</Label>
                  <Textarea id="primary-message" placeholder="The main message you want to communicate" rows={2} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondary-message">Secondary Message</Label>
                  <Textarea id="secondary-message" placeholder="Supporting information or benefits" rows={2} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="call-to-action">Call to Action</Label>
                  <Input id="call-to-action" placeholder="e.g., Shop Now, Learn More, Sign Up" />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save as Draft</Button>
            <Button>Save Campaign</Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Stats</CardTitle>
              <CardDescription>Overview of your campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Active Campaigns</div>
                  <div className="text-3xl font-bold">4</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Draft Campaigns</div>
                  <div className="text-3xl font-bold">2</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Total Ads Created</div>
                  <div className="text-3xl font-bold">36</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Spring Collection</p>
                    <p className="text-sm text-muted-foreground">Ends in 5 days</p>
                  </div>
                  <Badge>Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Product Launch</p>
                    <p className="text-sm text-muted-foreground">Starts in 2 weeks</p>
                  </div>
                  <Badge variant="outline">Draft</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Holiday Special</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                  <Badge variant="secondary">Ended</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
          <CardDescription>Manage all your marketing campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Objective</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ads</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Spring Collection</TableCell>
                <TableCell>Conversion</TableCell>
                <TableCell>
                  <Badge>Active</Badge>
                </TableCell>
                <TableCell>12</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Summer Sale</TableCell>
                <TableCell>Traffic</TableCell>
                <TableCell>
                  <Badge variant="outline">Draft</Badge>
                </TableCell>
                <TableCell>8</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Product Launch</TableCell>
                <TableCell>Awareness</TableCell>
                <TableCell>
                  <Badge variant="outline">Draft</Badge>
                </TableCell>
                <TableCell>0</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Holiday Special</TableCell>
                <TableCell>Conversion</TableCell>
                <TableCell>
                  <Badge variant="secondary">Ended</Badge>
                </TableCell>
                <TableCell>16</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
