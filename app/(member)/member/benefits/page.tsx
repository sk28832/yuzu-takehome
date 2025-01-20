"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockBenefits = [
  {
    category: 'Medical Services',
    items: [
      { service: 'Primary Care Visit', coverage: '100% after deductible', notes: 'In-network only' },
      { service: 'Specialist Visit', coverage: '80% after deductible', notes: 'Referral required' },
      { service: 'Preventive Care', coverage: '100%', notes: 'No deductible' },
    ]
  },
  {
    category: 'Prescriptions',
    items: [
      { service: 'Generic Drugs', coverage: '$10 copay', notes: '30-day supply' },
      { service: 'Preferred Brand', coverage: '$30 copay', notes: '30-day supply' },
      { service: 'Non-Preferred Brand', coverage: '$50 copay', notes: '30-day supply' },
    ]
  }
]

export default function BenefitsPage() {
  return (
    <PageLayout
      title="Plan Benefits"
      subtitle="View your coverage details and benefits"
      actions={
        <Button variant="outline">Download Summary</Button>
      }
      tabs={[
        {
          id: 'coverage',
          label: 'Coverage Details',
          content: (
            <div className="space-y-6">
              {mockBenefits.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="divide-y">
                      {category.items.map((item) => (
                        <div key={item.service} className="py-4 first:pt-0 last:pb-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{item.service}</p>
                              <p className="text-sm text-muted-foreground">{item.notes}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{item.coverage}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        },
        {
          id: 'materials',
          label: 'Plan Materials',
          content: (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Summary of Benefits</p>
                      <p className="text-sm text-muted-foreground">Complete plan documentation</p>
                    </div>
                    <Button variant="outline">Download PDF</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Provider Directory</p>
                      <p className="text-sm text-muted-foreground">Network providers list</p>
                    </div>
                    <Button variant="outline">View Directory</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        },
        {
          id: 'network',
          label: 'Provider Network',
          content: (
            <Card>
              <CardHeader>
                <CardTitle>Find a Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Search for in-network providers in your area
                  </p>
                  <Button>Search Providers</Button>
                </div>
              </CardContent>
            </Card>
          )
        }
      ]}
    />
  )
}