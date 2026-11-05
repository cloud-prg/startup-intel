import { PageHeader } from '@/components/PageHeader'
import { LinkedLabel, PracticalNote } from '@/components/PracticalNote'
import { partnerChannels } from '@/data/gamedev'
import type { ChannelRow } from '@/data/types'

const sections: { title: string; rows: ChannelRow[] }[] = [
  {
    title: '国内渠道',
    rows: partnerChannels.filter((row) => row.region === 'cn'),
  },
  {
    title: '国外渠道',
    rows: partnerChannels.filter((row) => row.region === 'global'),
  },
]

export function PartnersPage() {
  const visible = sections.filter((section) => section.rows.length > 0)

  return (
    <>
      <PageHeader
        kicker="Find Teammates"
        title="合作招募"
        description="能直接点开的找队友渠道。QQ 群用群号搜索加入，赛期通常更热闹。"
      />
      <div className="panel-grid">
        {visible.map((section) => (
          <ChannelTable key={section.title} title={section.title} rows={section.rows} />
        ))}
      </div>
    </>
  )
}

function ChannelTable({ title, rows }: { title: string; rows: ChannelRow[] }) {
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
                  <PracticalNote text={row.scenario} qq={row.qq} joinNote={row.joinNote} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
