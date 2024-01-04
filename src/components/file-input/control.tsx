'use client'

import { ChangeEvent, ComponentProps } from 'react'

import { useFileInput } from './root'

export function Control({
  multiple = false,
  ...props
}: ComponentProps<'input'>) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) {
      return
    }

    const files = Array.from(e.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
