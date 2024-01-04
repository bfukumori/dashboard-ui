import { ComponentProps, ElementType } from 'react'

type InputRootProps = ComponentProps<'div'>

function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    >
      {props.children}
    </div>
  )
}

function InputPrefix({ icon: Icon }: { icon: ElementType }) {
  return <Icon className="h-5 w-5 text-zinc-500" />
}

function InputControl(props: ComponentProps<'input'>) {
  return (
    <input className="flex-1 text-zinc-900 placeholder-zinc-600" {...props} />
  )
}

export const Input = {
  Root: InputRoot,
  Prefix: InputPrefix,
  Control: InputControl,
}
