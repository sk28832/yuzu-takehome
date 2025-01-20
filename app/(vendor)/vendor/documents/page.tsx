"use client"

import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Upload } from 'lucide-react'

export default function VendorDocumentsPage() {
  return (
    <PageLayout
      title="Documents"
      subtitle="Access and manage service documentation"
      actions={
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      }
      tabs={[
        {
          id: 'service-docs',
          label: 'Service Documentation',
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Service Agreements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'Master Service Agreement',
                      'Service Level Agreement',
                      'Data Processing Agreement'
                    ].map((doc) => (
                      <div key={doc} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          <div>
                            <p className="font-medium">{doc}</p>
                            <p className="text-sm text-muted-foreground">Updated Jan 1, 2025</p>
                          </div>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline">Preview</Button>
                          <Button variant="outline">Download</Button>
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
          id: 'client-docs',
          label: 'Client Documents',
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Shared Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'Implementation Guide',
                      'Support Procedures',
                      'Contact Directory'
                    ].map((doc) => (
                      <div key={doc} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          <div>
                            <p className="font-medium">{doc}</p>
                            <p className="text-sm text-muted-foreground">Shared with all clients</p>
                          </div>
                        </div>
                        <Button variant="outline">Download</Button>
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
          label: 'Service Reports',
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'Monthly SLA Report',
                      'Service Usage Analytics',
                      'Client Satisfaction Survey'
                    ].map((report) => (
                      <div key={report} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          <div>
                            <p className="font-medium">{report}</p>
                            <p className="text-sm text-muted-foreground">January 2025</p>
                          </div>
                        </div>
                        <Button variant="outline">Download</Button>
                      </div>
                    ))}
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