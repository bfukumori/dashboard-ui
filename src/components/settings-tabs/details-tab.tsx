import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { Input } from '../input'
import { FileInput } from '../file-input'
import { Select, SelectOption } from '../select'
import { TextArea } from '../text-area'
import { Button } from '../button'

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
      <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details here
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="settings">
            Save
          </Button>
        </div>
      </div>
      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
          <label
            htmlFor="first-name"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <Input.Root>
              <Input.Control id="first-name" defaultValue="Bruno" />
            </Input.Root>

            <div className="flex flex-col gap-3 lg:block">
              <label
                htmlFor="last-name"
                className="text-sm font-medium text-zinc-700 lg:sr-only"
              >
                Last Name
              </label>
              <Input.Root>
                <Input.Control defaultValue="Fukumori" id="last-name" />
              </Input.Root>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>

          <Input.Root>
            <Input.Control id="role" defaultValue="Developer" />
          </Input.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <Select placeholder="Select a country..." options={COUNTRIES} />
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <Select placeholder="Select a timezone..." options={TIMEZONES} />
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
              <Select
                placeholder=""
                options={TEXT_TYPES}
                defaultValue="normal"
              />
              <div className="item-center flex gap-1">
                <Button type="button" variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
            <TextArea
              id="bio"
              defaultValue="I'm a Full Stack Developer based in Sao Paulo, Brazil. I specialize in React and NodeJS."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="settings">
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}
