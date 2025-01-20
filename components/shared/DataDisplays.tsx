import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Claim {
  id: string
  provider: string
  date: string
  type: string
  amount: number
  status: string
  planName: string
}

interface Plan {
  id: string
  name: string
  type: string
  members: number
  monthlySpend: number
  status: string
}

interface Coverage {
  startDate: string
  endDate: string
  id: string
  type: string
  deductible?: number
  deductibleMet?: number
  oopMax?: number
  oopMet?: number
}

export function ClaimsList({ claims, onClaimClick }: { claims: Claim[], onClaimClick: (claim: Claim) => void }) {
  return (
    <div className="space-y-4">
      {claims.map((claim) => (
        <Card key={claim.id} className="cursor-pointer hover:border-primary" onClick={() => onClaimClick(claim)}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{claim.provider}</h3>
                <p className="text-sm text-muted-foreground">{claim.date}</p>
                <p className="text-sm">Plan: {claim.planName}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${claim.amount.toFixed(2)}</p>
                <p className={cn(
                  "text-sm",
                  claim.status === 'Approved' && "text-green-600",
                  claim.status === 'Processing' && "text-yellow-600",
                  claim.status === 'Denied' && "text-red-600"
                )}>
                  {claim.status}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function PlansList({ plans, onPlanClick }: { plans: Plan[], onPlanClick?: (plan: Plan) => void }) {
  return (
    <div className="space-y-4">
      {plans.map((plan) => (
        <Card 
          key={plan.id} 
          className={cn("hover:border-primary", onPlanClick && "cursor-pointer")}
          onClick={() => onPlanClick?.(plan)}
        >
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{plan.name}</CardTitle>
              <Button variant="outline">View Details</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Members</p>
                <p className="text-lg font-medium">{plan.members.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Spend</p>
                <p className="text-lg font-medium">${plan.monthlySpend.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-lg font-medium">{plan.status}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function CoverageSummary({ coverage, editable = false }: { coverage: Coverage, editable?: boolean }) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Coverage Details</CardTitle>
        {editable && <Button variant="outline">Edit</Button>}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Start Date</p>
            <p className="text-lg font-medium">{coverage.startDate}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">End Date</p>
            <p className="text-lg font-medium">{coverage.endDate}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Coverage ID</p>
            <p className="text-lg font-medium">{coverage.id}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Type</p>
            <p className="text-lg font-medium">{coverage.type}</p>
          </div>
        </div>
        
        {coverage.deductible && (
          <div className="pt-4 border-t">
            <h4 className="font-medium mb-3">Progress</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Deductible</p>
                <p className="text-lg font-medium">
                  ${coverage.deductibleMet?.toLocaleString()} / ${coverage.deductible.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Out of Pocket Max</p>
                <p className="text-lg font-medium">
                  ${coverage.oopMet?.toLocaleString()} / ${coverage.oopMax?.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function PageHeader({ 
  title, 
  subtitle, 
  actions 
}: { 
  title: string
  subtitle?: string
  actions?: React.ReactNode
}) {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      {actions && (
        <div className="flex items-center space-x-4">
          {actions}
        </div>
      )}
    </div>
  )
}