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

const mockMembers = [
  {
    id: 'M001',
    name: 'John Doe',
    plan: 'Gold Plan',
    status: 'Active',
    enrolled: '01/01/2025',
    lastClaim: '01/15/2025'
  },
  {
    id: 'M002',
    name: 'Jane Smith',
    plan: 'Silver Plan',
    status: 'Active',
    enrolled: '01/01/2025',
    lastClaim: '01/10/2025'
  }
]

export default function MembersPage() {
  return (
    <PageLayout
      title="Member Directory"
      subtitle="Manage employee enrollments and coverage"
      actions={
        <div className="space-x-2">
          <Button variant="outline">Download Report</Button>
          <Button>Add Member</Button>
        </div>
      }
      tabs={[
        {
          id: 'all',
          label: 'All Members',
          content: (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Active Members</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline">Filter</Button>
                    <Button variant="outline">Export</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Member ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Enrolled</TableHead>
                      <TableHead>Last Claim</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>{member.id}</TableCell>
                        <TableCell>{member.name}</TableCell>
                        <TableCell>{member.plan}</TableCell>
                        <TableCell>{member.status}</TableCell>
                        <TableCell>{member.enrolled}</TableCell>
                        <TableCell>{member.lastClaim}</TableCell>
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
          id: 'pending',
          label: 'Pending Enrollments',
          content: (
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">No pending enrollments</p>
              </CardContent>
            </Card>
          )
        },
        {
          id: 'reports',
          label: 'Enrollment Reports',
          content: (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Monthly Enrollment Report</p>
                      <p className="text-sm text-muted-foreground">
                        Summary of all active enrollments
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
                      <p className="font-medium">Coverage Changes Report</p>
                      <p className="text-sm text-muted-foreground">
                        Recent coverage changes and updates
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