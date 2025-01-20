"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { Card } from '@/components/ui/card'
import { ClaimsList, CoverageSummary } from '@/components/shared/DataDisplays'
import { Button } from '@/components/ui/button'

export default function MemberDashboard() {
  const stats = [
    {
      label: 'Deductible',
      value: '$500 / $2,000',
      subValue: '25% Complete'
    },
    {
      label: 'Out of Pocket Max',
      value: '$1,200 / $6,000',
      subValue: '20% Complete'
    },
    {
      label: 'Claims YTD',
      value: '12',
      subValue: '3 Pending'
    }
  ]

  return (
    <PageLayout
      title="Medical Coverage 2025"
      subtitle="View your coverage details and current progress"
      stats={stats}
      actions={
        <Button>Submit New Claim</Button>
      }
      tabs={[
        {
          id: 'overview',
          label: 'Overview',
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              <CoverageSummary coverage={{
                startDate: '01/01/2025',
                endDate: '12/31/2025',
                id: 'COV-123',
                type: 'Medical'
              }} />
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">Find a Provider</Button>
                    <Button className="w-full" variant="outline">View ID Card</Button>
                    <Button className="w-full" variant="outline">Contact Support</Button>
                  </div>
                </div>
              </Card>
            </div>
          )
        },
        {
          id: 'claims',
          label: 'Claims',
          content: <ClaimsList claims={[]} onClaimClick={() => {}} />
        },
        {
          id: 'benefits',
          label: 'Benefits',
          content: (
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Plan Benefits</h3>
                {/* Benefits content */}
              </div>
            </Card>
          )
        }
      ]}
    />
  )
}