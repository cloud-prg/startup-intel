import { PageHeader } from '@/components/PageHeader'
import { partnerChannels } from '@/data/gamedev'

export function PartnersPage() {
  const cn = partnerChannels.filter((row) => row.region === 'cn')
  const global = partnerChannels.filter((row) => row.region === 'global')

  return (
    <>
      <PageHeader
        kicker="Partner Channels"
        title="寻找合作伙伴 / 人力"
        description="组队、兼职、外包与正式招聘渠道分表，按场景选用。"
      />
      <div className="panel-grid">
        <ChannelTable title="国内渠道" rows={cn} />
        <ChannelTable title="国外渠道" rows={global} />
      </div>
    </>
  )
}

function ChannelTable({
  title,
  rows,
}: {
  title: string
  rows: typeof partnerChannels
}) {
  return (
    <section className="panel">
      <div className="panel-head">
        <h2>{title}</h2>
        <span className="meta">{rows.length} 个</span>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>渠道</th>
              <th>特点</th>
              <th>适用场景</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.region}-${row.name}`}>
                <td>
                  <strong>{row.name}</strong>
                </td>
                <td>{row.traits}</td>
                <td>{row.scenario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
