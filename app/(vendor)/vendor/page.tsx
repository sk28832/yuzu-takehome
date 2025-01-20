"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockClients = [
  {
    name: 'Starbucks',
    totalMembers: 2345,
    activePlans: 3,
    monthlyRevenue: 123456,
    status: 'Active'
  },
  {
    name: 'Microsoft',
    totalMembers: 5432,
    activePlans: 4,
    monthlyRevenue: 234567,
    status: 'Active'
  }
]

export default function VendorDashboard() {
  const stats = [
    {
      label: 'Active Clients',
      value: '12',
      subValue: '3 pending renewal'
    },
    {
      label: 'Total Members',
      value: '23,456',
      subValue: 'Across all plans'
    },
    {
      label: 'Monthly Revenue',
      value: '$123,456',
      subValue: 'From service fees'
    }
  ]

  return (
    <PageLayout
      title="Client Directory"
      subtitle="Manage your client relationships and services"
      stats={stats}
      actions={
        <Button>Add New Client</Button>
      }
      tabs={[
        {
          id: 'active',
          label: 'Active Clients',
          content: (
            <div className="space-y-4">
              {mockClients.map((client) => (
                <Card key={client.name} className="hover:border-primary cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{client.name}</CardTitle>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Members</p>
                        <p className="text-lg font-medium">{client.totalMembers.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Active Plans</p>
                        <p className="text-lg font-medium">{client.activePlans}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                        <p className="text-lg font-medium">${client.monthlyRevenue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <p className="text-lg font-medium">{client.status}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        },
        {
          id: 'pending',
          label: 'Pending Setup',
          content: (
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">No pending clients</p>
              </CardContent>
            </Card>
          )
        },
        {
          id: 'reports',
          label: 'Client Reports',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Monthly Revenue Report</p>
                        <p className="text-sm text-muted-foreground">Revenue breakdown by client</p>
                      </div>
                      <Button variant="outline">Download</Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Service Usage Report</p>
                        <p className="text-sm text-muted-foreground">Service utilization metrics</p>
                      </div>
                      <Button variant="outline">Download</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        }
      ]}
    />
  )
}