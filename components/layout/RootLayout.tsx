"use client"
import { ReactNode } from 'react'
import { TopNav } from './TopNav'
import { Sidebar } from './Sidebar'
import { useAuth } from '@/contexts/auth-context'
import { navigationConfig } from '@/config/navigation'

interface RootLayoutProps {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  const { currentRole } = useAuth()
  const config = navigationConfig[currentRole.type]

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar {...config} />
        <main className="flex-1 overflow-auto bg-muted/10">
          <div className="container mx-auto py-6 px-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}