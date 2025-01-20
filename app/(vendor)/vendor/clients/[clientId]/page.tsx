"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlansList } from '@/components/shared/DataDisplays'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function ClientDetailPage() {
  return (
    <PageLayout
      title="Starbucks"
      subtitle="Client Management and Services"
      stats={[
        {
          label: 'Total Members',
          value: '2,345',
          subValue: 'Across all plans'
        },
        {
          label: 'Active Plans',
          value: '3',
          subValue: 'Medical, Dental, Vision'
        },
        {
          label: 'Monthly Revenue',
          value: '$234,567',
          subValue: 'From service fees'
        }
      ]}
      actions={
        <div className="space-x-2">
          <Button variant="outline">Download Report</Button>
          <Button>Manage Services</Button>
        </div>
      }
      tabs={[
        {
          id: 'overview',
          label: 'Overview',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Service Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Claims Processing</p>
                      <p className="font-medium">98% SLA Met</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Member Support</p>
                      <p className="font-medium">95% Satisfaction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Primary Contact</p>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm">sarah@starbucks.com</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Account Manager</p>
                        <p className="font-medium">Mike Chen</p>
                        <p className="text-sm">mike@hipnation.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Service Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Claims Processing</span>
                        <span className="text-green-600">Operational</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Member Portal</span>
                        <span className="text-green-600">Operational</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>API Services</span>
                        <span className="text-green-600">Operational</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        },
        {
          id: 'services',
          label: 'Services',
          content: (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Active Services</CardTitle>
                  <Button>Add Service</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>SLA</TableHead>
                      <TableHead>Monthly Fee</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Claims Processing</TableCell>
                      <TableCell>
                        <span className="text-green-600">Active</span>
                      </TableCell>
                      <TableCell>98%</TableCell>
                      <TableCell>$12,345</TableCell>
                      <TableCell>
                        <Button variant="ghost">Configure</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Member Support</TableCell>
                      <TableCell>
                        <span className="text-green-600">Active</span>
                      </TableCell>
                      <TableCell>95%</TableCell>
                      <TableCell>$8,765</TableCell>
                      <TableCell>
                        <Button variant="ghost">Configure</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )
        },
        {
          id: 'billing',
          label: 'Billing',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Monthly Services</p>
                      <p className="font-medium">$21,110</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Per-Member Fees</p>
                      <p className="font-medium">$11,725</p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <p className="font-medium">Total Monthly</p>
                      <p className="font-medium">$32,835</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Jan 1, 2025</TableCell>
                        <TableCell>INV-2025-001</TableCell>
                        <TableCell>$32,835</TableCell>
                        <TableCell>
                          <span className="text-green-600">Paid</span>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )
        }
      ]}
    />
  )
}