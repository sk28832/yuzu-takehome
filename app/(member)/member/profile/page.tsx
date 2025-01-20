"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ProfilePage() {
  return (
    <PageLayout
      title="Profile Settings"
      subtitle="Manage your personal information and preferences"
      tabs={[
        {
          id: 'personal',
          label: 'Personal Information',
          content: (
            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Tom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Sawyer" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="tom@starbucks.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        },
        {
          id: 'payment',
          label: 'Payment Methods',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Connected Bank Accounts</CardTitle>
                    <Button>Add Account</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">**** 1234</p>
                        <p className="text-sm text-muted-foreground">Wells Fargo Checking</p>
                      </div>
                      <Button variant="outline">Remove</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Direct Deposit Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Claims Reimbursement</p>
                        <p className="text-sm text-muted-foreground">
                          Automatically deposit claim reimbursements
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
          id: 'notifications',
          label: 'Notifications',
          content: (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Claim Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Notifications when your claims are processed
                      </p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Coverage Reminders</p>
                      <p className="text-sm text-muted-foreground">
                        Important coverage and renewal reminders
                      </p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        }
      ]}
    />
  )
}