import { ComponentProps } from 'react'

export function TextArea(props: ComponentProps<'textarea'>) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
