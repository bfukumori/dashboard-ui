'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useFileInput } from './root'
import { FileItem } from './file-item'

export function FileList() {
  const { files, onFileRemove } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map(({ name, size }) => (
        <FileItem
          key={name}
          name={name}
          size={size}
          onDelete={onFileRemove}
          state="progress"
        />
      ))}
    </div>
  )
}
