'use client'
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
  onFileRemove: (name: string) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: ComponentProps<'div'>) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((value) => [...value, ...files])
    } else {
      setFiles(files)
    }
  }

  function onFileRemove(name: string) {
    setFiles((value) => [...value].filter((file) => file.name !== name))
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onFileRemove }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
