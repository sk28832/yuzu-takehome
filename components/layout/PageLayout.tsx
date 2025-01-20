"use client"
import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PageHeader } from '@/components/shared/DataDisplays'

interface PageLayoutProps {
  title: string
  subtitle?: string
  actions?: ReactNode
  stats?: {
    label: string
    value: string
    subValue?: string
  }[]
  tabs?: {
    id: string
    label: string
    content: ReactNode
  }[]
  children?: ReactNode
}

export function PageLayout({
  title,
  subtitle,
  actions,
  stats,
  tabs,
  children
}: PageLayoutProps) {
  return (
    <div className="space-y-6">
      <PageHeader
        title={title}
        subtitle={subtitle}
        actions={actions}
      />

      {/* Stats Grid */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <Card key={i}>
              <div className="p-6">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
                {stat.subValue && (
                  <p className="text-sm text-muted-foreground">
                    {stat.subValue}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Tabs or Content */}
      {tabs ? (
        <Tabs defaultValue={tabs[0].id}>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      ) : children}
    </div>
  )
}