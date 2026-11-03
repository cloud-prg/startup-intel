import type { ResourceGroup } from '@/data/types'

type ResourcePanelProps = {
  group: ResourceGroup
}

export function ResourcePanel({ group }: ResourcePanelProps) {
  return (
    <section className="panel" aria-labelledby={`${group.id}-title`}>
      <div className="panel-head">
        <h2 id={`${group.id}-title`}>{group.title}</h2>
        <span className="meta">{group.items.length} 条</span>
      </div>
      <ol className="resource-list">
        {group.items.map((item) => (
          <li className="resource-item" key={`${group.id}-${item.rank}-${item.name}`}>
            <div className="rank-badge" aria-hidden="true">
              {item.rank}
            </div>
            <div className="resource-body">
              <div className="resource-title-row">
                <h3>{item.name}</h3>
                {item.url ? (
                  <a
                    className="resource-link"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.url.replace(/^https?:\/\//, '')}
                  </a>
                ) : null}
              </div>

              <div className="chip-row">
                {item.nature ? <span className="chip">{item.nature}</span> : null}
                {item.heat ? <span className="chip">热度 {item.heat}</span> : null}
                {item.activity ? <span className="chip">活跃 {item.activity}</span> : null}
                {item.searchHint ? <span className="chip accent">{item.searchHint}</span> : null}
              </div>

              <div className="field">
                <span className="field-label">核心目标</span>
                <p>{item.goal}</p>
              </div>

              {item.focus ? (
                <div className="field">
                  <span className="field-label">重点观看</span>
                  <p>{item.focus}</p>
                </div>
              ) : null}

              {item.note ? (
                <div className="field">
                  <span className="field-label">备注</span>
                  <p>{item.note}</p>
                </div>
              ) : null}

              {item.avoid ? (
                <div className="field warn">
                  <span className="field-label">避雷 / 禁忌</span>
                  <p>{item.avoid}</p>
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
