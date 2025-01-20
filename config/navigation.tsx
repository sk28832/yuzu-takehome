"use client"

import {
  HomeIcon,
  FileText,
  HeartPulse,
  Files,
  UserCircle,
  Building2,
  LayoutGrid,
  Users,
  Wallet,
  Building,
  Terminal,
  Settings,
  BarChart
} from 'lucide-react'
import { CoverageSelector } from '@/components/shared/CoverageSelector'

export const navigationConfig = {
  member: {
    type: 'member' as const,
    headerContent: <CoverageSelector />,
    navigation: [
      { name: 'Overview', href: '/member', icon: HomeIcon },
      { name: 'Claims', href: '/member/claims', icon: FileText },
      { name: 'Benefits', href: '/member/benefits', icon: HeartPulse },
      { name: 'Profile', href: '/member/profile', icon: UserCircle },
    ]
  },
  sponsor: {
    type: 'sponsor' as const,
    contextInfo: {
      name: 'Starbucks',
      role: 'Corporate Benefits Portal'
    },
    navigation: [
      { name: 'Company Overview', href: '/sponsor', icon: Building2 },
      { name: 'Plan Management', href: '/sponsor/plans', icon: LayoutGrid },
      { name: 'Member Directory', href: '/sponsor/members', icon: Users },
      { name: 'Financial', href: '/sponsor/finance', icon: Wallet },
      { name: 'Documents', href: '/sponsor/documents', icon: Files },
      { name: 'Settings', href: '/sponsor/settings', icon: Settings },
    ]
  },
  vendor: {
    type: 'vendor' as const,
    contextInfo: {
      name: 'Hipnation',
      role: 'Provider Portal'
    },
    navigation: [
      { name: 'Client Directory', href: '/vendor', icon: Building },
      { name: 'Coverage Access', href: '/vendor/coverages', icon: Users },
      { name: 'Documents', href: '/vendor/documents', icon: Files },
      { name: 'API Settings', href: '/vendor/api', icon: Terminal },
      { name: 'Settings', href: '/vendor/settings', icon: Settings },
    ]
  }
}