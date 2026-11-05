import { PageHeader } from '@/components/PageHeader'
import { LinkedLabel, PracticalNote } from '@/components/PracticalNote'
import { gamedevCommunities } from '@/data/gamedev'
import type { CommunityRow } from '@/data/types'

const sections: { title: string; rows: CommunityRow[] }[] = [
  {
    title: '国内讨论',
    rows: gamedevCommunities.filter((row) => row.group === 'discuss'),
  },
  {
    title: '盯独游',
    rows: gamedevCommunities.filter((row) => row.group === 'indie'),
  },
  {
    title: '盯行业风向',
    rows: gamedevCommunities.filter((row) => row.group === 'industry'),
  },
]

export function GameDevPage() {
  return (
    <>
      <PageHeader
        kicker="GameDev Communities"
        title="游戏开发社区"
        description="国内讨论和组队入口还在。看作品和行业用中文站：indienova、IndieBunny 盯独游，触乐、游研社盯风向。"
      />
      <div className="panel-grid">
        {sections
          .filter((section) => section.rows.length > 0)
          .map((section) => (
            <CommunityTable key={section.title} title={section.title} rows={section.rows} />
          ))}
      </div>
    </>
  )
}

function CommunityTable({ title, rows }: { title: string; rows: CommunityRow[] }) {
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
              <th>社区</th>
              <th>怎么用</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.region}-${row.name}`}>
                <td>
                  <LinkedLabel name={row.name} url={row.url} />
                </td>
                <td>
                  <PracticalNote text={row.usage} qq={row.qq} joinNote={row.joinNote} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
