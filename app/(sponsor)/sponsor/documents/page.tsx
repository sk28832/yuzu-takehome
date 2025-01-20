"use client"

import { PageLayout } from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Upload } from 'lucide-react'

export default function DocumentsPage() {
  return (
    <PageLayout
      title="Documents"
      subtitle="Manage and access company documents"
      actions={
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      }
      tabs={[
        {
          id: 'plan-docs',
          label: 'Plan Documents',
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Plan Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Summary Plan Description', 'Benefits Guide', 'Network Directory'].map((doc) => (
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
          id: 'reports',
          label: 'Reports',
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'Monthly Enrollment Report',
                      'Claims Analysis',
                      'Utilization Summary'
                    ].map((report) => (
                      <div key={report} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          <div>
                            <p className="font-medium">{report}</p>
                            <p className="text-sm text-muted-foreground">Generated Jan 15, 2025</p>
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
          id: 'forms',
          label: 'Forms',
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Administrative Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'Enrollment Form',
                      'Change Request Form',
                      'Claim Submission Form'
                    ].map((form) => (
                      <div key={form} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          <div>
                            <p className="font-medium">{form}</p>
                            <p className="text-sm text-muted-foreground">PDF Format</p>
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