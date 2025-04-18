import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, BookOpen } from "lucide-react"

export default function BrandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Brand Setup</h1>
        <p className="text-muted-foreground">Configure your brand identity and guidelines</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Brand Book
          </CardTitle>
          <CardDescription>
            Upload your brand guidelines to ensure all generated creatives align with your brand identity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <Upload className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="font-medium">Drag and drop your brand book</p>
            <p className="text-sm text-muted-foreground mb-4">PDF, PPT, or DOCX up to 20MB</p>
            <Button>Upload File</Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="brand-name">Brand Name</Label>
              <Input id="brand-name" placeholder="Enter your brand name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand-description">Brand Description</Label>
              <Textarea
                id="brand-description"
                placeholder="Describe your brand's mission, values, and voice"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="primary-color">Primary Brand Color</Label>
              <div className="flex gap-2">
                <Input id="primary-color" type="color" defaultValue="#6d28d9" className="w-12 h-10 p-1" />
                <Input placeholder="#6d28d9" defaultValue="#6d28d9" className="flex-1" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save Brand Information</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Brand Assets</CardTitle>
          <CardDescription>Upload your logo and other brand assets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Logo (Light Background)</Label>
              <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                <p className="text-sm">Upload logo</p>
                <p className="text-xs text-muted-foreground">PNG or SVG</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Logo (Dark Background)</Label>
              <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                <p className="text-sm">Upload logo</p>
                <p className="text-xs text-muted-foreground">PNG or SVG</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Save Assets</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
