import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import { Logo } from './logo'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'
import { Input } from '../input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

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

      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  )
}
