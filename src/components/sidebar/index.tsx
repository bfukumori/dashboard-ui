'use client'

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'

import { Logo } from './logo'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'
import { Input } from '../input'
import { Button } from '../button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control type="search" placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem to="/" title="Home" icon={Home} />
          <NavItem to="/dashboard" title="Dashboard" icon={BarChart} />
          <NavItem to="/projects" title="Projects" icon={SquareStack} />
          <NavItem to="/tasks" title="Tasks" icon={CheckSquare} />
          <NavItem to="/reporting" title="Reporting" icon={Flag} />
          <NavItem to="/users" title="Users" icon={Users} />
        </nav>

        <nav className="mt-auto space-y-0.5">
          <NavItem to="/support" title="Support" icon={LifeBuoy} />
          <NavItem to="/settings" title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
