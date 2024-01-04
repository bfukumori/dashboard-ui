import { LogOut } from 'lucide-react'
import Image from 'next/image'

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
        <span className="text-sm font-semibold text-zinc-700">
          Bruno Fukumori
        </span>
        <span className="truncate text-sm text-zinc-500">
          brunofukumori@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500 " />
      </button>
    </div>
  )
}
