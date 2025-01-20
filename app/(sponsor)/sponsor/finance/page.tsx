"use client"

import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function FinancePage() {
  return (
    <PageLayout
      title="Financial Management"
      subtitle="Manage financial accounts and billing"
      stats={[
        {
          label: 'Total Monthly Premium',
          value: '$234,567',
          subValue: 'For all plans'
        },
        {
          label: 'Claims Paid MTD',
          value: '$123,456',
          subValue: '234 claims'
        },
        {
          label: 'Balance',
          value: '$345,678',
          subValue: 'Available funds'
        }
      ]}
      tabs={[
        {
          id: 'accounts',
          label: 'Bank Accounts',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Connected Accounts</CardTitle>
                    <Button>Add Account</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Primary Account</p>
                        <p className="text-sm text-muted-foreground">**** 1234 - Wells Fargo</p>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline">Edit</Button>
                        <Button variant="outline" className="text-red-600">Remove</Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Claims Account</p>
                        <p className="text-sm text-muted-foreground">**** 5678 - Chase</p>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline">Edit</Button>
                        <Button variant="outline" className="text-red-600">Remove</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Auto-Payment Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Premium Payments</p>
                        <p className="text-sm text-muted-foreground">
                          Automatic payment on 1st of each month
                        </p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        },
        {
          id: 'transactions',
          label: 'Transactions',
          content: (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Transaction History</CardTitle>
                  <Button variant="outline">Export</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Monthly Premium Payment</p>
                        <p className="text-sm text-muted-foreground">Jan {i}, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$78,123</p>
                        <p className="text-sm text-green-600">Completed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        },
        {
          id: 'reports',
          label: 'Financial Reports',
          content: (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Monthly Financial Statement</p>
                      <p className="text-sm text-muted-foreground">
                        Detailed breakdown of all financial activity
                      </p>
                    </div>
                    <Button variant="outline">Download</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Claims Payment Report</p>
                      <p className="text-sm text-muted-foreground">
                        Summary of all claim payments
                      </p>
                    </div>
                    <Button variant="outline">Download</Button>
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