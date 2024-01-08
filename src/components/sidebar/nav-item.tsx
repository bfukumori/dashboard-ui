import { ElementType } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

type NavItemProps = {
  title: string
  icon: ElementType
  to: string
}

export function NavItem({ icon: Icon, title, to }: NavItemProps) {
  return (
    <Link
      href={to}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
    </Link>
  )
}
