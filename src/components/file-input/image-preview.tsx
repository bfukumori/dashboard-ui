'use client'

import { ComponentProps, useMemo } from 'react'
import { User } from 'lucide-react'
import Image from 'next/image'

import { useFileInput } from './root'

export function ImagePreview(props: ComponentProps<'div'>) {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (!previewURL) {
    return (
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10"
        {...props}
      >
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  }

  return (
    <Image
      alt=""
      src={previewURL}
      className="h-16 w-16 rounded-full object-cover"
      width={64}
      height={64}
    />
  )
}
