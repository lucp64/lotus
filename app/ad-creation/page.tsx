import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { PenTool, ImageIcon, RefreshCw, Download, Share2, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AdCreation() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ad Creation</h1>
          <p className="text-muted-foreground">Generate AI-powered ad creatives for your campaigns</p>
        </div>
        <Button asChild>
          <Link href="/ad-library">View Ad Library</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5" />
                Ad Settings
              </CardTitle>
              <CardDescription>Configure your ad creative settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="campaign">Campaign</Label>
                <Select>
                  <SelectTrigger id="campaign">
                    <SelectValue placeholder="Select campaign" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spring">Spring Collection</SelectItem>
                    <SelectItem value="summer">Summer Sale</SelectItem>
                    <SelectItem value="product">Product Launch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ad-format">Ad Format</Label>
                <RadioGroup defaultValue="image" className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="image" id="image" />
                    <Label htmlFor="image" className="cursor-pointer">
                      Image
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="carousel" id="carousel" />
                    <Label htmlFor="carousel" className="cursor-pointer">
                      Carousel
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <Select>
                  <SelectTrigger id="platform">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="google">Google Display</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="persona">Target Persona</Label>
                <Select>
                  <SelectTrigger id="persona">
                    <SelectValue placeholder="Select persona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Personas</SelectItem>
                    <SelectItem value="young-professional">Young Professional</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ad-copy">Ad Copy</Label>
                <Textarea id="ad-copy" placeholder="Enter your ad copy or let AI generate it" rows={4} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="creativity">Creativity Level</Label>
                  <span className="text-sm text-muted-foreground">Medium</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="auto-generate" />
                <Label htmlFor="auto-generate">Auto-generate variations</Label>
              </div>

              <Button className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Ad
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="color-scheme">Color Scheme</Label>
                <Select>
                  <SelectTrigger id="color-scheme">
                    <SelectValue placeholder="Select color scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brand">Brand Colors</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="vibrant">Vibrant</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image-style">Image Style</Label>
                <Select>
                  <SelectTrigger id="image-style">
                    <SelectValue placeholder="Select image style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="photo">Photography</SelectItem>
                    <SelectItem value="illustration">Illustration</SelectItem>
                    <SelectItem value="3d">3D Rendering</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="abstract">Abstract</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="include-logo" defaultChecked />
                <Label htmlFor="include-logo">Include logo</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="include-cta" defaultChecked />
                <Label htmlFor="include-cta">Include call-to-action button</Label>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Ad Preview
              </CardTitle>
              <CardDescription>Preview your generated ad creative</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="w-full max-w-md aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center p-6">
                  <ImageIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-muted-foreground">Your ad preview will appear here</p>
                  <p className="text-sm text-muted-foreground mt-2">Configure settings and click "Generate Ad"</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Regenerate
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Variations</CardTitle>
              <CardDescription>Alternative versions of your ad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className="aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-purple-500 transition-all"
                  >
                    <div className="text-center p-2">
                      <p className="text-xs text-muted-foreground">Variation {index}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Generate More Variations
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
