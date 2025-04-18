import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, PlusCircle, Edit, Trash2 } from "lucide-react"

export default function PersonasPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customer Personas</h1>
        <p className="text-muted-foreground">Define your target audience segments for personalized marketing</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Customer Personas
          </CardTitle>
          <CardDescription>
            Define 3-6 customer personas to create targeted, personalized ads that resonate with different audience
            segments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Persona 1: Enterprise Marketer</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Organization</p>
                <p>Large B2C brand with established marketing team</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Role</p>
                <p>Marketing Director or Brand Manager</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Pain Points</p>
                <p>
                  Ad blindness, diminishing returns on traditional advertising, complex approval processes, privacy
                  regulations
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Goals</p>
                <p>
                  Enhance performance through personalization, maintain brand consistency, automate creative production
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Budget</p>
                <p>High (enterprise-level marketing budget)</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Decision Factors</p>
                <p>ROI, brand compliance, scalability, integration with existing tools</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Persona 2: Agency Strategist</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Organization</p>
                <p>Marketing agency managing multiple B2C clients</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Role</p>
                <p>Account Manager or Creative Director</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Pain Points</p>
                <p>
                  High-volume ad creation, tight deadlines, client approval bottlenecks, maintaining quality at scale
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Goals</p>
                <p>
                  Streamline operations, improve efficiency, navigate complex approval structures, deliver personalized
                  campaigns
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Budget</p>
                <p>Medium to High (agency with multiple client accounts)</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Decision Factors</p>
                <p>Time savings, resource optimization, client satisfaction, competitive advantage</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Persona 3: Solo Entrepreneur</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Organization</p>
                <p>Small startup or one-person business (0-1 stage)</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Role</p>
                <p>Founder/CEO handling all aspects of the business</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Pain Points</p>
                <p>
                  Limited marketing expertise, resource constraints, difficulty cracking distribution, overwhelmed by
                  marketing options
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Goals</p>
                <p>
                  Find cost-effective distribution channels, create professional marketing materials, compete with
                  larger brands
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Budget</p>
                <p>Low (bootstrapped or limited funding)</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Decision Factors</p>
                <p>Ease of use, affordability, quick results, no marketing expertise required</p>
              </div>
            </div>
          </div>

          <Button className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Persona
          </Button>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline">Reset to Default</Button>
          <Button>Save Personas</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
