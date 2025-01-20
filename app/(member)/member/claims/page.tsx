"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { ClaimsList } from '@/components/shared/DataDisplays'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// Mock claims data
const mockClaims = [
  {
    id: '1',
    provider: 'City Health Hospital',
    date: '2025-01-15',
    type: 'Primary Care Visit',
    amount: 150.00,
    status: 'Approved',
    planName: 'Medical 2025'
  },
  {
    id: '2',
    provider: 'Dental Care Plus',
    date: '2025-01-20',
    type: 'Routine Cleaning',
    amount: 100.00,
    status: 'Processing',
    planName: 'Dental 2025'
  }
]

export default function ClaimsPage() {
  return (
    <PageLayout
      title="Claims History"
      subtitle="View and manage your claims"
      actions={
        <Button>Submit New Claim</Button>
      }
      tabs={[
        {
          id: 'active',
          label: 'Active Claims',
          content: <ClaimsList claims={mockClaims.filter(c => c.status === 'Processing')} onClaimClick={() => {}} />
        },
        {
          id: 'past',
          label: 'Past Claims',
          content: <ClaimsList claims={mockClaims.filter(c => c.status === 'Approved')} onClaimClick={() => {}} />
        },
        {
          id: 'all',
          label: 'All Claims',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Claims Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Claims</p>
                      <p className="text-2xl font-bold">15</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="text-2xl font-bold">$1,234.56</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <ClaimsList claims={mockClaims} onClaimClick={() => {}} />
            </div>
          )
        }
      ]}
    />
  )
}