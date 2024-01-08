'use client'

import { ReactNode, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { TabItem } from './tab-item'

export type Tab = {
  value: string
  content: ReactNode
}

type SettingsTabs = {
  tabs: Tab[]
}

export function SettingsTabs({ tabs }: SettingsTabs) {
  const [currentTab, setCurrentTab] = useState('My details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            {tabs.map(({ value }) => (
              <TabItem
                key={value}
                value={value}
                isSelected={value === currentTab}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>

      {tabs.map(({ value, content }) => (
        <Tabs.Content key={value} value={value}>
          {content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
