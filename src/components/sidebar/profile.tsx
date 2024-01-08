import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        width={40}
        height={40}
        src="https://github.com/bfukumori.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Bruno Fukumori
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          brunofukumori@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500 " />
      </Button>
    </div>
  )
}
