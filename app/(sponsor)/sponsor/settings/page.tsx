"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const mockAdmins = [
  { name: 'Sarah Johnson', email: 'sarah@starbucks.com', role: 'Admin', lastActive: '2 hours ago' },
  { name: 'Mike Chen', email: 'mike@starbucks.com', role: 'Viewer', lastActive: '1 day ago' }
]

export default function SettingsPage() {
  return (
    <PageLayout
      title="Company Settings"
      subtitle="Manage company information and preferences"
      tabs={[
        {
          id: 'company',
          label: 'Company Information',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" defaultValue="Starbucks Corporation" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ein">EIN</Label>
                        <Input id="ein" defaultValue="91-1234567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="2401 Utah Avenue South" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="(206) 447-1575" />
                      </div>
                    </div>
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Primary Payment Method</p>
                        <p className="text-sm text-muted-foreground">ACH ending in *1234</p>
                      </div>
                      <Button variant="outline">Update</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        },
        {
          id: 'users',
          label: 'User Management',
          content: (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Administrators</CardTitle>
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
                    {mockAdmins.map((admin) => (
                      <TableRow key={admin.email}>
                        <TableCell>{admin.name}</TableCell>
                        <TableCell>{admin.email}</TableCell>
                        <TableCell>{admin.role}</TableCell>
                        <TableCell>{admin.lastActive}</TableCell>
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
          id: 'notifications',
          label: 'Notifications',
          content: (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Claims Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        Notifications for large claims and approvals
                      </p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Member Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Changes to member enrollment status
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