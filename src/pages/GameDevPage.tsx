import { PageHeader } from '@/components/PageHeader'
import { gamedevCommunities } from '@/data/gamedev'

export function GameDevPage() {
  const cn = gamedevCommunities.filter((row) => row.region === 'cn')
  const global = gamedevCommunities.filter((row) => row.region === 'global')

  return (
    <>
      <PageHeader
        kicker="GameDev Communities"
        title="国内外游戏开发者社区"
        description="按热度与活跃度排序。适合发日志、找资源、看行业风向。"
      />
      <div className="panel-grid">
        <CommunityTable title="国内" rows={cn} />
        <CommunityTable title="国外" rows={global} />
      </div>
    </>
  )
}

function CommunityTable({
  title,
  rows,
}: {
  title: string
  rows: typeof gamedevCommunities
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
              <th>排名</th>
              <th>社区</th>
              <th>性质</th>
              <th>热度</th>
              <th>活跃度</th>
              <th>适合用法</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.region}-${row.rank}-${row.name}`}>
                <td>{row.rank}</td>
                <td>
                  <strong>{row.name}</strong>
                </td>
                <td>{row.nature}</td>
                <td>{row.heat}</td>
                <td>{row.activity}</td>
                <td>{row.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
