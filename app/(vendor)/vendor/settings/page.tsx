"use client"

import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function VendorSettingsPage() {
  return (
    <PageLayout
      title="Settings"
      subtitle="Manage vendor settings and preferences"
      tabs={[
        {
          id: 'company',
          label: 'Company Information',
          content: (
            <Card>
              <CardHeader>
                <CardTitle>Company Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" defaultValue="Hipnation" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ein">EIN</Label>
                      <Input id="ein" defaultValue="82-1234567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 Health Street" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="(555) 123-4567" />
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          )
        },
        {
          id: 'users',
          label: 'User Management',
          content: (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Team Members</CardTitle>
                  <Button>Add User</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: 'Brian Smith', email: 'brian@hipnation.com', role: 'Admin', lastActive: '1 hour ago' },
                      { name: 'Sarah Lee', email: 'sarah@hipnation.com', role: 'Support', lastActive: '2 hours ago' }
                    ].map((user) => (
                      <TableRow key={user.email}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell>
                          <Button variant="ghost">Edit</Button>
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
          id: 'services',
          label: 'Service Settings',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Default Service Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Claims Processing</p>
                        <p className="text-sm text-muted-foreground">Default SLA and settings</p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Member Support</p>
                        <p className="text-sm text-muted-foreground">Support hours and contact info</p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Document Processing</p>
                        <p className="text-sm text-muted-foreground">Document handling preferences</p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Service Alerts</p>
                        <p className="text-sm text-muted-foreground">
                          Notifications for service status changes
                        </p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Client Updates</p>
                        <p className="text-sm text-muted-foreground">
                          Notifications for client activity
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
          id: 'billing',
          label: 'Billing Settings',
          content: (
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Payment Account</p>
                      <p className="text-sm text-muted-foreground">Account ending in *1234</p>
                    </div>
                    <Button variant="outline">Update</Button>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Billing Address</p>
                      <p className="text-sm text-muted-foreground">123 Health Street</p>
                    </div>
                    <Button variant="outline">Edit</Button>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Billing Contact</p>
                      <p className="text-sm text-muted-foreground">finance@hipnation.com</p>
                    </div>
                    <Button variant="outline">Edit</Button>
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