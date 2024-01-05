import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { Input } from '../input'
import { FileInput } from '../file-input'
import { Select, SelectOption } from '../select'
import { TextArea } from '../text-area'

const COUNTRIES: SelectOption[] = [
  {
    text: 'Brazil',
    value: 'BR',
  },
  {
    text: 'United States',
    value: 'US',
  },
  {
    text: 'Japan',
    value: 'JP',
  },
]

const TIMEZONES: SelectOption[] = [
  {
    text: 'Pacific Standard Time (PST) (UTC-08:00)',
    value: 'utc-8',
  },
  {
    text: 'America Sao Paulo (PST) (UTC-03:00)',
    value: 'utc-3',
  },
]

const TEXT_TYPES: SelectOption[] = [
  {
    text: 'Normal text',
    value: 'normal',
  },
  {
    text: 'Bold text',
    value: 'bold',
  },
]

export function DetailsTab() {
  return (
    <div className="mt-6 flex flex-col ">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details here
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="settings"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </div>
      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid-cols-form grid gap-3">
          <label
            htmlFor="first-name"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="first-name" defaultValue="Bruno" />
            </Input.Root>
            <Input.Root>
              <Input.Control defaultValue="Fukumori" />
            </Input.Root>
          </div>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>

          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="brunofukumori@gmail.com"
            />
          </Input.Root>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>

          <Input.Root>
            <Input.Control id="role" defaultValue="Developer" />
          </Input.Root>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <Select placeholder="Select a country..." options={COUNTRIES} />
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <Select placeholder="Select a timezone..." options={TIMEZONES} />
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Select
                placeholder=""
                options={TEXT_TYPES}
                defaultValue="normal"
              />
              <div className="item-center flex gap-1">
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </button>
              </div>
            </div>
            <TextArea
              id="bio"
              defaultValue="I'm a Full Stack Developer based in Sao Paulo, Brazil. I specialize in React and NodeJS."
            />
          </div>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label className="text-sm font-medium text-zinc-700">
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
