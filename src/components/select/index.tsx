'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

import { SelectItem } from './select-item'

export type SelectOption = {
  value: string
  text: string
}

type SelectProps = SelectPrimitive.SelectProps & {
  options: SelectOption[]
  placeholder: string
}

export function Select({ options, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          className="text-black"
          placeholder={placeholder}
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-sm"
          sideOffset={8}
        >
          <SelectPrimitive.ScrollUpButton />
          <SelectPrimitive.Viewport>
            {options.map(({ text, value }) => (
              <SelectItem key={value} text={text} value={value} />
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
