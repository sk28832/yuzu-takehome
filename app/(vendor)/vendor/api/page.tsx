"use client"
import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Switch } from '@/components/ui/switch'

const webhookEvents = [
  { 
    name: 'claim.created', 
    description: 'Triggered when a new claim is created',
    enabled: true
  },
  { 
    name: 'claim.updated', 
    description: 'Triggered when a claim status changes',
    enabled: true
  },
  { 
    name: 'member.enrolled', 
    description: 'Triggered when a member enrolls in a plan',
    enabled: true
  },
  { 
    name: 'member.terminated', 
    description: 'Triggered when a member terminates coverage',
    enabled: false
  }
]

export default function APISettingsPage() {
  return (
    <PageLayout
      title="API Settings"
      subtitle="Manage your API access and webhook configurations"
      tabs={[
        {
          id: 'keys',
          label: 'API Keys',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>API Keys</CardTitle>
                    <Button>Generate New Key</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Production Key</p>
                        <p className="text-sm text-muted-foreground">Last used: 2 hours ago</p>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline">Reveal Key</Button>
                        <Button variant="outline" className="text-red-600">Revoke</Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Test Key</p>
                        <p className="text-sm text-muted-foreground">Last used: 1 day ago</p>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline">Reveal Key</Button>
                        <Button variant="outline" className="text-red-600">Revoke</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rate Limits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Current rate limit: 1000 requests per minute
                  </p>
                  <Button variant="outline">Request Limit Increase</Button>
                </CardContent>
              </Card>
            </div>
          )
        },
        {
          id: 'webhooks',
          label: 'Webhooks',
          content: (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Webhook Configuration</CardTitle>
                    <Button variant="outline">Configure Endpoint</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {webhookEvents.map((event) => (
                        <TableRow key={event.name}>
                          <TableCell className="font-medium">{event.name}</TableCell>
                          <TableCell>{event.description}</TableCell>
                          <TableCell>
                            <Switch checked={event.enabled} />
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">Configure</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Webhook Logs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Webhook logs would go here */}
                    <p className="text-sm text-muted-foreground">
                      Recent webhook delivery attempts and their status
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        },
        {
          id: 'docs',
          label: 'Documentation',
          content: (
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">API Documentation</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete documentation for integrating with our API
                    </p>
                    <Button variant="outline">View Documentation</Button>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-2">API Changelog</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Version 2.1.0</p>
                        <p className="text-sm text-muted-foreground">Released on January 15, 2025</p>
                        <ul className="text-sm list-disc pl-4 mt-2">
                          <li>Added new member enrollment endpoints</li>
                          <li>Improved webhook delivery reliability</li>
                        </ul>
                      </div>
                    </div>
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