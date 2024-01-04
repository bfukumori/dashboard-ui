import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

type TabItemProps = {
  value: string
  isSelected?: boolean
}

export function TabItem({ value, isSelected }: TabItemProps) {
  return (
    <Tabs.Trigger
      key={value}
      value={value}
      className="relative text-nowrap px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{value}</span>

      {isSelected && (
        <motion.div
          layoutId="active-tab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
