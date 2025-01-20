"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlansList } from '@/components/shared/DataDisplays'

const mockPlans = {
  health: [
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
  ],
  dental: [
    {
      id: '3',
      name: 'Premium Dental',
      type: 'Dental',
      members: 890,
      monthlySpend: 23456,
      status: 'Active'
    }
  ],
  vision: [
    {
      id: '4',
      name: 'Vision Plus',
      type: 'Vision',
      members: 567,
      monthlySpend: 12345,
      status: 'Active'
    }
  ]
}

export default function PlansPage() {
  return (
    <PageLayout
      title="Plan Management"
      subtitle="Manage and configure benefit plans"
      actions={
        <div className="space-x-2">
          <Button variant="outline">Compare Plans</Button>
          <Button>Add New Plan</Button>
        </div>
      }
      tabs={[
        {
          id: 'health',
          label: 'Health Plans',
          content: (
            <div className="space-y-6">
              <PlansList plans={mockPlans.health} />
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Plan Utilization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">Gold Plan</p>
                        <p className="font-medium">78% enrolled</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">Silver Plan</p>
                        <p className="font-medium">22% enrolled</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cost Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">Total Monthly Premium</p>
                        <p className="font-medium">$234,567</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">Avg. Cost per Member</p>
                        <p className="font-medium">$567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        },
        {
          id: 'dental',
          label: 'Dental Plans',
          content: <PlansList plans={mockPlans.dental} />
        },
        {
          id: 'vision',
          label: 'Vision Plans',
          content: <PlansList plans={mockPlans.vision} />
        },
        {
          id: 'renewal',
          label: 'Plan Renewal',
          content: (
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Renewals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPlans.health.map((plan) => (
                    <div key={plan.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{plan.name}</p>
                        <p className="text-sm text-muted-foreground">Renews on Dec 31, 2025</p>
                      </div>
                      <Button variant="outline">Review Renewal</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        }
      ]}
    />
  )
}