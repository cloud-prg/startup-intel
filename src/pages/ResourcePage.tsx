import { PageHeader } from '@/components/PageHeader'
import { ResourcePanel } from '@/components/ResourcePanel'
import type { ResourceGroup } from '@/data/types'

type ResourcePageProps = {
  kicker: string
  title: string
  description: string
  groups: ResourceGroup[]
}

export function ResourcePage({
  kicker,
  title,
  description,
  groups,
}: ResourcePageProps) {
  return (
    <>
      <PageHeader kicker={kicker} title={title} description={description} />
      <div className="panel-grid">
        {groups.map((group) => (
          <ResourcePanel key={group.id} group={group} />
        ))}
      </div>
    </>
  )
}
