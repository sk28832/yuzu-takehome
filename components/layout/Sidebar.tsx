"use client"
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string
  href: string
  icon: LucideIcon
}

interface SidebarProps {
  type: 'member' | 'sponsor' | 'vendor'
  headerContent?: React.ReactNode
  contextInfo?: {
    name: string
    role: string
  }
  navigation: NavItem[]
}

export function Sidebar({ type, headerContent, contextInfo, navigation }: SidebarProps) {
  const pathname = usePathname()
  
  return (
    <div className="w-64 border-r p-4 bg-background h-full">
      {/* Header Section */}
      {headerContent ? (
        <div className="mb-6">{headerContent}</div>
      ) : contextInfo ? (
        <div className="mb-6">
          <h2 className="text-lg font-semibold">{contextInfo.name}</h2>
          <p className="text-sm text-muted-foreground">{contextInfo.role}</p>
        </div>
      ) : null}

      {/* Navigation Section */}
      <nav className="space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              pathname === item.href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted'
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}