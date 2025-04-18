import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Share2, PlusCircle, Eye, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

export default function AdLibrary() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ad Library</h1>
          <p className="text-muted-foreground">Browse and manage your ad creatives</p>
        </div>
        <Button asChild>
          <Link href="/ad-creation">
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Ad
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search ads..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Campaigns" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Campaigns</SelectItem>
              <SelectItem value="spring">Spring Collection</SelectItem>
              <SelectItem value="summer">Summer Sale</SelectItem>
              <SelectItem value="product">Product Launch</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Ads</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Summer Collection - Casual Wear",
                campaign: "Summer Sale",
                status: "active",
                platform: "Instagram",
              },
              {
                id: 2,
                title: "Spring Essentials",
                campaign: "Spring Collection",
                status: "active",
                platform: "Facebook",
              },
              {
                id: 3,
                title: "New Product Teaser",
                campaign: "Product Launch",
                status: "draft",
                platform: "Instagram",
              },
              { id: 4, title: "Limited Time Offer", campaign: "Summer Sale", status: "active", platform: "Facebook" },
              {
                id: 5,
                title: "Holiday Gift Guide",
                campaign: "Holiday Special",
                status: "archived",
                platform: "Instagram",
              },
              {
                id: 6,
                title: "Spring Collection - Formal Wear",
                campaign: "Spring Collection",
                status: "draft",
                platform: "Facebook",
              },
            ].map((ad) => (
              <Card key={ad.id} className="overflow-hidden">
                <div className="aspect-[4/5] bg-gray-100 dark:bg-gray-800 relative group">
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4 mr-1" /> Preview
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Edit className="h-4 w-4 mr-1" /> Edit
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium line-clamp-1">{ad.title}</h3>
                      <p className="text-sm text-muted-foreground">{ad.campaign}</p>
                    </div>
                    <Badge
                      variant={ad.status === "active" ? "default" : ad.status === "draft" ? "outline" : "secondary"}
                    >
                      {ad.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Badge variant="outline">{ad.platform}</Badge>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>

        <TabsContent value="active">
          <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-muted-foreground mb-2">Showing active ads only</p>
            <p className="text-sm text-muted-foreground">You have 3 active ads</p>
          </div>
        </TabsContent>

        <TabsContent value="draft">
          <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-muted-foreground mb-2">Showing draft ads only</p>
            <p className="text-sm text-muted-foreground">You have 2 draft ads</p>
          </div>
        </TabsContent>

        <TabsContent value="archived">
          <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-muted-foreground mb-2">Showing archived ads only</p>
            <p className="text-sm text-muted-foreground">You have 1 archived ad</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
