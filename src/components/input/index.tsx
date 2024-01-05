import { ComponentProps } from 'react'

function InputRoot(props: ComponentProps<'div'>) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    >
      {props.children}
    </div>
  )
}

function InputPrefix(props: ComponentProps<'div'>) {
  return <div {...props} />
}

function InputControl(props: ComponentProps<'input'>) {
  return (
    <input
      className="flex-1 border-0 bg-transparent text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Prefix: InputPrefix,
  Control: InputControl,
}
