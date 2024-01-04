import { SettingsTabs, Tab } from '@/components/settings-tabs'

const TABS: Tab[] = [
  { value: 'My details', content: <div>My details Page</div> },
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

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-700">Settings</h1>

      <SettingsTabs tabs={TABS} />
    </>
  )
}
