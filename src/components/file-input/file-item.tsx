import { UploadCloud, Trash2, CheckCircle2 } from 'lucide-react'

import { formatBytes } from '@/utils/formatBytes'
import { Button } from '../button'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 text-violet-600',
    deleteBtn: '',
  },
  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-violet-500',
      },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteBtn: 'text-error-700 hover:text-error-900',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

type FileItemProps = VariantProps<typeof fileItem> & {
  name: string
  size: number
  onDelete: (name: string) => void
}

export function FileItem({ name, size, onDelete, state }: FileItemProps) {
  const progress = state === 'complete' ? '100%' : '80%'
  const { container, icon, deleteBtn } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-error-600">{name}</span>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: progress }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {progress}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button
          type="button"
          variant="ghost"
          onClick={() => onDelete(name)}
          className={deleteBtn()}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
