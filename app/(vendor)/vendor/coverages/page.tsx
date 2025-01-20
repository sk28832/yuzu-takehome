"use client"

import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function CoverageAccessPage() {
  return (
    <PageLayout
      title="Coverage Access"
      subtitle="Manage and view coverage across all clients"
      stats={[
        {
          label: 'Active Coverages',
          value: '2,345',
          subValue: 'Across all clients'
        },
        {
          label: 'Active Claims',
          value: '156',
          subValue: 'Pending processing'
        },
        {
          label: 'Total Members',
          value: '12,456',
          subValue: 'Under management'
        }
      ]}
      tabs={[
        {
          id: 'overview',
          label: 'Coverage Overview',
          content: (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Active Coverages</CardTitle>
                  <Button variant="outline">Filter</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Members</TableHead>
                      <TableHead>Claims (MTD)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { 
                        client: 'Starbucks',
                        plan: 'Medical Gold Plan',
                        members: 789,
                        claims: 45,
                        status: 'Active'
                      },
                      {
                        client: 'Starbucks',
                        plan: 'Dental Premium',
                        members: 567,
                        claims: 23,
                        status: 'Active'
                      },
                      {
                        client: 'Microsoft',
                        plan: 'Medical Silver Plan',
                        members: 890,
                        claims: 56,
                        status: 'Active'
                      }
                    ].map((coverage, i) => (
                      <TableRow key={i}>
                        <TableCell>{coverage.client}</TableCell>
                        <TableCell>{coverage.plan}</TableCell>
                        <TableCell>{coverage.members}</TableCell>
                        <TableCell>{coverage.claims}</TableCell>
                        <TableCell>
                          <span className="text-green-600">{coverage.status}</span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )
        },
        {
          id: 'claims',
          label: 'Claims Management',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Claims Processing Queue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        id: 'CLM-001',
                        client: 'Starbucks',
                        member: 'John Doe',
                        type: 'Medical',
                        amount: 1234.56,
                        status: 'Pending Review'
                      },
                      {
                        id: 'CLM-002',
                        client: 'Microsoft',
                        member: 'Jane Smith',
                        type: 'Dental',
                        amount: 567.89,
                        status: 'Processing'
                      }
                    ].map((claim, i) => (
                      <div key={i} className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{claim.id}</p>
                          <p className="text-sm text-muted-foreground">
                            {claim.client} - {claim.member}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${claim.amount}</p>
                          <p className="text-sm text-yellow-600">{claim.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        },
        {
          id: 'reports',
          label: 'Reports',
          content: (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Coverage Utilization Report</p>
                      <p className="text-sm text-muted-foreground">
                        Monthly summary of coverage utilization
                      </p>
                    </div>
                    <Button variant="outline">Generate</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Claims Processing Report</p>
                      <p className="text-sm text-muted-foreground">
                        Claims processing metrics and SLA status
                      </p>
                    </div>
                    <Button variant="outline">Generate</Button>
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