'use client'

import { ReactNode, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

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
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {tabs.map(({ value }) => (
          <TabItem
            key={value}
            value={value}
            isSelected={value === currentTab}
          />
        ))}
      </Tabs.List>

      {tabs.map(({ value, content }) => (
        <Tabs.Content key={value} value={value}>
          {content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
