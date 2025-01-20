"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlansList } from '@/components/shared/DataDisplays'

export default function SponsorDashboard() {
  const stats = [
    {
      label: 'Total Members',
      value: '2,345',
      subValue: '+123 from last month'
    },
    {
      label: 'Active Plans',
      value: '3',
      subValue: 'Medical, Dental, Vision'
    },
    {
      label: 'Monthly Spend',
      value: '$234,567',
      subValue: '12% under budget'
    }
  ]

  const mockPlans = [
    {
      id: '1',
      name: 'Gold Plan',
      type: 'Medical',
      members: 789,
      monthlySpend: 123456,
      status: 'Active'
    },
    {
      id: '2',
      name: 'Silver Plan',
      type: 'Medical',
      members: 456,
      monthlySpend: 78901,
      status: 'Active'
    }
  ]

  return (
    <PageLayout
      title="Starbucks Benefits"
      subtitle="Corporate Benefits Management"
      stats={stats}
      actions={
        <div className="space-x-2">
          <Button variant="outline">Download Report</Button>
          <Button>Add New Plan</Button>
        </div>
      }
      tabs={[
        {
          id: 'plans',
          label: 'Health Plans',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <PlansList plans={mockPlans} />
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Member Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Member distribution chart would go here */}
                    <p className="text-sm text-muted-foreground">
                      Distribution of members across plans
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Financial Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Financial overview chart would go here */}
                    <p className="text-sm text-muted-foreground">
                      Monthly spend and budget tracking
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        },
        {
          id: 'members',
          label: 'Members',
          content: (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Member Directory</h3>
                {/* Member directory table would go here */}
              </CardContent>
            </Card>
          )
        },
        {
          id: 'reports',
          label: 'Reports',
          content: (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Available Reports</h3>
                {/* Reports list would go here */}
              </CardContent>
            </Card>
          )
        }
      ]}
    />
  )
}