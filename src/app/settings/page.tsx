import { SettingsTabs, Tab } from '@/components/settings-tabs'
import { DetailsTab } from '@/components/settings-tabs/details-tab'

const TABS: Tab[] = [
  { value: 'My details', content: <DetailsTab /> },
  { value: 'Profile', content: <div>Profile Page</div> },
  { value: 'Password', content: <div>Password Page</div> },
  { value: 'Team', content: <div>Team Page</div> },
  { value: 'Plans', content: <div>Plans Page</div> },
  { value: 'Billing', content: <div>Billing Page</div> },
  { value: 'Email', content: <div>Email Page</div> },
  { value: 'Notifications', content: <div>Notifications Page</div> },
  { value: 'Integrations', content: <div>Integrations Page</div> },
  { value: 'API', content: <div>API Page</div> },
]

export default function Settings() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-700">Settings</h1>

      <SettingsTabs tabs={TABS} />
    </>
  )
}
